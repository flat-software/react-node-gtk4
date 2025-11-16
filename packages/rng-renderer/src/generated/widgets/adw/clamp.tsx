import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class Clamp<T extends Adw.Clamp = Adw.Clamp> extends GtkWidget<T> {
  static createNode() {
    return new Adw.Clamp({});
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
      case "maximumSize":
        this.node.setMaximumSize(newValue);
        break;
      case "tighteningThreshold":
        this.node.setTighteningThreshold(newValue);
        break;
      case "unit":
        this.node.setUnit(newValue);
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
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyMaximumSize":
        this.setHandler("notify::maximumSize", newValue);
        break;
      case "onNotifyTighteningThreshold":
        this.setHandler("notify::tighteningThreshold", newValue);
        break;
      case "onNotifyUnit":
        this.setHandler("notify::unit", newValue);
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
