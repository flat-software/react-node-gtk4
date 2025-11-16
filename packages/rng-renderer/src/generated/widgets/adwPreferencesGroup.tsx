import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwPreferencesGroup<
  T extends Adw.PreferencesGroup = Adw.PreferencesGroup,
> extends Widget<T> {
  static createNode() {
    return new Adw.PreferencesGroup({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "description":
        this.node.setDescription(newValue);
        break;
      case "headerSuffix":
        this.node.setHeaderSuffix(newValue);
        break;
      case "separateRows":
        this.node.setSeparateRows(newValue);
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
      case "onNotifyDescription":
        this.setHandler("notify::description", newValue);
        break;
      case "onNotifyHeaderSuffix":
        this.setHandler("notify::headerSuffix", newValue);
        break;
      case "onNotifySeparateRows":
        this.setHandler("notify::separateRows", newValue);
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
