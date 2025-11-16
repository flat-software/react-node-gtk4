import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Popover<T extends Gtk.Popover = Gtk.Popover> extends Widget<T> {
  static createNode() {
    return new Gtk.Popover({});
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child);
    this.node.setChild(child.node);
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child);
    this.node.setChild(null);
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild);
    this.node.setChild(child.node);
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "autohide":
        this.node.setAutohide(newValue);
        break;
      case "cascadePopdown":
        this.node.setCascadePopdown(newValue);
        break;
      case "defaultWidget":
        this.node.setDefaultWidget(newValue);
        break;
      case "hasArrow":
        this.node.setHasArrow(newValue);
        break;
      case "mnemonicsVisible":
        this.node.setMnemonicsVisible(newValue);
        break;
      case "pointingTo":
        this.node.setPointingTo(newValue);
        break;
      case "position":
        this.node.setPosition(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onActivateDefault":
        this.setHandler("activate-default", newValue);
        break;
      case "onClosed":
        this.setHandler("closed", newValue);
        break;
      case "onNotifyAutohide":
        this.setHandler("notify::autohide", newValue);
        break;
      case "onNotifyCascadePopdown":
        this.setHandler("notify::cascadePopdown", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyDefaultWidget":
        this.setHandler("notify::defaultWidget", newValue);
        break;
      case "onNotifyHasArrow":
        this.setHandler("notify::hasArrow", newValue);
        break;
      case "onNotifyMnemonicsVisible":
        this.setHandler("notify::mnemonicsVisible", newValue);
        break;
      case "onNotifyPointingTo":
        this.setHandler("notify::pointingTo", newValue);
        break;
      case "onNotifyPosition":
        this.setHandler("notify::position", newValue);
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
