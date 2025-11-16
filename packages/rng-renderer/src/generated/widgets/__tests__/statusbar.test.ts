import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Statusbar} from "../statusbar.js";

describe("Statusbar", () => {
  let widget: Statusbar;

  beforeEach(() => {
    widget = new Statusbar({}, Statusbar.createNode());
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

  test("should connect onTextPopped", () => {
    const callback = jest.fn();

    widget.set("onTextPopped", callback);

    const handler = widget.handlers["text-popped"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "text-popped",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onTextPushed", () => {
    const callback = jest.fn();

    widget.set("onTextPushed", callback);

    const handler = widget.handlers["text-pushed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "text-pushed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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
