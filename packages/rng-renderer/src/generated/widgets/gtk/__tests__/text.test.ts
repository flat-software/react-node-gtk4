import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Text} from "@/generated/widgets.ts";

describe("Text", () => {
  let widget: Text;

  beforeEach(() => {
    widget = new Text({}, Text.createNode());
  });

  test("should set activatesDefault", () => {
    const newValue = true;
    widget.set("activatesDefault", newValue);
    expect(widget.node.setActivatesDefault).toHaveBeenCalledWith(newValue);
  });

  test("should set attributes", () => {
    const newValue = undefined;
    widget.set("attributes", newValue);
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue);
  });

  test("should set buffer", () => {
    const newValue = undefined;
    widget.set("buffer", newValue);
    expect(widget.node.setBuffer).toHaveBeenCalledWith(newValue);
  });

  test("should set enableEmojiCompletion", () => {
    const newValue = true;
    widget.set("enableEmojiCompletion", newValue);
    expect(widget.node.setEnableEmojiCompletion).toHaveBeenCalledWith(newValue);
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

  test("should set invisibleChar", () => {
    const newValue = 1;
    widget.set("invisibleChar", newValue);
    expect(widget.node.setInvisibleChar).toHaveBeenCalledWith(newValue);
  });

  test("should set invisibleCharSet", () => {
    const newValue = true;
    widget.set("invisibleCharSet", newValue);
    expect(widget.node.invisibleCharSet).toBe(newValue);
  });

  test("should set maxLength", () => {
    const newValue = 1;
    widget.set("maxLength", newValue);
    expect(widget.node.setMaxLength).toHaveBeenCalledWith(newValue);
  });

  test("should set overwriteMode", () => {
    const newValue = true;
    widget.set("overwriteMode", newValue);
    expect(widget.node.setOverwriteMode).toHaveBeenCalledWith(newValue);
  });

  test("should set placeholderText", () => {
    const newValue = "Some String";
    widget.set("placeholderText", newValue);
    expect(widget.node.setPlaceholderText).toHaveBeenCalledWith(newValue);
  });

  test("should set propagateTextWidth", () => {
    const newValue = true;
    widget.set("propagateTextWidth", newValue);
    expect(widget.node.setPropagateTextWidth).toHaveBeenCalledWith(newValue);
  });

  test("should set tabs", () => {
    const newValue = undefined;
    widget.set("tabs", newValue);
    expect(widget.node.setTabs).toHaveBeenCalledWith(newValue);
  });

  test("should set truncateMultiline", () => {
    const newValue = true;
    widget.set("truncateMultiline", newValue);
    expect(widget.node.setTruncateMultiline).toHaveBeenCalledWith(newValue);
  });

  test("should set visibility", () => {
    const newValue = true;
    widget.set("visibility", newValue);
    expect(widget.node.setVisibility).toHaveBeenCalledWith(newValue);
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

  test("should set editable", () => {
    const newValue = true;
    widget.set("editable", newValue);
    expect(widget.node.setEditable).toHaveBeenCalledWith(newValue);
  });

  test("should set enableUndo", () => {
    const newValue = true;
    widget.set("enableUndo", newValue);
    expect(widget.node.setEnableUndo).toHaveBeenCalledWith(newValue);
  });

  test("should set maxWidthChars", () => {
    const newValue = 1;
    widget.set("maxWidthChars", newValue);
    expect(widget.node.setMaxWidthChars).toHaveBeenCalledWith(newValue);
  });

  test("should set text", () => {
    const newValue = "Some String";
    widget.set("text", newValue);
    expect(widget.node.setText).toHaveBeenCalledWith(newValue);
  });

  test("should set widthChars", () => {
    const newValue = 1;
    widget.set("widthChars", newValue);
    expect(widget.node.setWidthChars).toHaveBeenCalledWith(newValue);
  });

  test("should set xalign", () => {
    const newValue = 1;
    widget.set("xalign", newValue);
    expect(widget.node.setAlignment).toHaveBeenCalledWith(newValue);
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

  test("should connect onChanged", () => {
    const callback = jest.fn();

    widget.set("onChanged", callback);

    const handler = widget.handlers["changed"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "changed",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onDeleteText", () => {
    const callback = jest.fn();

    widget.set("onDeleteText", callback);

    const handler = widget.handlers["delete-text"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "delete-text",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onInsertText", () => {
    const callback = jest.fn();

    widget.set("onInsertText", callback);

    const handler = widget.handlers["insert-text"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "insert-text",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyActivatesDefault", () => {
    const callback = jest.fn();

    widget.set("onNotifyActivatesDefault", callback);

    const handler = widget.handlers["notify::activatesDefault"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activatesDefault",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAttributes", () => {
    const callback = jest.fn();

    widget.set("onNotifyAttributes", callback);

    const handler = widget.handlers["notify::attributes"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::attributes",
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

  test("should connect onNotifyEnableEmojiCompletion", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableEmojiCompletion", callback);

    const handler = widget.handlers["notify::enableEmojiCompletion"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableEmojiCompletion",
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

  test("should connect onNotifyInvisibleChar", () => {
    const callback = jest.fn();

    widget.set("onNotifyInvisibleChar", callback);

    const handler = widget.handlers["notify::invisibleChar"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::invisibleChar",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInvisibleCharSet", () => {
    const callback = jest.fn();

    widget.set("onNotifyInvisibleCharSet", callback);

    const handler = widget.handlers["notify::invisibleCharSet"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::invisibleCharSet",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMaxLength", () => {
    const callback = jest.fn();

    widget.set("onNotifyMaxLength", callback);

    const handler = widget.handlers["notify::maxLength"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::maxLength",
      expect.any(Function)
    );
  });

  test("should connect onNotifyOverwriteMode", () => {
    const callback = jest.fn();

    widget.set("onNotifyOverwriteMode", callback);

    const handler = widget.handlers["notify::overwriteMode"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::overwriteMode",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPlaceholderText", () => {
    const callback = jest.fn();

    widget.set("onNotifyPlaceholderText", callback);

    const handler = widget.handlers["notify::placeholderText"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::placeholderText",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPropagateTextWidth", () => {
    const callback = jest.fn();

    widget.set("onNotifyPropagateTextWidth", callback);

    const handler = widget.handlers["notify::propagateTextWidth"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::propagateTextWidth",
      expect.any(Function)
    );
  });

  test("should connect onNotifyScrollOffset", () => {
    const callback = jest.fn();

    widget.set("onNotifyScrollOffset", callback);

    const handler = widget.handlers["notify::scrollOffset"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::scrollOffset",
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

  test("should connect onNotifyTruncateMultiline", () => {
    const callback = jest.fn();

    widget.set("onNotifyTruncateMultiline", callback);

    const handler = widget.handlers["notify::truncateMultiline"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::truncateMultiline",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVisibility", () => {
    const callback = jest.fn();

    widget.set("onNotifyVisibility", callback);

    const handler = widget.handlers["notify::visibility"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visibility",
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

  test("should connect onNotifyCursorPosition", () => {
    const callback = jest.fn();

    widget.set("onNotifyCursorPosition", callback);

    const handler = widget.handlers["notify::cursorPosition"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cursorPosition",
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

  test("should connect onNotifyEnableUndo", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableUndo", callback);

    const handler = widget.handlers["notify::enableUndo"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableUndo",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMaxWidthChars", () => {
    const callback = jest.fn();

    widget.set("onNotifyMaxWidthChars", callback);

    const handler = widget.handlers["notify::maxWidthChars"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::maxWidthChars",
      expect.any(Function)
    );
  });

  test("should connect onNotifySelectionBound", () => {
    const callback = jest.fn();

    widget.set("onNotifySelectionBound", callback);

    const handler = widget.handlers["notify::selectionBound"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectionBound",
      expect.any(Function)
    );
  });

  test("should connect onNotifyText", () => {
    const callback = jest.fn();

    widget.set("onNotifyText", callback);

    const handler = widget.handlers["notify::text"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
      expect.any(Function)
    );
  });

  test("should connect onNotifyWidthChars", () => {
    const callback = jest.fn();

    widget.set("onNotifyWidthChars", callback);

    const handler = widget.handlers["notify::widthChars"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::widthChars",
      expect.any(Function)
    );
  });

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn();

    widget.set("onNotifyXalign", callback);

    const handler = widget.handlers["notify::xalign"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::xalign",
      expect.any(Function)
    );
  });
});
