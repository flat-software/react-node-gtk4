import Adw from "../girs/node-adw-1.js";
import {AdwPreferencesRow} from "./adwPreferencesRow.js";

export class AdwButtonRow<
  T extends Adw.ButtonRow = Adw.ButtonRow,
> extends AdwPreferencesRow<T> {
  static createNode() {
    return new Adw.ButtonRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "endIconName":
        this.node.setEndIconName(newValue);
        break;
      case "startIconName":
        this.node.setStartIconName(newValue);
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
      case "onNotifyEndIconName":
        this.setHandler("notify::endIconName", newValue);
        break;
      case "onNotifyStartIconName":
        this.setHandler("notify::startIconName", newValue);
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
