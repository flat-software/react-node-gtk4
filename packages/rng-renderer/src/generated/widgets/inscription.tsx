import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Inscription<
  T extends Gtk.Inscription = Gtk.Inscription,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Inscription({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "attributes":
        this.node.setAttributes(newValue);
        break;
      case "markup":
        this.node.setMarkup(newValue);
        break;
      case "minChars":
        this.node.setMinChars(newValue);
        break;
      case "minLines":
        this.node.setMinLines(newValue);
        break;
      case "natChars":
        this.node.setNatChars(newValue);
        break;
      case "natLines":
        this.node.setNatLines(newValue);
        break;
      case "text":
        this.node.setText(newValue);
        break;
      case "textOverflow":
        this.node.setTextOverflow(newValue);
        break;
      case "wrapMode":
        this.node.setWrapMode(newValue);
        break;
      case "xalign":
        this.node.setXalign(newValue);
        break;
      case "yalign":
        this.node.setYalign(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue);
        break;
      case "onNotifyMarkup":
        this.setHandler("notify::markup", newValue);
        break;
      case "onNotifyMinChars":
        this.setHandler("notify::minChars", newValue);
        break;
      case "onNotifyMinLines":
        this.setHandler("notify::minLines", newValue);
        break;
      case "onNotifyNatChars":
        this.setHandler("notify::natChars", newValue);
        break;
      case "onNotifyNatLines":
        this.setHandler("notify::natLines", newValue);
        break;
      case "onNotifyText":
        this.setHandler("notify::text", newValue);
        break;
      case "onNotifyTextOverflow":
        this.setHandler("notify::textOverflow", newValue);
        break;
      case "onNotifyWrapMode":
        this.setHandler("notify::wrapMode", newValue);
        break;
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue);
        break;
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
