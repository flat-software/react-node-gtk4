import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Dialog} from "./dialog.js";

export class AppChooserDialog<
  T extends Gtk.AppChooserDialog = Gtk.AppChooserDialog,
> extends Dialog<T> {
  static createNode() {
    return new Gtk.AppChooserDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "heading":
        this.node.setHeading(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyGfile":
        this.setHandler("notify::gfile", newValue);
        break;
      case "onNotifyHeading":
        this.setHandler("notify::heading", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyContentType":
        this.setHandler("notify::contentType", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
