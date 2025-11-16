import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AppChooserWidget} from "../widgets.js";

describe("AppChooserWidget", () => {
  let widget: AppChooserWidget;

  beforeEach(() => {
    widget = new AppChooserWidget({}, AppChooserWidget.createNode());
  });

  test("should set defaultText", () => {
    const newValue = "Some String";
    widget.set("defaultText", newValue);
    expect(widget.node.setDefaultText).toHaveBeenCalledWith(newValue);
  });

  test("should set showAll", () => {
    const newValue = true;
    widget.set("showAll", newValue);
    expect(widget.node.setShowAll).toHaveBeenCalledWith(newValue);
  });

  test("should set showDefault", () => {
    const newValue = true;
    widget.set("showDefault", newValue);
    expect(widget.node.setShowDefault).toHaveBeenCalledWith(newValue);
  });

  test("should set showFallback", () => {
    const newValue = true;
    widget.set("showFallback", newValue);
    expect(widget.node.setShowFallback).toHaveBeenCalledWith(newValue);
  });

  test("should set showOther", () => {
    const newValue = true;
    widget.set("showOther", newValue);
    expect(widget.node.setShowOther).toHaveBeenCalledWith(newValue);
  });

  test("should set showRecommended", () => {
    const newValue = true;
    widget.set("showRecommended", newValue);
    expect(widget.node.setShowRecommended).toHaveBeenCalledWith(newValue);
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

  test("should connect onApplicationActivated", () => {
    const callback = jest.fn();

    widget.set("onApplicationActivated", callback);

    const handler = widget.handlers["application-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "application-activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onApplicationSelected", () => {
    const callback = jest.fn();

    widget.set("onApplicationSelected", callback);

    const handler = widget.handlers["application-selected"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "application-selected",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyDefaultText", () => {
    const callback = jest.fn();

    widget.set("onNotifyDefaultText", callback);

    const handler = widget.handlers["notify::defaultText"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::defaultText",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowAll", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowAll", callback);

    const handler = widget.handlers["notify::showAll"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showAll",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowDefault", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowDefault", callback);

    const handler = widget.handlers["notify::showDefault"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showDefault",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowFallback", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowFallback", callback);

    const handler = widget.handlers["notify::showFallback"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showFallback",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowOther", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowOther", callback);

    const handler = widget.handlers["notify::showOther"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showOther",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowRecommended", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowRecommended", callback);

    const handler = widget.handlers["notify::showRecommended"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showRecommended",
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

  test("should connect onNotifyContentType", () => {
    const callback = jest.fn();

    widget.set("onNotifyContentType", callback);

    const handler = widget.handlers["notify::contentType"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::contentType",
      expect.any(Function)
    );
  });
});
