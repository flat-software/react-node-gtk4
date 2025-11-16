import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {CenterBox} from "@/generated/widgets.ts";

describe("CenterBox", () => {
  let widget: CenterBox;

  beforeEach(() => {
    widget = new CenterBox({}, CenterBox.createNode());
  });

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP;
    widget.set("baselinePosition", newValue);
    expect(widget.node.setBaselinePosition).toHaveBeenCalledWith(newValue);
  });

  test("should set centerWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("centerWidget", newValue);
    expect(widget.node.setCenterWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set endWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("endWidget", newValue);
    expect(widget.node.setEndWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set shrinkCenterLast", () => {
    const newValue = true;
    widget.set("shrinkCenterLast", newValue);
    expect(widget.node.setShrinkCenterLast).toHaveBeenCalledWith(newValue);
  });

  test("should set startWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("startWidget", newValue);
    expect(widget.node.setStartWidget).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyCenterWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyCenterWidget", callback);

    const handler = widget.handlers["notify::centerWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::centerWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEndWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyEndWidget", callback);

    const handler = widget.handlers["notify::endWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::endWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShrinkCenterLast", () => {
    const callback = jest.fn();

    widget.set("onNotifyShrinkCenterLast", callback);

    const handler = widget.handlers["notify::shrinkCenterLast"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shrinkCenterLast",
      expect.any(Function)
    );
  });

  test("should connect onNotifyStartWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyStartWidget", callback);

    const handler = widget.handlers["notify::startWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::startWidget",
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
