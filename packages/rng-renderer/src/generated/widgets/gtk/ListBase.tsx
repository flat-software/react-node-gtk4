import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class ListBase<  T extends Gtk.ListBase = Gtk.ListBase> extends Widget<T> {
  static createNode() {
    return new Gtk.ListBase({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "orientation":
this.node.orientation = newValue
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "hadjustment":
this.node.setHadjustment(newValue)
break
case "hscrollPolicy":
this.node.setHscrollPolicy(newValue)
break
case "vadjustment":
this.node.setVadjustment(newValue)
break
case "vscrollPolicy":
this.node.setVscrollPolicy(newValue)
break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
