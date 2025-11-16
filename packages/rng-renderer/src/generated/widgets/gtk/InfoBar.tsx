import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class InfoBar<  T extends Gtk.InfoBar = Gtk.InfoBar> extends Widget<T> {
  static createNode() {
    return new Gtk.InfoBar({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "messageType":
this.node.setMessageType(newValue)
break
case "revealed":
this.node.setRevealed(newValue)
break
case "showCloseButton":
this.node.setShowCloseButton(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onResponse":
        this.setHandler("response", newValue)
        break
      case "onNotifyMessageType":
        this.setHandler("notify::messageType", newValue)
        break
      case "onNotifyRevealed":
        this.setHandler("notify::revealed", newValue)
        break
      case "onNotifyShowCloseButton":
        this.setHandler("notify::showCloseButton", newValue)
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
