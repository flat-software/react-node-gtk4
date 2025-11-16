import Gtk from "../girs/node-gtk-4.0.js";
import {Dialog} from "./dialog.js";

export class PageSetupUnixDialog<
  T extends Gtk.PageSetupUnixDialog = Gtk.PageSetupUnixDialog,
> extends Dialog<T> {
  static createNode() {
    return new Gtk.PageSetupUnixDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
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
