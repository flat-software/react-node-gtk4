import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class DrawingArea<  T extends Gtk.DrawingArea = Gtk.DrawingArea> extends Widget<T> {
  static createNode() {
    return new Gtk.DrawingArea({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "contentHeight":
this.node.setContentHeight(newValue)
break
case "contentWidth":
this.node.setContentWidth(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onResize":
        this.setHandler("resize", newValue)
        break
      case "onNotifyContentHeight":
        this.setHandler("notify::contentHeight", newValue)
        break
      case "onNotifyContentWidth":
        this.setHandler("notify::contentWidth", newValue)
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
