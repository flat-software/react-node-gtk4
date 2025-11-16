import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ViewSwitcher} from "../widgets.js";

describe("ViewSwitcher", () => {
  let widget: ViewSwitcher;

  beforeEach(() => {
    widget = new ViewSwitcher({}, ViewSwitcher.createNode());
  });

  test("should set policy", () => {
    const newValue = Adw.ViewSwitcherPolicy.NARROW;
    widget.set("policy", newValue);
    expect(widget.node.setPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set stack", () => {
    const newValue = new Adw.ViewStack();
    widget.set("stack", newValue);
    expect(widget.node.setStack).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyPolicy", callback);

    const handler = widget.handlers["notify::policy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::policy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyStack", () => {
    const callback = jest.fn();

    widget.set("onNotifyStack", callback);

    const handler = widget.handlers["notify::stack"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::stack",
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
