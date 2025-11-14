import { DependencyManager, GirModule, girParser, isIterable, ResolveType, splitModuleName, WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE, } from "@ts-for-gir/lib";
import { readFile } from "fs/promises";
export class ModuleLoader {
    config;
    dependencyManager;
    modDependencyMap = {};
    constructor(config) {
        this.config = config;
        this.dependencyManager = DependencyManager.getInstance(config);
    }
    traverseDependencies(packageName, result = {}) {
        const deps = this.modDependencyMap[packageName];
        if (deps && isIterable(deps)) {
            for (const dep of deps) {
                if (result[dep.packageName])
                    continue;
                result[dep.packageName] = dep;
                this.traverseDependencies(dep.packageName, result);
            }
        }
    }
    extendDependencyMapByGirModule(girModule) {
        this.modDependencyMap[girModule.packageName] = girModule.dependencies;
    }
    setTraverseDependenciesForModules(girModules) {
        for (const girModule of girModules) {
            const result = {};
            this.traverseDependencies(girModule.packageName, result);
            girModule.module.transitiveDependencies = Object.values(result);
        }
    }
    async loadAndCreateGirModule(dependency) {
        if (!dependency.exists || dependency.path === null) {
            return null;
        }
        console.log(`Parsing ${dependency.path}...`);
        const fileContents = await readFile(dependency.path, "utf8");
        const result = girParser(fileContents);
        const girModule = new GirModule(result, this.config);
        this.extendDependencyMapByGirModule(girModule);
        return girModule;
    }
    findGirModuleByFullNames(girModules, packageNames) {
        return girModules.filter(girModule => packageNames.includes(girModule.packageName));
    }
    existsGirModules(girModules, packageName) {
        const foundModule = this.findGirModuleByFullNames(girModules, [
            packageName,
        ]);
        return foundModule.length > 0;
    }
    async loadGirModules(inDependencies, girModules = [], resolvedBy = ResolveType.BY_HAND, failedGirModules = new Set()) {
        let newModuleFound = false;
        const dependencies = [...inDependencies];
        while (dependencies.length > 0) {
            const dependency = dependencies.shift();
            if (!dependency?.packageName)
                continue;
            if (!this.existsGirModules(girModules, dependency.packageName)) {
                const girModule = await this.loadAndCreateGirModule(dependency);
                if (!girModule) {
                    if (!failedGirModules.has(dependency.packageName)) {
                        console.warn(WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE(dependency.packageName));
                        failedGirModules.add(dependency.packageName);
                    }
                }
                else if (girModule && girModule.packageName) {
                    const addModule = {
                        packageName: girModule.packageName,
                        module: girModule,
                        resolvedBy,
                        path: dependency.path,
                    };
                    girModules.push(addModule);
                    newModuleFound = true;
                }
            }
        }
        if (!newModuleFound) {
            return {
                loaded: girModules,
                failed: failedGirModules,
            };
        }
        this.setTraverseDependenciesForModules(girModules);
        for (const girModule of girModules) {
            const transitiveDependencies = girModule.module.transitiveDependencies;
            if (transitiveDependencies.length > 0) {
                await this.loadGirModules(transitiveDependencies, girModules, ResolveType.DEPENDENCE, failedGirModules);
            }
        }
        return {
            loaded: girModules,
            failed: failedGirModules,
        };
    }
    packageNamesToDependencies(packageNames) {
        return Array.from(packageNames).map(packageName => {
            const { namespace, version } = splitModuleName(packageName);
            return this.dependencyManager.get(namespace, version);
        });
    }
    async getModulesResolved(packageNames) {
        const dependencies = this.packageNamesToDependencies(new Set(packageNames));
        const { loaded } = await this.loadGirModules(dependencies);
        return loaded;
    }
}
