import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {DragIcon} from "../widgets.js";

describe("DragIcon", () => {
  let widget: DragIcon;

  beforeEach(() => {
    widget = new DragIcon({}, DragIcon.createNode());
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
    const child = new DragIcon({}, DragIcon.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new DragIcon({}, DragIcon.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new DragIcon({}, DragIcon.createNode());
    const sibling = new DragIcon({}, DragIcon.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
