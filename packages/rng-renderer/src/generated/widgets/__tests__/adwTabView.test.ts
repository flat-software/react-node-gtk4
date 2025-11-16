import Adw from "../../girs/node-adw-1.js";
import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwTabView} from "../adwTabView.js";

describe("AdwTabView", () => {
  let widget: AdwTabView;

  beforeEach(() => {
    widget = new AdwTabView({}, AdwTabView.createNode());
  });

  test("should set defaultIcon", () => {
    const newValue = undefined;
    widget.set("defaultIcon", newValue);
    expect(widget.node.setDefaultIcon).toHaveBeenCalledWith(newValue);
  });

  test("should set menuModel", () => {
    const newValue = undefined;
    widget.set("menuModel", newValue);
    expect(widget.node.setMenuModel).toHaveBeenCalledWith(newValue);
  });

  test("should set selectedPage", () => {
    const newValue = undefined;
    widget.set("selectedPage", newValue);
    expect(widget.node.setSelectedPage).toHaveBeenCalledWith(newValue);
  });

  test("should set shortcuts", () => {
    const newValue = Adw.TabViewShortcuts.NONE;
    widget.set("shortcuts", newValue);
    expect(widget.node.setShortcuts).toHaveBeenCalledWith(newValue);
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

  test("should connect onClosePage", () => {
    const callback = jest.fn();

    widget.set("onClosePage", callback);

    const handler = widget.handlers["close-page"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "close-page",
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

  test("should connect onIndicatorActivated", () => {
    const callback = jest.fn();

    widget.set("onIndicatorActivated", callback);

    const handler = widget.handlers["indicator-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "indicator-activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPageAttached", () => {
    const callback = jest.fn();

    widget.set("onPageAttached", callback);

    const handler = widget.handlers["page-attached"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-attached",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPageDetached", () => {
    const callback = jest.fn();

    widget.set("onPageDetached", callback);

    const handler = widget.handlers["page-detached"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-detached",
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

  test("should connect onSetupMenu", () => {
    const callback = jest.fn();

    widget.set("onSetupMenu", callback);

    const handler = widget.handlers["setup-menu"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "setup-menu",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyDefaultIcon", () => {
    const callback = jest.fn();

    widget.set("onNotifyDefaultIcon", callback);

    const handler = widget.handlers["notify::defaultIcon"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::defaultIcon",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIsTransferringPage", () => {
    const callback = jest.fn();

    widget.set("onNotifyIsTransferringPage", callback);

    const handler = widget.handlers["notify::isTransferringPage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::isTransferringPage",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMenuModel", () => {
    const callback = jest.fn();

    widget.set("onNotifyMenuModel", callback);

    const handler = widget.handlers["notify::menuModel"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::menuModel",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNPages", () => {
    const callback = jest.fn();

    widget.set("onNotifyNPages", callback);

    const handler = widget.handlers["notify::nPages"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nPages",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNPinnedPages", () => {
    const callback = jest.fn();

    widget.set("onNotifyNPinnedPages", callback);

    const handler = widget.handlers["notify::nPinnedPages"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nPinnedPages",
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

  test("should connect onNotifySelectedPage", () => {
    const callback = jest.fn();

    widget.set("onNotifySelectedPage", callback);

    const handler = widget.handlers["notify::selectedPage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectedPage",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShortcuts", () => {
    const callback = jest.fn();

    widget.set("onNotifyShortcuts", callback);

    const handler = widget.handlers["notify::shortcuts"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shortcuts",
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
