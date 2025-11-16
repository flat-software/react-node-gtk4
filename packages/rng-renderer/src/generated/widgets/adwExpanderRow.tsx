import Adw from "@/generated/girs/node-adw-1.js";
import {AdwPreferencesRow} from "./adwPreferencesRow.js";

export class AdwExpanderRow<
  T extends Adw.ExpanderRow = Adw.ExpanderRow,
> extends AdwPreferencesRow<T> {
  static createNode() {
    return new Adw.ExpanderRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "enableExpansion":
        this.node.setEnableExpansion(newValue);
        break;
      case "expanded":
        this.node.setExpanded(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "showEnableSwitch":
        this.node.setShowEnableSwitch(newValue);
        break;
      case "subtitle":
        this.node.setSubtitle(newValue);
        break;
      case "subtitleLines":
        this.node.setSubtitleLines(newValue);
        break;
      case "titleLines":
        this.node.setTitleLines(newValue);
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
      case "onNotifyEnableExpansion":
        this.setHandler("notify::enableExpansion", newValue);
        break;
      case "onNotifyExpanded":
        this.setHandler("notify::expanded", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyShowEnableSwitch":
        this.setHandler("notify::showEnableSwitch", newValue);
        break;
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue);
        break;
      case "onNotifySubtitleLines":
        this.setHandler("notify::subtitleLines", newValue);
        break;
      case "onNotifyTitleLines":
        this.setHandler("notify::titleLines", newValue);
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
