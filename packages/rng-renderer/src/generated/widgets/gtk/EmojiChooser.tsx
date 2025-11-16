import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Popover} from "./GtkPopover.js"

export class EmojiChooser<  T extends Gtk.EmojiChooser = Gtk.EmojiChooser> extends Popover<T> {
  static createNode() {
    return new Gtk.EmojiChooser({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onEmojiPicked":
        this.setHandler("emoji-picked", newValue)
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
