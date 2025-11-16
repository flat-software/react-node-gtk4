import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ColorChooserWidget} from "../widgets.js";

describe("ColorChooserWidget", () => {
  let widget: ColorChooserWidget;

  beforeEach(() => {
    widget = new ColorChooserWidget({}, ColorChooserWidget.createNode());
  });

  test("should set showEditor", () => {
    const newValue = true;
    widget.set("showEditor", newValue);
    expect(widget.node.showEditor).toBe(newValue);
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

  test("should set rgba", () => {
    const newValue = undefined;
    widget.set("rgba", newValue);
    expect(widget.node.setRgba).toHaveBeenCalledWith(newValue);
  });

  test("should set useAlpha", () => {
    const newValue = true;
    widget.set("useAlpha", newValue);
    expect(widget.node.setUseAlpha).toHaveBeenCalledWith(newValue);
  });

  test("should connect onColorActivated", () => {
    const callback = jest.fn();

    widget.set("onColorActivated", callback);

    const handler = widget.handlers["color-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "color-activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyShowEditor", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowEditor", callback);

    const handler = widget.handlers["notify::showEditor"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showEditor",
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

  test("should connect onNotifyRgba", () => {
    const callback = jest.fn();

    widget.set("onNotifyRgba", callback);

    const handler = widget.handlers["notify::rgba"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rgba",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseAlpha", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseAlpha", callback);

    const handler = widget.handlers["notify::useAlpha"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useAlpha",
      expect.any(Function)
    );
  });
});
