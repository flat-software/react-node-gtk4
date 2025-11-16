import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class SpinButton<
  T extends Gtk.SpinButton = Gtk.SpinButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.SpinButton({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "activatesDefault":
        this.node.setActivatesDefault(newValue);
        break;
      case "adjustment":
        this.node.setAdjustment(newValue);
        break;
      case "climbRate":
        this.node.setClimbRate(newValue);
        break;
      case "digits":
        this.node.setDigits(newValue);
        break;
      case "numeric":
        this.node.setNumeric(newValue);
        break;
      case "snapToTicks":
        this.node.setSnapToTicks(newValue);
        break;
      case "updatePolicy":
        this.node.setUpdatePolicy(newValue);
        break;
      case "value":
        this.node.setValue(newValue);
        break;
      case "wrap":
        this.node.setWrap(newValue);
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
      case "orientation":
        this.node.setOrientation(newValue);
        break;
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onChangeValue":
        this.setHandler("change-value", newValue);
        break;
      case "onInput":
        this.setHandler("input", newValue);
        break;
      case "onOutput":
        this.setHandler("output", newValue);
        break;
      case "onValueChanged":
        this.setHandler("value-changed", newValue);
        break;
      case "onWrapped":
        this.setHandler("wrapped", newValue);
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
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue);
        break;
      case "onNotifyClimbRate":
        this.setHandler("notify::climbRate", newValue);
        break;
      case "onNotifyDigits":
        this.setHandler("notify::digits", newValue);
        break;
      case "onNotifyNumeric":
        this.setHandler("notify::numeric", newValue);
        break;
      case "onNotifySnapToTicks":
        this.setHandler("notify::snapToTicks", newValue);
        break;
      case "onNotifyUpdatePolicy":
        this.setHandler("notify::updatePolicy", newValue);
        break;
      case "onNotifyValue":
        this.setHandler("notify::value", newValue);
        break;
      case "onNotifyWrap":
        this.setHandler("notify::wrap", newValue);
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
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
