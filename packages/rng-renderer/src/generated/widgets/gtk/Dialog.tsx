import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Window} from "./GtkWindow.js"

export class Dialog<  T extends Gtk.Dialog = Gtk.Dialog> extends Window<T> {
  static createNode() {
    return new Gtk.Dialog({
  })
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
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onResponse":
        this.setHandler("response", newValue)
        break
      case "onNotifyUseHeaderBar":
        this.setHandler("notify::useHeaderBar", newValue)
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
