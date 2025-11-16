import type {GirClassElement} from "@ts-for-gir/lib";
import * as R from "remeda";
import {GirElement} from "./element.ts";
import type {Import} from "./import.ts";
import type {GirInterface} from "./interface.ts";
import {GirProperty} from "./property.ts";
import {GirSignal} from "./signal.ts";
import type {GirType} from "./type.ts";

export class GirClass extends GirElement<GirClassElement> {
  private _typeDependencies?: GirType[];
  private _props?: GirProperty[];
  private _signals?: GirSignal[];
  private _interfaces?: GirInterface[];

  get parent(): GirClass | null {
    if (this.qualifiedName === "Gtk.Widget") {
      return null;
    }

    const parentName =
      R.last(this.data.parents.filter(p => p.type === "parent"))
        ?.qualifiedParentName || "";

    return this._gir.findClassByName(parentName);
  }

  get parentImport(): Import {
    if (!this.parent) {
      return {
        name: "AbstractWidget",
        moduleName: "@/abstractWidget.js",
      };
    }

    const moduleName =
      this.parent.type.namespace === this.type.namespace
        ? `./${R.toCamelCase(this.parent.name)}.js`
        : `../${R.toCamelCase(this.parent.type.namespace)}/${R.toCamelCase(this.parent.name)}.js`;

    return {
      name: this.parent.name,
      moduleName,
    };
  }

  get typeDependencies() {
    return (this._typeDependencies ||= R.uniqueBy(
      [
        ...this.writableProps.map(prop => prop.type),
        ...this.signals.flatMap(signal => signal.typeDependencies),
      ].filter(type => !type.isPrimitive),
      type => type.namespace
    ));
  }

  get isContainer() {
    return this.data.methods.some(m => m.$.name === "set_child");
  }

  get isWidget() {
    if (this.qualifiedName === "Gtk.Widget") {
      return true;
    }

    const parents = Object.values(this.data.inherit).map(
      c => c.class.qualifiedName
    );

    return parents.some(p => p === "Gtk.Widget");
  }

  get writableProps() {
    return this.props.filter(prop => !prop.isReadonly && prop.name !== "child");
  }

  get settableProps() {
    return this.writableProps.filter(p => !p.isConstructOnly);
  }

  get constructOnlyProps() {
    return this.writableProps.filter(p => p.isConstructOnly);
  }

  get props() {
    return (this._props ||= R.uniqueBy(
      [
        ...this.data.properties.map(p => new GirProperty(p, this, this._gir)),
        ...this.interfaces.flatMap(i => i.props),
      ].filter(p => p.rawName !== "__gtype__"),
      p => p.name
    ));
  }

  get signals() {
    return (this._signals ||= R.uniqueBy(
      [
        ...this.data.signals.map(s => new GirSignal(s, this._gir)),
        ...this.interfaces.flatMap(i => i.signals),
      ],
      s => s.name
    ));
  }

  get interfaces() {
    return (this._interfaces ||= Object.values(this.data.implements)
      .filter(i => i.interface.qualifiedName !== "Gtk.Widget")
      .map(i => this._gir.findInterfaceByName(i.interface.qualifiedName)));
  }
}
