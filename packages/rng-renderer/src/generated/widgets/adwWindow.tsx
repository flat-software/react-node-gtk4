import Adw from "../girs/node-adw-1.js";
import {Window} from "./window.js";

export class AdwWindow<T extends Adw.Window = Adw.Window> extends Window<T> {
  static createNode() {
    return new Adw.Window({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "adaptivePreview":
        this.node.setAdaptivePreview(newValue);
        break;
      case "content":
        this.node.setContent(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyAdaptivePreview":
        this.setHandler("notify::adaptivePreview", newValue);
        break;
      case "onNotifyContent":
        this.setHandler("notify::content", newValue);
        break;
      case "onNotifyCurrentBreakpoint":
        this.setHandler("notify::currentBreakpoint", newValue);
        break;
      case "onNotifyDialogs":
        this.setHandler("notify::dialogs", newValue);
        break;
      case "onNotifyVisibleDialog":
        this.setHandler("notify::visibleDialog", newValue);
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
