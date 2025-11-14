import { GirElement } from "./element.js";
import { GirProperty } from "./property.js";
import { GirSignal } from "./signal.js";
export class GirInterface extends GirElement {
    _props;
    _signals;
    get props() {
        return (this._props ||= this.data.properties.map(p => new GirProperty(p, this, this._gir)));
    }
    get signals() {
        return (this._signals ||= this.data.signals.map(s => new GirSignal(s, this._gir)));
    }
}
