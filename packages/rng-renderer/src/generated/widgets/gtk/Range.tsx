import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class Range<  T extends Gtk.Range = Gtk.Range> extends Widget<T> {
  static createNode() {
    return new Gtk.Range({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "adjustment":
this.node.setAdjustment(newValue)
break
case "fillLevel":
this.node.setFillLevel(newValue)
break
case "inverted":
this.node.setInverted(newValue)
break
case "restrictToFillLevel":
this.node.setRestrictToFillLevel(newValue)
break
case "roundDigits":
this.node.setRoundDigits(newValue)
break
case "showFillLevel":
this.node.setShowFillLevel(newValue)
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
      case "onAdjustBounds":
        this.setHandler("adjust-bounds", newValue)
        break
      case "onChangeValue":
        this.setHandler("change-value", newValue)
        break
      case "onMoveSlider":
        this.setHandler("move-slider", newValue)
        break
      case "onValueChanged":
        this.setHandler("value-changed", newValue)
        break
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyFillLevel":
        this.setHandler("notify::fillLevel", newValue)
        break
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue)
        break
      case "onNotifyRestrictToFillLevel":
        this.setHandler("notify::restrictToFillLevel", newValue)
        break
      case "onNotifyRoundDigits":
        this.setHandler("notify::roundDigits", newValue)
        break
      case "onNotifyShowFillLevel":
        this.setHandler("notify::showFillLevel", newValue)
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
