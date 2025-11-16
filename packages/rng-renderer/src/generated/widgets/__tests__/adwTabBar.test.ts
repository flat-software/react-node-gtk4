import Adw from "../../girs/node-adw-1.js";
import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwTabBar} from "../adwTabBar.js";

describe("AdwTabBar", () => {
  let widget: AdwTabBar;

  beforeEach(() => {
    widget = new AdwTabBar({}, AdwTabBar.createNode());
  });

  test("should set autohide", () => {
    const newValue = true;
    widget.set("autohide", newValue);
    expect(widget.node.setAutohide).toHaveBeenCalledWith(newValue);
  });

  test("should set endActionWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("endActionWidget", newValue);
    expect(widget.node.setEndActionWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set expandTabs", () => {
    const newValue = true;
    widget.set("expandTabs", newValue);
    expect(widget.node.setExpandTabs).toHaveBeenCalledWith(newValue);
  });

  test("should set extraDragPreload", () => {
    const newValue = true;
    widget.set("extraDragPreload", newValue);
    expect(widget.node.setExtraDragPreload).toHaveBeenCalledWith(newValue);
  });

  test("should set inverted", () => {
    const newValue = true;
    widget.set("inverted", newValue);
    expect(widget.node.setInverted).toHaveBeenCalledWith(newValue);
  });

  test("should set startActionWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("startActionWidget", newValue);
    expect(widget.node.setStartActionWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set view", () => {
    const newValue = new Adw.TabView();
    widget.set("view", newValue);
    expect(widget.node.setView).toHaveBeenCalledWith(newValue);
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

  test("should connect onExtraDragDrop", () => {
    const callback = jest.fn();

    widget.set("onExtraDragDrop", callback);

    const handler = widget.handlers["extra-drag-drop"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "extra-drag-drop",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onExtraDragValue", () => {
    const callback = jest.fn();

    widget.set("onExtraDragValue", callback);

    const handler = widget.handlers["extra-drag-value"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "extra-drag-value",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyAutohide", () => {
    const callback = jest.fn();

    widget.set("onNotifyAutohide", callback);

    const handler = widget.handlers["notify::autohide"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::autohide",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEndActionWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyEndActionWidget", callback);

    const handler = widget.handlers["notify::endActionWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::endActionWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExpandTabs", () => {
    const callback = jest.fn();

    widget.set("onNotifyExpandTabs", callback);

    const handler = widget.handlers["notify::expandTabs"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::expandTabs",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraDragPreferredAction", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraDragPreferredAction", callback);

    const handler = widget.handlers["notify::extraDragPreferredAction"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraDragPreferredAction",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraDragPreload", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraDragPreload", callback);

    const handler = widget.handlers["notify::extraDragPreload"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraDragPreload",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInverted", () => {
    const callback = jest.fn();

    widget.set("onNotifyInverted", callback);

    const handler = widget.handlers["notify::inverted"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inverted",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIsOverflowing", () => {
    const callback = jest.fn();

    widget.set("onNotifyIsOverflowing", callback);

    const handler = widget.handlers["notify::isOverflowing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::isOverflowing",
      expect.any(Function)
    );
  });

  test("should connect onNotifyStartActionWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyStartActionWidget", callback);

    const handler = widget.handlers["notify::startActionWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::startActionWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTabsRevealed", () => {
    const callback = jest.fn();

    widget.set("onNotifyTabsRevealed", callback);

    const handler = widget.handlers["notify::tabsRevealed"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tabsRevealed",
      expect.any(Function)
    );
  });

  test("should connect onNotifyView", () => {
    const callback = jest.fn();

    widget.set("onNotifyView", callback);

    const handler = widget.handlers["notify::view"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::view",
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
