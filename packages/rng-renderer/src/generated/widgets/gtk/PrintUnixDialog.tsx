import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Dialog} from "./GtkDialog.js"

export class PrintUnixDialog<  T extends Gtk.PrintUnixDialog = Gtk.PrintUnixDialog> extends Dialog<T> {
  static createNode() {
    return new Gtk.PrintUnixDialog({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "currentPage":
this.node.setCurrentPage(newValue)
break
case "embedPageSetup":
this.node.setEmbedPageSetup(newValue)
break
case "hasSelection":
this.node.setHasSelection(newValue)
break
case "manualCapabilities":
this.node.setManualCapabilities(newValue)
break
case "pageSetup":
this.node.setPageSetup(newValue)
break
case "printSettings":
this.node.setSettings(newValue)
break
case "supportSelection":
this.node.setSupportSelection(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onNotifyCurrentPage":
        this.setHandler("notify::currentPage", newValue)
        break
      case "onNotifyEmbedPageSetup":
        this.setHandler("notify::embedPageSetup", newValue)
        break
      case "onNotifyHasSelection":
        this.setHandler("notify::hasSelection", newValue)
        break
      case "onNotifyManualCapabilities":
        this.setHandler("notify::manualCapabilities", newValue)
        break
      case "onNotifyPageSetup":
        this.setHandler("notify::pageSetup", newValue)
        break
      case "onNotifyPrintSettings":
        this.setHandler("notify::printSettings", newValue)
        break
      case "onNotifySelectedPrinter":
        this.setHandler("notify::selectedPrinter", newValue)
        break
      case "onNotifySupportSelection":
        this.setHandler("notify::supportSelection", newValue)
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
