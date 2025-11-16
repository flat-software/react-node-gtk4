import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {HeaderBar} from "../widgets.js";

describe("HeaderBar", () => {
  let widget: HeaderBar;

  beforeEach(() => {
    widget = new HeaderBar({}, HeaderBar.createNode());
  });

  test("should set centeringPolicy", () => {
    const newValue = Adw.CenteringPolicy.LOOSE;
    widget.set("centeringPolicy", newValue);
    expect(widget.node.setCenteringPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set decorationLayout", () => {
    const newValue = "Some String";
    widget.set("decorationLayout", newValue);
    expect(widget.node.setDecorationLayout).toHaveBeenCalledWith(newValue);
  });

  test("should set showBackButton", () => {
    const newValue = true;
    widget.set("showBackButton", newValue);
    expect(widget.node.setShowBackButton).toHaveBeenCalledWith(newValue);
  });

  test("should set showEndTitleButtons", () => {
    const newValue = true;
    widget.set("showEndTitleButtons", newValue);
    expect(widget.node.setShowEndTitleButtons).toHaveBeenCalledWith(newValue);
  });

  test("should set showStartTitleButtons", () => {
    const newValue = true;
    widget.set("showStartTitleButtons", newValue);
    expect(widget.node.setShowStartTitleButtons).toHaveBeenCalledWith(newValue);
  });

  test("should set showTitle", () => {
    const newValue = true;
    widget.set("showTitle", newValue);
    expect(widget.node.setShowTitle).toHaveBeenCalledWith(newValue);
  });

  test("should set titleWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("titleWidget", newValue);
    expect(widget.node.setTitleWidget).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyCenteringPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyCenteringPolicy", callback);

    const handler = widget.handlers["notify::centeringPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::centeringPolicy",
      expect.any(Function)
    );
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

  test("should connect onNotifyShowBackButton", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowBackButton", callback);

    const handler = widget.handlers["notify::showBackButton"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showBackButton",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowEndTitleButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowEndTitleButtons", callback);

    const handler = widget.handlers["notify::showEndTitleButtons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showEndTitleButtons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowStartTitleButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowStartTitleButtons", callback);

    const handler = widget.handlers["notify::showStartTitleButtons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showStartTitleButtons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowTitle", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowTitle", callback);

    const handler = widget.handlers["notify::showTitle"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showTitle",
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
