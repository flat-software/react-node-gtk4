import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwShortcutLabel} from "../adwShortcutLabel.js";

describe("AdwShortcutLabel", () => {
  let widget: AdwShortcutLabel;

  beforeEach(() => {
    widget = new AdwShortcutLabel({}, AdwShortcutLabel.createNode());
  });

  test("should set accelerator", () => {
    const newValue = "Some String";
    widget.set("accelerator", newValue);
    expect(widget.node.setAccelerator).toHaveBeenCalledWith(newValue);
  });

  test("should set disabledText", () => {
    const newValue = "Some String";
    widget.set("disabledText", newValue);
    expect(widget.node.setDisabledText).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyAccelerator", () => {
    const callback = jest.fn();

    widget.set("onNotifyAccelerator", callback);

    const handler = widget.handlers["notify::accelerator"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accelerator",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDisabledText", () => {
    const callback = jest.fn();

    widget.set("onNotifyDisabledText", callback);

    const handler = widget.handlers["notify::disabledText"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::disabledText",
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
