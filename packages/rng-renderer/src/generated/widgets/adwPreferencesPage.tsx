import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwPreferencesPage<
  T extends Adw.PreferencesPage = Adw.PreferencesPage,
> extends Widget<T> {
  static createNode() {
    return new Adw.PreferencesPage({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "banner":
        this.node.setBanner(newValue);
        break;
      case "description":
        this.node.setDescription(newValue);
        break;
      case "descriptionCentered":
        this.node.setDescriptionCentered(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "name":
        this.node.setName(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "useUnderline":
        this.node.setUseUnderline(newValue);
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyBanner":
        this.setHandler("notify::banner", newValue);
        break;
      case "onNotifyDescription":
        this.setHandler("notify::description", newValue);
        break;
      case "onNotifyDescriptionCentered":
        this.setHandler("notify::descriptionCentered", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
        break;
      case "onNotifyUseUnderline":
        this.setHandler("notify::useUnderline", newValue);
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
