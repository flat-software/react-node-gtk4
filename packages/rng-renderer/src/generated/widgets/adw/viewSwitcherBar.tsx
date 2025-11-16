import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class ViewSwitcherBar<
  T extends Adw.ViewSwitcherBar = Adw.ViewSwitcherBar,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.ViewSwitcherBar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "reveal":
        this.node.setReveal(newValue);
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
      case "onNotifyReveal":
        this.setHandler("notify::reveal", newValue);
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
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
