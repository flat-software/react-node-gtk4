import { DependencyManager } from "@ts-for-gir/lib";
import type { DependencyMap, GenerateConfig, GirModuleResolvedBy } from "@ts-for-gir/lib";
export declare class ModuleLoader {
    private readonly config;
    dependencyManager: DependencyManager;
    modDependencyMap: DependencyMap;
    constructor(config: GenerateConfig);
    private traverseDependencies;
    private extendDependencyMapByGirModule;
    private setTraverseDependenciesForModules;
    private loadAndCreateGirModule;
    private findGirModuleByFullNames;
    private existsGirModules;
    private loadGirModules;
    private packageNamesToDependencies;
    getModulesResolved(packageNames: string[]): Promise<GirModuleResolvedBy[]>;
}
