import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AppChooserDialog} from "../widgets.js";

describe("AppChooserDialog", () => {
  let widget: AppChooserDialog;

  beforeEach(() => {
    widget = new AppChooserDialog({}, AppChooserDialog.createNode());
  });

  test("should set heading", () => {
    const newValue = "Some String";
    widget.set("heading", newValue);
    expect(widget.node.setHeading).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyGfile", () => {
    const callback = jest.fn();

    widget.set("onNotifyGfile", callback);

    const handler = widget.handlers["notify::gfile"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::gfile",
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
