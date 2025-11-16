import type {GirPropertyElement} from "@ts-for-gir/lib";
import type {Gir} from "../gir.ts";
import {camelize} from "../helpers.ts";
import type {GirClass} from "./class.ts";
import {GirElement} from "./element.ts";
import type {GirInterface} from "./interface.ts";
import {GirSignal} from "./signal.ts";
import {GirType} from "./type.ts";

export class GirProperty extends GirElement<GirPropertyElement> {
  private _owner: GirClass | GirInterface | GirSignal;

  constructor(
    element: GirPropertyElement,
    owner: GirClass | GirInterface | GirSignal,
    gir: Gir
  ) {
    super(element, gir);
    this._owner = owner;
  }

  get isArray() {
    return this.data.type[0]!.isArray;
  }

  get isOptional() {
    const type = this.data.type[0]!;

    if (type.nullable || type.optional) {
      return true;
    }

    if (this._owner instanceof GirSignal) {
      return false;
    }

    const setter = this._owner.data.methods.find(
      m => m.$.name === this._element.$.setter
    );

    if (!setter) {
      return false;
    }

    const setterParamType = setter._tsData?.inParams[0]!._tsData?.type[0];

    if (!setterParamType) {
      return false;
    }

    return setterParamType.nullable || setterParamType.optional;
  }

  get isConstructOnly() {
    return this._element.$["construct-only"] === "1";
  }

  get isReadonly() {
    return this.data.readonly;
  }

  get rawName() {
    return this.data.name || "";
  }

  get name() {
    return camelize(this.rawName);
  }

  get notifyHandlerName() {
    return camelize(`on_notify_${this.rawName}`);
  }

  get getter() {
    return this._element.$.getter ? camelize(this._element.$.getter) : null;
  }

  get setter() {
    if (this._element.$.setter === "set_action_target") {
      return "setActionTargetValue";
    }

    return this._element.$.setter ? camelize(this._element.$.setter) : null;
  }

  get type() {
    return new GirType(this.data.type[0]!.type, this._gir);
  }
}
