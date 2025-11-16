import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {LockButton} from "@/generated/widgets.ts";

describe("LockButton", () => {
  let widget: LockButton;

  beforeEach(() => {
    widget = new LockButton({}, LockButton.createNode());
  });

  test("should set permission", () => {
    const newValue = undefined;
    widget.set("permission", newValue);
    expect(widget.node.setPermission).toHaveBeenCalledWith(newValue);
  });

  test("should set textLock", () => {
    const newValue = "Some String";
    widget.set("textLock", newValue);
    expect(widget.node.textLock).toBe(newValue);
  });

  test("should set textUnlock", () => {
    const newValue = "Some String";
    widget.set("textUnlock", newValue);
    expect(widget.node.textUnlock).toBe(newValue);
  });

  test("should set tooltipLock", () => {
    const newValue = "Some String";
    widget.set("tooltipLock", newValue);
    expect(widget.node.tooltipLock).toBe(newValue);
  });

  test("should set tooltipNotAuthorized", () => {
    const newValue = "Some String";
    widget.set("tooltipNotAuthorized", newValue);
    expect(widget.node.tooltipNotAuthorized).toBe(newValue);
  });

  test("should set tooltipUnlock", () => {
    const newValue = "Some String";
    widget.set("tooltipUnlock", newValue);
    expect(widget.node.tooltipUnlock).toBe(newValue);
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

  test("should connect onNotifyPermission", () => {
    const callback = jest.fn();

    widget.set("onNotifyPermission", callback);

    const handler = widget.handlers["notify::permission"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::permission",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTextLock", () => {
    const callback = jest.fn();

    widget.set("onNotifyTextLock", callback);

    const handler = widget.handlers["notify::textLock"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::textLock",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTextUnlock", () => {
    const callback = jest.fn();

    widget.set("onNotifyTextUnlock", callback);

    const handler = widget.handlers["notify::textUnlock"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::textUnlock",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTooltipLock", () => {
    const callback = jest.fn();

    widget.set("onNotifyTooltipLock", callback);

    const handler = widget.handlers["notify::tooltipLock"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltipLock",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTooltipNotAuthorized", () => {
    const callback = jest.fn();

    widget.set("onNotifyTooltipNotAuthorized", callback);

    const handler = widget.handlers["notify::tooltipNotAuthorized"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltipNotAuthorized",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTooltipUnlock", () => {
    const callback = jest.fn();

    widget.set("onNotifyTooltipUnlock", callback);

    const handler = widget.handlers["notify::tooltipUnlock"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltipUnlock",
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
