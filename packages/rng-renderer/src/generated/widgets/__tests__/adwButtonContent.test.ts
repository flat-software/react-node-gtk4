import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwButtonContent} from "../adwButtonContent.js";

describe("AdwButtonContent", () => {
  let widget: AdwButtonContent;

  beforeEach(() => {
    widget = new AdwButtonContent({}, AdwButtonContent.createNode());
  });

  test("should set canShrink", () => {
    const newValue = true;
    widget.set("canShrink", newValue);
    expect(widget.node.setCanShrink).toHaveBeenCalledWith(newValue);
  });

  test("should set iconName", () => {
    const newValue = "Some String";
    widget.set("iconName", newValue);
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue);
  });

  test("should set label", () => {
    const newValue = "Some String";
    widget.set("label", newValue);
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue);
  });

  test("should set useUnderline", () => {
    const newValue = true;
    widget.set("useUnderline", newValue);
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn();

    widget.set("onNotifyIconName", callback);

    const handler = widget.handlers["notify::iconName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::iconName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn();

    widget.set("onNotifyLabel", callback);

    const handler = widget.handlers["notify::label"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseUnderline", callback);

    const handler = widget.handlers["notify::useUnderline"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useUnderline",
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
