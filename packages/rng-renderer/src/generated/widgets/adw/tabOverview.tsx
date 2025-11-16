import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class TabOverview<
  T extends Adw.TabOverview = Adw.TabOverview,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.TabOverview({});
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
      case "enableNewTab":
        this.node.setEnableNewTab(newValue);
        break;
      case "enableSearch":
        this.node.setEnableSearch(newValue);
        break;
      case "extraDragPreload":
        this.node.setExtraDragPreload(newValue);
        break;
      case "inverted":
        this.node.setInverted(newValue);
        break;
      case "open":
        this.node.setOpen(newValue);
        break;
      case "secondaryMenu":
        this.node.setSecondaryMenu(newValue);
        break;
      case "showEndTitleButtons":
        this.node.setShowEndTitleButtons(newValue);
        break;
      case "showStartTitleButtons":
        this.node.setShowStartTitleButtons(newValue);
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
      case "onCreateTab":
        this.setHandler("create-tab", newValue);
        break;
      case "onExtraDragDrop":
        this.setHandler("extra-drag-drop", newValue);
        break;
      case "onExtraDragValue":
        this.setHandler("extra-drag-value", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyEnableNewTab":
        this.setHandler("notify::enableNewTab", newValue);
        break;
      case "onNotifyEnableSearch":
        this.setHandler("notify::enableSearch", newValue);
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
      case "onNotifyOpen":
        this.setHandler("notify::open", newValue);
        break;
      case "onNotifySearchActive":
        this.setHandler("notify::searchActive", newValue);
        break;
      case "onNotifySecondaryMenu":
        this.setHandler("notify::secondaryMenu", newValue);
        break;
      case "onNotifyShowEndTitleButtons":
        this.setHandler("notify::showEndTitleButtons", newValue);
        break;
      case "onNotifyShowStartTitleButtons":
        this.setHandler("notify::showStartTitleButtons", newValue);
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
