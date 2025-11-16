import Adw from "@/generated/girs/node-adw-1.js";
import {ListBoxRow} from "./listBoxRow.js";

export class AdwPreferencesRow<
  T extends Adw.PreferencesRow = Adw.PreferencesRow,
> extends ListBoxRow<T> {
  static createNode() {
    return new Adw.PreferencesRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "title":
        this.node.setTitle(newValue);
        break;
      case "titleSelectable":
        this.node.setTitleSelectable(newValue);
        break;
      case "useMarkup":
        this.node.setUseMarkup(newValue);
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
      case "actionName":
        this.node.setActionName(newValue);
        break;
      case "actionTarget":
        this.node.setActionTargetValue(newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
        break;
      case "onNotifyTitleSelectable":
        this.setHandler("notify::titleSelectable", newValue);
        break;
      case "onNotifyUseMarkup":
        this.setHandler("notify::useMarkup", newValue);
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
      case "onNotifyActionName":
        this.setHandler("notify::actionName", newValue);
        break;
      case "onNotifyActionTarget":
        this.setHandler("notify::actionTarget", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
