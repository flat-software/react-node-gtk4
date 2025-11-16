import Gtk from "../../girs/node-gtk-4.0.js";
import {FontButton} from "../fontButton.js";

describe("FontButton", () => {
  let widget: FontButton;

  beforeEach(() => {
    widget = new FontButton({}, FontButton.createNode());
  });

  test("should set modal", () => {
    const newValue = true;
    widget.set("modal", newValue);
    expect(widget.node.setModal).toHaveBeenCalledWith(newValue);
  });

  test("should set title", () => {
    const newValue = "Some String";
    widget.set("title", newValue);
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue);
  });

  test("should set useFont", () => {
    const newValue = true;
    widget.set("useFont", newValue);
    expect(widget.node.setUseFont).toHaveBeenCalledWith(newValue);
  });

  test("should set useSize", () => {
    const newValue = true;
    widget.set("useSize", newValue);
    expect(widget.node.setUseSize).toHaveBeenCalledWith(newValue);
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

  test("should set font", () => {
    const newValue = "Some String";
    widget.set("font", newValue);
    expect(widget.node.setFont).toHaveBeenCalledWith(newValue);
  });

  test("should set fontDesc", () => {
    const newValue = undefined;
    widget.set("fontDesc", newValue);
    expect(widget.node.setFontDesc).toHaveBeenCalledWith(newValue);
  });

  test("should set language", () => {
    const newValue = "Some String";
    widget.set("language", newValue);
    expect(widget.node.setLanguage).toHaveBeenCalledWith(newValue);
  });

  test("should set level", () => {
    const newValue = Gtk.FontChooserLevel.FAMILY;
    widget.set("level", newValue);
    expect(widget.node.setLevel).toHaveBeenCalledWith(newValue);
  });

  test("should set previewText", () => {
    const newValue = "Some String";
    widget.set("previewText", newValue);
    expect(widget.node.setPreviewText).toHaveBeenCalledWith(newValue);
  });

  test("should set showPreviewEntry", () => {
    const newValue = true;
    widget.set("showPreviewEntry", newValue);
    expect(widget.node.setShowPreviewEntry).toHaveBeenCalledWith(newValue);
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

  test("should connect onFontSet", () => {
    const callback = jest.fn();

    widget.set("onFontSet", callback);

    const handler = widget.handlers["font-set"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "font-set",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onFontActivated", () => {
    const callback = jest.fn();

    widget.set("onFontActivated", callback);

    const handler = widget.handlers["font-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "font-activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyModal", () => {
    const callback = jest.fn();

    widget.set("onNotifyModal", callback);

    const handler = widget.handlers["notify::modal"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::modal",
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

  test("should connect onNotifyUseFont", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseFont", callback);

    const handler = widget.handlers["notify::useFont"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useFont",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseSize", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseSize", callback);

    const handler = widget.handlers["notify::useSize"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useSize",
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

  test("should connect onNotifyFont", () => {
    const callback = jest.fn();

    widget.set("onNotifyFont", callback);

    const handler = widget.handlers["notify::font"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::font",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFontDesc", () => {
    const callback = jest.fn();

    widget.set("onNotifyFontDesc", callback);

    const handler = widget.handlers["notify::fontDesc"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fontDesc",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFontFeatures", () => {
    const callback = jest.fn();

    widget.set("onNotifyFontFeatures", callback);

    const handler = widget.handlers["notify::fontFeatures"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fontFeatures",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLanguage", () => {
    const callback = jest.fn();

    widget.set("onNotifyLanguage", callback);

    const handler = widget.handlers["notify::language"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::language",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLevel", () => {
    const callback = jest.fn();

    widget.set("onNotifyLevel", callback);

    const handler = widget.handlers["notify::level"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::level",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPreviewText", () => {
    const callback = jest.fn();

    widget.set("onNotifyPreviewText", callback);

    const handler = widget.handlers["notify::previewText"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::previewText",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowPreviewEntry", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowPreviewEntry", callback);

    const handler = widget.handlers["notify::showPreviewEntry"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showPreviewEntry",
      expect.any(Function)
    );
  });
});
