import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class AppChooserButton<  T extends Gtk.AppChooserButton = Gtk.AppChooserButton> extends Widget<T> {
  static createNode() {
    return new Gtk.AppChooserButton({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "heading":
this.node.setHeading(newValue)
break
case "modal":
this.node.setModal(newValue)
break
case "showDefaultItem":
this.node.setShowDefaultItem(newValue)
break
case "showDialogItem":
this.node.setShowDialogItem(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onCustomItemActivated":
        this.setHandler("custom-item-activated", newValue)
        break
      case "onNotifyHeading":
        this.setHandler("notify::heading", newValue)
        break
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue)
        break
      case "onNotifyShowDefaultItem":
        this.setHandler("notify::showDefaultItem", newValue)
        break
      case "onNotifyShowDialogItem":
        this.setHandler("notify::showDialogItem", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyContentType":
        this.setHandler("notify::contentType", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
