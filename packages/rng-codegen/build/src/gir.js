import { GirModule as BaseGirModule, } from "@ts-for-gir/lib";
import { uniqueBy } from "remeda";
import { GirModule } from "./gir/module.js";
import { ModuleLoader } from "./moduleLoader.js";
export class Gir {
    _baseModules;
    _modules;
    _classes;
    _interfaces;
    _enumerations;
    _bitfields;
    _typeDependencies;
    static async parse(rootDir) {
        const moduleLoader = new ModuleLoader({
            environment: "node",
            root: "",
            outdir: "",
            girDirectories: [`${rootDir}/girs`],
            verbose: false,
            noNamespace: false,
            noComments: false,
            noDebugComments: false,
            fixConflicts: false,
            generateAlias: false,
            promisify: false,
            npmScope: "",
            package: false,
            packageYarn: false,
        });
        const loadedModules = await moduleLoader.getModulesResolved(["Gtk-4.0"]);
        const modules = loadedModules.map(m => m.module);
        return new Gir(modules);
    }
    constructor(baseModules) {
        this._baseModules = baseModules;
        BaseGirModule.allGirModules = this._baseModules;
        for (const module of this.modules) {
            module.init();
        }
        for (const module of this.modules) {
            module.start();
        }
    }
    get modules() {
        return (this._modules ||= this._baseModules.map(m => new GirModule(m, this)));
    }
    get widgetClasses() {
        return this.modules[0].classes.filter(c => c.isWidget);
    }
    get classes() {
        return (this._classes ||= this.collectFromModules(m => m.classes));
    }
    get interfaces() {
        return (this._interfaces ||= this.collectFromModules(m => m.interfaces));
    }
    get enumerations() {
        return (this._enumerations ||= this.collectFromModules(m => m.enumerations));
    }
    get bitfields() {
        return (this._bitfields ||= this.collectFromModules(m => m.bitfields));
    }
    get typeDependencies() {
        return (this._typeDependencies ||= uniqueBy(this.widgetClasses.flatMap(c => c.typeDependencies), t => t.namespace));
    }
    findModuleByNamespace(namespace) {
        const module = this.modules.find(m => m.namespace === namespace);
        if (!module) {
            throw new Error(`Module not found for namespace: ${namespace}`);
        }
        return module;
    }
    findInterfaceByName(name) {
        const interface_ = this.interfaces.find(i => i.qualifiedName === name);
        if (!interface_) {
            throw new Error(`Interface not found for name: ${name}`);
        }
        return interface_;
    }
    findClassByName(name) {
        const class_ = this.classes.find(c => c.qualifiedName === name);
        if (!class_) {
            throw new Error(`Class not found for name: ${name}`);
        }
        return class_;
    }
    collectFromModules(getter) {
        return this.modules.reduce((acc, module) => {
            return [...acc, ...getter(module)];
        }, []);
    }
}
