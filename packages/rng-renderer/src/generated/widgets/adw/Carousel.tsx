import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"

export class Carousel<  T extends Adw.Carousel = Adw.Carousel> extends Widget<T> {
  static createNode() {
    return new Adw.Carousel({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "allowLongSwipes":
this.node.setAllowLongSwipes(newValue)
break
case "allowMouseDrag":
this.node.setAllowMouseDrag(newValue)
break
case "allowScrollWheel":
this.node.setAllowScrollWheel(newValue)
break
case "interactive":
this.node.setInteractive(newValue)
break
case "revealDuration":
this.node.setRevealDuration(newValue)
break
case "scrollParams":
this.node.setScrollParams(newValue)
break
case "spacing":
this.node.setSpacing(newValue)
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
      case "onPageChanged":
        this.setHandler("page-changed", newValue)
        break
      case "onNotifyAllowLongSwipes":
        this.setHandler("notify::allowLongSwipes", newValue)
        break
      case "onNotifyAllowMouseDrag":
        this.setHandler("notify::allowMouseDrag", newValue)
        break
      case "onNotifyAllowScrollWheel":
        this.setHandler("notify::allowScrollWheel", newValue)
        break
      case "onNotifyInteractive":
        this.setHandler("notify::interactive", newValue)
        break
      case "onNotifyNPages":
        this.setHandler("notify::nPages", newValue)
        break
      case "onNotifyPosition":
        this.setHandler("notify::position", newValue)
        break
      case "onNotifyRevealDuration":
        this.setHandler("notify::revealDuration", newValue)
        break
      case "onNotifyScrollParams":
        this.setHandler("notify::scrollParams", newValue)
        break
      case "onNotifySpacing":
        this.setHandler("notify::spacing", newValue)
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
