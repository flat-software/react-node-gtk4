import { Gir } from "@/gir.js";
import { GirModule as BaseGirModule } from "@ts-for-gir/lib";
import { GirClass } from "./class.js";
import { GirInterface } from "./interface.js";
export declare class GirModule {
    private _module;
    private _gir;
    private _classes?;
    private _interfaces?;
    constructor(module: BaseGirModule, gir: Gir);
    init(): void;
    start(): void;
    get namespace(): string;
    get importName(): string;
    get ns(): import("@ts-for-gir/lib").GirNamespace;
    get classes(): GirClass[];
    get interfaces(): GirInterface[];
    get enumerations(): import("@ts-for-gir/lib").GirEnumElement[];
    get bitfields(): import("@ts-for-gir/lib").GirBitfieldElement[];
}
