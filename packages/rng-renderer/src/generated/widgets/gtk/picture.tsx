import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Picture<T extends Gtk.Picture = Gtk.Picture> extends Widget<T> {
  static createNode() {
    return new Gtk.Picture({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "alternativeText":
        this.node.setAlternativeText(newValue);
        break;
      case "canShrink":
        this.node.setCanShrink(newValue);
        break;
      case "contentFit":
        this.node.setContentFit(newValue);
        break;
      case "file":
        this.node.setFile(newValue);
        break;
      case "keepAspectRatio":
        this.node.setKeepAspectRatio(newValue);
        break;
      case "paintable":
        this.node.setPaintable(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyAlternativeText":
        this.setHandler("notify::alternativeText", newValue);
        break;
      case "onNotifyCanShrink":
        this.setHandler("notify::canShrink", newValue);
        break;
      case "onNotifyContentFit":
        this.setHandler("notify::contentFit", newValue);
        break;
      case "onNotifyFile":
        this.setHandler("notify::file", newValue);
        break;
      case "onNotifyKeepAspectRatio":
        this.setHandler("notify::keepAspectRatio", newValue);
        break;
      case "onNotifyPaintable":
        this.setHandler("notify::paintable", newValue);
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
