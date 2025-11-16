import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class ViewStack<
  T extends Adw.ViewStack = Adw.ViewStack,
> extends Widget<T> {
  static createNode() {
    return new Adw.ViewStack({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "enableTransitions":
        this.node.setEnableTransitions(newValue);
        break;
      case "hhomogeneous":
        this.node.setHhomogeneous(newValue);
        break;
      case "transitionDuration":
        this.node.setTransitionDuration(newValue);
        break;
      case "vhomogeneous":
        this.node.setVhomogeneous(newValue);
        break;
      case "visibleChild":
        this.node.setVisibleChild(newValue);
        break;
      case "visibleChildName":
        this.node.setVisibleChildName(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyEnableTransitions":
        this.setHandler("notify::enableTransitions", newValue);
        break;
      case "onNotifyHhomogeneous":
        this.setHandler("notify::hhomogeneous", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifyTransitionDuration":
        this.setHandler("notify::transitionDuration", newValue);
        break;
      case "onNotifyTransitionRunning":
        this.setHandler("notify::transitionRunning", newValue);
        break;
      case "onNotifyVhomogeneous":
        this.setHandler("notify::vhomogeneous", newValue);
        break;
      case "onNotifyVisibleChild":
        this.setHandler("notify::visibleChild", newValue);
        break;
      case "onNotifyVisibleChildName":
        this.setHandler("notify::visibleChildName", newValue);
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
