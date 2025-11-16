import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Box} from "./box.js";

export class ShortcutsGroup<
  T extends Gtk.ShortcutsGroup = Gtk.ShortcutsGroup,
> extends Box<T> {
  static createNode() {
    return new Gtk.ShortcutsGroup({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "accelSizeGroup":
        this.node.accelSizeGroup = newValue;
        break;
      case "title":
        this.node.title = newValue;
        break;
      case "titleSizeGroup":
        this.node.titleSizeGroup = newValue;
        break;
      case "view":
        this.node.view = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "orientation":
        this.node.setOrientation(newValue);
        break;
      case "onNotifyAccelSizeGroup":
        this.setHandler("notify::accelSizeGroup", newValue);
        break;
      case "onNotifyHeight":
        this.setHandler("notify::height", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
        break;
      case "onNotifyTitleSizeGroup":
        this.setHandler("notify::titleSizeGroup", newValue);
        break;
      case "onNotifyView":
        this.setHandler("notify::view", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
