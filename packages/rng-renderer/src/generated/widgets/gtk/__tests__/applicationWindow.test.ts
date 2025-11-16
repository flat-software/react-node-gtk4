import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ApplicationWindow} from "../widgets.js";

describe("ApplicationWindow", () => {
  let widget: ApplicationWindow;

  beforeEach(() => {
    widget = new ApplicationWindow({}, ApplicationWindow.createNode());
  });

  test("should set showMenubar", () => {
    const newValue = true;
    widget.set("showMenubar", newValue);
    expect(widget.node.setShowMenubar).toHaveBeenCalledWith(newValue);
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

  test("should connect onActionAdded", () => {
    const callback = jest.fn();

    widget.set("onActionAdded", callback);

    const handler = widget.handlers["action-added"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "action-added",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onActionEnabledChanged", () => {
    const callback = jest.fn();

    widget.set("onActionEnabledChanged", callback);

    const handler = widget.handlers["action-enabled-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "action-enabled-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onActionRemoved", () => {
    const callback = jest.fn();

    widget.set("onActionRemoved", callback);

    const handler = widget.handlers["action-removed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "action-removed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onActionStateChanged", () => {
    const callback = jest.fn();

    widget.set("onActionStateChanged", callback);

    const handler = widget.handlers["action-state-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "action-state-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyShowMenubar", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowMenubar", callback);

    const handler = widget.handlers["notify::showMenubar"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showMenubar",
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
