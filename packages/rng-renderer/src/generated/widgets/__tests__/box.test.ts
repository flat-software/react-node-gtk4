import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Box} from "../box.js";

describe("Box", () => {
  let widget: Box;

  beforeEach(() => {
    widget = new Box({}, Box.createNode());
  });

  test("should set baselineChild", () => {
    const newValue = 1;
    widget.set("baselineChild", newValue);
    expect(widget.node.setBaselineChild).toHaveBeenCalledWith(newValue);
  });

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP;
    widget.set("baselinePosition", newValue);
    expect(widget.node.setBaselinePosition).toHaveBeenCalledWith(newValue);
  });

  test("should set homogeneous", () => {
    const newValue = true;
    widget.set("homogeneous", newValue);
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set spacing", () => {
    const newValue = 1;
    widget.set("spacing", newValue);
    expect(widget.node.setSpacing).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyBaselineChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyBaselineChild", callback);

    const handler = widget.handlers["notify::baselineChild"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::baselineChild",
      expect.any(Function)
    );
  });

  test("should connect onNotifyBaselinePosition", () => {
    const callback = jest.fn();

    widget.set("onNotifyBaselinePosition", callback);

    const handler = widget.handlers["notify::baselinePosition"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::baselinePosition",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyHomogeneous", callback);

    const handler = widget.handlers["notify::homogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::homogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifySpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifySpacing", callback);

    const handler = widget.handlers["notify::spacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::spacing",
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
