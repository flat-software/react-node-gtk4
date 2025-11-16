import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Stack<T extends Gtk.Stack = Gtk.Stack> extends Widget<T> {
  static createNode() {
    return new Gtk.Stack({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "hhomogeneous":
        this.node.setHhomogeneous(newValue);
        break;
      case "interpolateSize":
        this.node.setInterpolateSize(newValue);
        break;
      case "transitionDuration":
        this.node.setTransitionDuration(newValue);
        break;
      case "transitionType":
        this.node.setTransitionType(newValue);
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
      case "onNotifyHhomogeneous":
        this.setHandler("notify::hhomogeneous", newValue);
        break;
      case "onNotifyInterpolateSize":
        this.setHandler("notify::interpolateSize", newValue);
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
      case "onNotifyTransitionType":
        this.setHandler("notify::transitionType", newValue);
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
