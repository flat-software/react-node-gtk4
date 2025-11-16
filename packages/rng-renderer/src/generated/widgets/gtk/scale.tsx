import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Range} from "./range.js";

export class Scale<T extends Gtk.Scale = Gtk.Scale> extends Range<T> {
  static createNode() {
    return new Gtk.Scale({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "digits":
        this.node.setDigits(newValue);
        break;
      case "drawValue":
        this.node.setDrawValue(newValue);
        break;
      case "hasOrigin":
        this.node.setHasOrigin(newValue);
        break;
      case "valuePos":
        this.node.setValuePos(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "orientation":
        this.node.setOrientation(newValue);
        break;
      case "onNotifyDigits":
        this.setHandler("notify::digits", newValue);
        break;
      case "onNotifyDrawValue":
        this.setHandler("notify::drawValue", newValue);
        break;
      case "onNotifyHasOrigin":
        this.setHandler("notify::hasOrigin", newValue);
        break;
      case "onNotifyValuePos":
        this.setHandler("notify::valuePos", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
