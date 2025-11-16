import Gtk from "../../girs/node-gtk-4.0.js";
import {Switch} from "../switch.js";

describe("Switch", () => {
  let widget: Switch;

  beforeEach(() => {
    widget = new Switch({}, Switch.createNode());
  });

  test("should set active", () => {
    const newValue = true;
    widget.set("active", newValue);
    expect(widget.node.setActive).toHaveBeenCalledWith(newValue);
  });

  test("should set state", () => {
    const newValue = true;
    widget.set("state", newValue);
    expect(widget.node.setState).toHaveBeenCalledWith(newValue);
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

  test("should set actionName", () => {
    const newValue = "Some String";
    widget.set("actionName", newValue);
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue);
  });

  test("should set actionTarget", () => {
    const newValue = undefined;
    widget.set("actionTarget", newValue);
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue);
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

  test("should connect onStateSet", () => {
    const callback = jest.fn();

    widget.set("onStateSet", callback);

    const handler = widget.handlers["state-set"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "state-set",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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

  test("should connect onNotifyState", () => {
    const callback = jest.fn();

    widget.set("onNotifyState", callback);

    const handler = widget.handlers["notify::state"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::state",
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionName", callback);

    const handler = widget.handlers["notify::actionName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionTarget", callback);

    const handler = widget.handlers["notify::actionTarget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionTarget",
      expect.any(Function)
    );
  });
});
