import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class ButtonContent<
  T extends Adw.ButtonContent = Adw.ButtonContent,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.ButtonContent({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "canShrink":
        this.node.setCanShrink(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "label":
        this.node.setLabel(newValue);
        break;
      case "useUnderline":
        this.node.setUseUnderline(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyCanShrink":
        this.setHandler("notify::canShrink", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue);
        break;
      case "onNotifyUseUnderline":
        this.setHandler("notify::useUnderline", newValue);
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
