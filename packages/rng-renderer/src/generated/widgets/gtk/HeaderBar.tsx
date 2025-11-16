import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class HeaderBar<  T extends Gtk.HeaderBar = Gtk.HeaderBar> extends Widget<T> {
  static createNode() {
    return new Gtk.HeaderBar({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "decorationLayout":
this.node.setDecorationLayout(newValue)
break
case "showTitleButtons":
this.node.setShowTitleButtons(newValue)
break
case "titleWidget":
this.node.setTitleWidget(newValue)
break
case "useNativeControls":
this.node.setUseNativeControls(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decorationLayout", newValue)
        break
      case "onNotifyShowTitleButtons":
        this.setHandler("notify::showTitleButtons", newValue)
        break
      case "onNotifyTitleWidget":
        this.setHandler("notify::titleWidget", newValue)
        break
      case "onNotifyUseNativeControls":
        this.setHandler("notify::useNativeControls", newValue)
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
