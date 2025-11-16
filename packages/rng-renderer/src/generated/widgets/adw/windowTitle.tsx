import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class WindowTitle<
  T extends Adw.WindowTitle = Adw.WindowTitle,
> extends Widget<T> {
  static createNode() {
    return new Adw.WindowTitle({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "subtitle":
        this.node.setSubtitle(newValue);
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
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue);
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
