import Gtk from "../girs/node-gtk-4.0.js";
import {Popover} from "./popover.js";

export class PopoverMenu<
  T extends Gtk.PopoverMenu = Gtk.PopoverMenu,
> extends Popover<T> {
  static createNode() {
    return new Gtk.PopoverMenu({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "flags":
        this.node.setFlags(newValue);
        break;
      case "menuModel":
        this.node.setMenuModel(newValue);
        break;
      case "visibleSubmenu":
        this.node.visibleSubmenu = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyFlags":
        this.setHandler("notify::flags", newValue);
        break;
      case "onNotifyMenuModel":
        this.setHandler("notify::menuModel", newValue);
        break;
      case "onNotifyVisibleSubmenu":
        this.setHandler("notify::visibleSubmenu", newValue);
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
