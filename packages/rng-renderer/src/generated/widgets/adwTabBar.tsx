import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwTabBar<T extends Adw.TabBar = Adw.TabBar> extends Widget<T> {
  static createNode() {
    return new Adw.TabBar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "autohide":
        this.node.setAutohide(newValue);
        break;
      case "endActionWidget":
        this.node.setEndActionWidget(newValue);
        break;
      case "expandTabs":
        this.node.setExpandTabs(newValue);
        break;
      case "extraDragPreload":
        this.node.setExtraDragPreload(newValue);
        break;
      case "inverted":
        this.node.setInverted(newValue);
        break;
      case "startActionWidget":
        this.node.setStartActionWidget(newValue);
        break;
      case "view":
        this.node.setView(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onExtraDragDrop":
        this.setHandler("extra-drag-drop", newValue);
        break;
      case "onExtraDragValue":
        this.setHandler("extra-drag-value", newValue);
        break;
      case "onNotifyAutohide":
        this.setHandler("notify::autohide", newValue);
        break;
      case "onNotifyEndActionWidget":
        this.setHandler("notify::endActionWidget", newValue);
        break;
      case "onNotifyExpandTabs":
        this.setHandler("notify::expandTabs", newValue);
        break;
      case "onNotifyExtraDragPreferredAction":
        this.setHandler("notify::extraDragPreferredAction", newValue);
        break;
      case "onNotifyExtraDragPreload":
        this.setHandler("notify::extraDragPreload", newValue);
        break;
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue);
        break;
      case "onNotifyIsOverflowing":
        this.setHandler("notify::isOverflowing", newValue);
        break;
      case "onNotifyStartActionWidget":
        this.setHandler("notify::startActionWidget", newValue);
        break;
      case "onNotifyTabsRevealed":
        this.setHandler("notify::tabsRevealed", newValue);
        break;
      case "onNotifyView":
        this.setHandler("notify::view", newValue);
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
