import Gtk from "../../girs/node-gtk-4.0.js";
import {Viewport} from "../viewport.js";

describe("Viewport", () => {
  let widget: Viewport;

  beforeEach(() => {
    widget = new Viewport({}, Viewport.createNode());
  });

  test("should set scrollToFocus", () => {
    const newValue = true;
    widget.set("scrollToFocus", newValue);
    expect(widget.node.setScrollToFocus).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyChild", callback);

    const handler = widget.handlers["notify::child"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    );
  });

  test("should connect onNotifyScrollToFocus", () => {
    const callback = jest.fn();

    widget.set("onNotifyScrollToFocus", callback);

    const handler = widget.handlers["notify::scrollToFocus"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::scrollToFocus",
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

  test("should append child", () => {
    const child = new Viewport({}, Viewport.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new Viewport({}, Viewport.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new Viewport({}, Viewport.createNode());
    const sibling = new Viewport({}, Viewport.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
