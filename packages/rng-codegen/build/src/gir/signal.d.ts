import { GirSignalElement } from "@ts-for-gir/lib";
import { GirElement } from "./element.js";
import { GirProperty } from "./property.js";
import { GirType } from "./type.js";
export declare class GirSignal extends GirElement<GirSignalElement> {
    private _typeDependencies?;
    get rawName(): string;
    get name(): string;
    get params(): GirProperty[];
    get returnType(): GirType;
    get typeDependencies(): GirType[];
}
