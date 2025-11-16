import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Statusbar<
  T extends Gtk.Statusbar = Gtk.Statusbar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Statusbar({});
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
      case "onTextPopped":
        this.setHandler("text-popped", newValue);
        break;
      case "onTextPushed":
        this.setHandler("text-pushed", newValue);
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
