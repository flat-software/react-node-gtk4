import { Gir } from "@/gir.js";
import { GirAnyElement } from "@ts-for-gir/lib";
import { GirModule } from "./module.js";
import { GirType } from "./type.js";
export declare abstract class GirElement<T extends GirAnyElement> {
    protected _element: T;
    protected _gir: Gir;
    constructor(element: T, gir: Gir);
    get qualifiedName(): string;
    get name(): string;
    get element(): T;
    get module(): GirModule;
    get data(): NonNullable<T["_tsData"]>;
    get type(): GirType;
}
