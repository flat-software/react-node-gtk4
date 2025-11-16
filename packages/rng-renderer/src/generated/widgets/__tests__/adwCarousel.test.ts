import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwCarousel} from "../adwCarousel.js";

describe("AdwCarousel", () => {
  let widget: AdwCarousel;

  beforeEach(() => {
    widget = new AdwCarousel({}, AdwCarousel.createNode());
  });

  test("should set allowLongSwipes", () => {
    const newValue = true;
    widget.set("allowLongSwipes", newValue);
    expect(widget.node.setAllowLongSwipes).toHaveBeenCalledWith(newValue);
  });

  test("should set allowMouseDrag", () => {
    const newValue = true;
    widget.set("allowMouseDrag", newValue);
    expect(widget.node.setAllowMouseDrag).toHaveBeenCalledWith(newValue);
  });

  test("should set allowScrollWheel", () => {
    const newValue = true;
    widget.set("allowScrollWheel", newValue);
    expect(widget.node.setAllowScrollWheel).toHaveBeenCalledWith(newValue);
  });

  test("should set interactive", () => {
    const newValue = true;
    widget.set("interactive", newValue);
    expect(widget.node.setInteractive).toHaveBeenCalledWith(newValue);
  });

  test("should set revealDuration", () => {
    const newValue = 1;
    widget.set("revealDuration", newValue);
    expect(widget.node.setRevealDuration).toHaveBeenCalledWith(newValue);
  });

  test("should set scrollParams", () => {
    const newValue = undefined;
    widget.set("scrollParams", newValue);
    expect(widget.node.setScrollParams).toHaveBeenCalledWith(newValue);
  });

  test("should set spacing", () => {
    const newValue = 1;
    widget.set("spacing", newValue);
    expect(widget.node.setSpacing).toHaveBeenCalledWith(newValue);
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL;
    widget.set("orientation", newValue);
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue);
  });

  test("should connect onPageChanged", () => {
    const callback = jest.fn();

    widget.set("onPageChanged", callback);

    const handler = widget.handlers["page-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "page-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyAllowLongSwipes", () => {
    const callback = jest.fn();

    widget.set("onNotifyAllowLongSwipes", callback);

    const handler = widget.handlers["notify::allowLongSwipes"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowLongSwipes",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAllowMouseDrag", () => {
    const callback = jest.fn();

    widget.set("onNotifyAllowMouseDrag", callback);

    const handler = widget.handlers["notify::allowMouseDrag"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowMouseDrag",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAllowScrollWheel", () => {
    const callback = jest.fn();

    widget.set("onNotifyAllowScrollWheel", callback);

    const handler = widget.handlers["notify::allowScrollWheel"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowScrollWheel",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInteractive", () => {
    const callback = jest.fn();

    widget.set("onNotifyInteractive", callback);

    const handler = widget.handlers["notify::interactive"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::interactive",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNPages", () => {
    const callback = jest.fn();

    widget.set("onNotifyNPages", callback);

    const handler = widget.handlers["notify::nPages"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::nPages",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPosition", () => {
    const callback = jest.fn();

    widget.set("onNotifyPosition", callback);

    const handler = widget.handlers["notify::position"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::position",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRevealDuration", () => {
    const callback = jest.fn();

    widget.set("onNotifyRevealDuration", callback);

    const handler = widget.handlers["notify::revealDuration"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::revealDuration",
      expect.any(Function)
    );
  });

  test("should connect onNotifyScrollParams", () => {
    const callback = jest.fn();

    widget.set("onNotifyScrollParams", callback);

    const handler = widget.handlers["notify::scrollParams"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::scrollParams",
      expect.any(Function)
    );
  });

  test("should connect onNotifySpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifySpacing", callback);

    const handler = widget.handlers["notify::spacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::spacing",
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn();

    widget.set("onNotifyOrientation", callback);

    const handler = widget.handlers["notify::orientation"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    );
  });
});
