import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {NavigationPage} from "../widgets.js";

describe("NavigationPage", () => {
  let widget: NavigationPage;

  beforeEach(() => {
    widget = new NavigationPage({}, NavigationPage.createNode());
  });

  test("should set canPop", () => {
    const newValue = true;
    widget.set("canPop", newValue);
    expect(widget.node.setCanPop).toHaveBeenCalledWith(newValue);
  });

  test("should set tag", () => {
    const newValue = "Some String";
    widget.set("tag", newValue);
    expect(widget.node.setTag).toHaveBeenCalledWith(newValue);
  });

  test("should set title", () => {
    const newValue = "Some String";
    widget.set("title", newValue);
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue);
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

  test("should connect onHidden", () => {
    const callback = jest.fn();

    widget.set("onHidden", callback);

    const handler = widget.handlers["hidden"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("hidden", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onHiding", () => {
    const callback = jest.fn();

    widget.set("onHiding", callback);

    const handler = widget.handlers["hiding"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("hiding", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onShowing", () => {
    const callback = jest.fn();

    widget.set("onShowing", callback);

    const handler = widget.handlers["showing"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "showing",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onShown", () => {
    const callback = jest.fn();

    widget.set("onShown", callback);

    const handler = widget.handlers["shown"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("shown", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyCanPop", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanPop", callback);

    const handler = widget.handlers["notify::canPop"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canPop",
      expect.any(Function)
    );
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

  test("should connect onNotifyTag", () => {
    const callback = jest.fn();

    widget.set("onNotifyTag", callback);

    const handler = widget.handlers["notify::tag"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tag",
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
    const child = new NavigationPage({}, NavigationPage.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new NavigationPage({}, NavigationPage.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new NavigationPage({}, NavigationPage.createNode());
    const sibling = new NavigationPage({}, NavigationPage.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
