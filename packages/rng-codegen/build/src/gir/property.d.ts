import { Gir } from "@/gir.js";
import { GirPropertyElement } from "@ts-for-gir/lib";
import { GirClass } from "./class.js";
import { GirElement } from "./element.js";
import { GirInterface } from "./interface.js";
import { GirSignal } from "./signal.js";
import { GirType } from "./type.js";
export declare class GirProperty extends GirElement<GirPropertyElement> {
    private _owner;
    constructor(element: GirPropertyElement, owner: GirClass | GirInterface | GirSignal, gir: Gir);
    get isArray(): boolean;
    get isOptional(): boolean;
    get isConstructOnly(): boolean;
    get isReadonly(): boolean;
    get rawName(): string;
    get name(): string;
    get notifyHandlerName(): string;
    get getter(): string | null;
    get setter(): string | null;
    get type(): GirType;
}
