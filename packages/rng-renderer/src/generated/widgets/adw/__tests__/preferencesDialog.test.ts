import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {PreferencesDialog} from "@/generated/widgets.ts";

describe("PreferencesDialog", () => {
  let widget: PreferencesDialog;

  beforeEach(() => {
    widget = new PreferencesDialog({}, PreferencesDialog.createNode());
  });

  test("should set searchEnabled", () => {
    const newValue = true;
    widget.set("searchEnabled", newValue);
    expect(widget.node.setSearchEnabled).toHaveBeenCalledWith(newValue);
  });

  test("should set visiblePage", () => {
    const newValue = new Gtk.Widget();
    widget.set("visiblePage", newValue);
    expect(widget.node.setVisiblePage).toHaveBeenCalledWith(newValue);
  });

  test("should set visiblePageName", () => {
    const newValue = "Some String";
    widget.set("visiblePageName", newValue);
    expect(widget.node.setVisiblePageName).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifySearchEnabled", () => {
    const callback = jest.fn();

    widget.set("onNotifySearchEnabled", callback);

    const handler = widget.handlers["notify::searchEnabled"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::searchEnabled",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisiblePage", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisiblePage", callback);

    const handler = widget.handlers["notify::visiblePage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visiblePage",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisiblePageName", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisiblePageName", callback);

    const handler = widget.handlers["notify::visiblePageName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visiblePageName",
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
