import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwTabButton<
  T extends Adw.TabButton = Adw.TabButton,
> extends Widget<T> {
  static createNode() {
    return new Adw.TabButton({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "view":
        this.node.setView(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "actionName":
        this.node.setActionName(newValue);
        break;
      case "actionTarget":
        this.node.setActionTargetValue(newValue);
        break;
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onClicked":
        this.setHandler("clicked", newValue);
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
      case "onNotifyActionName":
        this.setHandler("notify::actionName", newValue);
        break;
      case "onNotifyActionTarget":
        this.setHandler("notify::actionTarget", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
