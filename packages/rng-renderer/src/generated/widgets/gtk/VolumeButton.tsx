import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {ScaleButton} from "./GtkScaleButton.js"

export class VolumeButton<  T extends Gtk.VolumeButton = Gtk.VolumeButton> extends ScaleButton<T> {
  static createNode() {
    return new Gtk.VolumeButton({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "useSymbolic":
this.node.useSymbolic = newValue
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
      case "onNotifyUseSymbolic":
        this.setHandler("notify::useSymbolic", newValue)
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
