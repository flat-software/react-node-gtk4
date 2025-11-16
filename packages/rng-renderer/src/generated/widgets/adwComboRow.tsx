import Adw from "@/generated/girs/node-adw-1.js";
import {AdwActionRow} from "./adwActionRow.js";

export class AdwComboRow<
  T extends Adw.ComboRow = Adw.ComboRow,
> extends AdwActionRow<T> {
  static createNode() {
    return new Adw.ComboRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "enableSearch":
        this.node.setEnableSearch(newValue);
        break;
      case "expression":
        this.node.setExpression(newValue);
        break;
      case "factory":
        this.node.setFactory(newValue);
        break;
      case "headerFactory":
        this.node.setHeaderFactory(newValue);
        break;
      case "listFactory":
        this.node.setListFactory(newValue);
        break;
      case "model":
        this.node.setModel(newValue);
        break;
      case "searchMatchMode":
        this.node.setSearchMatchMode(newValue);
        break;
      case "selected":
        this.node.setSelected(newValue);
        break;
      case "useSubtitle":
        this.node.setUseSubtitle(newValue);
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
      case "onNotifyEnableSearch":
        this.setHandler("notify::enableSearch", newValue);
        break;
      case "onNotifyExpression":
        this.setHandler("notify::expression", newValue);
        break;
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue);
        break;
      case "onNotifyHeaderFactory":
        this.setHandler("notify::headerFactory", newValue);
        break;
      case "onNotifyListFactory":
        this.setHandler("notify::listFactory", newValue);
        break;
      case "onNotifyModel":
        this.setHandler("notify::model", newValue);
        break;
      case "onNotifySearchMatchMode":
        this.setHandler("notify::searchMatchMode", newValue);
        break;
      case "onNotifySelected":
        this.setHandler("notify::selected", newValue);
        break;
      case "onNotifySelectedItem":
        this.setHandler("notify::selectedItem", newValue);
        break;
      case "onNotifyUseSubtitle":
        this.setHandler("notify::useSubtitle", newValue);
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
