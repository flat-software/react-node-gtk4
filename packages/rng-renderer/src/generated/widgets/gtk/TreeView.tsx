import Gtk from "@/generated/girs/node-gtk-4.0.js"
import {Widget} from "./GtkWidget.js"

export class TreeView<  T extends Gtk.TreeView = Gtk.TreeView> extends Widget<T> {
  static createNode() {
    return new Gtk.TreeView({
  })
}
set(propName: string, newValue: any) {
  super.set(propName, newValue)
  switch (propName) {
case "activateOnSingleClick":
this.node.setActivateOnSingleClick(newValue)
break
case "enableGridLines":
this.node.enableGridLines = newValue
break
case "enableSearch":
this.node.setEnableSearch(newValue)
break
case "enableTreeLines":
this.node.setEnableTreeLines(newValue)
break
case "expanderColumn":
this.node.setExpanderColumn(newValue)
break
case "fixedHeightMode":
this.node.setFixedHeightMode(newValue)
break
case "headersClickable":
this.node.setHeadersClickable(newValue)
break
case "headersVisible":
this.node.setHeadersVisible(newValue)
break
case "hoverExpand":
this.node.setHoverExpand(newValue)
break
case "hoverSelection":
this.node.setHoverSelection(newValue)
break
case "levelIndentation":
this.node.setLevelIndentation(newValue)
break
case "model":
this.node.setModel(newValue)
break
case "reorderable":
this.node.setReorderable(newValue)
break
case "rubberBanding":
this.node.setRubberBanding(newValue)
break
case "searchColumn":
this.node.setSearchColumn(newValue)
break
case "showExpanders":
this.node.setShowExpanders(newValue)
break
case "tooltipColumn":
this.node.setTooltipColumn(newValue)
break
case "name":
this.node.name = newValue
break
case "accessibleRole":
this.node.accessibleRole = newValue
break
case "hadjustment":
this.node.setHadjustment(newValue)
break
case "hscrollPolicy":
this.node.setHscrollPolicy(newValue)
break
case "vadjustment":
this.node.setVadjustment(newValue)
break
case "vscrollPolicy":
this.node.setVscrollPolicy(newValue)
break
      case "onColumnsChanged":
        this.setHandler("columns-changed", newValue)
        break
      case "onCursorChanged":
        this.setHandler("cursor-changed", newValue)
        break
      case "onExpandCollapseCursorRow":
        this.setHandler("expand-collapse-cursor-row", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onRowActivated":
        this.setHandler("row-activated", newValue)
        break
      case "onRowCollapsed":
        this.setHandler("row-collapsed", newValue)
        break
      case "onRowExpanded":
        this.setHandler("row-expanded", newValue)
        break
      case "onSelectAll":
        this.setHandler("select-all", newValue)
        break
      case "onSelectCursorParent":
        this.setHandler("select-cursor-parent", newValue)
        break
      case "onSelectCursorRow":
        this.setHandler("select-cursor-row", newValue)
        break
      case "onStartInteractiveSearch":
        this.setHandler("start-interactive-search", newValue)
        break
      case "onTestCollapseRow":
        this.setHandler("test-collapse-row", newValue)
        break
      case "onTestExpandRow":
        this.setHandler("test-expand-row", newValue)
        break
      case "onToggleCursorRow":
        this.setHandler("toggle-cursor-row", newValue)
        break
      case "onUnselectAll":
        this.setHandler("unselect-all", newValue)
        break
      case "onNotifyActivateOnSingleClick":
        this.setHandler("notify::activateOnSingleClick", newValue)
        break
      case "onNotifyEnableGridLines":
        this.setHandler("notify::enableGridLines", newValue)
        break
      case "onNotifyEnableSearch":
        this.setHandler("notify::enableSearch", newValue)
        break
      case "onNotifyEnableTreeLines":
        this.setHandler("notify::enableTreeLines", newValue)
        break
      case "onNotifyExpanderColumn":
        this.setHandler("notify::expanderColumn", newValue)
        break
      case "onNotifyFixedHeightMode":
        this.setHandler("notify::fixedHeightMode", newValue)
        break
      case "onNotifyHeadersClickable":
        this.setHandler("notify::headersClickable", newValue)
        break
      case "onNotifyHeadersVisible":
        this.setHandler("notify::headersVisible", newValue)
        break
      case "onNotifyHoverExpand":
        this.setHandler("notify::hoverExpand", newValue)
        break
      case "onNotifyHoverSelection":
        this.setHandler("notify::hoverSelection", newValue)
        break
      case "onNotifyLevelIndentation":
        this.setHandler("notify::levelIndentation", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyReorderable":
        this.setHandler("notify::reorderable", newValue)
        break
      case "onNotifyRubberBanding":
        this.setHandler("notify::rubberBanding", newValue)
        break
      case "onNotifySearchColumn":
        this.setHandler("notify::searchColumn", newValue)
        break
      case "onNotifyShowExpanders":
        this.setHandler("notify::showExpanders", newValue)
        break
      case "onNotifyTooltipColumn":
        this.setHandler("notify::tooltipColumn", newValue)
        break
      case "onNotifyName":
        this.setHandler("notify::name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
