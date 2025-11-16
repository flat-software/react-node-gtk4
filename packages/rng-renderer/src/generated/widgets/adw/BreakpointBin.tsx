import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class BreakpointBin<  T extends Adw.BreakpointBin = Adw.BreakpointBin> extends Widget<T> {
  static createNode() {
    return new Adw.BreakpointBin({
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
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyCurrentBreakpoint":
        this.setHandler("notify::currentBreakpoint", newValue)
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
