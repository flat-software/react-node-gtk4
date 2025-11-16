import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Leaflet} from "../widgets.js";

describe("Leaflet", () => {
  let widget: Leaflet;

  beforeEach(() => {
    widget = new Leaflet({}, Leaflet.createNode());
  });

  test("should set canNavigateBack", () => {
    const newValue = true;
    widget.set("canNavigateBack", newValue);
    expect(widget.node.setCanNavigateBack).toHaveBeenCalledWith(newValue);
  });

  test("should set canNavigateForward", () => {
    const newValue = true;
    widget.set("canNavigateForward", newValue);
    expect(widget.node.setCanNavigateForward).toHaveBeenCalledWith(newValue);
  });

  test("should set canUnfold", () => {
    const newValue = true;
    widget.set("canUnfold", newValue);
    expect(widget.node.setCanUnfold).toHaveBeenCalledWith(newValue);
  });

  test("should set childTransitionParams", () => {
    const newValue = undefined;
    widget.set("childTransitionParams", newValue);
    expect(widget.node.setChildTransitionParams).toHaveBeenCalledWith(newValue);
  });

  test("should set foldThresholdPolicy", () => {
    const newValue = Adw.FoldThresholdPolicy.MINIMUM;
    widget.set("foldThresholdPolicy", newValue);
    expect(widget.node.setFoldThresholdPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set homogeneous", () => {
    const newValue = true;
    widget.set("homogeneous", newValue);
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set modeTransitionDuration", () => {
    const newValue = 1;
    widget.set("modeTransitionDuration", newValue);
    expect(widget.node.setModeTransitionDuration).toHaveBeenCalledWith(
      newValue
    );
  });

  test("should set transitionType", () => {
    const newValue = Adw.LeafletTransitionType.OVER;
    widget.set("transitionType", newValue);
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue);
  });

  test("should set visibleChild", () => {
    const newValue = new Gtk.Widget();
    widget.set("visibleChild", newValue);
    expect(widget.node.setVisibleChild).toHaveBeenCalledWith(newValue);
  });

  test("should set visibleChildName", () => {
    const newValue = "Some String";
    widget.set("visibleChildName", newValue);
    expect(widget.node.setVisibleChildName).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyCanNavigateBack", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanNavigateBack", callback);

    const handler = widget.handlers["notify::canNavigateBack"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canNavigateBack",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCanNavigateForward", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanNavigateForward", callback);

    const handler = widget.handlers["notify::canNavigateForward"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canNavigateForward",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCanUnfold", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanUnfold", callback);

    const handler = widget.handlers["notify::canUnfold"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canUnfold",
      expect.any(Function)
    );
  });

  test("should connect onNotifyChildTransitionParams", () => {
    const callback = jest.fn();

    widget.set("onNotifyChildTransitionParams", callback);

    const handler = widget.handlers["notify::childTransitionParams"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::childTransitionParams",
      expect.any(Function)
    );
  });

  test("should connect onNotifyChildTransitionRunning", () => {
    const callback = jest.fn();

    widget.set("onNotifyChildTransitionRunning", callback);

    const handler = widget.handlers["notify::childTransitionRunning"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::childTransitionRunning",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFoldThresholdPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyFoldThresholdPolicy", callback);

    const handler = widget.handlers["notify::foldThresholdPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::foldThresholdPolicy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFolded", () => {
    const callback = jest.fn();

    widget.set("onNotifyFolded", callback);

    const handler = widget.handlers["notify::folded"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::folded",
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

  test("should connect onNotifyModeTransitionDuration", () => {
    const callback = jest.fn();

    widget.set("onNotifyModeTransitionDuration", callback);

    const handler = widget.handlers["notify::modeTransitionDuration"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::modeTransitionDuration",
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

  test("should connect onNotifyVisibleChildName", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisibleChildName", callback);

    const handler = widget.handlers["notify::visibleChildName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visibleChildName",
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
