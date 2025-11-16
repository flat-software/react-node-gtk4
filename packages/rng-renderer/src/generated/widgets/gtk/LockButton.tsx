import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Button} from "./GtkButton.js"

export class LockButton<  T extends Gtk.LockButton = Gtk.LockButton> extends Button<T> {
  static createNode() {
    return new Gtk.LockButton({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "permission":
this.node.setPermission(newValue)
break
case "textLock":
this.node.textLock = newValue
break
case "textUnlock":
this.node.textUnlock = newValue
break
case "tooltipLock":
this.node.tooltipLock = newValue
break
case "tooltipNotAuthorized":
this.node.tooltipNotAuthorized = newValue
break
case "tooltipUnlock":
this.node.tooltipUnlock = newValue
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "actionName":
this.node.setActionName(newValue)
break
case "actionTarget":
this.node.setActionTargetValue(newValue)
break
      case "onNotifyPermission":
        this.setHandler("notify::permission", newValue)
        break
      case "onNotifyTextLock":
        this.setHandler("notify::textLock", newValue)
        break
      case "onNotifyTextUnlock":
        this.setHandler("notify::textUnlock", newValue)
        break
      case "onNotifyTooltipLock":
        this.setHandler("notify::tooltipLock", newValue)
        break
      case "onNotifyTooltipNotAuthorized":
        this.setHandler("notify::tooltipNotAuthorized", newValue)
        break
      case "onNotifyTooltipUnlock":
        this.setHandler("notify::tooltipUnlock", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::actionName", newValue)
        break
      case "onNotifyActionTarget":
        this.setHandler("notify::actionTarget", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
