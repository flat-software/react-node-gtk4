import { GirClass } from "./class.js";
import { GirInterface } from "./interface.js";
export class GirModule {
    _module;
    _gir;
    _classes;
    _interfaces;
    constructor(module, gir) {
        this._module = module;
        this._gir = gir;
    }
    init() {
        this._module.init({});
    }
    start() {
        this._module.start([]);
    }
    get namespace() {
        return this._module.namespace;
    }
    get importName() {
        return this._module.importName;
    }
    get ns() {
        return this._module.ns;
    }
    get classes() {
        return (this._classes ||= (this.ns.class || []).map(c => new GirClass(c, this._gir)));
    }
    get interfaces() {
        return (this._interfaces ||= (this.ns.interface || []).map(i => new GirInterface(i, this._gir)));
    }
    get enumerations() {
        return this.ns.enumeration || [];
    }
    get bitfields() {
        return this.ns.bitfield || [];
    }
}
