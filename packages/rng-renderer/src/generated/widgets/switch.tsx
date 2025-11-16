import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Switch<T extends Gtk.Switch = Gtk.Switch> extends Widget<T> {
  static createNode() {
    return new Gtk.Switch({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "active":
        this.node.setActive(newValue);
        break;
      case "state":
        this.node.setState(newValue);
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
      case "onStateSet":
        this.setHandler("state-set", newValue);
        break;
      case "onNotifyActive":
        this.setHandler("notify::active", newValue);
        break;
      case "onNotifyState":
        this.setHandler("notify::state", newValue);
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
