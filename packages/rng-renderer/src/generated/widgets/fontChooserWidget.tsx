import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class FontChooserWidget<
  T extends Gtk.FontChooserWidget = Gtk.FontChooserWidget,
> extends Widget<T> {
  static createNode() {
    return new Gtk.FontChooserWidget({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "font":
        this.node.setFont(newValue);
        break;
      case "fontDesc":
        this.node.setFontDesc(newValue);
        break;
      case "language":
        this.node.setLanguage(newValue);
        break;
      case "level":
        this.node.setLevel(newValue);
        break;
      case "previewText":
        this.node.setPreviewText(newValue);
        break;
      case "showPreviewEntry":
        this.node.setShowPreviewEntry(newValue);
        break;
      case "onFontActivated":
        this.setHandler("font-activated", newValue);
        break;
      case "onNotifyTweakAction":
        this.setHandler("notify::tweakAction", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyFont":
        this.setHandler("notify::font", newValue);
        break;
      case "onNotifyFontDesc":
        this.setHandler("notify::fontDesc", newValue);
        break;
      case "onNotifyFontFeatures":
        this.setHandler("notify::fontFeatures", newValue);
        break;
      case "onNotifyLanguage":
        this.setHandler("notify::language", newValue);
        break;
      case "onNotifyLevel":
        this.setHandler("notify::level", newValue);
        break;
      case "onNotifyPreviewText":
        this.setHandler("notify::previewText", newValue);
        break;
      case "onNotifyShowPreviewEntry":
        this.setHandler("notify::showPreviewEntry", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
