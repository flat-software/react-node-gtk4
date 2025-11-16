import Gtk from "../../girs/node-gtk-4.0.js";
import {AdwEntryRow} from "../adwEntryRow.js";

describe("AdwEntryRow", () => {
  let widget: AdwEntryRow;

  beforeEach(() => {
    widget = new AdwEntryRow({}, AdwEntryRow.createNode());
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

  test("should set enableEmojiCompletion", () => {
    const newValue = true;
    widget.set("enableEmojiCompletion", newValue);
    expect(widget.node.setEnableEmojiCompletion).toHaveBeenCalledWith(newValue);
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

  test("should set maxLength", () => {
    const newValue = 1;
    widget.set("maxLength", newValue);
    expect(widget.node.setMaxLength).toHaveBeenCalledWith(newValue);
  });

  test("should set showApplyButton", () => {
    const newValue = true;
    widget.set("showApplyButton", newValue);
    expect(widget.node.setShowApplyButton).toHaveBeenCalledWith(newValue);
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

  test("should set actionName", () => {
    const newValue = "Some String";
    widget.set("actionName", newValue);
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue);
  });

  test("should set actionTarget", () => {
    const newValue = undefined;
    widget.set("actionTarget", newValue);
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue);
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

  test("should connect onApply", () => {
    const callback = jest.fn();

    widget.set("onApply", callback);

    const handler = widget.handlers["apply"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith("apply", expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onEntryActivated", () => {
    const callback = jest.fn();

    widget.set("onEntryActivated", callback);

    const handler = widget.handlers["entry-activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "entry-activated",
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

  test("should connect onNotifyShowApplyButton", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowApplyButton", callback);

    const handler = widget.handlers["notify::showApplyButton"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showApplyButton",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTextLength", () => {
    const callback = jest.fn();

    widget.set("onNotifyTextLength", callback);

    const handler = widget.handlers["notify::textLength"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::textLength",
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionName", callback);

    const handler = widget.handlers["notify::actionName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionTarget", callback);

    const handler = widget.handlers["notify::actionTarget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionTarget",
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
