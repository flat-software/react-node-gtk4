import { GirClassElement } from "@ts-for-gir/lib";
import { GirElement } from "./element.js";
import { Import } from "./import.js";
import { GirInterface } from "./interface.js";
import { GirProperty } from "./property.js";
import { GirSignal } from "./signal.js";
import { GirType } from "./type.js";
export declare class GirClass extends GirElement<GirClassElement> {
    private _typeDependencies?;
    private _props?;
    private _signals?;
    private _interfaces?;
    get parent(): GirClass | null;
    get parentImport(): Import;
    get typeDependencies(): GirType[];
    get isContainer(): boolean;
    get isWidget(): boolean;
    get writableProps(): GirProperty[];
    get settableProps(): GirProperty[];
    get constructOnlyProps(): GirProperty[];
    get props(): GirProperty[];
    get signals(): GirSignal[];
    get interfaces(): GirInterface[];
}
