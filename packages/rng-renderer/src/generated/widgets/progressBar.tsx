import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class ProgressBar<
  T extends Gtk.ProgressBar = Gtk.ProgressBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ProgressBar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "ellipsize":
        this.node.setEllipsize(newValue);
        break;
      case "fraction":
        this.node.setFraction(newValue);
        break;
      case "inverted":
        this.node.setInverted(newValue);
        break;
      case "pulseStep":
        this.node.setPulseStep(newValue);
        break;
      case "showText":
        this.node.setShowText(newValue);
        break;
      case "text":
        this.node.setText(newValue);
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
      case "onNotifyEllipsize":
        this.setHandler("notify::ellipsize", newValue);
        break;
      case "onNotifyFraction":
        this.setHandler("notify::fraction", newValue);
        break;
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue);
        break;
      case "onNotifyPulseStep":
        this.setHandler("notify::pulseStep", newValue);
        break;
      case "onNotifyShowText":
        this.setHandler("notify::showText", newValue);
        break;
      case "onNotifyText":
        this.setHandler("notify::text", newValue);
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
