import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {MessageDialog} from "@/generated/widgets.ts";

describe("MessageDialog", () => {
  let widget: MessageDialog;

  beforeEach(() => {
    widget = new MessageDialog({}, MessageDialog.createNode());
  });

  test("should set messageType", () => {
    const newValue = Gtk.MessageType.INFO;
    widget.set("messageType", newValue);
    expect(widget.node.messageType).toBe(newValue);
  });

  test("should set secondaryText", () => {
    const newValue = "Some String";
    widget.set("secondaryText", newValue);
    expect(widget.node.secondaryText).toBe(newValue);
  });

  test("should set secondaryUseMarkup", () => {
    const newValue = true;
    widget.set("secondaryUseMarkup", newValue);
    expect(widget.node.secondaryUseMarkup).toBe(newValue);
  });

  test("should set text", () => {
    const newValue = "Some String";
    widget.set("text", newValue);
    expect(widget.node.text).toBe(newValue);
  });

  test("should set useMarkup", () => {
    const newValue = true;
    widget.set("useMarkup", newValue);
    expect(widget.node.useMarkup).toBe(newValue);
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

  test("should connect onNotifyButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyButtons", callback);

    const handler = widget.handlers["notify::buttons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buttons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMessageArea", () => {
    const callback = jest.fn();

    widget.set("onNotifyMessageArea", callback);

    const handler = widget.handlers["notify::messageArea"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::messageArea",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMessageType", () => {
    const callback = jest.fn();

    widget.set("onNotifyMessageType", callback);

    const handler = widget.handlers["notify::messageType"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::messageType",
      expect.any(Function)
    );
  });

  test("should connect onNotifySecondaryText", () => {
    const callback = jest.fn();

    widget.set("onNotifySecondaryText", callback);

    const handler = widget.handlers["notify::secondaryText"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondaryText",
      expect.any(Function)
    );
  });

  test("should connect onNotifySecondaryUseMarkup", () => {
    const callback = jest.fn();

    widget.set("onNotifySecondaryUseMarkup", callback);

    const handler = widget.handlers["notify::secondaryUseMarkup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondaryUseMarkup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyText", () => {
    const callback = jest.fn();

    widget.set("onNotifyText", callback);

    const handler = widget.handlers["notify::text"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
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
});
