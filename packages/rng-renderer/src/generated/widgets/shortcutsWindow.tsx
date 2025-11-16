import Gtk from "../girs/node-gtk-4.0.js";
import {Window} from "./window.js";

export class ShortcutsWindow<
  T extends Gtk.ShortcutsWindow = Gtk.ShortcutsWindow,
> extends Window<T> {
  static createNode() {
    return new Gtk.ShortcutsWindow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "sectionName":
        this.node.sectionName = newValue;
        break;
      case "viewName":
        this.node.viewName = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onClose":
        this.setHandler("close", newValue);
        break;
      case "onSearch":
        this.setHandler("search", newValue);
        break;
      case "onNotifySectionName":
        this.setHandler("notify::sectionName", newValue);
        break;
      case "onNotifyViewName":
        this.setHandler("notify::viewName", newValue);
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
