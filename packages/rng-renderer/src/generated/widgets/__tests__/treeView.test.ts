import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {TreeView} from "../treeView.js";

describe("TreeView", () => {
  let widget: TreeView;

  beforeEach(() => {
    widget = new TreeView({}, TreeView.createNode());
  });

  test("should set activateOnSingleClick", () => {
    const newValue = true;
    widget.set("activateOnSingleClick", newValue);
    expect(widget.node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue);
  });

  test("should set enableGridLines", () => {
    const newValue = Gtk.TreeViewGridLines.NONE;
    widget.set("enableGridLines", newValue);
    expect(widget.node.enableGridLines).toBe(newValue);
  });

  test("should set enableSearch", () => {
    const newValue = true;
    widget.set("enableSearch", newValue);
    expect(widget.node.setEnableSearch).toHaveBeenCalledWith(newValue);
  });

  test("should set enableTreeLines", () => {
    const newValue = true;
    widget.set("enableTreeLines", newValue);
    expect(widget.node.setEnableTreeLines).toHaveBeenCalledWith(newValue);
  });

  test("should set expanderColumn", () => {
    const newValue = undefined;
    widget.set("expanderColumn", newValue);
    expect(widget.node.setExpanderColumn).toHaveBeenCalledWith(newValue);
  });

  test("should set fixedHeightMode", () => {
    const newValue = true;
    widget.set("fixedHeightMode", newValue);
    expect(widget.node.setFixedHeightMode).toHaveBeenCalledWith(newValue);
  });

  test("should set headersClickable", () => {
    const newValue = true;
    widget.set("headersClickable", newValue);
    expect(widget.node.setHeadersClickable).toHaveBeenCalledWith(newValue);
  });

  test("should set headersVisible", () => {
    const newValue = true;
    widget.set("headersVisible", newValue);
    expect(widget.node.setHeadersVisible).toHaveBeenCalledWith(newValue);
  });

  test("should set hoverExpand", () => {
    const newValue = true;
    widget.set("hoverExpand", newValue);
    expect(widget.node.setHoverExpand).toHaveBeenCalledWith(newValue);
  });

  test("should set hoverSelection", () => {
    const newValue = true;
    widget.set("hoverSelection", newValue);
    expect(widget.node.setHoverSelection).toHaveBeenCalledWith(newValue);
  });

  test("should set levelIndentation", () => {
    const newValue = 1;
    widget.set("levelIndentation", newValue);
    expect(widget.node.setLevelIndentation).toHaveBeenCalledWith(newValue);
  });

  test("should set model", () => {
    const newValue = undefined;
    widget.set("model", newValue);
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue);
  });

  test("should set reorderable", () => {
    const newValue = true;
    widget.set("reorderable", newValue);
    expect(widget.node.setReorderable).toHaveBeenCalledWith(newValue);
  });

  test("should set rubberBanding", () => {
    const newValue = true;
    widget.set("rubberBanding", newValue);
    expect(widget.node.setRubberBanding).toHaveBeenCalledWith(newValue);
  });

  test("should set searchColumn", () => {
    const newValue = 1;
    widget.set("searchColumn", newValue);
    expect(widget.node.setSearchColumn).toHaveBeenCalledWith(newValue);
  });

  test("should set showExpanders", () => {
    const newValue = true;
    widget.set("showExpanders", newValue);
    expect(widget.node.setShowExpanders).toHaveBeenCalledWith(newValue);
  });

  test("should set tooltipColumn", () => {
    const newValue = 1;
    widget.set("tooltipColumn", newValue);
    expect(widget.node.setTooltipColumn).toHaveBeenCalledWith(newValue);
  });

  test("should set name", () => {
    const newValue = "Some String";
    widget.set("name", newValue);
    expect(widget.node.name).toBe(newValue);
  });

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT;
    widget.set("accessibleRole", newValue);
    expect(widget.node.accessibleRole).toBe(newValue);
  });

  test("should set hadjustment", () => {
    const newValue = undefined;
    widget.set("hadjustment", newValue);
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue);
  });

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM;
    widget.set("hscrollPolicy", newValue);
    expect(widget.node.setHscrollPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set vadjustment", () => {
    const newValue = undefined;
    widget.set("vadjustment", newValue);
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue);
  });

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM;
    widget.set("vscrollPolicy", newValue);
    expect(widget.node.setVscrollPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should connect onColumnsChanged", () => {
    const callback = jest.fn();

    widget.set("onColumnsChanged", callback);

    const handler = widget.handlers["columns-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "columns-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onCursorChanged", () => {
    const callback = jest.fn();

    widget.set("onCursorChanged", callback);

    const handler = widget.handlers["cursor-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "cursor-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onExpandCollapseCursorRow", () => {
    const callback = jest.fn();

    widget.set("onExpandCollapseCursorRow", callback);

    const handler = widget.handlers["expand-collapse-cursor-row"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "expand-collapse-cursor-row",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onMoveCursor", () => {
    const callback = jest.fn();

    widget.set("onMoveCursor", callback);

    const handler = widget.handlers["move-cursor"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-cursor",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onRowActivated", () => {
    const callback = jest.fn();

    widget.set("onRowActivated", callback);

    const handler = widget.handlers["row-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "row-activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onRowCollapsed", () => {
    const callback = jest.fn();

    widget.set("onRowCollapsed", callback);

    const handler = widget.handlers["row-collapsed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "row-collapsed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onRowExpanded", () => {
    const callback = jest.fn();

    widget.set("onRowExpanded", callback);

    const handler = widget.handlers["row-expanded"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "row-expanded",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSelectAll", () => {
    const callback = jest.fn();

    widget.set("onSelectAll", callback);

    const handler = widget.handlers["select-all"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-all",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSelectCursorParent", () => {
    const callback = jest.fn();

    widget.set("onSelectCursorParent", callback);

    const handler = widget.handlers["select-cursor-parent"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-cursor-parent",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSelectCursorRow", () => {
    const callback = jest.fn();

    widget.set("onSelectCursorRow", callback);

    const handler = widget.handlers["select-cursor-row"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-cursor-row",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onStartInteractiveSearch", () => {
    const callback = jest.fn();

    widget.set("onStartInteractiveSearch", callback);

    const handler = widget.handlers["start-interactive-search"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "start-interactive-search",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onTestCollapseRow", () => {
    const callback = jest.fn();

    widget.set("onTestCollapseRow", callback);

    const handler = widget.handlers["test-collapse-row"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "test-collapse-row",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onTestExpandRow", () => {
    const callback = jest.fn();

    widget.set("onTestExpandRow", callback);

    const handler = widget.handlers["test-expand-row"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "test-expand-row",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onToggleCursorRow", () => {
    const callback = jest.fn();

    widget.set("onToggleCursorRow", callback);

    const handler = widget.handlers["toggle-cursor-row"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-cursor-row",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onUnselectAll", () => {
    const callback = jest.fn();

    widget.set("onUnselectAll", callback);

    const handler = widget.handlers["unselect-all"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "unselect-all",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyActivateOnSingleClick", () => {
    const callback = jest.fn();

    widget.set("onNotifyActivateOnSingleClick", callback);

    const handler = widget.handlers["notify::activateOnSingleClick"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activateOnSingleClick",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEnableGridLines", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableGridLines", callback);

    const handler = widget.handlers["notify::enableGridLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableGridLines",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEnableSearch", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableSearch", callback);

    const handler = widget.handlers["notify::enableSearch"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableSearch",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEnableTreeLines", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableTreeLines", callback);

    const handler = widget.handlers["notify::enableTreeLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableTreeLines",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExpanderColumn", () => {
    const callback = jest.fn();

    widget.set("onNotifyExpanderColumn", callback);

    const handler = widget.handlers["notify::expanderColumn"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::expanderColumn",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFixedHeightMode", () => {
    const callback = jest.fn();

    widget.set("onNotifyFixedHeightMode", callback);

    const handler = widget.handlers["notify::fixedHeightMode"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fixedHeightMode",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeadersClickable", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeadersClickable", callback);

    const handler = widget.handlers["notify::headersClickable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::headersClickable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeadersVisible", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeadersVisible", callback);

    const handler = widget.handlers["notify::headersVisible"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::headersVisible",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHoverExpand", () => {
    const callback = jest.fn();

    widget.set("onNotifyHoverExpand", callback);

    const handler = widget.handlers["notify::hoverExpand"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hoverExpand",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHoverSelection", () => {
    const callback = jest.fn();

    widget.set("onNotifyHoverSelection", callback);

    const handler = widget.handlers["notify::hoverSelection"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hoverSelection",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLevelIndentation", () => {
    const callback = jest.fn();

    widget.set("onNotifyLevelIndentation", callback);

    const handler = widget.handlers["notify::levelIndentation"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::levelIndentation",
      expect.any(Function)
    );
  });

  test("should connect onNotifyModel", () => {
    const callback = jest.fn();

    widget.set("onNotifyModel", callback);

    const handler = widget.handlers["notify::model"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::model",
      expect.any(Function)
    );
  });

  test("should connect onNotifyReorderable", () => {
    const callback = jest.fn();

    widget.set("onNotifyReorderable", callback);

    const handler = widget.handlers["notify::reorderable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::reorderable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRubberBanding", () => {
    const callback = jest.fn();

    widget.set("onNotifyRubberBanding", callback);

    const handler = widget.handlers["notify::rubberBanding"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rubberBanding",
      expect.any(Function)
    );
  });

  test("should connect onNotifySearchColumn", () => {
    const callback = jest.fn();

    widget.set("onNotifySearchColumn", callback);

    const handler = widget.handlers["notify::searchColumn"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::searchColumn",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowExpanders", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowExpanders", callback);

    const handler = widget.handlers["notify::showExpanders"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showExpanders",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTooltipColumn", () => {
    const callback = jest.fn();

    widget.set("onNotifyTooltipColumn", callback);

    const handler = widget.handlers["notify::tooltipColumn"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltipColumn",
      expect.any(Function)
    );
  });

  test("should connect onNotifyName", () => {
    const callback = jest.fn();

    widget.set("onNotifyName", callback);

    const handler = widget.handlers["notify::name"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::name",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn();

    widget.set("onNotifyAccessibleRole", callback);

    const handler = widget.handlers["notify::accessibleRole"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessibleRole",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn();

    widget.set("onNotifyHadjustment", callback);

    const handler = widget.handlers["notify::hadjustment"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyHscrollPolicy", callback);

    const handler = widget.handlers["notify::hscrollPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hscrollPolicy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn();

    widget.set("onNotifyVadjustment", callback);

    const handler = widget.handlers["notify::vadjustment"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyVscrollPolicy", callback);

    const handler = widget.handlers["notify::vscrollPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vscrollPolicy",
      expect.any(Function)
    );
  });
});
