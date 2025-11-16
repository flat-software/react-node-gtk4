import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class CenterBox<
  T extends Gtk.CenterBox = Gtk.CenterBox,
> extends Widget<T> {
  static createNode() {
    return new Gtk.CenterBox({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "baselinePosition":
        this.node.setBaselinePosition(newValue);
        break;
      case "centerWidget":
        this.node.setCenterWidget(newValue);
        break;
      case "endWidget":
        this.node.setEndWidget(newValue);
        break;
      case "shrinkCenterLast":
        this.node.setShrinkCenterLast(newValue);
        break;
      case "startWidget":
        this.node.setStartWidget(newValue);
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
      case "onNotifyBaselinePosition":
        this.setHandler("notify::baselinePosition", newValue);
        break;
      case "onNotifyCenterWidget":
        this.setHandler("notify::centerWidget", newValue);
        break;
      case "onNotifyEndWidget":
        this.setHandler("notify::endWidget", newValue);
        break;
      case "onNotifyShrinkCenterLast":
        this.setHandler("notify::shrinkCenterLast", newValue);
        break;
      case "onNotifyStartWidget":
        this.setHandler("notify::startWidget", newValue);
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
