import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class Frame<  T extends Gtk.Frame = Gtk.Frame> extends Widget<T> {
  static createNode() {
    return new Gtk.Frame({
  })
}
appendChild(child: AbstractWidget) {
  super.appendChild(child)
  this.node.setChild(child.node)
}
removeChild(child: AbstractWidget) {
  super.removeChild(child)
  this.node.setChild(null)
}
insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
  super.insertBefore(child, beforeChild)
  this.node.setChild(child.node)
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "label":
this.node.setLabel(newValue)
break
case "labelWidget":
this.node.setLabelWidget(newValue)
break
case "labelXalign":
this.node.setLabelAlign(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyLabelWidget":
        this.setHandler("notify::labelWidget", newValue)
        break
      case "onNotifyLabelXalign":
        this.setHandler("notify::labelXalign", newValue)
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
