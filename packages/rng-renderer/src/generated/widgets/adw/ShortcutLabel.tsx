import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"

export class ShortcutLabel<  T extends Adw.ShortcutLabel = Adw.ShortcutLabel> extends Widget<T> {
  static createNode() {
    return new Adw.ShortcutLabel({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "accelerator":
this.node.setAccelerator(newValue)
break
case "disabledText":
this.node.setDisabledText(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyAccelerator":
        this.setHandler("notify::accelerator", newValue)
        break
      case "onNotifyDisabledText":
        this.setHandler("notify::disabledText", newValue)
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
