import Gtk from "../../girs/node-gtk-4.0.js";
import {TextView} from "../textView.js";

describe("TextView", () => {
  let widget: TextView;

  beforeEach(() => {
    widget = new TextView({}, TextView.createNode());
  });

  test("should set acceptsTab", () => {
    const newValue = true;
    widget.set("acceptsTab", newValue);
    expect(widget.node.setAcceptsTab).toHaveBeenCalledWith(newValue);
  });

  test("should set bottomMargin", () => {
    const newValue = 1;
    widget.set("bottomMargin", newValue);
    expect(widget.node.setBottomMargin).toHaveBeenCalledWith(newValue);
  });

  test("should set buffer", () => {
    const newValue = undefined;
    widget.set("buffer", newValue);
    expect(widget.node.setBuffer).toHaveBeenCalledWith(newValue);
  });

  test("should set cursorVisible", () => {
    const newValue = true;
    widget.set("cursorVisible", newValue);
    expect(widget.node.setCursorVisible).toHaveBeenCalledWith(newValue);
  });

  test("should set editable", () => {
    const newValue = true;
    widget.set("editable", newValue);
    expect(widget.node.setEditable).toHaveBeenCalledWith(newValue);
  });

  test("should set extraMenu", () => {
    const newValue = undefined;
    widget.set("extraMenu", newValue);
    expect(widget.node.setExtraMenu).toHaveBeenCalledWith(newValue);
  });

  test("should set imModule", () => {
    const newValue = "Some String";
    widget.set("imModule", newValue);
    expect(widget.node.imModule).toBe(newValue);
  });

  test("should set indent", () => {
    const newValue = 1;
    widget.set("indent", newValue);
    expect(widget.node.setIndent).toHaveBeenCalledWith(newValue);
  });

  test("should set inputHints", () => {
    const newValue = Gtk.InputHints.NONE;
    widget.set("inputHints", newValue);
    expect(widget.node.setInputHints).toHaveBeenCalledWith(newValue);
  });

  test("should set inputPurpose", () => {
    const newValue = Gtk.InputPurpose.FREE_FORM;
    widget.set("inputPurpose", newValue);
    expect(widget.node.setInputPurpose).toHaveBeenCalledWith(newValue);
  });

  test("should set justification", () => {
    const newValue = Gtk.Justification.LEFT;
    widget.set("justification", newValue);
    expect(widget.node.setJustification).toHaveBeenCalledWith(newValue);
  });

  test("should set leftMargin", () => {
    const newValue = 1;
    widget.set("leftMargin", newValue);
    expect(widget.node.setLeftMargin).toHaveBeenCalledWith(newValue);
  });

  test("should set monospace", () => {
    const newValue = true;
    widget.set("monospace", newValue);
    expect(widget.node.setMonospace).toHaveBeenCalledWith(newValue);
  });

  test("should set overwrite", () => {
    const newValue = true;
    widget.set("overwrite", newValue);
    expect(widget.node.setOverwrite).toHaveBeenCalledWith(newValue);
  });

  test("should set pixelsAboveLines", () => {
    const newValue = 1;
    widget.set("pixelsAboveLines", newValue);
    expect(widget.node.setPixelsAboveLines).toHaveBeenCalledWith(newValue);
  });

  test("should set pixelsBelowLines", () => {
    const newValue = 1;
    widget.set("pixelsBelowLines", newValue);
    expect(widget.node.setPixelsBelowLines).toHaveBeenCalledWith(newValue);
  });

  test("should set pixelsInsideWrap", () => {
    const newValue = 1;
    widget.set("pixelsInsideWrap", newValue);
    expect(widget.node.setPixelsInsideWrap).toHaveBeenCalledWith(newValue);
  });

  test("should set rightMargin", () => {
    const newValue = 1;
    widget.set("rightMargin", newValue);
    expect(widget.node.setRightMargin).toHaveBeenCalledWith(newValue);
  });

  test("should set tabs", () => {
    const newValue = undefined;
    widget.set("tabs", newValue);
    expect(widget.node.setTabs).toHaveBeenCalledWith(newValue);
  });

  test("should set topMargin", () => {
    const newValue = 1;
    widget.set("topMargin", newValue);
    expect(widget.node.setTopMargin).toHaveBeenCalledWith(newValue);
  });

  test("should set wrapMode", () => {
    const newValue = Gtk.WrapMode.NONE;
    widget.set("wrapMode", newValue);
    expect(widget.node.setWrapMode).toHaveBeenCalledWith(newValue);
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

  test("should connect onBackspace", () => {
    const callback = jest.fn();

    widget.set("onBackspace", callback);

    const handler = widget.handlers["backspace"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "backspace",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onCopyClipboard", () => {
    const callback = jest.fn();

    widget.set("onCopyClipboard", callback);

    const handler = widget.handlers["copy-clipboard"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "copy-clipboard",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onCutClipboard", () => {
    const callback = jest.fn();

    widget.set("onCutClipboard", callback);

    const handler = widget.handlers["cut-clipboard"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "cut-clipboard",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onDeleteFromCursor", () => {
    const callback = jest.fn();

    widget.set("onDeleteFromCursor", callback);

    const handler = widget.handlers["delete-from-cursor"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "delete-from-cursor",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onExtendSelection", () => {
    const callback = jest.fn();

    widget.set("onExtendSelection", callback);

    const handler = widget.handlers["extend-selection"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "extend-selection",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onInsertAtCursor", () => {
    const callback = jest.fn();

    widget.set("onInsertAtCursor", callback);

    const handler = widget.handlers["insert-at-cursor"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "insert-at-cursor",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onInsertEmoji", () => {
    const callback = jest.fn();

    widget.set("onInsertEmoji", callback);

    const handler = widget.handlers["insert-emoji"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "insert-emoji",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onMoveCursor", () => {
    const callback = jest.fn();

    widget.set("onMoveCursor", callback);

    const handler = widget.handlers["move-cursor"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-cursor",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onMoveViewport", () => {
    const callback = jest.fn();

    widget.set("onMoveViewport", callback);

    const handler = widget.handlers["move-viewport"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-viewport",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPasteClipboard", () => {
    const callback = jest.fn();

    widget.set("onPasteClipboard", callback);

    const handler = widget.handlers["paste-clipboard"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "paste-clipboard",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onPreeditChanged", () => {
    const callback = jest.fn();

    widget.set("onPreeditChanged", callback);

    const handler = widget.handlers["preedit-changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "preedit-changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSelectAll", () => {
    const callback = jest.fn();

    widget.set("onSelectAll", callback);

    const handler = widget.handlers["select-all"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-all",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onSetAnchor", () => {
    const callback = jest.fn();

    widget.set("onSetAnchor", callback);

    const handler = widget.handlers["set-anchor"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "set-anchor",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onToggleCursorVisible", () => {
    const callback = jest.fn();

    widget.set("onToggleCursorVisible", callback);

    const handler = widget.handlers["toggle-cursor-visible"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-cursor-visible",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onToggleOverwrite", () => {
    const callback = jest.fn();

    widget.set("onToggleOverwrite", callback);

    const handler = widget.handlers["toggle-overwrite"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-overwrite",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyAcceptsTab", () => {
    const callback = jest.fn();

    widget.set("onNotifyAcceptsTab", callback);

    const handler = widget.handlers["notify::acceptsTab"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::acceptsTab",
      expect.any(Function)
    );
  });

  test("should connect onNotifyBottomMargin", () => {
    const callback = jest.fn();

    widget.set("onNotifyBottomMargin", callback);

    const handler = widget.handlers["notify::bottomMargin"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::bottomMargin",
      expect.any(Function)
    );
  });

  test("should connect onNotifyBuffer", () => {
    const callback = jest.fn();

    widget.set("onNotifyBuffer", callback);

    const handler = widget.handlers["notify::buffer"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buffer",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCursorVisible", () => {
    const callback = jest.fn();

    widget.set("onNotifyCursorVisible", callback);

    const handler = widget.handlers["notify::cursorVisible"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cursorVisible",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEditable", () => {
    const callback = jest.fn();

    widget.set("onNotifyEditable", callback);

    const handler = widget.handlers["notify::editable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraMenu", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraMenu", callback);

    const handler = widget.handlers["notify::extraMenu"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraMenu",
      expect.any(Function)
    );
  });

  test("should connect onNotifyImModule", () => {
    const callback = jest.fn();

    widget.set("onNotifyImModule", callback);

    const handler = widget.handlers["notify::imModule"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::imModule",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIndent", () => {
    const callback = jest.fn();

    widget.set("onNotifyIndent", callback);

    const handler = widget.handlers["notify::indent"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::indent",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInputHints", () => {
    const callback = jest.fn();

    widget.set("onNotifyInputHints", callback);

    const handler = widget.handlers["notify::inputHints"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inputHints",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInputPurpose", () => {
    const callback = jest.fn();

    widget.set("onNotifyInputPurpose", callback);

    const handler = widget.handlers["notify::inputPurpose"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inputPurpose",
      expect.any(Function)
    );
  });

  test("should connect onNotifyJustification", () => {
    const callback = jest.fn();

    widget.set("onNotifyJustification", callback);

    const handler = widget.handlers["notify::justification"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::justification",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLeftMargin", () => {
    const callback = jest.fn();

    widget.set("onNotifyLeftMargin", callback);

    const handler = widget.handlers["notify::leftMargin"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::leftMargin",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMonospace", () => {
    const callback = jest.fn();

    widget.set("onNotifyMonospace", callback);

    const handler = widget.handlers["notify::monospace"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::monospace",
      expect.any(Function)
    );
  });

  test("should connect onNotifyOverwrite", () => {
    const callback = jest.fn();

    widget.set("onNotifyOverwrite", callback);

    const handler = widget.handlers["notify::overwrite"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::overwrite",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPixelsAboveLines", () => {
    const callback = jest.fn();

    widget.set("onNotifyPixelsAboveLines", callback);

    const handler = widget.handlers["notify::pixelsAboveLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pixelsAboveLines",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPixelsBelowLines", () => {
    const callback = jest.fn();

    widget.set("onNotifyPixelsBelowLines", callback);

    const handler = widget.handlers["notify::pixelsBelowLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pixelsBelowLines",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPixelsInsideWrap", () => {
    const callback = jest.fn();

    widget.set("onNotifyPixelsInsideWrap", callback);

    const handler = widget.handlers["notify::pixelsInsideWrap"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pixelsInsideWrap",
      expect.any(Function)
    );
  });

  test("should connect onNotifyRightMargin", () => {
    const callback = jest.fn();

    widget.set("onNotifyRightMargin", callback);

    const handler = widget.handlers["notify::rightMargin"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rightMargin",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTabs", () => {
    const callback = jest.fn();

    widget.set("onNotifyTabs", callback);

    const handler = widget.handlers["notify::tabs"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tabs",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTopMargin", () => {
    const callback = jest.fn();

    widget.set("onNotifyTopMargin", callback);

    const handler = widget.handlers["notify::topMargin"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::topMargin",
      expect.any(Function)
    );
  });

  test("should connect onNotifyWrapMode", () => {
    const callback = jest.fn();

    widget.set("onNotifyWrapMode", callback);

    const handler = widget.handlers["notify::wrapMode"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrapMode",
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
