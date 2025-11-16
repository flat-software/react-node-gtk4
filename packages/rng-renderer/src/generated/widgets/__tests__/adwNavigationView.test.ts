import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AdwNavigationView} from "../adwNavigationView.js";

describe("AdwNavigationView", () => {
  let widget: AdwNavigationView;

  beforeEach(() => {
    widget = new AdwNavigationView({}, AdwNavigationView.createNode());
  });

  test("should set animateTransitions", () => {
    const newValue = true;
    widget.set("animateTransitions", newValue);
    expect(widget.node.setAnimateTransitions).toHaveBeenCalledWith(newValue);
  });

  test("should set hhomogeneous", () => {
    const newValue = true;
    widget.set("hhomogeneous", newValue);
    expect(widget.node.setHhomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set popOnEscape", () => {
    const newValue = true;
    widget.set("popOnEscape", newValue);
    expect(widget.node.setPopOnEscape).toHaveBeenCalledWith(newValue);
  });

  test("should set vhomogeneous", () => {
    const newValue = true;
    widget.set("vhomogeneous", newValue);
    expect(widget.node.setVhomogeneous).toHaveBeenCalledWith(newValue);
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

  test("should connect onGetNextPage", () => {
    const callback = jest.fn();

    widget.set("onGetNextPage", callback);

    const handler = widget.handlers["get-next-page"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "get-next-page",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPopped", () => {
    const callback = jest.fn();

    widget.set("onPopped", callback);

    const handler = widget.handlers["popped"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("popped", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPushed", () => {
    const callback = jest.fn();

    widget.set("onPushed", callback);

    const handler = widget.handlers["pushed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("pushed", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onReplaced", () => {
    const callback = jest.fn();

    widget.set("onReplaced", callback);

    const handler = widget.handlers["replaced"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "replaced",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyAnimateTransitions", () => {
    const callback = jest.fn();

    widget.set("onNotifyAnimateTransitions", callback);

    const handler = widget.handlers["notify::animateTransitions"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::animateTransitions",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHhomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyHhomogeneous", callback);

    const handler = widget.handlers["notify::hhomogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hhomogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNavigationStack", () => {
    const callback = jest.fn();

    widget.set("onNotifyNavigationStack", callback);

    const handler = widget.handlers["notify::navigationStack"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::navigationStack",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPopOnEscape", () => {
    const callback = jest.fn();

    widget.set("onNotifyPopOnEscape", callback);

    const handler = widget.handlers["notify::popOnEscape"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::popOnEscape",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVhomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyVhomogeneous", callback);

    const handler = widget.handlers["notify::vhomogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vhomogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisiblePage", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisiblePage", callback);

    const handler = widget.handlers["notify::visiblePage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visiblePage",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisiblePageTag", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisiblePageTag", callback);

    const handler = widget.handlers["notify::visiblePageTag"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visiblePageTag",
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
