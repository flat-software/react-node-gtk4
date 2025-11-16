import type {GirInterfaceElement} from "@ts-for-gir/lib";
import {GirElement} from "./element.ts";
import {GirProperty} from "./property.ts";
import {GirSignal} from "./signal.ts";

export class GirInterface extends GirElement<GirInterfaceElement> {
  private _props?: GirProperty[];
  private _signals?: GirSignal[];

  get props() {
    return (this._props ||= this.data.properties.map(
      p => new GirProperty(p, this, this._gir)
    ));
  }

  get signals() {
    return (this._signals ||= this.data.signals.map(
      s => new GirSignal(s, this._gir)
    ));
  }
}
