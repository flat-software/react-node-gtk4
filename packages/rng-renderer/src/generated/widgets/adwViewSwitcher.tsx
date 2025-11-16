import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwViewSwitcher<
  T extends Adw.ViewSwitcher = Adw.ViewSwitcher,
> extends Widget<T> {
  static createNode() {
    return new Adw.ViewSwitcher({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "policy":
        this.node.setPolicy(newValue);
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
      case "onNotifyPolicy":
        this.setHandler("notify::policy", newValue);
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
