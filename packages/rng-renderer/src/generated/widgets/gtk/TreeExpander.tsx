import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class TreeExpander<  T extends Gtk.TreeExpander = Gtk.TreeExpander> extends Widget<T> {
  static createNode() {
    return new Gtk.TreeExpander({
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
case "hideExpander":
this.node.setHideExpander(newValue)
break
case "indentForDepth":
this.node.setIndentForDepth(newValue)
break
case "indentForIcon":
this.node.setIndentForIcon(newValue)
break
case "listRow":
this.node.setListRow(newValue)
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
      case "onNotifyHideExpander":
        this.setHandler("notify::hideExpander", newValue)
        break
      case "onNotifyIndentForDepth":
        this.setHandler("notify::indentForDepth", newValue)
        break
      case "onNotifyIndentForIcon":
        this.setHandler("notify::indentForIcon", newValue)
        break
      case "onNotifyItem":
        this.setHandler("notify::item", newValue)
        break
      case "onNotifyListRow":
        this.setHandler("notify::listRow", newValue)
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
