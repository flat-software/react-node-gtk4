import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class ClampScrollable<  T extends Adw.ClampScrollable = Adw.ClampScrollable> extends Widget<T> {
  static createNode() {
    return new Adw.ClampScrollable({
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
case "maximumSize":
this.node.setMaximumSize(newValue)
break
case "tighteningThreshold":
this.node.setTighteningThreshold(newValue)
break
case "unit":
this.node.setUnit(newValue)
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
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyMaximumSize":
        this.setHandler("notify::maximumSize", newValue)
        break
      case "onNotifyTighteningThreshold":
        this.setHandler("notify::tighteningThreshold", newValue)
        break
      case "onNotifyUnit":
        this.setHandler("notify::unit", newValue)
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
