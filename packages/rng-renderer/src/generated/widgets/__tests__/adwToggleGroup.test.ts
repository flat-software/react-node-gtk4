import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwToggleGroup} from "../adwToggleGroup.js";

describe("AdwToggleGroup", () => {
  let widget: AdwToggleGroup;

  beforeEach(() => {
    widget = new AdwToggleGroup({}, AdwToggleGroup.createNode());
  });

  test("should set active", () => {
    const newValue = 1;
    widget.set("active", newValue);
    expect(widget.node.setActive).toHaveBeenCalledWith(newValue);
  });

  test("should set activeName", () => {
    const newValue = "Some String";
    widget.set("activeName", newValue);
    expect(widget.node.setActiveName).toHaveBeenCalledWith(newValue);
  });

  test("should set canShrink", () => {
    const newValue = true;
    widget.set("canShrink", newValue);
    expect(widget.node.setCanShrink).toHaveBeenCalledWith(newValue);
  });

  test("should set homogeneous", () => {
    const newValue = true;
    widget.set("homogeneous", newValue);
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyActive", () => {
    const callback = jest.fn();

    widget.set("onNotifyActive", callback);

    const handler = widget.handlers["notify::active"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::active",
      expect.any(Function)
    );
  });

  test("should connect onNotifyActiveName", () => {
    const callback = jest.fn();

    widget.set("onNotifyActiveName", callback);

    const handler = widget.handlers["notify::activeName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activeName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCanShrink", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanShrink", callback);

    const handler = widget.handlers["notify::canShrink"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canShrink",
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

  test("should connect onNotifyNToggles", () => {
    const callback = jest.fn();

    widget.set("onNotifyNToggles", callback);

    const handler = widget.handlers["notify::nToggles"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nToggles",
      expect.any(Function)
    );
  });

  test("should connect onNotifyToggles", () => {
    const callback = jest.fn();

    widget.set("onNotifyToggles", callback);

    const handler = widget.handlers["notify::toggles"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::toggles",
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
