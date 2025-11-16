import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class TabView<T extends Adw.TabView = Adw.TabView> extends Widget<T> {
  static createNode() {
    return new Adw.TabView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "defaultIcon":
        this.node.setDefaultIcon(newValue);
        break;
      case "menuModel":
        this.node.setMenuModel(newValue);
        break;
      case "selectedPage":
        this.node.setSelectedPage(newValue);
        break;
      case "shortcuts":
        this.node.setShortcuts(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onClosePage":
        this.setHandler("close-page", newValue);
        break;
      case "onCreateWindow":
        this.setHandler("create-window", newValue);
        break;
      case "onIndicatorActivated":
        this.setHandler("indicator-activated", newValue);
        break;
      case "onPageAttached":
        this.setHandler("page-attached", newValue);
        break;
      case "onPageDetached":
        this.setHandler("page-detached", newValue);
        break;
      case "onPageReordered":
        this.setHandler("page-reordered", newValue);
        break;
      case "onSetupMenu":
        this.setHandler("setup-menu", newValue);
        break;
      case "onNotifyDefaultIcon":
        this.setHandler("notify::defaultIcon", newValue);
        break;
      case "onNotifyIsTransferringPage":
        this.setHandler("notify::isTransferringPage", newValue);
        break;
      case "onNotifyMenuModel":
        this.setHandler("notify::menuModel", newValue);
        break;
      case "onNotifyNPages":
        this.setHandler("notify::nPages", newValue);
        break;
      case "onNotifyNPinnedPages":
        this.setHandler("notify::nPinnedPages", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifySelectedPage":
        this.setHandler("notify::selectedPage", newValue);
        break;
      case "onNotifyShortcuts":
        this.setHandler("notify::shortcuts", newValue);
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
