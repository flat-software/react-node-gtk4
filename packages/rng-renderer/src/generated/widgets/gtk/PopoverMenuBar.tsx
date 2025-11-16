import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class PopoverMenuBar<  T extends Gtk.PopoverMenuBar = Gtk.PopoverMenuBar> extends Widget<T> {
  static createNode() {
    return new Gtk.PopoverMenuBar({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "menuModel":
this.node.setMenuModel(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyMenuModel":
        this.setHandler("notify::menuModel", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
