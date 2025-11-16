import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ComboBoxText} from "@/generated/widgets.ts";

describe("ComboBoxText", () => {
  let widget: ComboBoxText;

  beforeEach(() => {
    widget = new ComboBoxText({}, ComboBoxText.createNode());
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

  test("should set editingCanceled", () => {
    const newValue = true;
    widget.set("editingCanceled", newValue);
    expect(widget.node.editingCanceled).toBe(newValue);
  });

  test("should connect onEditingDone", () => {
    const callback = jest.fn();

    widget.set("onEditingDone", callback);

    const handler = widget.handlers["editing-done"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "editing-done",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onRemoveWidget", () => {
    const callback = jest.fn();

    widget.set("onRemoveWidget", callback);

    const handler = widget.handlers["remove-widget"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "remove-widget",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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

  test("should connect onNotifyEditingCanceled", () => {
    const callback = jest.fn();

    widget.set("onNotifyEditingCanceled", callback);

    const handler = widget.handlers["notify::editingCanceled"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editingCanceled",
      expect.any(Function)
    );
  });
});
