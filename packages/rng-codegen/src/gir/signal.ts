import type {GirPropertyElement, GirSignalElement} from "@ts-for-gir/lib";
import {uniqueBy} from "remeda";
import {camelize} from "../helpers.ts";
import {GirElement} from "./element.ts";
import {GirProperty} from "./property.ts";
import {GirType} from "./type.ts";

export class GirSignal extends GirElement<GirSignalElement> {
  private _typeDependencies?: GirType[];

  get rawName() {
    return this.data.name;
  }

  get name() {
    return camelize(`on_${this.rawName}`);
  }

  get params() {
    return this.data.inParams.map(param => {
      return new GirProperty(
        param as unknown as GirPropertyElement,
        this,
        this._gir
      );
    });
  }

  get returnType() {
    return new GirType(this.data.returnTypes[0]!.type, this._gir);
  }

  get typeDependencies() {
    return (this._typeDependencies ||= uniqueBy(
      [
        ...this.params.map(param => param.type),
        ...(this.returnType ? [this.returnType] : []),
      ].filter(type => !type.isPrimitive),
      type => type.namespace
    ));
  }
}
