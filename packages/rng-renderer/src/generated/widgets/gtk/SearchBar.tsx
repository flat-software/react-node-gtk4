import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"
import {AbstractWidget} from "../../abstractWidget.js"

export class SearchBar<  T extends Gtk.SearchBar = Gtk.SearchBar> extends Widget<T> {
  static createNode() {
    return new Gtk.SearchBar({
  })
}
appendChild(child: AbstractWidget) {
  super.appendChild(child)
  this.node.setChild(child.node)
}
removeChild(child: AbstractWidget) {
  super.removeChild(child)
  this.node.setChild(null)
}
insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
  super.insertBefore(child, beforeChild)
  this.node.setChild(child.node)
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "keyCaptureWidget":
this.node.setKeyCaptureWidget(newValue)
break
case "searchModeEnabled":
this.node.setSearchMode(newValue)
break
case "showCloseButton":
this.node.setShowCloseButton(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyKeyCaptureWidget":
        this.setHandler("notify::keyCaptureWidget", newValue)
        break
      case "onNotifySearchModeEnabled":
        this.setHandler("notify::searchModeEnabled", newValue)
        break
      case "onNotifyShowCloseButton":
        this.setHandler("notify::showCloseButton", newValue)
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
