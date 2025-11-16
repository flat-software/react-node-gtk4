import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class NavigationPage<
  T extends Adw.NavigationPage = Adw.NavigationPage,
> extends Widget<T> {
  static createNode() {
    return new Adw.NavigationPage({});
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
      case "canPop":
        this.node.setCanPop(newValue);
        break;
      case "tag":
        this.node.setTag(newValue);
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
      case "onHidden":
        this.setHandler("hidden", newValue);
        break;
      case "onHiding":
        this.setHandler("hiding", newValue);
        break;
      case "onShowing":
        this.setHandler("showing", newValue);
        break;
      case "onShown":
        this.setHandler("shown", newValue);
        break;
      case "onNotifyCanPop":
        this.setHandler("notify::canPop", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyTag":
        this.setHandler("notify::tag", newValue);
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
