import Adw from "../girs/node-adw-1.js";
import {AdwPreferencesRow} from "./adwPreferencesRow.js";

export class AdwActionRow<
  T extends Adw.ActionRow = Adw.ActionRow,
> extends AdwPreferencesRow<T> {
  static createNode() {
    return new Adw.ActionRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "activatableWidget":
        this.node.setActivatableWidget(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "subtitle":
        this.node.setSubtitle(newValue);
        break;
      case "subtitleLines":
        this.node.setSubtitleLines(newValue);
        break;
      case "subtitleSelectable":
        this.node.setSubtitleSelectable(newValue);
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
      case "onActivated":
        this.setHandler("activated", newValue);
        break;
      case "onNotifyActivatableWidget":
        this.setHandler("notify::activatableWidget", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue);
        break;
      case "onNotifySubtitleLines":
        this.setHandler("notify::subtitleLines", newValue);
        break;
      case "onNotifySubtitleSelectable":
        this.setHandler("notify::subtitleSelectable", newValue);
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
