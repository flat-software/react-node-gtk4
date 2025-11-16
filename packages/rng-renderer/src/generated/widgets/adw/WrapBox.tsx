import Adw from "@/generated/girs/node-adw-1.js"
import {Widget} from "./GtkWidget.js"

export class WrapBox<  T extends Adw.WrapBox = Adw.WrapBox> extends Widget<T> {
  static createNode() {
    return new Adw.WrapBox({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "align":
this.node.setAlign(newValue)
break
case "childSpacing":
this.node.setChildSpacing(newValue)
break
case "childSpacingUnit":
this.node.setChildSpacingUnit(newValue)
break
case "justify":
this.node.setJustify(newValue)
break
case "justifyLastLine":
this.node.setJustifyLastLine(newValue)
break
case "lineHomogeneous":
this.node.setLineHomogeneous(newValue)
break
case "lineSpacing":
this.node.setLineSpacing(newValue)
break
case "lineSpacingUnit":
this.node.setLineSpacingUnit(newValue)
break
case "naturalLineLength":
this.node.setNaturalLineLength(newValue)
break
case "naturalLineLengthUnit":
this.node.setNaturalLineLengthUnit(newValue)
break
case "packDirection":
this.node.setPackDirection(newValue)
break
case "wrapPolicy":
this.node.setWrapPolicy(newValue)
break
case "wrapReverse":
this.node.setWrapReverse(newValue)
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
      case "onNotifyAlign":
        this.setHandler("notify::align", newValue)
        break
      case "onNotifyChildSpacing":
        this.setHandler("notify::childSpacing", newValue)
        break
      case "onNotifyChildSpacingUnit":
        this.setHandler("notify::childSpacingUnit", newValue)
        break
      case "onNotifyJustify":
        this.setHandler("notify::justify", newValue)
        break
      case "onNotifyJustifyLastLine":
        this.setHandler("notify::justifyLastLine", newValue)
        break
      case "onNotifyLineHomogeneous":
        this.setHandler("notify::lineHomogeneous", newValue)
        break
      case "onNotifyLineSpacing":
        this.setHandler("notify::lineSpacing", newValue)
        break
      case "onNotifyLineSpacingUnit":
        this.setHandler("notify::lineSpacingUnit", newValue)
        break
      case "onNotifyNaturalLineLength":
        this.setHandler("notify::naturalLineLength", newValue)
        break
      case "onNotifyNaturalLineLengthUnit":
        this.setHandler("notify::naturalLineLengthUnit", newValue)
        break
      case "onNotifyPackDirection":
        this.setHandler("notify::packDirection", newValue)
        break
      case "onNotifyWrapPolicy":
        this.setHandler("notify::wrapPolicy", newValue)
        break
      case "onNotifyWrapReverse":
        this.setHandler("notify::wrapReverse", newValue)
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
