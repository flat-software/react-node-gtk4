import Adw from "../girs/node-adw-1.js";
import {AdwEntryRow} from "./adwEntryRow.js";

export class AdwPasswordEntryRow<
  T extends Adw.PasswordEntryRow = Adw.PasswordEntryRow,
> extends AdwEntryRow<T> {
  static createNode() {
    return new Adw.PasswordEntryRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
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
      case "editable":
        this.node.setEditable(newValue);
        break;
      case "enableUndo":
        this.node.setEnableUndo(newValue);
        break;
      case "maxWidthChars":
        this.node.setMaxWidthChars(newValue);
        break;
      case "text":
        this.node.setText(newValue);
        break;
      case "widthChars":
        this.node.setWidthChars(newValue);
        break;
      case "xalign":
        this.node.setAlignment(newValue);
        break;
      case "onChanged":
        this.setHandler("changed", newValue);
        break;
      case "onDeleteText":
        this.setHandler("delete-text", newValue);
        break;
      case "onInsertText":
        this.setHandler("insert-text", newValue);
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
      case "onNotifyCursorPosition":
        this.setHandler("notify::cursorPosition", newValue);
        break;
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue);
        break;
      case "onNotifyEnableUndo":
        this.setHandler("notify::enableUndo", newValue);
        break;
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::maxWidthChars", newValue);
        break;
      case "onNotifySelectionBound":
        this.setHandler("notify::selectionBound", newValue);
        break;
      case "onNotifyText":
        this.setHandler("notify::text", newValue);
        break;
      case "onNotifyWidthChars":
        this.setHandler("notify::widthChars", newValue);
        break;
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
