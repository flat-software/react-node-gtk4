import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Dialog} from "./GtkDialog.js"

export class FileChooserDialog<  T extends Gtk.FileChooserDialog = Gtk.FileChooserDialog> extends Dialog<T> {
  static createNode() {
    return new Gtk.FileChooserDialog({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "action":
this.node.setAction(newValue)
break
case "createFolders":
this.node.setCreateFolders(newValue)
break
case "filter":
this.node.setFilter(newValue)
break
case "selectMultiple":
this.node.setSelectMultiple(newValue)
break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyAction":
        this.setHandler("notify::action", newValue)
        break
      case "onNotifyCreateFolders":
        this.setHandler("notify::createFolders", newValue)
        break
      case "onNotifyFilter":
        this.setHandler("notify::filter", newValue)
        break
      case "onNotifyFilters":
        this.setHandler("notify::filters", newValue)
        break
      case "onNotifySelectMultiple":
        this.setHandler("notify::selectMultiple", newValue)
        break
      case "onNotifyShortcutFolders":
        this.setHandler("notify::shortcutFolders", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
