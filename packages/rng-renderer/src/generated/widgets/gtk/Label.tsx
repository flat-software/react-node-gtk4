import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class Label<  T extends Gtk.Label = Gtk.Label> extends Widget<T> {
  static createNode() {
    return new Gtk.Label({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "attributes":
this.node.setAttributes(newValue)
break
case "ellipsize":
this.node.setEllipsize(newValue)
break
case "extraMenu":
this.node.setExtraMenu(newValue)
break
case "justify":
this.node.setJustify(newValue)
break
case "label":
this.node.setLabel(newValue)
break
case "lines":
this.node.setLines(newValue)
break
case "maxWidthChars":
this.node.setMaxWidthChars(newValue)
break
case "mnemonicWidget":
this.node.setMnemonicWidget(newValue)
break
case "naturalWrapMode":
this.node.setNaturalWrapMode(newValue)
break
case "selectable":
this.node.setSelectable(newValue)
break
case "singleLineMode":
this.node.setSingleLineMode(newValue)
break
case "tabs":
this.node.setTabs(newValue)
break
case "useMarkup":
this.node.setUseMarkup(newValue)
break
case "useUnderline":
this.node.setUseUnderline(newValue)
break
case "widthChars":
this.node.setWidthChars(newValue)
break
case "wrap":
this.node.setWrap(newValue)
break
case "wrapMode":
this.node.setWrapMode(newValue)
break
case "xalign":
this.node.setXalign(newValue)
break
case "yalign":
this.node.setYalign(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
      case "onActivateCurrentLink":
        this.setHandler("activate-current-link", newValue)
        break
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
        break
      case "onCopyClipboard":
        this.setHandler("copy-clipboard", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyEllipsize":
        this.setHandler("notify::ellipsize", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extraMenu", newValue)
        break
      case "onNotifyJustify":
        this.setHandler("notify::justify", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyLines":
        this.setHandler("notify::lines", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::maxWidthChars", newValue)
        break
      case "onNotifyMnemonicKeyval":
        this.setHandler("notify::mnemonicKeyval", newValue)
        break
      case "onNotifyMnemonicWidget":
        this.setHandler("notify::mnemonicWidget", newValue)
        break
      case "onNotifyNaturalWrapMode":
        this.setHandler("notify::naturalWrapMode", newValue)
        break
      case "onNotifySelectable":
        this.setHandler("notify::selectable", newValue)
        break
      case "onNotifySingleLineMode":
        this.setHandler("notify::singleLineMode", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
        break
      case "onNotifyUseMarkup":
        this.setHandler("notify::useMarkup", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::useUnderline", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::widthChars", newValue)
        break
      case "onNotifyWrap":
        this.setHandler("notify::wrap", newValue)
        break
      case "onNotifyWrapMode":
        this.setHandler("notify::wrapMode", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue)
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
