import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class InlineViewSwitcher<
  T extends Adw.InlineViewSwitcher = Adw.InlineViewSwitcher,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.InlineViewSwitcher({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "canShrink":
        this.node.setCanShrink(newValue);
        break;
      case "displayMode":
        this.node.setDisplayMode(newValue);
        break;
      case "homogeneous":
        this.node.setHomogeneous(newValue);
        break;
      case "stack":
        this.node.setStack(newValue);
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
      case "onNotifyCanShrink":
        this.setHandler("notify::canShrink", newValue);
        break;
      case "onNotifyDisplayMode":
        this.setHandler("notify::displayMode", newValue);
        break;
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue);
        break;
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue);
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
