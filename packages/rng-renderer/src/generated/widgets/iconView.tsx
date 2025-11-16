import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class IconView<T extends Gtk.IconView = Gtk.IconView> extends Widget<T> {
  static createNode() {
    return new Gtk.IconView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue);
        break;
      case "columnSpacing":
        this.node.setColumnSpacing(newValue);
        break;
      case "columns":
        this.node.setColumns(newValue);
        break;
      case "itemOrientation":
        this.node.setItemOrientation(newValue);
        break;
      case "itemPadding":
        this.node.setItemPadding(newValue);
        break;
      case "itemWidth":
        this.node.setItemWidth(newValue);
        break;
      case "margin":
        this.node.setMargin(newValue);
        break;
      case "markupColumn":
        this.node.setMarkupColumn(newValue);
        break;
      case "model":
        this.node.setModel(newValue);
        break;
      case "pixbufColumn":
        this.node.setPixbufColumn(newValue);
        break;
      case "reorderable":
        this.node.setReorderable(newValue);
        break;
      case "rowSpacing":
        this.node.setRowSpacing(newValue);
        break;
      case "selectionMode":
        this.node.setSelectionMode(newValue);
        break;
      case "spacing":
        this.node.setSpacing(newValue);
        break;
      case "textColumn":
        this.node.setTextColumn(newValue);
        break;
      case "tooltipColumn":
        this.node.setTooltipColumn(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "hadjustment":
        this.node.setHadjustment(newValue);
        break;
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue);
        break;
      case "vadjustment":
        this.node.setVadjustment(newValue);
        break;
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue);
        break;
      case "onActivateCursorItem":
        this.setHandler("activate-cursor-item", newValue);
        break;
      case "onItemActivated":
        this.setHandler("item-activated", newValue);
        break;
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue);
        break;
      case "onSelectAll":
        this.setHandler("select-all", newValue);
        break;
      case "onSelectCursorItem":
        this.setHandler("select-cursor-item", newValue);
        break;
      case "onSelectionChanged":
        this.setHandler("selection-changed", newValue);
        break;
      case "onToggleCursorItem":
        this.setHandler("toggle-cursor-item", newValue);
        break;
      case "onUnselectAll":
        this.setHandler("unselect-all", newValue);
        break;
      case "onNotifyActivateOnSingleClick":
        this.setHandler("notify::activateOnSingleClick", newValue);
        break;
      case "onNotifyCellArea":
        this.setHandler("notify::cellArea", newValue);
        break;
      case "onNotifyColumnSpacing":
        this.setHandler("notify::columnSpacing", newValue);
        break;
      case "onNotifyColumns":
        this.setHandler("notify::columns", newValue);
        break;
      case "onNotifyItemOrientation":
        this.setHandler("notify::itemOrientation", newValue);
        break;
      case "onNotifyItemPadding":
        this.setHandler("notify::itemPadding", newValue);
        break;
      case "onNotifyItemWidth":
        this.setHandler("notify::itemWidth", newValue);
        break;
      case "onNotifyMargin":
        this.setHandler("notify::margin", newValue);
        break;
      case "onNotifyMarkupColumn":
        this.setHandler("notify::markupColumn", newValue);
        break;
      case "onNotifyModel":
        this.setHandler("notify::model", newValue);
        break;
      case "onNotifyPixbufColumn":
        this.setHandler("notify::pixbufColumn", newValue);
        break;
      case "onNotifyReorderable":
        this.setHandler("notify::reorderable", newValue);
        break;
      case "onNotifyRowSpacing":
        this.setHandler("notify::rowSpacing", newValue);
        break;
      case "onNotifySelectionMode":
        this.setHandler("notify::selectionMode", newValue);
        break;
      case "onNotifySpacing":
        this.setHandler("notify::spacing", newValue);
        break;
      case "onNotifyTextColumn":
        this.setHandler("notify::textColumn", newValue);
        break;
      case "onNotifyTooltipColumn":
        this.setHandler("notify::tooltipColumn", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue);
        break;
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue);
        break;
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue);
        break;
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
