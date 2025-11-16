import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class CheckButton<
  T extends Gtk.CheckButton = Gtk.CheckButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.CheckButton({});
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child);
    this.node.setChild(child.node);
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child);
    this.node.setChild(null);
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild);
    this.node.setChild(child.node);
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
      case "inconsistent":
        this.node.setInconsistent(newValue);
        break;
      case "label":
        this.node.setLabel(newValue);
        break;
      case "useUnderline":
        this.node.setUseUnderline(newValue);
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
      case "onToggled":
        this.setHandler("toggled", newValue);
        break;
      case "onNotifyActive":
        this.setHandler("notify::active", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyGroup":
        this.setHandler("notify::group", newValue);
        break;
      case "onNotifyInconsistent":
        this.setHandler("notify::inconsistent", newValue);
        break;
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue);
        break;
      case "onNotifyUseUnderline":
        this.setHandler("notify::useUnderline", newValue);
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
