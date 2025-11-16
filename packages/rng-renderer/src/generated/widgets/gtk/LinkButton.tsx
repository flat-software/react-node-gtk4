import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Button} from "./GtkButton.js"

export class LinkButton<  T extends Gtk.LinkButton = Gtk.LinkButton> extends Button<T> {
  static createNode() {
    return new Gtk.LinkButton({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "uri":
this.node.setUri(newValue)
break
case "visited":
this.node.setVisited(newValue)
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
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
        break
      case "onNotifyUri":
        this.setHandler("notify::uri", newValue)
        break
      case "onNotifyVisited":
        this.setHandler("notify::visited", newValue)
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
