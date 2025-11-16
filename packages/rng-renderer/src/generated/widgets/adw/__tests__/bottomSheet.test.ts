import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {BottomSheet} from "../widgets.js";

describe("BottomSheet", () => {
  let widget: BottomSheet;

  beforeEach(() => {
    widget = new BottomSheet({}, BottomSheet.createNode());
  });

  test("should set align", () => {
    const newValue = 1;
    widget.set("align", newValue);
    expect(widget.node.setAlign).toHaveBeenCalledWith(newValue);
  });

  test("should set bottomBar", () => {
    const newValue = new Gtk.Widget();
    widget.set("bottomBar", newValue);
    expect(widget.node.setBottomBar).toHaveBeenCalledWith(newValue);
  });

  test("should set canClose", () => {
    const newValue = true;
    widget.set("canClose", newValue);
    expect(widget.node.setCanClose).toHaveBeenCalledWith(newValue);
  });

  test("should set canOpen", () => {
    const newValue = true;
    widget.set("canOpen", newValue);
    expect(widget.node.setCanOpen).toHaveBeenCalledWith(newValue);
  });

  test("should set content", () => {
    const newValue = new Gtk.Widget();
    widget.set("content", newValue);
    expect(widget.node.setContent).toHaveBeenCalledWith(newValue);
  });

  test("should set fullWidth", () => {
    const newValue = true;
    widget.set("fullWidth", newValue);
    expect(widget.node.setFullWidth).toHaveBeenCalledWith(newValue);
  });

  test("should set modal", () => {
    const newValue = true;
    widget.set("modal", newValue);
    expect(widget.node.setModal).toHaveBeenCalledWith(newValue);
  });

  test("should set open", () => {
    const newValue = true;
    widget.set("open", newValue);
    expect(widget.node.setOpen).toHaveBeenCalledWith(newValue);
  });

  test("should set revealBottomBar", () => {
    const newValue = true;
    widget.set("revealBottomBar", newValue);
    expect(widget.node.setRevealBottomBar).toHaveBeenCalledWith(newValue);
  });

  test("should set sheet", () => {
    const newValue = new Gtk.Widget();
    widget.set("sheet", newValue);
    expect(widget.node.setSheet).toHaveBeenCalledWith(newValue);
  });

  test("should set showDragHandle", () => {
    const newValue = true;
    widget.set("showDragHandle", newValue);
    expect(widget.node.setShowDragHandle).toHaveBeenCalledWith(newValue);
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

  test("should connect onCloseAttempt", () => {
    const callback = jest.fn();

    widget.set("onCloseAttempt", callback);

    const handler = widget.handlers["close-attempt"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "close-attempt",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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

  test("should connect onNotifyBottomBar", () => {
    const callback = jest.fn();

    widget.set("onNotifyBottomBar", callback);

    const handler = widget.handlers["notify::bottomBar"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::bottomBar",
      expect.any(Function)
    );
  });

  test("should connect onNotifyBottomBarHeight", () => {
    const callback = jest.fn();

    widget.set("onNotifyBottomBarHeight", callback);

    const handler = widget.handlers["notify::bottomBarHeight"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::bottomBarHeight",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCanClose", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanClose", callback);

    const handler = widget.handlers["notify::canClose"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canClose",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCanOpen", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanOpen", callback);

    const handler = widget.handlers["notify::canOpen"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canOpen",
      expect.any(Function)
    );
  });

  test("should connect onNotifyContent", () => {
    const callback = jest.fn();

    widget.set("onNotifyContent", callback);

    const handler = widget.handlers["notify::content"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content",
      expect.any(Function)
    );
  });

  test("should connect onNotifyFullWidth", () => {
    const callback = jest.fn();

    widget.set("onNotifyFullWidth", callback);

    const handler = widget.handlers["notify::fullWidth"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fullWidth",
      expect.any(Function)
    );
  });

  test("should connect onNotifyModal", () => {
    const callback = jest.fn();

    widget.set("onNotifyModal", callback);

    const handler = widget.handlers["notify::modal"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::modal",
      expect.any(Function)
    );
  });

  test("should connect onNotifyOpen", () => {
    const callback = jest.fn();

    widget.set("onNotifyOpen", callback);

    const handler = widget.handlers["notify::open"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::open",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRevealBottomBar", () => {
    const callback = jest.fn();

    widget.set("onNotifyRevealBottomBar", callback);

    const handler = widget.handlers["notify::revealBottomBar"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::revealBottomBar",
      expect.any(Function)
    );
  });

  test("should connect onNotifySheet", () => {
    const callback = jest.fn();

    widget.set("onNotifySheet", callback);

    const handler = widget.handlers["notify::sheet"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::sheet",
      expect.any(Function)
    );
  });

  test("should connect onNotifySheetHeight", () => {
    const callback = jest.fn();

    widget.set("onNotifySheetHeight", callback);

    const handler = widget.handlers["notify::sheetHeight"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::sheetHeight",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowDragHandle", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowDragHandle", callback);

    const handler = widget.handlers["notify::showDragHandle"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showDragHandle",
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
