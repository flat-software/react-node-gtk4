import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class WindowControls<  T extends Gtk.WindowControls = Gtk.WindowControls> extends Widget<T> {
  static createNode() {
    return new Gtk.WindowControls({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "decorationLayout":
this.node.setDecorationLayout(newValue)
break
case "side":
this.node.setSide(newValue)
break
case "useNativeControls":
this.node.setUseNativeControls(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decorationLayout", newValue)
        break
      case "onNotifyEmpty":
        this.setHandler("notify::empty", newValue)
        break
      case "onNotifySide":
        this.setHandler("notify::side", newValue)
        break
      case "onNotifyUseNativeControls":
        this.setHandler("notify::useNativeControls", newValue)
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
