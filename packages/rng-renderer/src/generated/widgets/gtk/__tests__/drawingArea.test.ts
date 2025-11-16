import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {DrawingArea} from "@/generated/widgets.ts";

describe("DrawingArea", () => {
  let widget: DrawingArea;

  beforeEach(() => {
    widget = new DrawingArea({}, DrawingArea.createNode());
  });

  test("should set contentHeight", () => {
    const newValue = 1;
    widget.set("contentHeight", newValue);
    expect(widget.node.setContentHeight).toHaveBeenCalledWith(newValue);
  });

  test("should set contentWidth", () => {
    const newValue = 1;
    widget.set("contentWidth", newValue);
    expect(widget.node.setContentWidth).toHaveBeenCalledWith(newValue);
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

  test("should connect onResize", () => {
    const callback = jest.fn();

    widget.set("onResize", callback);

    const handler = widget.handlers["resize"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyContentHeight", () => {
    const callback = jest.fn();

    widget.set("onNotifyContentHeight", callback);

    const handler = widget.handlers["notify::contentHeight"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::contentHeight",
      expect.any(Function)
    );
  });

  test("should connect onNotifyContentWidth", () => {
    const callback = jest.fn();

    widget.set("onNotifyContentWidth", callback);

    const handler = widget.handlers["notify::contentWidth"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::contentWidth",
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
