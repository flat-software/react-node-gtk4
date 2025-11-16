import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ListBase} from "./listBase.js";

export class ListView<
  T extends Gtk.ListView = Gtk.ListView,
> extends ListBase<T> {
  static createNode() {
    return new Gtk.ListView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "enableRubberband":
        this.node.setEnableRubberband(newValue);
        break;
      case "factory":
        this.node.setFactory(newValue);
        break;
      case "headerFactory":
        this.node.setHeaderFactory(newValue);
        break;
      case "model":
        this.node.setModel(newValue);
        break;
      case "showSeparators":
        this.node.setShowSeparators(newValue);
        break;
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue);
        break;
      case "tabBehavior":
        this.node.setTabBehavior(newValue);
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
      case "hadjustment":
        this.node.setHadjustment(newValue);
        break;
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue);
        break;
      case "vadjustment":
        this.node.setVadjustment(newValue);
        break;
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue);
        break;
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enableRubberband", newValue);
        break;
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue);
        break;
      case "onNotifyHeaderFactory":
        this.setHandler("notify::headerFactory", newValue);
        break;
      case "onNotifyModel":
        this.setHandler("notify::model", newValue);
        break;
      case "onNotifyShowSeparators":
        this.setHandler("notify::showSeparators", newValue);
        break;
      case "onNotifySingleClickActivate":
        this.setHandler("notify::singleClickActivate", newValue);
        break;
      case "onNotifyTabBehavior":
        this.setHandler("notify::tabBehavior", newValue);
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
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue);
        break;
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue);
        break;
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue);
        break;
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
