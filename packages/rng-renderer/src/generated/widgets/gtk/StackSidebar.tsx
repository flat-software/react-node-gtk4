import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class StackSidebar<  T extends Gtk.StackSidebar = Gtk.StackSidebar> extends Widget<T> {
  static createNode() {
    return new Gtk.StackSidebar({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "stack":
this.node.setStack(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue)
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
