import type {GirBitfieldElement, GirEnumElement} from "@ts-for-gir/lib";
import {GirModule as BaseGirModule} from "@ts-for-gir/lib";
import {flatMap, uniqueBy} from "remeda";
import type {GirClass} from "./gir/class.ts";
import type {GirInterface} from "./gir/interface.ts";
import {GirModule} from "./gir/module.ts";
import type {GirType} from "./gir/type.ts";
import {ModuleLoader} from "./moduleLoader.ts";

export class Gir {
  private _baseModules: BaseGirModule[];
  private _modules?: GirModule[];
  private _classes?: GirClass[];
  private _interfaces?: GirInterface[];
  private _enumerations?: GirEnumElement[];
  private _bitfields?: GirBitfieldElement[];
  private _typeDependencies?: GirType[];

  static async parse(girsDir: string) {
    const moduleLoader = new ModuleLoader({
      environment: "node",
      root: "",
      outdir: "",
      girDirectories: [girsDir],
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

    const loadedModules = await moduleLoader.getModulesResolved([
      "Gtk-4.0",
      "Adw-1",
    ]);
    const modules = loadedModules.map(m => m.module);
    return new Gir(modules);
  }

  constructor(baseModules: BaseGirModule[]) {
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
    return (this._modules ||= this._baseModules.map(
      m => new GirModule(m, this)
    ));
  }

  get widgetClasses() {
    return flatMap(this.modules, m => m.classes).filter(
      c => c.isWidget && c.jsxName !== "AdwMultiLayoutView"
    );
  }

  get classes() {
    return (this._classes ||= this.collectFromModules(m => m.classes));
  }

  get interfaces() {
    return (this._interfaces ||= this.collectFromModules(m => m.interfaces));
  }

  get enumerations() {
    return (this._enumerations ||= this.collectFromModules(
      m => m.enumerations
    ));
  }

  get bitfields() {
    return (this._bitfields ||= this.collectFromModules(m => m.bitfields));
  }

  get typeDependencies() {
    return (this._typeDependencies ||= uniqueBy(
      this.widgetClasses.flatMap(c => c.typeDependencies),
      t => t.namespace
    ));
  }

  findModuleByNamespace(namespace: string) {
    const module = this.modules.find(m => m.namespace === namespace);

    if (!module) {
      throw new Error(`Module not found for namespace: ${namespace}`);
    }

    return module;
  }

  findInterfaceByName(name: string) {
    const interface_ = this.interfaces.find(i => i.qualifiedName === name);

    if (!interface_) {
      throw new Error(`Interface not found for name: ${name}`);
    }

    return interface_;
  }

  findClassByName(name: string) {
    const class_ = this.classes.find(c => c.qualifiedName === name);

    if (!class_) {
      throw new Error(`Class not found for name: ${name}`);
    }

    return class_;
  }

  private collectFromModules<T>(getter: (module: GirModule) => T[]): T[] {
    return this.modules.reduce((acc, module) => {
      return [...acc, ...getter(module)];
    }, [] as T[]);
  }
}
