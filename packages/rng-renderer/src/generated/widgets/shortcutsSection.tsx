import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Box} from "./box.js";

export class ShortcutsSection<
  T extends Gtk.ShortcutsSection = Gtk.ShortcutsSection,
> extends Box<T> {
  static createNode() {
    return new Gtk.ShortcutsSection({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "maxHeight":
        this.node.maxHeight = newValue;
        break;
      case "sectionName":
        this.node.sectionName = newValue;
        break;
      case "title":
        this.node.title = newValue;
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
      case "orientation":
        this.node.setOrientation(newValue);
        break;
      case "onChangeCurrentPage":
        this.setHandler("change-current-page", newValue);
        break;
      case "onNotifyMaxHeight":
        this.setHandler("notify::maxHeight", newValue);
        break;
      case "onNotifySectionName":
        this.setHandler("notify::sectionName", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
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
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
