import Gtk from "../girs/node-gtk-4.0.js";
import {Window} from "./window.js";

export class ApplicationWindow<
  T extends Gtk.ApplicationWindow = Gtk.ApplicationWindow,
> extends Window<T> {
  static createNode() {
    return new Gtk.ApplicationWindow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onActionAdded":
        this.setHandler("action-added", newValue);
        break;
      case "onActionEnabledChanged":
        this.setHandler("action-enabled-changed", newValue);
        break;
      case "onActionRemoved":
        this.setHandler("action-removed", newValue);
        break;
      case "onActionStateChanged":
        this.setHandler("action-state-changed", newValue);
        break;
      case "onNotifyShowMenubar":
        this.setHandler("notify::showMenubar", newValue);
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
