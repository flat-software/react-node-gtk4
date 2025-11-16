import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwNavigationView<
  T extends Adw.NavigationView = Adw.NavigationView,
> extends Widget<T> {
  static createNode() {
    return new Adw.NavigationView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "animateTransitions":
        this.node.setAnimateTransitions(newValue);
        break;
      case "hhomogeneous":
        this.node.setHhomogeneous(newValue);
        break;
      case "popOnEscape":
        this.node.setPopOnEscape(newValue);
        break;
      case "vhomogeneous":
        this.node.setVhomogeneous(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onGetNextPage":
        this.setHandler("get-next-page", newValue);
        break;
      case "onPopped":
        this.setHandler("popped", newValue);
        break;
      case "onPushed":
        this.setHandler("pushed", newValue);
        break;
      case "onReplaced":
        this.setHandler("replaced", newValue);
        break;
      case "onNotifyAnimateTransitions":
        this.setHandler("notify::animateTransitions", newValue);
        break;
      case "onNotifyHhomogeneous":
        this.setHandler("notify::hhomogeneous", newValue);
        break;
      case "onNotifyNavigationStack":
        this.setHandler("notify::navigationStack", newValue);
        break;
      case "onNotifyPopOnEscape":
        this.setHandler("notify::popOnEscape", newValue);
        break;
      case "onNotifyVhomogeneous":
        this.setHandler("notify::vhomogeneous", newValue);
        break;
      case "onNotifyVisiblePage":
        this.setHandler("notify::visiblePage", newValue);
        break;
      case "onNotifyVisiblePageTag":
        this.setHandler("notify::visiblePageTag", newValue);
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
