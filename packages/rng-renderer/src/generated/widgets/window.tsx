import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Window<T extends Gtk.Window = Gtk.Window> extends Widget<T> {
  static createNode() {
    return new Gtk.Window({});
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
      case "application":
        this.node.setApplication(newValue);
        break;
      case "decorated":
        this.node.setDecorated(newValue);
        break;
      case "defaultHeight":
        this.node.defaultHeight = newValue;
        break;
      case "defaultWidget":
        this.node.setDefaultWidget(newValue);
        break;
      case "defaultWidth":
        this.node.defaultWidth = newValue;
        break;
      case "deletable":
        this.node.setDeletable(newValue);
        break;
      case "destroyWithParent":
        this.node.setDestroyWithParent(newValue);
        break;
      case "display":
        this.node.setDisplay(newValue);
        break;
      case "focusVisible":
        this.node.setFocusVisible(newValue);
        break;
      case "focusWidget":
        this.node.setFocus(newValue);
        break;
      case "fullscreened":
        this.node.fullscreened = newValue;
        break;
      case "gravity":
        this.node.setGravity(newValue);
        break;
      case "handleMenubarAccel":
        this.node.setHandleMenubarAccel(newValue);
        break;
      case "hideOnClose":
        this.node.setHideOnClose(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "maximized":
        this.node.maximized = newValue;
        break;
      case "mnemonicsVisible":
        this.node.setMnemonicsVisible(newValue);
        break;
      case "modal":
        this.node.setModal(newValue);
        break;
      case "resizable":
        this.node.setResizable(newValue);
        break;
      case "startupId":
        this.node.setStartupId(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "titlebar":
        this.node.setTitlebar(newValue);
        break;
      case "transientFor":
        this.node.setTransientFor(newValue);
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
      case "onActivateFocus":
        this.setHandler("activate-focus", newValue);
        break;
      case "onCloseRequest":
        this.setHandler("close-request", newValue);
        break;
      case "onEnableDebugging":
        this.setHandler("enable-debugging", newValue);
        break;
      case "onKeysChanged":
        this.setHandler("keys-changed", newValue);
        break;
      case "onNotifyApplication":
        this.setHandler("notify::application", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyDecorated":
        this.setHandler("notify::decorated", newValue);
        break;
      case "onNotifyDefaultHeight":
        this.setHandler("notify::defaultHeight", newValue);
        break;
      case "onNotifyDefaultWidget":
        this.setHandler("notify::defaultWidget", newValue);
        break;
      case "onNotifyDefaultWidth":
        this.setHandler("notify::defaultWidth", newValue);
        break;
      case "onNotifyDeletable":
        this.setHandler("notify::deletable", newValue);
        break;
      case "onNotifyDestroyWithParent":
        this.setHandler("notify::destroyWithParent", newValue);
        break;
      case "onNotifyDisplay":
        this.setHandler("notify::display", newValue);
        break;
      case "onNotifyFocusVisible":
        this.setHandler("notify::focusVisible", newValue);
        break;
      case "onNotifyFocusWidget":
        this.setHandler("notify::focusWidget", newValue);
        break;
      case "onNotifyFullscreened":
        this.setHandler("notify::fullscreened", newValue);
        break;
      case "onNotifyGravity":
        this.setHandler("notify::gravity", newValue);
        break;
      case "onNotifyHandleMenubarAccel":
        this.setHandler("notify::handleMenubarAccel", newValue);
        break;
      case "onNotifyHideOnClose":
        this.setHandler("notify::hideOnClose", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyIsActive":
        this.setHandler("notify::isActive", newValue);
        break;
      case "onNotifyMaximized":
        this.setHandler("notify::maximized", newValue);
        break;
      case "onNotifyMnemonicsVisible":
        this.setHandler("notify::mnemonicsVisible", newValue);
        break;
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue);
        break;
      case "onNotifyResizable":
        this.setHandler("notify::resizable", newValue);
        break;
      case "onNotifyStartupId":
        this.setHandler("notify::startupId", newValue);
        break;
      case "onNotifySuspended":
        this.setHandler("notify::suspended", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
        break;
      case "onNotifyTitlebar":
        this.setHandler("notify::titlebar", newValue);
        break;
      case "onNotifyTransientFor":
        this.setHandler("notify::transientFor", newValue);
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
