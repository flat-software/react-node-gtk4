import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwToggleGroup<
  T extends Adw.ToggleGroup = Adw.ToggleGroup,
> extends Widget<T> {
  static createNode() {
    return new Adw.ToggleGroup({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "active":
        this.node.setActive(newValue);
        break;
      case "activeName":
        this.node.setActiveName(newValue);
        break;
      case "canShrink":
        this.node.setCanShrink(newValue);
        break;
      case "homogeneous":
        this.node.setHomogeneous(newValue);
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
      case "onNotifyActive":
        this.setHandler("notify::active", newValue);
        break;
      case "onNotifyActiveName":
        this.setHandler("notify::activeName", newValue);
        break;
      case "onNotifyCanShrink":
        this.setHandler("notify::canShrink", newValue);
        break;
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue);
        break;
      case "onNotifyNToggles":
        this.setHandler("notify::nToggles", newValue);
        break;
      case "onNotifyToggles":
        this.setHandler("notify::toggles", newValue);
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
