import { uniqueBy } from "remeda";
import { camelize } from "../helpers.js";
import { GirElement } from "./element.js";
import { GirProperty } from "./property.js";
import { GirType } from "./type.js";
export class GirSignal extends GirElement {
    _typeDependencies;
    get rawName() {
        return this.data.name;
    }
    get name() {
        return camelize(`on_${this.rawName}`);
    }
    get params() {
        return this.data.inParams.map(param => {
            return new GirProperty(param, this, this._gir);
        });
    }
    get returnType() {
        return new GirType(this.data.returnTypes[0].type, this._gir);
    }
    get typeDependencies() {
        return (this._typeDependencies ||= uniqueBy([
            ...this.params.map(param => param.type),
            ...(this.returnType ? [this.returnType] : []),
        ].filter(type => !type.isPrimitive), type => type.namespace));
    }
}
