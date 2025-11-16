import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class CellView<  T extends Gtk.CellView = Gtk.CellView> extends Widget<T> {
  static createNode() {
    return new Gtk.CellView({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "drawSensitive":
this.node.setDrawSensitive(newValue)
break
case "fitModel":
this.node.setFitModel(newValue)
break
case "model":
this.node.setModel(newValue)
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
      case "onNotifyCellArea":
        this.setHandler("notify::cellArea", newValue)
        break
      case "onNotifyCellAreaContext":
        this.setHandler("notify::cellAreaContext", newValue)
        break
      case "onNotifyDrawSensitive":
        this.setHandler("notify::drawSensitive", newValue)
        break
      case "onNotifyFitModel":
        this.setHandler("notify::fitModel", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
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
