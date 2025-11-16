import Adw from "@/generated/girs/node-adw-1.js";
import {Dialog} from "./dialog.js";

export class ShortcutsDialog<
  T extends Adw.ShortcutsDialog = Adw.ShortcutsDialog,
> extends Dialog<T> {
  static createNode() {
    return new Adw.ShortcutsDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
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
