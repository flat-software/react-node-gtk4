import Gtk from "../girs/node-gtk-4.0.js";
import {Window} from "./window.js";

export class Assistant<
  T extends Gtk.Assistant = Gtk.Assistant,
> extends Window<T> {
  static createNode() {
    return new Gtk.Assistant({});
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
      case "onApply":
        this.setHandler("apply", newValue);
        break;
      case "onCancel":
        this.setHandler("cancel", newValue);
        break;
      case "onClose":
        this.setHandler("close", newValue);
        break;
      case "onEscape":
        this.setHandler("escape", newValue);
        break;
      case "onPrepare":
        this.setHandler("prepare", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifyUseHeaderBar":
        this.setHandler("notify::useHeaderBar", newValue);
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
