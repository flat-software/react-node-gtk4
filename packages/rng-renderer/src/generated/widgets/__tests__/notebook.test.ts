import Gtk from "../../girs/node-gtk-4.0.js";
import {Notebook} from "../notebook.js";

describe("Notebook", () => {
  let widget: Notebook;

  beforeEach(() => {
    widget = new Notebook({}, Notebook.createNode());
  });

  test("should set enablePopup", () => {
    const newValue = true;
    widget.set("enablePopup", newValue);
    expect(widget.node.enablePopup).toBe(newValue);
  });

  test("should set groupName", () => {
    const newValue = "Some String";
    widget.set("groupName", newValue);
    expect(widget.node.setGroupName).toHaveBeenCalledWith(newValue);
  });

  test("should set page", () => {
    const newValue = 1;
    widget.set("page", newValue);
    expect(widget.node.setCurrentPage).toHaveBeenCalledWith(newValue);
  });

  test("should set scrollable", () => {
    const newValue = true;
    widget.set("scrollable", newValue);
    expect(widget.node.setScrollable).toHaveBeenCalledWith(newValue);
  });

  test("should set showBorder", () => {
    const newValue = true;
    widget.set("showBorder", newValue);
    expect(widget.node.setShowBorder).toHaveBeenCalledWith(newValue);
  });

  test("should set showTabs", () => {
    const newValue = true;
    widget.set("showTabs", newValue);
    expect(widget.node.setShowTabs).toHaveBeenCalledWith(newValue);
  });

  test("should set tabPos", () => {
    const newValue = Gtk.PositionType.LEFT;
    widget.set("tabPos", newValue);
    expect(widget.node.setTabPos).toHaveBeenCalledWith(newValue);
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

  test("should connect onChangeCurrentPage", () => {
    const callback = jest.fn();

    widget.set("onChangeCurrentPage", callback);

    const handler = widget.handlers["change-current-page"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "change-current-page",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onCreateWindow", () => {
    const callback = jest.fn();

    widget.set("onCreateWindow", callback);

    const handler = widget.handlers["create-window"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "create-window",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onFocusTab", () => {
    const callback = jest.fn();

    widget.set("onFocusTab", callback);

    const handler = widget.handlers["focus-tab"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "focus-tab",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onMoveFocusOut", () => {
    const callback = jest.fn();

    widget.set("onMoveFocusOut", callback);

    const handler = widget.handlers["move-focus-out"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-focus-out",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPageAdded", () => {
    const callback = jest.fn();

    widget.set("onPageAdded", callback);

    const handler = widget.handlers["page-added"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-added",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPageRemoved", () => {
    const callback = jest.fn();

    widget.set("onPageRemoved", callback);

    const handler = widget.handlers["page-removed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-removed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPageReordered", () => {
    const callback = jest.fn();

    widget.set("onPageReordered", callback);

    const handler = widget.handlers["page-reordered"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-reordered",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onReorderTab", () => {
    const callback = jest.fn();

    widget.set("onReorderTab", callback);

    const handler = widget.handlers["reorder-tab"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "reorder-tab",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSelectPage", () => {
    const callback = jest.fn();

    widget.set("onSelectPage", callback);

    const handler = widget.handlers["select-page"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-page",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSwitchPage", () => {
    const callback = jest.fn();

    widget.set("onSwitchPage", callback);

    const handler = widget.handlers["switch-page"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "switch-page",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyEnablePopup", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnablePopup", callback);

    const handler = widget.handlers["notify::enablePopup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enablePopup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyGroupName", () => {
    const callback = jest.fn();

    widget.set("onNotifyGroupName", callback);

    const handler = widget.handlers["notify::groupName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::groupName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPage", () => {
    const callback = jest.fn();

    widget.set("onNotifyPage", callback);

    const handler = widget.handlers["notify::page"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::page",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPages", () => {
    const callback = jest.fn();

    widget.set("onNotifyPages", callback);

    const handler = widget.handlers["notify::pages"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pages",
      expect.any(Function)
    );
  });

  test("should connect onNotifyScrollable", () => {
    const callback = jest.fn();

    widget.set("onNotifyScrollable", callback);

    const handler = widget.handlers["notify::scrollable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::scrollable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowBorder", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowBorder", callback);

    const handler = widget.handlers["notify::showBorder"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showBorder",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowTabs", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowTabs", callback);

    const handler = widget.handlers["notify::showTabs"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showTabs",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTabPos", () => {
    const callback = jest.fn();

    widget.set("onNotifyTabPos", callback);

    const handler = widget.handlers["notify::tabPos"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tabPos",
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
});
