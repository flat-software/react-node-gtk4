import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwAvatar<T extends Adw.Avatar = Adw.Avatar> extends Widget<T> {
  static createNode() {
    return new Adw.Avatar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "customImage":
        this.node.setCustomImage(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "showInitials":
        this.node.setShowInitials(newValue);
        break;
      case "size":
        this.node.setSize(newValue);
        break;
      case "text":
        this.node.setText(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyCustomImage":
        this.setHandler("notify::customImage", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyShowInitials":
        this.setHandler("notify::showInitials", newValue);
        break;
      case "onNotifySize":
        this.setHandler("notify::size", newValue);
        break;
      case "onNotifyText":
        this.setHandler("notify::text", newValue);
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
