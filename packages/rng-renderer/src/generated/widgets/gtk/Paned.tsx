import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class Paned<  T extends Gtk.Paned = Gtk.Paned> extends Widget<T> {
  static createNode() {
    return new Gtk.Paned({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "endChild":
this.node.setEndChild(newValue)
break
case "position":
this.node.setPosition(newValue)
break
case "positionSet":
this.node.positionSet = newValue
break
case "resizeEndChild":
this.node.setResizeEndChild(newValue)
break
case "resizeStartChild":
this.node.setResizeStartChild(newValue)
break
case "shrinkEndChild":
this.node.setShrinkEndChild(newValue)
break
case "shrinkStartChild":
this.node.setShrinkStartChild(newValue)
break
case "startChild":
this.node.setStartChild(newValue)
break
case "wideHandle":
this.node.setWideHandle(newValue)
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
      case "onAcceptPosition":
        this.setHandler("accept-position", newValue)
        break
      case "onCancelPosition":
        this.setHandler("cancel-position", newValue)
        break
      case "onCycleChildFocus":
        this.setHandler("cycle-child-focus", newValue)
        break
      case "onCycleHandleFocus":
        this.setHandler("cycle-handle-focus", newValue)
        break
      case "onMoveHandle":
        this.setHandler("move-handle", newValue)
        break
      case "onToggleHandleFocus":
        this.setHandler("toggle-handle-focus", newValue)
        break
      case "onNotifyEndChild":
        this.setHandler("notify::endChild", newValue)
        break
      case "onNotifyMaxPosition":
        this.setHandler("notify::maxPosition", newValue)
        break
      case "onNotifyMinPosition":
        this.setHandler("notify::minPosition", newValue)
        break
      case "onNotifyPosition":
        this.setHandler("notify::position", newValue)
        break
      case "onNotifyPositionSet":
        this.setHandler("notify::positionSet", newValue)
        break
      case "onNotifyResizeEndChild":
        this.setHandler("notify::resizeEndChild", newValue)
        break
      case "onNotifyResizeStartChild":
        this.setHandler("notify::resizeStartChild", newValue)
        break
      case "onNotifyShrinkEndChild":
        this.setHandler("notify::shrinkEndChild", newValue)
        break
      case "onNotifyShrinkStartChild":
        this.setHandler("notify::shrinkStartChild", newValue)
        break
      case "onNotifyStartChild":
        this.setHandler("notify::startChild", newValue)
        break
      case "onNotifyWideHandle":
        this.setHandler("notify::wideHandle", newValue)
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
