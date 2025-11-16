import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {DropDown} from "../widgets.js";

describe("DropDown", () => {
  let widget: DropDown;

  beforeEach(() => {
    widget = new DropDown({}, DropDown.createNode());
  });

  test("should set enableSearch", () => {
    const newValue = true;
    widget.set("enableSearch", newValue);
    expect(widget.node.setEnableSearch).toHaveBeenCalledWith(newValue);
  });

  test("should set expression", () => {
    const newValue = undefined;
    widget.set("expression", newValue);
    expect(widget.node.setExpression).toHaveBeenCalledWith(newValue);
  });

  test("should set factory", () => {
    const newValue = undefined;
    widget.set("factory", newValue);
    expect(widget.node.setFactory).toHaveBeenCalledWith(newValue);
  });

  test("should set headerFactory", () => {
    const newValue = undefined;
    widget.set("headerFactory", newValue);
    expect(widget.node.setHeaderFactory).toHaveBeenCalledWith(newValue);
  });

  test("should set listFactory", () => {
    const newValue = undefined;
    widget.set("listFactory", newValue);
    expect(widget.node.setListFactory).toHaveBeenCalledWith(newValue);
  });

  test("should set model", () => {
    const newValue = undefined;
    widget.set("model", newValue);
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue);
  });

  test("should set searchMatchMode", () => {
    const newValue = Gtk.StringFilterMatchMode.EXACT;
    widget.set("searchMatchMode", newValue);
    expect(widget.node.setSearchMatchMode).toHaveBeenCalledWith(newValue);
  });

  test("should set selected", () => {
    const newValue = 1;
    widget.set("selected", newValue);
    expect(widget.node.setSelected).toHaveBeenCalledWith(newValue);
  });

  test("should set showArrow", () => {
    const newValue = true;
    widget.set("showArrow", newValue);
    expect(widget.node.setShowArrow).toHaveBeenCalledWith(newValue);
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

  test("should connect onActivate", () => {
    const callback = jest.fn();

    widget.set("onActivate", callback);

    const handler = widget.handlers["activate"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyEnableSearch", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableSearch", callback);

    const handler = widget.handlers["notify::enableSearch"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableSearch",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExpression", () => {
    const callback = jest.fn();

    widget.set("onNotifyExpression", callback);

    const handler = widget.handlers["notify::expression"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::expression",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFactory", () => {
    const callback = jest.fn();

    widget.set("onNotifyFactory", callback);

    const handler = widget.handlers["notify::factory"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::factory",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHeaderFactory", () => {
    const callback = jest.fn();

    widget.set("onNotifyHeaderFactory", callback);

    const handler = widget.handlers["notify::headerFactory"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::headerFactory",
      expect.any(Function)
    );
  });

  test("should connect onNotifyListFactory", () => {
    const callback = jest.fn();

    widget.set("onNotifyListFactory", callback);

    const handler = widget.handlers["notify::listFactory"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::listFactory",
      expect.any(Function)
    );
  });

  test("should connect onNotifyModel", () => {
    const callback = jest.fn();

    widget.set("onNotifyModel", callback);

    const handler = widget.handlers["notify::model"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::model",
      expect.any(Function)
    );
  });

  test("should connect onNotifySearchMatchMode", () => {
    const callback = jest.fn();

    widget.set("onNotifySearchMatchMode", callback);

    const handler = widget.handlers["notify::searchMatchMode"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::searchMatchMode",
      expect.any(Function)
    );
  });

  test("should connect onNotifySelected", () => {
    const callback = jest.fn();

    widget.set("onNotifySelected", callback);

    const handler = widget.handlers["notify::selected"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selected",
      expect.any(Function)
    );
  });

  test("should connect onNotifySelectedItem", () => {
    const callback = jest.fn();

    widget.set("onNotifySelectedItem", callback);

    const handler = widget.handlers["notify::selectedItem"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectedItem",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowArrow", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowArrow", callback);

    const handler = widget.handlers["notify::showArrow"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showArrow",
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
