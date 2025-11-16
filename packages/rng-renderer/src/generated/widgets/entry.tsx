import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Entry<T extends Gtk.Entry = Gtk.Entry> extends Widget<T> {
  static createNode() {
    return new Gtk.Entry({});
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
      case "buffer":
        this.node.setBuffer(newValue);
        break;
      case "completion":
        this.node.setCompletion(newValue);
        break;
      case "enableEmojiCompletion":
        this.node.enableEmojiCompletion = newValue;
        break;
      case "extraMenu":
        this.node.setExtraMenu(newValue);
        break;
      case "hasFrame":
        this.node.setHasFrame(newValue);
        break;
      case "imModule":
        this.node.imModule = newValue;
        break;
      case "inputHints":
        this.node.setInputHints(newValue);
        break;
      case "inputPurpose":
        this.node.setInputPurpose(newValue);
        break;
      case "invisibleChar":
        this.node.setInvisibleChar(newValue);
        break;
      case "invisibleCharSet":
        this.node.invisibleCharSet = newValue;
        break;
      case "maxLength":
        this.node.setMaxLength(newValue);
        break;
      case "menuEntryIconPrimaryText":
        this.node.menuEntryIconPrimaryText = newValue;
        break;
      case "menuEntryIconSecondaryText":
        this.node.menuEntryIconSecondaryText = newValue;
        break;
      case "overwriteMode":
        this.node.setOverwriteMode(newValue);
        break;
      case "placeholderText":
        this.node.setPlaceholderText(newValue);
        break;
      case "primaryIconActivatable":
        this.node.primaryIconActivatable = newValue;
        break;
      case "primaryIconGicon":
        this.node.primaryIconGicon = newValue;
        break;
      case "primaryIconName":
        this.node.primaryIconName = newValue;
        break;
      case "primaryIconPaintable":
        this.node.primaryIconPaintable = newValue;
        break;
      case "primaryIconSensitive":
        this.node.primaryIconSensitive = newValue;
        break;
      case "primaryIconTooltipMarkup":
        this.node.primaryIconTooltipMarkup = newValue;
        break;
      case "primaryIconTooltipText":
        this.node.primaryIconTooltipText = newValue;
        break;
      case "progressFraction":
        this.node.setProgressFraction(newValue);
        break;
      case "progressPulseStep":
        this.node.setProgressPulseStep(newValue);
        break;
      case "secondaryIconActivatable":
        this.node.secondaryIconActivatable = newValue;
        break;
      case "secondaryIconGicon":
        this.node.secondaryIconGicon = newValue;
        break;
      case "secondaryIconName":
        this.node.secondaryIconName = newValue;
        break;
      case "secondaryIconPaintable":
        this.node.secondaryIconPaintable = newValue;
        break;
      case "secondaryIconSensitive":
        this.node.secondaryIconSensitive = newValue;
        break;
      case "secondaryIconTooltipMarkup":
        this.node.secondaryIconTooltipMarkup = newValue;
        break;
      case "secondaryIconTooltipText":
        this.node.secondaryIconTooltipText = newValue;
        break;
      case "showEmojiIcon":
        this.node.showEmojiIcon = newValue;
        break;
      case "tabs":
        this.node.setTabs(newValue);
        break;
      case "truncateMultiline":
        this.node.truncateMultiline = newValue;
        break;
      case "visibility":
        this.node.setVisibility(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "editingCanceled":
        this.node.editingCanceled = newValue;
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
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onIconPress":
        this.setHandler("icon-press", newValue);
        break;
      case "onIconRelease":
        this.setHandler("icon-release", newValue);
        break;
      case "onEditingDone":
        this.setHandler("editing-done", newValue);
        break;
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue);
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
      case "onNotifyBuffer":
        this.setHandler("notify::buffer", newValue);
        break;
      case "onNotifyCompletion":
        this.setHandler("notify::completion", newValue);
        break;
      case "onNotifyEnableEmojiCompletion":
        this.setHandler("notify::enableEmojiCompletion", newValue);
        break;
      case "onNotifyExtraMenu":
        this.setHandler("notify::extraMenu", newValue);
        break;
      case "onNotifyHasFrame":
        this.setHandler("notify::hasFrame", newValue);
        break;
      case "onNotifyImModule":
        this.setHandler("notify::imModule", newValue);
        break;
      case "onNotifyInputHints":
        this.setHandler("notify::inputHints", newValue);
        break;
      case "onNotifyInputPurpose":
        this.setHandler("notify::inputPurpose", newValue);
        break;
      case "onNotifyInvisibleChar":
        this.setHandler("notify::invisibleChar", newValue);
        break;
      case "onNotifyInvisibleCharSet":
        this.setHandler("notify::invisibleCharSet", newValue);
        break;
      case "onNotifyMaxLength":
        this.setHandler("notify::maxLength", newValue);
        break;
      case "onNotifyMenuEntryIconPrimaryText":
        this.setHandler("notify::menuEntryIconPrimaryText", newValue);
        break;
      case "onNotifyMenuEntryIconSecondaryText":
        this.setHandler("notify::menuEntryIconSecondaryText", newValue);
        break;
      case "onNotifyOverwriteMode":
        this.setHandler("notify::overwriteMode", newValue);
        break;
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholderText", newValue);
        break;
      case "onNotifyPrimaryIconActivatable":
        this.setHandler("notify::primaryIconActivatable", newValue);
        break;
      case "onNotifyPrimaryIconGicon":
        this.setHandler("notify::primaryIconGicon", newValue);
        break;
      case "onNotifyPrimaryIconName":
        this.setHandler("notify::primaryIconName", newValue);
        break;
      case "onNotifyPrimaryIconPaintable":
        this.setHandler("notify::primaryIconPaintable", newValue);
        break;
      case "onNotifyPrimaryIconSensitive":
        this.setHandler("notify::primaryIconSensitive", newValue);
        break;
      case "onNotifyPrimaryIconStorageType":
        this.setHandler("notify::primaryIconStorageType", newValue);
        break;
      case "onNotifyPrimaryIconTooltipMarkup":
        this.setHandler("notify::primaryIconTooltipMarkup", newValue);
        break;
      case "onNotifyPrimaryIconTooltipText":
        this.setHandler("notify::primaryIconTooltipText", newValue);
        break;
      case "onNotifyProgressFraction":
        this.setHandler("notify::progressFraction", newValue);
        break;
      case "onNotifyProgressPulseStep":
        this.setHandler("notify::progressPulseStep", newValue);
        break;
      case "onNotifyScrollOffset":
        this.setHandler("notify::scrollOffset", newValue);
        break;
      case "onNotifySecondaryIconActivatable":
        this.setHandler("notify::secondaryIconActivatable", newValue);
        break;
      case "onNotifySecondaryIconGicon":
        this.setHandler("notify::secondaryIconGicon", newValue);
        break;
      case "onNotifySecondaryIconName":
        this.setHandler("notify::secondaryIconName", newValue);
        break;
      case "onNotifySecondaryIconPaintable":
        this.setHandler("notify::secondaryIconPaintable", newValue);
        break;
      case "onNotifySecondaryIconSensitive":
        this.setHandler("notify::secondaryIconSensitive", newValue);
        break;
      case "onNotifySecondaryIconStorageType":
        this.setHandler("notify::secondaryIconStorageType", newValue);
        break;
      case "onNotifySecondaryIconTooltipMarkup":
        this.setHandler("notify::secondaryIconTooltipMarkup", newValue);
        break;
      case "onNotifySecondaryIconTooltipText":
        this.setHandler("notify::secondaryIconTooltipText", newValue);
        break;
      case "onNotifyShowEmojiIcon":
        this.setHandler("notify::showEmojiIcon", newValue);
        break;
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue);
        break;
      case "onNotifyTextLength":
        this.setHandler("notify::textLength", newValue);
        break;
      case "onNotifyTruncateMultiline":
        this.setHandler("notify::truncateMultiline", newValue);
        break;
      case "onNotifyVisibility":
        this.setHandler("notify::visibility", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyEditingCanceled":
        this.setHandler("notify::editingCanceled", newValue);
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
