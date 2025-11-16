import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ListBase} from "../widgets.js";

describe("ListBase", () => {
  let widget: ListBase;

  beforeEach(() => {
    widget = new ListBase({}, ListBase.createNode());
  });

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL;
    widget.set("orientation", newValue);
    expect(widget.node.orientation).toBe(newValue);
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn();

    widget.set("onNotifyOrientation", callback);

    const handler = widget.handlers["notify::orientation"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::orientation",
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
