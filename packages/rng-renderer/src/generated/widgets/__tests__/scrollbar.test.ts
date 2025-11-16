import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Scrollbar} from "../scrollbar.js";

describe("Scrollbar", () => {
  let widget: Scrollbar;

  beforeEach(() => {
    widget = new Scrollbar({}, Scrollbar.createNode());
  });

  test("should set adjustment", () => {
    const newValue = undefined;
    widget.set("adjustment", newValue);
    expect(widget.node.setAdjustment).toHaveBeenCalledWith(newValue);
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL;
    widget.set("orientation", newValue);
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue);
  });

  test("should connect onNotifyAdjustment", () => {
    const callback = jest.fn();

    widget.set("onNotifyAdjustment", callback);

    const handler = widget.handlers["notify::adjustment"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::adjustment",
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
});
