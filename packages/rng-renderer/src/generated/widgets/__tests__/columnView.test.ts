import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ColumnView} from "../columnView.js";

describe("ColumnView", () => {
  let widget: ColumnView;

  beforeEach(() => {
    widget = new ColumnView({}, ColumnView.createNode());
  });

  test("should set enableRubberband", () => {
    const newValue = true;
    widget.set("enableRubberband", newValue);
    expect(widget.node.setEnableRubberband).toHaveBeenCalledWith(newValue);
  });

  test("should set headerFactory", () => {
    const newValue = undefined;
    widget.set("headerFactory", newValue);
    expect(widget.node.setHeaderFactory).toHaveBeenCalledWith(newValue);
  });

  test("should set model", () => {
    const newValue = undefined;
    widget.set("model", newValue);
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue);
  });

  test("should set reorderable", () => {
    const newValue = true;
    widget.set("reorderable", newValue);
    expect(widget.node.setReorderable).toHaveBeenCalledWith(newValue);
  });

  test("should set rowFactory", () => {
    const newValue = undefined;
    widget.set("rowFactory", newValue);
    expect(widget.node.setRowFactory).toHaveBeenCalledWith(newValue);
  });

  test("should set showColumnSeparators", () => {
    const newValue = true;
    widget.set("showColumnSeparators", newValue);
    expect(widget.node.setShowColumnSeparators).toHaveBeenCalledWith(newValue);
  });

  test("should set showRowSeparators", () => {
    const newValue = true;
    widget.set("showRowSeparators", newValue);
    expect(widget.node.setShowRowSeparators).toHaveBeenCalledWith(newValue);
  });

  test("should set singleClickActivate", () => {
    const newValue = true;
    widget.set("singleClickActivate", newValue);
    expect(widget.node.setSingleClickActivate).toHaveBeenCalledWith(newValue);
  });

  test("should set tabBehavior", () => {
    const newValue = Gtk.ListTabBehavior.ALL;
    widget.set("tabBehavior", newValue);
    expect(widget.node.setTabBehavior).toHaveBeenCalledWith(newValue);
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

  test("should set hadjustment", () => {
    const newValue = undefined;
    widget.set("hadjustment", newValue);
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue);
  });

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM;
    widget.set("hscrollPolicy", newValue);
    expect(widget.node.setHscrollPolicy).toHaveBeenCalledWith(newValue);
  });

  test("should set vadjustment", () => {
    const newValue = undefined;
    widget.set("vadjustment", newValue);
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue);
  });

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM;
    widget.set("vscrollPolicy", newValue);
    expect(widget.node.setVscrollPolicy).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyColumns", () => {
    const callback = jest.fn();

    widget.set("onNotifyColumns", callback);

    const handler = widget.handlers["notify::columns"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::columns",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEnableRubberband", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableRubberband", callback);

    const handler = widget.handlers["notify::enableRubberband"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableRubberband",
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

  test("should connect onNotifyReorderable", () => {
    const callback = jest.fn();

    widget.set("onNotifyReorderable", callback);

    const handler = widget.handlers["notify::reorderable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::reorderable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRowFactory", () => {
    const callback = jest.fn();

    widget.set("onNotifyRowFactory", callback);

    const handler = widget.handlers["notify::rowFactory"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rowFactory",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowColumnSeparators", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowColumnSeparators", callback);

    const handler = widget.handlers["notify::showColumnSeparators"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showColumnSeparators",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowRowSeparators", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowRowSeparators", callback);

    const handler = widget.handlers["notify::showRowSeparators"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showRowSeparators",
      expect.any(Function)
    );
  });

  test("should connect onNotifySingleClickActivate", () => {
    const callback = jest.fn();

    widget.set("onNotifySingleClickActivate", callback);

    const handler = widget.handlers["notify::singleClickActivate"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::singleClickActivate",
      expect.any(Function)
    );
  });

  test("should connect onNotifySorter", () => {
    const callback = jest.fn();

    widget.set("onNotifySorter", callback);

    const handler = widget.handlers["notify::sorter"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::sorter",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTabBehavior", () => {
    const callback = jest.fn();

    widget.set("onNotifyTabBehavior", callback);

    const handler = widget.handlers["notify::tabBehavior"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tabBehavior",
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

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn();

    widget.set("onNotifyHadjustment", callback);

    const handler = widget.handlers["notify::hadjustment"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyHscrollPolicy", callback);

    const handler = widget.handlers["notify::hscrollPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hscrollPolicy",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn();

    widget.set("onNotifyVadjustment", callback);

    const handler = widget.handlers["notify::vadjustment"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn();

    widget.set("onNotifyVscrollPolicy", callback);

    const handler = widget.handlers["notify::vscrollPolicy"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vscrollPolicy",
      expect.any(Function)
    );
  });
});
