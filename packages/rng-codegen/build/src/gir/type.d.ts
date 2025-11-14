import { Gir } from "@/gir.js";
import { Import } from "./import.js";
export declare class GirType {
    _name: string;
    _gir: Gir;
    constructor(name: string, gir: Gir);
    get name(): string;
    get namespace(): string;
    get module(): import("./module.js").GirModule;
    get import_(): Import;
    get isPrimitive(): boolean;
}
