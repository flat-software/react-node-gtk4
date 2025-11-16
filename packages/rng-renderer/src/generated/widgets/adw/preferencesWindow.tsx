import Adw from "@/generated/girs/node-adw-1.js";
import {Window} from "./window.js";

export class PreferencesWindow<
  T extends Adw.PreferencesWindow = Adw.PreferencesWindow,
> extends Window<T> {
  static createNode() {
    return new Adw.PreferencesWindow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "canNavigateBack":
        this.node.setCanNavigateBack(newValue);
        break;
      case "searchEnabled":
        this.node.setSearchEnabled(newValue);
        break;
      case "visiblePage":
        this.node.setVisiblePage(newValue);
        break;
      case "visiblePageName":
        this.node.setVisiblePageName(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyCanNavigateBack":
        this.setHandler("notify::canNavigateBack", newValue);
        break;
      case "onNotifySearchEnabled":
        this.setHandler("notify::searchEnabled", newValue);
        break;
      case "onNotifyVisiblePage":
        this.setHandler("notify::visiblePage", newValue);
        break;
      case "onNotifyVisiblePageName":
        this.setHandler("notify::visiblePageName", newValue);
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
