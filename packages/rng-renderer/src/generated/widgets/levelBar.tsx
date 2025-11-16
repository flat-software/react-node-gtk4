import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class LevelBar<T extends Gtk.LevelBar = Gtk.LevelBar> extends Widget<T> {
  static createNode() {
    return new Gtk.LevelBar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "inverted":
        this.node.setInverted(newValue);
        break;
      case "maxValue":
        this.node.setMaxValue(newValue);
        break;
      case "minValue":
        this.node.setMinValue(newValue);
        break;
      case "mode":
        this.node.setMode(newValue);
        break;
      case "value":
        this.node.setValue(newValue);
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
      case "onOffsetChanged":
        this.setHandler("offset-changed", newValue);
        break;
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue);
        break;
      case "onNotifyMaxValue":
        this.setHandler("notify::maxValue", newValue);
        break;
      case "onNotifyMinValue":
        this.setHandler("notify::minValue", newValue);
        break;
      case "onNotifyMode":
        this.setHandler("notify::mode", newValue);
        break;
      case "onNotifyValue":
        this.setHandler("notify::value", newValue);
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
