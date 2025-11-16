import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class Grid<  T extends Gtk.Grid = Gtk.Grid> extends Widget<T> {
  static createNode() {
    return new Gtk.Grid({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "baselineRow":
this.node.setBaselineRow(newValue)
break
case "columnHomogeneous":
this.node.setColumnHomogeneous(newValue)
break
case "columnSpacing":
this.node.setColumnSpacing(newValue)
break
case "rowHomogeneous":
this.node.setRowHomogeneous(newValue)
break
case "rowSpacing":
this.node.setRowSpacing(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "orientation":
this.node.setOrientation(newValue)
break
      case "onNotifyBaselineRow":
        this.setHandler("notify::baselineRow", newValue)
        break
      case "onNotifyColumnHomogeneous":
        this.setHandler("notify::columnHomogeneous", newValue)
        break
      case "onNotifyColumnSpacing":
        this.setHandler("notify::columnSpacing", newValue)
        break
      case "onNotifyRowHomogeneous":
        this.setHandler("notify::rowHomogeneous", newValue)
        break
      case "onNotifyRowSpacing":
        this.setHandler("notify::rowSpacing", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
