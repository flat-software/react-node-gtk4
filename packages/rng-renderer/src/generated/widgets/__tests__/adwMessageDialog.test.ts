import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AdwMessageDialog} from "../adwMessageDialog.js";

describe("AdwMessageDialog", () => {
  let widget: AdwMessageDialog;

  beforeEach(() => {
    widget = new AdwMessageDialog({}, AdwMessageDialog.createNode());
  });

  test("should set body", () => {
    const newValue = "Some String";
    widget.set("body", newValue);
    expect(widget.node.setBody).toHaveBeenCalledWith(newValue);
  });

  test("should set bodyUseMarkup", () => {
    const newValue = true;
    widget.set("bodyUseMarkup", newValue);
    expect(widget.node.setBodyUseMarkup).toHaveBeenCalledWith(newValue);
  });

  test("should set closeResponse", () => {
    const newValue = "Some String";
    widget.set("closeResponse", newValue);
    expect(widget.node.setCloseResponse).toHaveBeenCalledWith(newValue);
  });

  test("should set defaultResponse", () => {
    const newValue = "Some String";
    widget.set("defaultResponse", newValue);
    expect(widget.node.setDefaultResponse).toHaveBeenCalledWith(newValue);
  });

  test("should set extraChild", () => {
    const newValue = new Gtk.Widget();
    widget.set("extraChild", newValue);
    expect(widget.node.setExtraChild).toHaveBeenCalledWith(newValue);
  });

  test("should set heading", () => {
    const newValue = "Some String";
    widget.set("heading", newValue);
    expect(widget.node.setHeading).toHaveBeenCalledWith(newValue);
  });

  test("should set headingUseMarkup", () => {
    const newValue = true;
    widget.set("headingUseMarkup", newValue);
    expect(widget.node.setHeadingUseMarkup).toHaveBeenCalledWith(newValue);
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

  test("should connect onResponse", () => {
    const callback = jest.fn();

    widget.set("onResponse", callback);

    const handler = widget.handlers["response"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "response",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyBody", () => {
    const callback = jest.fn();

    widget.set("onNotifyBody", callback);

    const handler = widget.handlers["notify::body"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::body",
      expect.any(Function)
    );
  });

  test("should connect onNotifyBodyUseMarkup", () => {
    const callback = jest.fn();

    widget.set("onNotifyBodyUseMarkup", callback);

    const handler = widget.handlers["notify::bodyUseMarkup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::bodyUseMarkup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCloseResponse", () => {
    const callback = jest.fn();

    widget.set("onNotifyCloseResponse", callback);

    const handler = widget.handlers["notify::closeResponse"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::closeResponse",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDefaultResponse", () => {
    const callback = jest.fn();

    widget.set("onNotifyDefaultResponse", callback);

    const handler = widget.handlers["notify::defaultResponse"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::defaultResponse",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraChild", callback);

    const handler = widget.handlers["notify::extraChild"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraChild",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeading", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeading", callback);

    const handler = widget.handlers["notify::heading"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::heading",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeadingUseMarkup", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeadingUseMarkup", callback);

    const handler = widget.handlers["notify::headingUseMarkup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::headingUseMarkup",
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
