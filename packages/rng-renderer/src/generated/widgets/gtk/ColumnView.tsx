import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class ColumnView<  T extends Gtk.ColumnView = Gtk.ColumnView> extends Widget<T> {
  static createNode() {
    return new Gtk.ColumnView({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "enableRubberband":
this.node.setEnableRubberband(newValue)
break
case "headerFactory":
this.node.setHeaderFactory(newValue)
break
case "model":
this.node.setModel(newValue)
break
case "reorderable":
this.node.setReorderable(newValue)
break
case "rowFactory":
this.node.setRowFactory(newValue)
break
case "showColumnSeparators":
this.node.setShowColumnSeparators(newValue)
break
case "showRowSeparators":
this.node.setShowRowSeparators(newValue)
break
case "singleClickActivate":
this.node.setSingleClickActivate(newValue)
break
case "tabBehavior":
this.node.setTabBehavior(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "hadjustment":
this.node.setHadjustment(newValue)
break
case "hscrollPolicy":
this.node.setHscrollPolicy(newValue)
break
case "vadjustment":
this.node.setVadjustment(newValue)
break
case "vscrollPolicy":
this.node.setVscrollPolicy(newValue)
break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyColumns":
        this.setHandler("notify::columns", newValue)
        break
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enableRubberband", newValue)
        break
      case "onNotifyHeaderFactory":
        this.setHandler("notify::headerFactory", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyReorderable":
        this.setHandler("notify::reorderable", newValue)
        break
      case "onNotifyRowFactory":
        this.setHandler("notify::rowFactory", newValue)
        break
      case "onNotifyShowColumnSeparators":
        this.setHandler("notify::showColumnSeparators", newValue)
        break
      case "onNotifyShowRowSeparators":
        this.setHandler("notify::showRowSeparators", newValue)
        break
      case "onNotifySingleClickActivate":
        this.setHandler("notify::singleClickActivate", newValue)
        break
      case "onNotifySorter":
        this.setHandler("notify::sorter", newValue)
        break
      case "onNotifyTabBehavior":
        this.setHandler("notify::tabBehavior", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
