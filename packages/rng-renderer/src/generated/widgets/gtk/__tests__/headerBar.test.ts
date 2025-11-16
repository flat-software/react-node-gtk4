import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {HeaderBar} from "../widgets.js";

describe("HeaderBar", () => {
  let widget: HeaderBar;

  beforeEach(() => {
    widget = new HeaderBar({}, HeaderBar.createNode());
  });

  test("should set decorationLayout", () => {
    const newValue = "Some String";
    widget.set("decorationLayout", newValue);
    expect(widget.node.setDecorationLayout).toHaveBeenCalledWith(newValue);
  });

  test("should set showTitleButtons", () => {
    const newValue = true;
    widget.set("showTitleButtons", newValue);
    expect(widget.node.setShowTitleButtons).toHaveBeenCalledWith(newValue);
  });

  test("should set titleWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("titleWidget", newValue);
    expect(widget.node.setTitleWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set useNativeControls", () => {
    const newValue = true;
    widget.set("useNativeControls", newValue);
    expect(widget.node.setUseNativeControls).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyDecorationLayout", () => {
    const callback = jest.fn();

    widget.set("onNotifyDecorationLayout", callback);

    const handler = widget.handlers["notify::decorationLayout"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::decorationLayout",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowTitleButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowTitleButtons", callback);

    const handler = widget.handlers["notify::showTitleButtons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showTitleButtons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTitleWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitleWidget", callback);

    const handler = widget.handlers["notify::titleWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::titleWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseNativeControls", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseNativeControls", callback);

    const handler = widget.handlers["notify::useNativeControls"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useNativeControls",
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
