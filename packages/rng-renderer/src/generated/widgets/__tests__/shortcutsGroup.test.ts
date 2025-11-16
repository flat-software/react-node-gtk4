import Gtk from "../../girs/node-gtk-4.0.js";
import {ShortcutsGroup} from "../shortcutsGroup.js";

describe("ShortcutsGroup", () => {
  let widget: ShortcutsGroup;

  beforeEach(() => {
    widget = new ShortcutsGroup({}, ShortcutsGroup.createNode());
  });

  test("should set accelSizeGroup", () => {
    const newValue = undefined;
    widget.set("accelSizeGroup", newValue);
    expect(widget.node.accelSizeGroup).toBe(newValue);
  });

  test("should set title", () => {
    const newValue = "Some String";
    widget.set("title", newValue);
    expect(widget.node.title).toBe(newValue);
  });

  test("should set titleSizeGroup", () => {
    const newValue = undefined;
    widget.set("titleSizeGroup", newValue);
    expect(widget.node.titleSizeGroup).toBe(newValue);
  });

  test("should set view", () => {
    const newValue = "Some String";
    widget.set("view", newValue);
    expect(widget.node.view).toBe(newValue);
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

  test("should connect onNotifyAccelSizeGroup", () => {
    const callback = jest.fn();

    widget.set("onNotifyAccelSizeGroup", callback);

    const handler = widget.handlers["notify::accelSizeGroup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accelSizeGroup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeight", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeight", callback);

    const handler = widget.handlers["notify::height"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::height",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTitle", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitle", callback);

    const handler = widget.handlers["notify::title"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTitleSizeGroup", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitleSizeGroup", callback);

    const handler = widget.handlers["notify::titleSizeGroup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::titleSizeGroup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyView", () => {
    const callback = jest.fn();

    widget.set("onNotifyView", callback);

    const handler = widget.handlers["notify::view"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::view",
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
