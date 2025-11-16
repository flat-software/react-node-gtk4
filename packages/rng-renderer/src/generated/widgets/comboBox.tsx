import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class ComboBox<T extends Gtk.ComboBox = Gtk.ComboBox> extends Widget<T> {
  static createNode() {
    return new Gtk.ComboBox({});
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child);
    this.node.setChild(child.node);
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child);
    this.node.setChild(null);
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild);
    this.node.setChild(child.node);
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "active":
        this.node.setActive(newValue);
        break;
      case "activeId":
        this.node.setActiveId(newValue);
        break;
      case "buttonSensitivity":
        this.node.setButtonSensitivity(newValue);
        break;
      case "entryTextColumn":
        this.node.setEntryTextColumn(newValue);
        break;
      case "hasFrame":
        this.node.hasFrame = newValue;
        break;
      case "idColumn":
        this.node.setIdColumn(newValue);
        break;
      case "model":
        this.node.setModel(newValue);
        break;
      case "popupFixedWidth":
        this.node.setPopupFixedWidth(newValue);
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
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onChanged":
        this.setHandler("changed", newValue);
        break;
      case "onFormatEntryText":
        this.setHandler("format-entry-text", newValue);
        break;
      case "onMoveActive":
        this.setHandler("move-active", newValue);
        break;
      case "onPopdown":
        this.setHandler("popdown", newValue);
        break;
      case "onPopup":
        this.setHandler("popup", newValue);
        break;
      case "onEditingDone":
        this.setHandler("editing-done", newValue);
        break;
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue);
        break;
      case "onNotifyActive":
        this.setHandler("notify::active", newValue);
        break;
      case "onNotifyActiveId":
        this.setHandler("notify::activeId", newValue);
        break;
      case "onNotifyButtonSensitivity":
        this.setHandler("notify::buttonSensitivity", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyEntryTextColumn":
        this.setHandler("notify::entryTextColumn", newValue);
        break;
      case "onNotifyHasEntry":
        this.setHandler("notify::hasEntry", newValue);
        break;
      case "onNotifyHasFrame":
        this.setHandler("notify::hasFrame", newValue);
        break;
      case "onNotifyIdColumn":
        this.setHandler("notify::idColumn", newValue);
        break;
      case "onNotifyModel":
        this.setHandler("notify::model", newValue);
        break;
      case "onNotifyPopupFixedWidth":
        this.setHandler("notify::popupFixedWidth", newValue);
        break;
      case "onNotifyPopupShown":
        this.setHandler("notify::popupShown", newValue);
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
