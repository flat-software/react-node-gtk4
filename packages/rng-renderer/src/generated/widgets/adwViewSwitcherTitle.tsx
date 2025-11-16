import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwViewSwitcherTitle<
  T extends Adw.ViewSwitcherTitle = Adw.ViewSwitcherTitle,
> extends Widget<T> {
  static createNode() {
    return new Adw.ViewSwitcherTitle({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "stack":
        this.node.setStack(newValue);
        break;
      case "subtitle":
        this.node.setSubtitle(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "viewSwitcherEnabled":
        this.node.setViewSwitcherEnabled(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue);
        break;
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
        break;
      case "onNotifyTitleVisible":
        this.setHandler("notify::titleVisible", newValue);
        break;
      case "onNotifyViewSwitcherEnabled":
        this.setHandler("notify::viewSwitcherEnabled", newValue);
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
