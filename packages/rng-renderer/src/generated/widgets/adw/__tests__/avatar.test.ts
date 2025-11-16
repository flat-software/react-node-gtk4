import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Avatar} from "../widgets.js";

describe("Avatar", () => {
  let widget: Avatar;

  beforeEach(() => {
    widget = new Avatar({}, Avatar.createNode());
  });

  test("should set customImage", () => {
    const newValue = undefined;
    widget.set("customImage", newValue);
    expect(widget.node.setCustomImage).toHaveBeenCalledWith(newValue);
  });

  test("should set iconName", () => {
    const newValue = "Some String";
    widget.set("iconName", newValue);
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue);
  });

  test("should set showInitials", () => {
    const newValue = true;
    widget.set("showInitials", newValue);
    expect(widget.node.setShowInitials).toHaveBeenCalledWith(newValue);
  });

  test("should set size", () => {
    const newValue = 1;
    widget.set("size", newValue);
    expect(widget.node.setSize).toHaveBeenCalledWith(newValue);
  });

  test("should set text", () => {
    const newValue = "Some String";
    widget.set("text", newValue);
    expect(widget.node.setText).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyCustomImage", () => {
    const callback = jest.fn();

    widget.set("onNotifyCustomImage", callback);

    const handler = widget.handlers["notify::customImage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::customImage",
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

  test("should connect onNotifyShowInitials", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowInitials", callback);

    const handler = widget.handlers["notify::showInitials"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showInitials",
      expect.any(Function)
    );
  });

  test("should connect onNotifySize", () => {
    const callback = jest.fn();

    widget.set("onNotifySize", callback);

    const handler = widget.handlers["notify::size"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::size",
      expect.any(Function)
    );
  });

  test("should connect onNotifyText", () => {
    const callback = jest.fn();

    widget.set("onNotifyText", callback);

    const handler = widget.handlers["notify::text"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
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
