import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class ScrolledWindow<  T extends Gtk.ScrolledWindow = Gtk.ScrolledWindow> extends Widget<T> {
  static createNode() {
    return new Gtk.ScrolledWindow({
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
case "hadjustment":
this.node.setHadjustment(newValue)
break
case "hasFrame":
this.node.setHasFrame(newValue)
break
case "hscrollbarPolicy":
this.node.hscrollbarPolicy = newValue
break
case "kineticScrolling":
this.node.setKineticScrolling(newValue)
break
case "maxContentHeight":
this.node.setMaxContentHeight(newValue)
break
case "maxContentWidth":
this.node.setMaxContentWidth(newValue)
break
case "minContentHeight":
this.node.setMinContentHeight(newValue)
break
case "minContentWidth":
this.node.setMinContentWidth(newValue)
break
case "overlayScrolling":
this.node.setOverlayScrolling(newValue)
break
case "propagateNaturalHeight":
this.node.setPropagateNaturalHeight(newValue)
break
case "propagateNaturalWidth":
this.node.setPropagateNaturalWidth(newValue)
break
case "vadjustment":
this.node.setVadjustment(newValue)
break
case "vscrollbarPolicy":
this.node.vscrollbarPolicy = newValue
break
case "windowPlacement":
this.node.setPlacement(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onEdgeOvershot":
        this.setHandler("edge-overshot", newValue)
        break
      case "onEdgeReached":
        this.setHandler("edge-reached", newValue)
        break
      case "onMoveFocusOut":
        this.setHandler("move-focus-out", newValue)
        break
      case "onScrollChild":
        this.setHandler("scroll-child", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::hasFrame", newValue)
        break
      case "onNotifyHscrollbarPolicy":
        this.setHandler("notify::hscrollbarPolicy", newValue)
        break
      case "onNotifyKineticScrolling":
        this.setHandler("notify::kineticScrolling", newValue)
        break
      case "onNotifyMaxContentHeight":
        this.setHandler("notify::maxContentHeight", newValue)
        break
      case "onNotifyMaxContentWidth":
        this.setHandler("notify::maxContentWidth", newValue)
        break
      case "onNotifyMinContentHeight":
        this.setHandler("notify::minContentHeight", newValue)
        break
      case "onNotifyMinContentWidth":
        this.setHandler("notify::minContentWidth", newValue)
        break
      case "onNotifyOverlayScrolling":
        this.setHandler("notify::overlayScrolling", newValue)
        break
      case "onNotifyPropagateNaturalHeight":
        this.setHandler("notify::propagateNaturalHeight", newValue)
        break
      case "onNotifyPropagateNaturalWidth":
        this.setHandler("notify::propagateNaturalWidth", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollbarPolicy":
        this.setHandler("notify::vscrollbarPolicy", newValue)
        break
      case "onNotifyWindowPlacement":
        this.setHandler("notify::windowPlacement", newValue)
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
