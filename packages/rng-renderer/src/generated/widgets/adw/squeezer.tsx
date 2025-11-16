import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class Squeezer<
  T extends Adw.Squeezer = Adw.Squeezer,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.Squeezer({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "allowNone":
        this.node.setAllowNone(newValue);
        break;
      case "homogeneous":
        this.node.setHomogeneous(newValue);
        break;
      case "interpolateSize":
        this.node.setInterpolateSize(newValue);
        break;
      case "switchThresholdPolicy":
        this.node.setSwitchThresholdPolicy(newValue);
        break;
      case "transitionDuration":
        this.node.setTransitionDuration(newValue);
        break;
      case "transitionType":
        this.node.setTransitionType(newValue);
        break;
      case "xalign":
        this.node.setXalign(newValue);
        break;
      case "yalign":
        this.node.setYalign(newValue);
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
      case "onNotifyAllowNone":
        this.setHandler("notify::allowNone", newValue);
        break;
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue);
        break;
      case "onNotifyInterpolateSize":
        this.setHandler("notify::interpolateSize", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifySwitchThresholdPolicy":
        this.setHandler("notify::switchThresholdPolicy", newValue);
        break;
      case "onNotifyTransitionDuration":
        this.setHandler("notify::transitionDuration", newValue);
        break;
      case "onNotifyTransitionRunning":
        this.setHandler("notify::transitionRunning", newValue);
        break;
      case "onNotifyTransitionType":
        this.setHandler("notify::transitionType", newValue);
        break;
      case "onNotifyVisibleChild":
        this.setHandler("notify::visibleChild", newValue);
        break;
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue);
        break;
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue);
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
