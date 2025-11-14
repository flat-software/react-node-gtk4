import { GirModule as BaseGirModule, GirBitfieldElement, GirEnumElement } from "@ts-for-gir/lib";
import { GirClass } from "./gir/class.js";
import { GirInterface } from "./gir/interface.js";
import { GirModule } from "./gir/module.js";
import { GirType } from "./gir/type.js";
export declare class Gir {
    private _baseModules;
    private _modules?;
    private _classes?;
    private _interfaces?;
    private _enumerations?;
    private _bitfields?;
    private _typeDependencies?;
    static parse(rootDir: string): Promise<Gir>;
    constructor(baseModules: BaseGirModule[]);
    get modules(): GirModule[];
    get widgetClasses(): GirClass[];
    get classes(): GirClass[];
    get interfaces(): GirInterface[];
    get enumerations(): GirEnumElement[];
    get bitfields(): GirBitfieldElement[];
    get typeDependencies(): GirType[];
    findModuleByNamespace(namespace: string): GirModule;
    findInterfaceByName(name: string): GirInterface;
    findClassByName(name: string): GirClass;
    private collectFromModules;
}
