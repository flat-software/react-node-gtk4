import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Revealer<T extends Gtk.Revealer = Gtk.Revealer> extends Widget<T> {
  static createNode() {
    return new Gtk.Revealer({});
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child);
    this.node.setChild(child.node);
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child);
    this.node.setChild(null);
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild);
    this.node.setChild(child.node);
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "revealChild":
        this.node.setRevealChild(newValue);
        break;
      case "transitionDuration":
        this.node.setTransitionDuration(newValue);
        break;
      case "transitionType":
        this.node.setTransitionType(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyChildRevealed":
        this.setHandler("notify::childRevealed", newValue);
        break;
      case "onNotifyRevealChild":
        this.setHandler("notify::revealChild", newValue);
        break;
      case "onNotifyTransitionDuration":
        this.setHandler("notify::transitionDuration", newValue);
        break;
      case "onNotifyTransitionType":
        this.setHandler("notify::transitionType", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
