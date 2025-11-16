import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Banner} from "../widgets.js";

describe("Banner", () => {
  let widget: Banner;

  beforeEach(() => {
    widget = new Banner({}, Banner.createNode());
  });

  test("should set buttonLabel", () => {
    const newValue = "Some String";
    widget.set("buttonLabel", newValue);
    expect(widget.node.setButtonLabel).toHaveBeenCalledWith(newValue);
  });

  test("should set buttonStyle", () => {
    const newValue = Adw.BannerButtonStyle.DEFAULT;
    widget.set("buttonStyle", newValue);
    expect(widget.node.setButtonStyle).toHaveBeenCalledWith(newValue);
  });

  test("should set revealed", () => {
    const newValue = true;
    widget.set("revealed", newValue);
    expect(widget.node.setRevealed).toHaveBeenCalledWith(newValue);
  });

  test("should set title", () => {
    const newValue = "Some String";
    widget.set("title", newValue);
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue);
  });

  test("should set useMarkup", () => {
    const newValue = true;
    widget.set("useMarkup", newValue);
    expect(widget.node.setUseMarkup).toHaveBeenCalledWith(newValue);
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

  test("should connect onButtonClicked", () => {
    const callback = jest.fn();

    widget.set("onButtonClicked", callback);

    const handler = widget.handlers["button-clicked"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "button-clicked",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyButtonLabel", () => {
    const callback = jest.fn();

    widget.set("onNotifyButtonLabel", callback);

    const handler = widget.handlers["notify::buttonLabel"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buttonLabel",
      expect.any(Function)
    );
  });

  test("should connect onNotifyButtonStyle", () => {
    const callback = jest.fn();

    widget.set("onNotifyButtonStyle", callback);

    const handler = widget.handlers["notify::buttonStyle"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buttonStyle",
      expect.any(Function)
    );
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
