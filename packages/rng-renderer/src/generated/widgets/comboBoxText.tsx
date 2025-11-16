import Gtk from "../girs/node-gtk-4.0.js";
import {ComboBox} from "./comboBox.js";

export class ComboBoxText<
  T extends Gtk.ComboBoxText = Gtk.ComboBoxText,
> extends ComboBox<T> {
  static createNode() {
    return new Gtk.ComboBoxText({});
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
      case "editingCanceled":
        this.node.editingCanceled = newValue;
        break;
      case "onEditingDone":
        this.setHandler("editing-done", newValue);
        break;
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue);
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
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
