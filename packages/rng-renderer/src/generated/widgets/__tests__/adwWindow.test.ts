import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AdwWindow} from "../adwWindow.js";

describe("AdwWindow", () => {
  let widget: AdwWindow;

  beforeEach(() => {
    widget = new AdwWindow({}, AdwWindow.createNode());
  });

  test("should set adaptivePreview", () => {
    const newValue = true;
    widget.set("adaptivePreview", newValue);
    expect(widget.node.setAdaptivePreview).toHaveBeenCalledWith(newValue);
  });

  test("should set content", () => {
    const newValue = new Gtk.Widget();
    widget.set("content", newValue);
    expect(widget.node.setContent).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyAdaptivePreview", () => {
    const callback = jest.fn();

    widget.set("onNotifyAdaptivePreview", callback);

    const handler = widget.handlers["notify::adaptivePreview"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::adaptivePreview",
      expect.any(Function)
    );
  });

  test("should connect onNotifyContent", () => {
    const callback = jest.fn();

    widget.set("onNotifyContent", callback);

    const handler = widget.handlers["notify::content"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCurrentBreakpoint", () => {
    const callback = jest.fn();

    widget.set("onNotifyCurrentBreakpoint", callback);

    const handler = widget.handlers["notify::currentBreakpoint"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::currentBreakpoint",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDialogs", () => {
    const callback = jest.fn();

    widget.set("onNotifyDialogs", callback);

    const handler = widget.handlers["notify::dialogs"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::dialogs",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisibleDialog", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisibleDialog", callback);

    const handler = widget.handlers["notify::visibleDialog"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visibleDialog",
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
