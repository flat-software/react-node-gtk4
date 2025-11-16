import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class PasswordEntry<  T extends Gtk.PasswordEntry = Gtk.PasswordEntry> extends Widget<T> {
  static createNode() {
    return new Gtk.PasswordEntry({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "activatesDefault":
this.node.activatesDefault = newValue
break
case "extraMenu":
this.node.setExtraMenu(newValue)
break
case "placeholderText":
this.node.placeholderText = newValue
break
case "showPeekIcon":
this.node.setShowPeekIcon(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "editable":
this.node.setEditable(newValue)
break
case "enableUndo":
this.node.setEnableUndo(newValue)
break
case "maxWidthChars":
this.node.setMaxWidthChars(newValue)
break
case "text":
this.node.setText(newValue)
break
case "widthChars":
this.node.setWidthChars(newValue)
break
case "xalign":
this.node.setAlignment(newValue)
break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onDeleteText":
        this.setHandler("delete-text", newValue)
        break
      case "onInsertText":
        this.setHandler("insert-text", newValue)
        break
      case "onNotifyActivatesDefault":
        this.setHandler("notify::activatesDefault", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extraMenu", newValue)
        break
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholderText", newValue)
        break
      case "onNotifyShowPeekIcon":
        this.setHandler("notify::showPeekIcon", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyCursorPosition":
        this.setHandler("notify::cursorPosition", newValue)
        break
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue)
        break
      case "onNotifyEnableUndo":
        this.setHandler("notify::enableUndo", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::maxWidthChars", newValue)
        break
      case "onNotifySelectionBound":
        this.setHandler("notify::selectionBound", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::widthChars", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
