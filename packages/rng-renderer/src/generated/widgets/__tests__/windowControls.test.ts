import Gtk from "../../girs/node-gtk-4.0.js";
import {WindowControls} from "../windowControls.js";

describe("WindowControls", () => {
  let widget: WindowControls;

  beforeEach(() => {
    widget = new WindowControls({}, WindowControls.createNode());
  });

  test("should set decorationLayout", () => {
    const newValue = "Some String";
    widget.set("decorationLayout", newValue);
    expect(widget.node.setDecorationLayout).toHaveBeenCalledWith(newValue);
  });

  test("should set side", () => {
    const newValue = Gtk.PackType.START;
    widget.set("side", newValue);
    expect(widget.node.setSide).toHaveBeenCalledWith(newValue);
  });

  test("should set useNativeControls", () => {
    const newValue = true;
    widget.set("useNativeControls", newValue);
    expect(widget.node.setUseNativeControls).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyDecorationLayout", () => {
    const callback = jest.fn();

    widget.set("onNotifyDecorationLayout", callback);

    const handler = widget.handlers["notify::decorationLayout"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::decorationLayout",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEmpty", () => {
    const callback = jest.fn();

    widget.set("onNotifyEmpty", callback);

    const handler = widget.handlers["notify::empty"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::empty",
      expect.any(Function)
    );
  });

  test("should connect onNotifySide", () => {
    const callback = jest.fn();

    widget.set("onNotifySide", callback);

    const handler = widget.handlers["notify::side"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::side",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseNativeControls", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseNativeControls", callback);

    const handler = widget.handlers["notify::useNativeControls"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useNativeControls",
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
