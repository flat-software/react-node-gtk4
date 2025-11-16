import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Grid} from "../widgets.js";

describe("Grid", () => {
  let widget: Grid;

  beforeEach(() => {
    widget = new Grid({}, Grid.createNode());
  });

  test("should set baselineRow", () => {
    const newValue = 1;
    widget.set("baselineRow", newValue);
    expect(widget.node.setBaselineRow).toHaveBeenCalledWith(newValue);
  });

  test("should set columnHomogeneous", () => {
    const newValue = true;
    widget.set("columnHomogeneous", newValue);
    expect(widget.node.setColumnHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set columnSpacing", () => {
    const newValue = 1;
    widget.set("columnSpacing", newValue);
    expect(widget.node.setColumnSpacing).toHaveBeenCalledWith(newValue);
  });

  test("should set rowHomogeneous", () => {
    const newValue = true;
    widget.set("rowHomogeneous", newValue);
    expect(widget.node.setRowHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set rowSpacing", () => {
    const newValue = 1;
    widget.set("rowSpacing", newValue);
    expect(widget.node.setRowSpacing).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyBaselineRow", () => {
    const callback = jest.fn();

    widget.set("onNotifyBaselineRow", callback);

    const handler = widget.handlers["notify::baselineRow"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::baselineRow",
      expect.any(Function)
    );
  });

  test("should connect onNotifyColumnHomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyColumnHomogeneous", callback);

    const handler = widget.handlers["notify::columnHomogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::columnHomogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifyColumnSpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifyColumnSpacing", callback);

    const handler = widget.handlers["notify::columnSpacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::columnSpacing",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRowHomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyRowHomogeneous", callback);

    const handler = widget.handlers["notify::rowHomogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rowHomogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRowSpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifyRowSpacing", callback);

    const handler = widget.handlers["notify::rowSpacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rowSpacing",
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
