import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class StatusPage<
  T extends Adw.StatusPage = Adw.StatusPage,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.StatusPage({});
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
      case "description":
        this.node.setDescription(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "paintable":
        this.node.setPaintable(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyDescription":
        this.setHandler("notify::description", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyPaintable":
        this.setHandler("notify::paintable", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
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
