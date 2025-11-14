import { GirInterfaceElement } from "@ts-for-gir/lib";
import { GirElement } from "./element.js";
import { GirProperty } from "./property.js";
import { GirSignal } from "./signal.js";
export declare class GirInterface extends GirElement<GirInterfaceElement> {
    private _props?;
    private _signals?;
    get props(): GirProperty[];
    get signals(): GirSignal[];
}
