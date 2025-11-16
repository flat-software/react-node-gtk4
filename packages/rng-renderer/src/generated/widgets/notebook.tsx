import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Notebook<T extends Gtk.Notebook = Gtk.Notebook> extends Widget<T> {
  static createNode() {
    return new Gtk.Notebook({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "enablePopup":
        this.node.enablePopup = newValue;
        break;
      case "groupName":
        this.node.setGroupName(newValue);
        break;
      case "page":
        this.node.setCurrentPage(newValue);
        break;
      case "scrollable":
        this.node.setScrollable(newValue);
        break;
      case "showBorder":
        this.node.setShowBorder(newValue);
        break;
      case "showTabs":
        this.node.setShowTabs(newValue);
        break;
      case "tabPos":
        this.node.setTabPos(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onChangeCurrentPage":
        this.setHandler("change-current-page", newValue);
        break;
      case "onCreateWindow":
        this.setHandler("create-window", newValue);
        break;
      case "onFocusTab":
        this.setHandler("focus-tab", newValue);
        break;
      case "onMoveFocusOut":
        this.setHandler("move-focus-out", newValue);
        break;
      case "onPageAdded":
        this.setHandler("page-added", newValue);
        break;
      case "onPageRemoved":
        this.setHandler("page-removed", newValue);
        break;
      case "onPageReordered":
        this.setHandler("page-reordered", newValue);
        break;
      case "onReorderTab":
        this.setHandler("reorder-tab", newValue);
        break;
      case "onSelectPage":
        this.setHandler("select-page", newValue);
        break;
      case "onSwitchPage":
        this.setHandler("switch-page", newValue);
        break;
      case "onNotifyEnablePopup":
        this.setHandler("notify::enablePopup", newValue);
        break;
      case "onNotifyGroupName":
        this.setHandler("notify::groupName", newValue);
        break;
      case "onNotifyPage":
        this.setHandler("notify::page", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifyScrollable":
        this.setHandler("notify::scrollable", newValue);
        break;
      case "onNotifyShowBorder":
        this.setHandler("notify::showBorder", newValue);
        break;
      case "onNotifyShowTabs":
        this.setHandler("notify::showTabs", newValue);
        break;
      case "onNotifyTabPos":
        this.setHandler("notify::tabPos", newValue);
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
