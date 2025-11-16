import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Squeezer} from "../widgets.js";

describe("Squeezer", () => {
  let widget: Squeezer;

  beforeEach(() => {
    widget = new Squeezer({}, Squeezer.createNode());
  });

  test("should set allowNone", () => {
    const newValue = true;
    widget.set("allowNone", newValue);
    expect(widget.node.setAllowNone).toHaveBeenCalledWith(newValue);
  });

  test("should set homogeneous", () => {
    const newValue = true;
    widget.set("homogeneous", newValue);
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set interpolateSize", () => {
    const newValue = true;
    widget.set("interpolateSize", newValue);
    expect(widget.node.setInterpolateSize).toHaveBeenCalledWith(newValue);
  });

  test("should set switchThresholdPolicy", () => {
    const newValue = Adw.FoldThresholdPolicy.MINIMUM;
    widget.set("switchThresholdPolicy", newValue);
    expect(widget.node.setSwitchThresholdPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set transitionDuration", () => {
    const newValue = 1;
    widget.set("transitionDuration", newValue);
    expect(widget.node.setTransitionDuration).toHaveBeenCalledWith(newValue);
  });

  test("should set transitionType", () => {
    const newValue = Adw.SqueezerTransitionType.NONE;
    widget.set("transitionType", newValue);
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue);
  });

  test("should set xalign", () => {
    const newValue = 1;
    widget.set("xalign", newValue);
    expect(widget.node.setXalign).toHaveBeenCalledWith(newValue);
  });

  test("should set yalign", () => {
    const newValue = 1;
    widget.set("yalign", newValue);
    expect(widget.node.setYalign).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyAllowNone", () => {
    const callback = jest.fn();

    widget.set("onNotifyAllowNone", callback);

    const handler = widget.handlers["notify::allowNone"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowNone",
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

  test("should connect onNotifyInterpolateSize", () => {
    const callback = jest.fn();

    widget.set("onNotifyInterpolateSize", callback);

    const handler = widget.handlers["notify::interpolateSize"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::interpolateSize",
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

  test("should connect onNotifySwitchThresholdPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifySwitchThresholdPolicy", callback);

    const handler = widget.handlers["notify::switchThresholdPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::switchThresholdPolicy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTransitionDuration", () => {
    const callback = jest.fn();

    widget.set("onNotifyTransitionDuration", callback);

    const handler = widget.handlers["notify::transitionDuration"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transitionDuration",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTransitionRunning", () => {
    const callback = jest.fn();

    widget.set("onNotifyTransitionRunning", callback);

    const handler = widget.handlers["notify::transitionRunning"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transitionRunning",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTransitionType", () => {
    const callback = jest.fn();

    widget.set("onNotifyTransitionType", callback);

    const handler = widget.handlers["notify::transitionType"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transitionType",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisibleChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisibleChild", callback);

    const handler = widget.handlers["notify::visibleChild"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visibleChild",
      expect.any(Function)
    );
  });

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn();

    widget.set("onNotifyXalign", callback);

    const handler = widget.handlers["notify::xalign"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::xalign",
      expect.any(Function)
    );
  });

  test("should connect onNotifyYalign", () => {
    const callback = jest.fn();

    widget.set("onNotifyYalign", callback);

    const handler = widget.handlers["notify::yalign"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::yalign",
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
