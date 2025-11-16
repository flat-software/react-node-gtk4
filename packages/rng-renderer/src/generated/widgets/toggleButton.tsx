import Gtk from "../girs/node-gtk-4.0.js";
import {Button} from "./button.js";

export class ToggleButton<
  T extends Gtk.ToggleButton = Gtk.ToggleButton,
> extends Button<T> {
  static createNode() {
    return new Gtk.ToggleButton({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "active":
        this.node.setActive(newValue);
        break;
      case "group":
        this.node.setGroup(newValue);
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
      case "onToggled":
        this.setHandler("toggled", newValue);
        break;
      case "onNotifyActive":
        this.setHandler("notify::active", newValue);
        break;
      case "onNotifyGroup":
        this.setHandler("notify::group", newValue);
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
