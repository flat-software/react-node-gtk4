import Adw from "@/generated/girs/node-adw-1.js";
import {PreferencesRow} from "./preferencesRow.js";

export class EntryRow<
  T extends Adw.EntryRow = Adw.EntryRow,
> extends PreferencesRow<T> {
  static createNode() {
    return new Adw.EntryRow({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "activatesDefault":
        this.node.setActivatesDefault(newValue);
        break;
      case "attributes":
        this.node.setAttributes(newValue);
        break;
      case "enableEmojiCompletion":
        this.node.setEnableEmojiCompletion(newValue);
        break;
      case "inputHints":
        this.node.setInputHints(newValue);
        break;
      case "inputPurpose":
        this.node.setInputPurpose(newValue);
        break;
      case "maxLength":
        this.node.setMaxLength(newValue);
        break;
      case "showApplyButton":
        this.node.setShowApplyButton(newValue);
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
      case "onApply":
        this.setHandler("apply", newValue);
        break;
      case "onEntryActivated":
        this.setHandler("entry-activated", newValue);
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
      case "onNotifyActivatesDefault":
        this.setHandler("notify::activatesDefault", newValue);
        break;
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue);
        break;
      case "onNotifyEnableEmojiCompletion":
        this.setHandler("notify::enableEmojiCompletion", newValue);
        break;
      case "onNotifyInputHints":
        this.setHandler("notify::inputHints", newValue);
        break;
      case "onNotifyInputPurpose":
        this.setHandler("notify::inputPurpose", newValue);
        break;
      case "onNotifyMaxLength":
        this.setHandler("notify::maxLength", newValue);
        break;
      case "onNotifyShowApplyButton":
        this.setHandler("notify::showApplyButton", newValue);
        break;
      case "onNotifyTextLength":
        this.setHandler("notify::textLength", newValue);
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
