import Adw from "@/generated/girs/node-adw-1.js";
import {ApplicationWindow} from "../gtk/applicationWindow.js";

export class ApplicationWindow<
  T extends Adw.ApplicationWindow = Adw.ApplicationWindow,
> extends ApplicationWindow<T> {
  static createNode() {
    return new Adw.ApplicationWindow({});
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
      case "onActionAdded":
        this.setHandler("action-added", newValue);
        break;
      case "onActionEnabledChanged":
        this.setHandler("action-enabled-changed", newValue);
        break;
      case "onActionRemoved":
        this.setHandler("action-removed", newValue);
        break;
      case "onActionStateChanged":
        this.setHandler("action-state-changed", newValue);
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
