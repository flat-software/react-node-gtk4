import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class FlowBox<T extends Gtk.FlowBox = Gtk.FlowBox> extends Widget<T> {
  static createNode() {
    return new Gtk.FlowBox({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "acceptUnpairedRelease":
        this.node.acceptUnpairedRelease = newValue;
        break;
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue);
        break;
      case "columnSpacing":
        this.node.setColumnSpacing(newValue);
        break;
      case "homogeneous":
        this.node.setHomogeneous(newValue);
        break;
      case "maxChildrenPerLine":
        this.node.setMaxChildrenPerLine(newValue);
        break;
      case "minChildrenPerLine":
        this.node.setMinChildrenPerLine(newValue);
        break;
      case "rowSpacing":
        this.node.setRowSpacing(newValue);
        break;
      case "selectionMode":
        this.node.setSelectionMode(newValue);
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
      case "onActivateCursorChild":
        this.setHandler("activate-cursor-child", newValue);
        break;
      case "onChildActivated":
        this.setHandler("child-activated", newValue);
        break;
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue);
        break;
      case "onSelectAll":
        this.setHandler("select-all", newValue);
        break;
      case "onSelectedChildrenChanged":
        this.setHandler("selected-children-changed", newValue);
        break;
      case "onToggleCursorChild":
        this.setHandler("toggle-cursor-child", newValue);
        break;
      case "onUnselectAll":
        this.setHandler("unselect-all", newValue);
        break;
      case "onNotifyAcceptUnpairedRelease":
        this.setHandler("notify::acceptUnpairedRelease", newValue);
        break;
      case "onNotifyActivateOnSingleClick":
        this.setHandler("notify::activateOnSingleClick", newValue);
        break;
      case "onNotifyColumnSpacing":
        this.setHandler("notify::columnSpacing", newValue);
        break;
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue);
        break;
      case "onNotifyMaxChildrenPerLine":
        this.setHandler("notify::maxChildrenPerLine", newValue);
        break;
      case "onNotifyMinChildrenPerLine":
        this.setHandler("notify::minChildrenPerLine", newValue);
        break;
      case "onNotifyRowSpacing":
        this.setHandler("notify::rowSpacing", newValue);
        break;
      case "onNotifySelectionMode":
        this.setHandler("notify::selectionMode", newValue);
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
