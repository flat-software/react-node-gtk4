import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"

export class Spinner<  T extends Adw.Spinner = Adw.Spinner> extends Widget<T> {
  static createNode() {
    return new Adw.Spinner({
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
