import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {WrapBox} from "@/generated/widgets.ts";

describe("WrapBox", () => {
  let widget: WrapBox;

  beforeEach(() => {
    widget = new WrapBox({}, WrapBox.createNode());
  });

  test("should set align", () => {
    const newValue = 1;
    widget.set("align", newValue);
    expect(widget.node.setAlign).toHaveBeenCalledWith(newValue);
  });

  test("should set childSpacing", () => {
    const newValue = 1;
    widget.set("childSpacing", newValue);
    expect(widget.node.setChildSpacing).toHaveBeenCalledWith(newValue);
  });

  test("should set childSpacingUnit", () => {
    const newValue = Adw.LengthUnit.PX;
    widget.set("childSpacingUnit", newValue);
    expect(widget.node.setChildSpacingUnit).toHaveBeenCalledWith(newValue);
  });

  test("should set justify", () => {
    const newValue = Adw.JustifyMode.NONE;
    widget.set("justify", newValue);
    expect(widget.node.setJustify).toHaveBeenCalledWith(newValue);
  });

  test("should set justifyLastLine", () => {
    const newValue = true;
    widget.set("justifyLastLine", newValue);
    expect(widget.node.setJustifyLastLine).toHaveBeenCalledWith(newValue);
  });

  test("should set lineHomogeneous", () => {
    const newValue = true;
    widget.set("lineHomogeneous", newValue);
    expect(widget.node.setLineHomogeneous).toHaveBeenCalledWith(newValue);
  });

  test("should set lineSpacing", () => {
    const newValue = 1;
    widget.set("lineSpacing", newValue);
    expect(widget.node.setLineSpacing).toHaveBeenCalledWith(newValue);
  });

  test("should set lineSpacingUnit", () => {
    const newValue = Adw.LengthUnit.PX;
    widget.set("lineSpacingUnit", newValue);
    expect(widget.node.setLineSpacingUnit).toHaveBeenCalledWith(newValue);
  });

  test("should set naturalLineLength", () => {
    const newValue = 1;
    widget.set("naturalLineLength", newValue);
    expect(widget.node.setNaturalLineLength).toHaveBeenCalledWith(newValue);
  });

  test("should set naturalLineLengthUnit", () => {
    const newValue = Adw.LengthUnit.PX;
    widget.set("naturalLineLengthUnit", newValue);
    expect(widget.node.setNaturalLineLengthUnit).toHaveBeenCalledWith(newValue);
  });

  test("should set packDirection", () => {
    const newValue = Adw.PackDirection.START_TO_END;
    widget.set("packDirection", newValue);
    expect(widget.node.setPackDirection).toHaveBeenCalledWith(newValue);
  });

  test("should set wrapPolicy", () => {
    const newValue = Adw.WrapPolicy.MINIMUM;
    widget.set("wrapPolicy", newValue);
    expect(widget.node.setWrapPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set wrapReverse", () => {
    const newValue = true;
    widget.set("wrapReverse", newValue);
    expect(widget.node.setWrapReverse).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyAlign", () => {
    const callback = jest.fn();

    widget.set("onNotifyAlign", callback);

    const handler = widget.handlers["notify::align"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::align",
      expect.any(Function)
    );
  });

  test("should connect onNotifyChildSpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifyChildSpacing", callback);

    const handler = widget.handlers["notify::childSpacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::childSpacing",
      expect.any(Function)
    );
  });

  test("should connect onNotifyChildSpacingUnit", () => {
    const callback = jest.fn();

    widget.set("onNotifyChildSpacingUnit", callback);

    const handler = widget.handlers["notify::childSpacingUnit"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::childSpacingUnit",
      expect.any(Function)
    );
  });

  test("should connect onNotifyJustify", () => {
    const callback = jest.fn();

    widget.set("onNotifyJustify", callback);

    const handler = widget.handlers["notify::justify"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::justify",
      expect.any(Function)
    );
  });

  test("should connect onNotifyJustifyLastLine", () => {
    const callback = jest.fn();

    widget.set("onNotifyJustifyLastLine", callback);

    const handler = widget.handlers["notify::justifyLastLine"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::justifyLastLine",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLineHomogeneous", () => {
    const callback = jest.fn();

    widget.set("onNotifyLineHomogeneous", callback);

    const handler = widget.handlers["notify::lineHomogeneous"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::lineHomogeneous",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLineSpacing", () => {
    const callback = jest.fn();

    widget.set("onNotifyLineSpacing", callback);

    const handler = widget.handlers["notify::lineSpacing"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::lineSpacing",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLineSpacingUnit", () => {
    const callback = jest.fn();

    widget.set("onNotifyLineSpacingUnit", callback);

    const handler = widget.handlers["notify::lineSpacingUnit"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::lineSpacingUnit",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNaturalLineLength", () => {
    const callback = jest.fn();

    widget.set("onNotifyNaturalLineLength", callback);

    const handler = widget.handlers["notify::naturalLineLength"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::naturalLineLength",
      expect.any(Function)
    );
  });

  test("should connect onNotifyNaturalLineLengthUnit", () => {
    const callback = jest.fn();

    widget.set("onNotifyNaturalLineLengthUnit", callback);

    const handler = widget.handlers["notify::naturalLineLengthUnit"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::naturalLineLengthUnit",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPackDirection", () => {
    const callback = jest.fn();

    widget.set("onNotifyPackDirection", callback);

    const handler = widget.handlers["notify::packDirection"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::packDirection",
      expect.any(Function)
    );
  });

  test("should connect onNotifyWrapPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyWrapPolicy", callback);

    const handler = widget.handlers["notify::wrapPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrapPolicy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyWrapReverse", () => {
    const callback = jest.fn();

    widget.set("onNotifyWrapReverse", callback);

    const handler = widget.handlers["notify::wrapReverse"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrapReverse",
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
