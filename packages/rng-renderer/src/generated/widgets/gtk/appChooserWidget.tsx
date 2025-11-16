import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class AppChooserWidget<
  T extends Gtk.AppChooserWidget = Gtk.AppChooserWidget,
> extends Widget<T> {
  static createNode() {
    return new Gtk.AppChooserWidget({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "defaultText":
        this.node.setDefaultText(newValue);
        break;
      case "showAll":
        this.node.setShowAll(newValue);
        break;
      case "showDefault":
        this.node.setShowDefault(newValue);
        break;
      case "showFallback":
        this.node.setShowFallback(newValue);
        break;
      case "showOther":
        this.node.setShowOther(newValue);
        break;
      case "showRecommended":
        this.node.setShowRecommended(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onApplicationActivated":
        this.setHandler("application-activated", newValue);
        break;
      case "onApplicationSelected":
        this.setHandler("application-selected", newValue);
        break;
      case "onNotifyDefaultText":
        this.setHandler("notify::defaultText", newValue);
        break;
      case "onNotifyShowAll":
        this.setHandler("notify::showAll", newValue);
        break;
      case "onNotifyShowDefault":
        this.setHandler("notify::showDefault", newValue);
        break;
      case "onNotifyShowFallback":
        this.setHandler("notify::showFallback", newValue);
        break;
      case "onNotifyShowOther":
        this.setHandler("notify::showOther", newValue);
        break;
      case "onNotifyShowRecommended":
        this.setHandler("notify::showRecommended", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyContentType":
        this.setHandler("notify::contentType", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
