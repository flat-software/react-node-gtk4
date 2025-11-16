import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwPreferencesRow} from "../adwPreferencesRow.js";

describe("AdwPreferencesRow", () => {
  let widget: AdwPreferencesRow;

  beforeEach(() => {
    widget = new AdwPreferencesRow({}, AdwPreferencesRow.createNode());
  });

  test("should set title", () => {
    const newValue = "Some String";
    widget.set("title", newValue);
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue);
  });

  test("should set titleSelectable", () => {
    const newValue = true;
    widget.set("titleSelectable", newValue);
    expect(widget.node.setTitleSelectable).toHaveBeenCalledWith(newValue);
  });

  test("should set useMarkup", () => {
    const newValue = true;
    widget.set("useMarkup", newValue);
    expect(widget.node.setUseMarkup).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyTitle", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitle", callback);

    const handler = widget.handlers["notify::title"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTitleSelectable", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitleSelectable", callback);

    const handler = widget.handlers["notify::titleSelectable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::titleSelectable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseMarkup", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseMarkup", callback);

    const handler = widget.handlers["notify::useMarkup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useMarkup",
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
