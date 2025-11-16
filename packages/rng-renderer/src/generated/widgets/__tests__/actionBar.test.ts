import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ActionBar} from "../actionBar.js";

describe("ActionBar", () => {
  let widget: ActionBar;

  beforeEach(() => {
    widget = new ActionBar({}, ActionBar.createNode());
  });

  test("should set revealed", () => {
    const newValue = true;
    widget.set("revealed", newValue);
    expect(widget.node.setRevealed).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyRevealed", () => {
    const callback = jest.fn();

    widget.set("onNotifyRevealed", callback);

    const handler = widget.handlers["notify::revealed"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::revealed",
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
