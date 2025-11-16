import Gtk from "../../girs/node-gtk-4.0.js";
import {Frame} from "../frame.js";

describe("Frame", () => {
  let widget: Frame;

  beforeEach(() => {
    widget = new Frame({}, Frame.createNode());
  });

  test("should set label", () => {
    const newValue = "Some String";
    widget.set("label", newValue);
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue);
  });

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("labelWidget", newValue);
    expect(widget.node.setLabelWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set labelXalign", () => {
    const newValue = 1;
    widget.set("labelXalign", newValue);
    expect(widget.node.setLabelAlign).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyChild", callback);

    const handler = widget.handlers["notify::child"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn();

    widget.set("onNotifyLabel", callback);

    const handler = widget.handlers["notify::label"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLabelWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyLabelWidget", callback);

    const handler = widget.handlers["notify::labelWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::labelWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLabelXalign", () => {
    const callback = jest.fn();

    widget.set("onNotifyLabelXalign", callback);

    const handler = widget.handlers["notify::labelXalign"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::labelXalign",
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

  test("should append child", () => {
    const child = new Frame({}, Frame.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new Frame({}, Frame.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new Frame({}, Frame.createNode());
    const sibling = new Frame({}, Frame.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
