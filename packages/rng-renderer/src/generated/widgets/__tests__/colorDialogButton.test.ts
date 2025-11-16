import Gtk from "../../girs/node-gtk-4.0.js";
import {ColorDialogButton} from "../colorDialogButton.js";

describe("ColorDialogButton", () => {
  let widget: ColorDialogButton;

  beforeEach(() => {
    widget = new ColorDialogButton({}, ColorDialogButton.createNode());
  });

  test("should set dialog", () => {
    const newValue = undefined;
    widget.set("dialog", newValue);
    expect(widget.node.setDialog).toHaveBeenCalledWith(newValue);
  });

  test("should set rgba", () => {
    const newValue = undefined;
    widget.set("rgba", newValue);
    expect(widget.node.setRgba).toHaveBeenCalledWith(newValue);
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

  test("should connect onActivate", () => {
    const callback = jest.fn();

    widget.set("onActivate", callback);

    const handler = widget.handlers["activate"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyDialog", () => {
    const callback = jest.fn();

    widget.set("onNotifyDialog", callback);

    const handler = widget.handlers["notify::dialog"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::dialog",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRgba", () => {
    const callback = jest.fn();

    widget.set("onNotifyRgba", callback);

    const handler = widget.handlers["notify::rgba"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rgba",
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
