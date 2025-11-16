import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Image<T extends Gtk.Image = Gtk.Image> extends Widget<T> {
  static createNode() {
    return new Gtk.Image({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "file":
        this.node.file = newValue;
        break;
      case "gicon":
        this.node.setFromGicon(newValue);
        break;
      case "iconName":
        this.node.setFromIconName(newValue);
        break;
      case "iconSize":
        this.node.setIconSize(newValue);
        break;
      case "paintable":
        this.node.setFromPaintable(newValue);
        break;
      case "pixelSize":
        this.node.setPixelSize(newValue);
        break;
      case "resource":
        this.node.resource = newValue;
        break;
      case "useFallback":
        this.node.useFallback = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyFile":
        this.setHandler("notify::file", newValue);
        break;
      case "onNotifyGicon":
        this.setHandler("notify::gicon", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyIconSize":
        this.setHandler("notify::iconSize", newValue);
        break;
      case "onNotifyPaintable":
        this.setHandler("notify::paintable", newValue);
        break;
      case "onNotifyPixelSize":
        this.setHandler("notify::pixelSize", newValue);
        break;
      case "onNotifyResource":
        this.setHandler("notify::resource", newValue);
        break;
      case "onNotifyStorageType":
        this.setHandler("notify::storageType", newValue);
        break;
      case "onNotifyUseFallback":
        this.setHandler("notify::useFallback", newValue);
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
