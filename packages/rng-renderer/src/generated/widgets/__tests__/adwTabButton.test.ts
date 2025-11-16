import Adw from "../../girs/node-adw-1.js";
import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwTabButton} from "../adwTabButton.js";

describe("AdwTabButton", () => {
  let widget: AdwTabButton;

  beforeEach(() => {
    widget = new AdwTabButton({}, AdwTabButton.createNode());
  });

  test("should set view", () => {
    const newValue = new Adw.TabView();
    widget.set("view", newValue);
    expect(widget.node.setView).toHaveBeenCalledWith(newValue);
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

  test("should connect onClicked", () => {
    const callback = jest.fn();

    widget.set("onClicked", callback);

    const handler = widget.handlers["clicked"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "clicked",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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
