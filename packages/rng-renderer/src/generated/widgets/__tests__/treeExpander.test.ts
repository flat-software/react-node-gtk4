import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {TreeExpander} from "../treeExpander.js";

describe("TreeExpander", () => {
  let widget: TreeExpander;

  beforeEach(() => {
    widget = new TreeExpander({}, TreeExpander.createNode());
  });

  test("should set hideExpander", () => {
    const newValue = true;
    widget.set("hideExpander", newValue);
    expect(widget.node.setHideExpander).toHaveBeenCalledWith(newValue);
  });

  test("should set indentForDepth", () => {
    const newValue = true;
    widget.set("indentForDepth", newValue);
    expect(widget.node.setIndentForDepth).toHaveBeenCalledWith(newValue);
  });

  test("should set indentForIcon", () => {
    const newValue = true;
    widget.set("indentForIcon", newValue);
    expect(widget.node.setIndentForIcon).toHaveBeenCalledWith(newValue);
  });

  test("should set listRow", () => {
    const newValue = undefined;
    widget.set("listRow", newValue);
    expect(widget.node.setListRow).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyHideExpander", () => {
    const callback = jest.fn();

    widget.set("onNotifyHideExpander", callback);

    const handler = widget.handlers["notify::hideExpander"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hideExpander",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIndentForDepth", () => {
    const callback = jest.fn();

    widget.set("onNotifyIndentForDepth", callback);

    const handler = widget.handlers["notify::indentForDepth"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::indentForDepth",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIndentForIcon", () => {
    const callback = jest.fn();

    widget.set("onNotifyIndentForIcon", callback);

    const handler = widget.handlers["notify::indentForIcon"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::indentForIcon",
      expect.any(Function)
    );
  });

  test("should connect onNotifyItem", () => {
    const callback = jest.fn();

    widget.set("onNotifyItem", callback);

    const handler = widget.handlers["notify::item"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::item",
      expect.any(Function)
    );
  });

  test("should connect onNotifyListRow", () => {
    const callback = jest.fn();

    widget.set("onNotifyListRow", callback);

    const handler = widget.handlers["notify::listRow"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::listRow",
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
    const child = new TreeExpander({}, TreeExpander.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new TreeExpander({}, TreeExpander.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new TreeExpander({}, TreeExpander.createNode());
    const sibling = new TreeExpander({}, TreeExpander.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
