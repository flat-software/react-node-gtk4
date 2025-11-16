import Gdk from "@/generated/girs/node-gdk-4.0.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {GLArea} from "../gLArea.js";

describe("GLArea", () => {
  let widget: GLArea;

  beforeEach(() => {
    widget = new GLArea({}, GLArea.createNode());
  });

  test("should set allowedApis", () => {
    const newValue = Gdk.GLAPI.GL;
    widget.set("allowedApis", newValue);
    expect(widget.node.setAllowedApis).toHaveBeenCalledWith(newValue);
  });

  test("should set autoRender", () => {
    const newValue = true;
    widget.set("autoRender", newValue);
    expect(widget.node.setAutoRender).toHaveBeenCalledWith(newValue);
  });

  test("should set hasDepthBuffer", () => {
    const newValue = true;
    widget.set("hasDepthBuffer", newValue);
    expect(widget.node.setHasDepthBuffer).toHaveBeenCalledWith(newValue);
  });

  test("should set hasStencilBuffer", () => {
    const newValue = true;
    widget.set("hasStencilBuffer", newValue);
    expect(widget.node.setHasStencilBuffer).toHaveBeenCalledWith(newValue);
  });

  test("should set useEs", () => {
    const newValue = true;
    widget.set("useEs", newValue);
    expect(widget.node.setUseEs).toHaveBeenCalledWith(newValue);
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

  test("should connect onCreateContext", () => {
    const callback = jest.fn();

    widget.set("onCreateContext", callback);

    const handler = widget.handlers["create-context"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "create-context",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onRender", () => {
    const callback = jest.fn();

    widget.set("onRender", callback);

    const handler = widget.handlers["render"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("render", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onResize", () => {
    const callback = jest.fn();

    widget.set("onResize", callback);

    const handler = widget.handlers["resize"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyAllowedApis", () => {
    const callback = jest.fn();

    widget.set("onNotifyAllowedApis", callback);

    const handler = widget.handlers["notify::allowedApis"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowedApis",
      expect.any(Function)
    );
  });

  test("should connect onNotifyApi", () => {
    const callback = jest.fn();

    widget.set("onNotifyApi", callback);

    const handler = widget.handlers["notify::api"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::api",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAutoRender", () => {
    const callback = jest.fn();

    widget.set("onNotifyAutoRender", callback);

    const handler = widget.handlers["notify::autoRender"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::autoRender",
      expect.any(Function)
    );
  });

  test("should connect onNotifyContext", () => {
    const callback = jest.fn();

    widget.set("onNotifyContext", callback);

    const handler = widget.handlers["notify::context"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::context",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHasDepthBuffer", () => {
    const callback = jest.fn();

    widget.set("onNotifyHasDepthBuffer", callback);

    const handler = widget.handlers["notify::hasDepthBuffer"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hasDepthBuffer",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHasStencilBuffer", () => {
    const callback = jest.fn();

    widget.set("onNotifyHasStencilBuffer", callback);

    const handler = widget.handlers["notify::hasStencilBuffer"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hasStencilBuffer",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseEs", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseEs", callback);

    const handler = widget.handlers["notify::useEs"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useEs",
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
