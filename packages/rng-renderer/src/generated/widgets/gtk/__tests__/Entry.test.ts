import { Entry } from "@/generated/widgets.ts"
import Pango from "@/generated/girs/node-pango-1.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gio from "@/generated/girs/node-gio-2.0.js"
import Gdk from "@/generated/girs/node-gdk-4.0.js"

describe("Entry", () => {
  let widget: Entry

  beforeEach(() => {
    widget = new Entry({}, Entry.createNode(    ))
  })

  test("should set activatesDefault", () => {
    const newValue = true
    widget.set("activatesDefault", newValue)
    expect(widget.node.setActivatesDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set attributes", () => {
    const newValue = undefined
    widget.set("attributes", newValue)
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set buffer", () => {
    const newValue = undefined
    widget.set("buffer", newValue)
    expect(widget.node.setBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set completion", () => {
    const newValue = undefined
    widget.set("completion", newValue)
    expect(widget.node.setCompletion).toHaveBeenCalledWith(newValue)
  })

  test("should set enableEmojiCompletion", () => {
    const newValue = true
    widget.set("enableEmojiCompletion", newValue)
    expect(widget.node.enableEmojiCompletion).toBe(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = undefined
    widget.set("extraMenu", newValue)
    expect(widget.node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(widget.node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set imModule", () => {
    const newValue = "Some String"
    widget.set("imModule", newValue)
    expect(widget.node.imModule).toBe(newValue)
  })

  test("should set inputHints", () => {
    const newValue = Gtk.InputHints.NONE
    widget.set("inputHints", newValue)
    expect(widget.node.setInputHints).toHaveBeenCalledWith(newValue)
  })

  test("should set inputPurpose", () => {
    const newValue = Gtk.InputPurpose.FREE_FORM
    widget.set("inputPurpose", newValue)
    expect(widget.node.setInputPurpose).toHaveBeenCalledWith(newValue)
  })

  test("should set invisibleChar", () => {
    const newValue = 1
    widget.set("invisibleChar", newValue)
    expect(widget.node.setInvisibleChar).toHaveBeenCalledWith(newValue)
  })

  test("should set invisibleCharSet", () => {
    const newValue = true
    widget.set("invisibleCharSet", newValue)
    expect(widget.node.invisibleCharSet).toBe(newValue)
  })

  test("should set maxLength", () => {
    const newValue = 1
    widget.set("maxLength", newValue)
    expect(widget.node.setMaxLength).toHaveBeenCalledWith(newValue)
  })

  test("should set menuEntryIconPrimaryText", () => {
    const newValue = "Some String"
    widget.set("menuEntryIconPrimaryText", newValue)
    expect(widget.node.menuEntryIconPrimaryText).toBe(newValue)
  })

  test("should set menuEntryIconSecondaryText", () => {
    const newValue = "Some String"
    widget.set("menuEntryIconSecondaryText", newValue)
    expect(widget.node.menuEntryIconSecondaryText).toBe(newValue)
  })

  test("should set overwriteMode", () => {
    const newValue = true
    widget.set("overwriteMode", newValue)
    expect(widget.node.setOverwriteMode).toHaveBeenCalledWith(newValue)
  })

  test("should set placeholderText", () => {
    const newValue = "Some String"
    widget.set("placeholderText", newValue)
    expect(widget.node.setPlaceholderText).toHaveBeenCalledWith(newValue)
  })

  test("should set primaryIconActivatable", () => {
    const newValue = true
    widget.set("primaryIconActivatable", newValue)
    expect(widget.node.primaryIconActivatable).toBe(newValue)
  })

  test("should set primaryIconGicon", () => {
    const newValue = undefined
    widget.set("primaryIconGicon", newValue)
    expect(widget.node.primaryIconGicon).toBe(newValue)
  })

  test("should set primaryIconName", () => {
    const newValue = "Some String"
    widget.set("primaryIconName", newValue)
    expect(widget.node.primaryIconName).toBe(newValue)
  })

  test("should set primaryIconPaintable", () => {
    const newValue = undefined
    widget.set("primaryIconPaintable", newValue)
    expect(widget.node.primaryIconPaintable).toBe(newValue)
  })

  test("should set primaryIconSensitive", () => {
    const newValue = true
    widget.set("primaryIconSensitive", newValue)
    expect(widget.node.primaryIconSensitive).toBe(newValue)
  })

  test("should set primaryIconTooltipMarkup", () => {
    const newValue = "Some String"
    widget.set("primaryIconTooltipMarkup", newValue)
    expect(widget.node.primaryIconTooltipMarkup).toBe(newValue)
  })

  test("should set primaryIconTooltipText", () => {
    const newValue = "Some String"
    widget.set("primaryIconTooltipText", newValue)
    expect(widget.node.primaryIconTooltipText).toBe(newValue)
  })

  test("should set progressFraction", () => {
    const newValue = 1
    widget.set("progressFraction", newValue)
    expect(widget.node.setProgressFraction).toHaveBeenCalledWith(newValue)
  })

  test("should set progressPulseStep", () => {
    const newValue = 1
    widget.set("progressPulseStep", newValue)
    expect(widget.node.setProgressPulseStep).toHaveBeenCalledWith(newValue)
  })

  test("should set secondaryIconActivatable", () => {
    const newValue = true
    widget.set("secondaryIconActivatable", newValue)
    expect(widget.node.secondaryIconActivatable).toBe(newValue)
  })

  test("should set secondaryIconGicon", () => {
    const newValue = undefined
    widget.set("secondaryIconGicon", newValue)
    expect(widget.node.secondaryIconGicon).toBe(newValue)
  })

  test("should set secondaryIconName", () => {
    const newValue = "Some String"
    widget.set("secondaryIconName", newValue)
    expect(widget.node.secondaryIconName).toBe(newValue)
  })

  test("should set secondaryIconPaintable", () => {
    const newValue = undefined
    widget.set("secondaryIconPaintable", newValue)
    expect(widget.node.secondaryIconPaintable).toBe(newValue)
  })

  test("should set secondaryIconSensitive", () => {
    const newValue = true
    widget.set("secondaryIconSensitive", newValue)
    expect(widget.node.secondaryIconSensitive).toBe(newValue)
  })

  test("should set secondaryIconTooltipMarkup", () => {
    const newValue = "Some String"
    widget.set("secondaryIconTooltipMarkup", newValue)
    expect(widget.node.secondaryIconTooltipMarkup).toBe(newValue)
  })

  test("should set secondaryIconTooltipText", () => {
    const newValue = "Some String"
    widget.set("secondaryIconTooltipText", newValue)
    expect(widget.node.secondaryIconTooltipText).toBe(newValue)
  })

  test("should set showEmojiIcon", () => {
    const newValue = true
    widget.set("showEmojiIcon", newValue)
    expect(widget.node.showEmojiIcon).toBe(newValue)
  })

  test("should set tabs", () => {
    const newValue = undefined
    widget.set("tabs", newValue)
    expect(widget.node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set truncateMultiline", () => {
    const newValue = true
    widget.set("truncateMultiline", newValue)
    expect(widget.node.truncateMultiline).toBe(newValue)
  })

  test("should set visibility", () => {
    const newValue = true
    widget.set("visibility", newValue)
    expect(widget.node.setVisibility).toHaveBeenCalledWith(newValue)
  })

  test("should set name", () => {
    const newValue = "Some String"
    widget.set("name", newValue)
    expect(widget.node.name).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set editingCanceled", () => {
    const newValue = true
    widget.set("editingCanceled", newValue)
    expect(widget.node.editingCanceled).toBe(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(widget.node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set enableUndo", () => {
    const newValue = true
    widget.set("enableUndo", newValue)
    expect(widget.node.setEnableUndo).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 1
    widget.set("maxWidthChars", newValue)
    expect(widget.node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 1
    widget.set("widthChars", newValue)
    expect(widget.node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.setAlignment).toHaveBeenCalledWith(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onIconPress", () => {
    const callback = jest.fn()

    widget.set("onIconPress", callback)

    const handler = widget.handlers["icon-press"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("icon-press", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onIconRelease", () => {
    const callback = jest.fn()

    widget.set("onIconRelease", callback)

    const handler = widget.handlers["icon-release"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("icon-release", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onEditingDone", () => {
    const callback = jest.fn()

    widget.set("onEditingDone", callback)

    const handler = widget.handlers["editing-done"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("editing-done", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRemoveWidget", () => {
    const callback = jest.fn()

    widget.set("onRemoveWidget", callback)

    const handler = widget.handlers["remove-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("remove-widget", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChanged", () => {
    const callback = jest.fn()

    widget.set("onChanged", callback)

    const handler = widget.handlers["changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDeleteText", () => {
    const callback = jest.fn()

    widget.set("onDeleteText", callback)

    const handler = widget.handlers["delete-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("delete-text", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInsertText", () => {
    const callback = jest.fn()

    widget.set("onInsertText", callback)

    const handler = widget.handlers["insert-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("insert-text", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActivatesDefault", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivatesDefault", callback)

    const handler = widget.handlers["notify::activatesDefault"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::activatesDefault", expect.any(Function))
  })

  test("should connect onNotifyAttributes", () => {
    const callback = jest.fn()

    widget.set("onNotifyAttributes", callback)

    const handler = widget.handlers["notify::attributes"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::attributes", expect.any(Function))
  })

  test("should connect onNotifyBuffer", () => {
    const callback = jest.fn()

    widget.set("onNotifyBuffer", callback)

    const handler = widget.handlers["notify::buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::buffer", expect.any(Function))
  })

  test("should connect onNotifyCompletion", () => {
    const callback = jest.fn()

    widget.set("onNotifyCompletion", callback)

    const handler = widget.handlers["notify::completion"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::completion", expect.any(Function))
  })

  test("should connect onNotifyEnableEmojiCompletion", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableEmojiCompletion", callback)

    const handler = widget.handlers["notify::enableEmojiCompletion"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::enableEmojiCompletion", expect.any(Function))
  })

  test("should connect onNotifyExtraMenu", () => {
    const callback = jest.fn()

    widget.set("onNotifyExtraMenu", callback)

    const handler = widget.handlers["notify::extraMenu"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::extraMenu", expect.any(Function))
  })

  test("should connect onNotifyHasFrame", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasFrame", callback)

    const handler = widget.handlers["notify::hasFrame"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::hasFrame", expect.any(Function))
  })

  test("should connect onNotifyImModule", () => {
    const callback = jest.fn()

    widget.set("onNotifyImModule", callback)

    const handler = widget.handlers["notify::imModule"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::imModule", expect.any(Function))
  })

  test("should connect onNotifyInputHints", () => {
    const callback = jest.fn()

    widget.set("onNotifyInputHints", callback)

    const handler = widget.handlers["notify::inputHints"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::inputHints", expect.any(Function))
  })

  test("should connect onNotifyInputPurpose", () => {
    const callback = jest.fn()

    widget.set("onNotifyInputPurpose", callback)

    const handler = widget.handlers["notify::inputPurpose"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::inputPurpose", expect.any(Function))
  })

  test("should connect onNotifyInvisibleChar", () => {
    const callback = jest.fn()

    widget.set("onNotifyInvisibleChar", callback)

    const handler = widget.handlers["notify::invisibleChar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::invisibleChar", expect.any(Function))
  })

  test("should connect onNotifyInvisibleCharSet", () => {
    const callback = jest.fn()

    widget.set("onNotifyInvisibleCharSet", callback)

    const handler = widget.handlers["notify::invisibleCharSet"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::invisibleCharSet", expect.any(Function))
  })

  test("should connect onNotifyMaxLength", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxLength", callback)

    const handler = widget.handlers["notify::maxLength"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::maxLength", expect.any(Function))
  })

  test("should connect onNotifyMenuEntryIconPrimaryText", () => {
    const callback = jest.fn()

    widget.set("onNotifyMenuEntryIconPrimaryText", callback)

    const handler = widget.handlers["notify::menuEntryIconPrimaryText"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::menuEntryIconPrimaryText", expect.any(Function))
  })

  test("should connect onNotifyMenuEntryIconSecondaryText", () => {
    const callback = jest.fn()

    widget.set("onNotifyMenuEntryIconSecondaryText", callback)

    const handler = widget.handlers["notify::menuEntryIconSecondaryText"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::menuEntryIconSecondaryText", expect.any(Function))
  })

  test("should connect onNotifyOverwriteMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyOverwriteMode", callback)

    const handler = widget.handlers["notify::overwriteMode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::overwriteMode", expect.any(Function))
  })

  test("should connect onNotifyPlaceholderText", () => {
    const callback = jest.fn()

    widget.set("onNotifyPlaceholderText", callback)

    const handler = widget.handlers["notify::placeholderText"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::placeholderText", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconActivatable", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconActivatable", callback)

    const handler = widget.handlers["notify::primaryIconActivatable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconActivatable", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconGicon", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconGicon", callback)

    const handler = widget.handlers["notify::primaryIconGicon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconGicon", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconName", callback)

    const handler = widget.handlers["notify::primaryIconName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconName", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconPaintable", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconPaintable", callback)

    const handler = widget.handlers["notify::primaryIconPaintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconPaintable", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconSensitive", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconSensitive", callback)

    const handler = widget.handlers["notify::primaryIconSensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconSensitive", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconStorageType", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconStorageType", callback)

    const handler = widget.handlers["notify::primaryIconStorageType"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconStorageType", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconTooltipMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconTooltipMarkup", callback)

    const handler = widget.handlers["notify::primaryIconTooltipMarkup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconTooltipMarkup", expect.any(Function))
  })

  test("should connect onNotifyPrimaryIconTooltipText", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconTooltipText", callback)

    const handler = widget.handlers["notify::primaryIconTooltipText"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::primaryIconTooltipText", expect.any(Function))
  })

  test("should connect onNotifyProgressFraction", () => {
    const callback = jest.fn()

    widget.set("onNotifyProgressFraction", callback)

    const handler = widget.handlers["notify::progressFraction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::progressFraction", expect.any(Function))
  })

  test("should connect onNotifyProgressPulseStep", () => {
    const callback = jest.fn()

    widget.set("onNotifyProgressPulseStep", callback)

    const handler = widget.handlers["notify::progressPulseStep"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::progressPulseStep", expect.any(Function))
  })

  test("should connect onNotifyScrollOffset", () => {
    const callback = jest.fn()

    widget.set("onNotifyScrollOffset", callback)

    const handler = widget.handlers["notify::scrollOffset"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::scrollOffset", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconActivatable", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconActivatable", callback)

    const handler = widget.handlers["notify::secondaryIconActivatable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconActivatable", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconGicon", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconGicon", callback)

    const handler = widget.handlers["notify::secondaryIconGicon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconGicon", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconName", callback)

    const handler = widget.handlers["notify::secondaryIconName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconName", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconPaintable", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconPaintable", callback)

    const handler = widget.handlers["notify::secondaryIconPaintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconPaintable", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconSensitive", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconSensitive", callback)

    const handler = widget.handlers["notify::secondaryIconSensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconSensitive", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconStorageType", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconStorageType", callback)

    const handler = widget.handlers["notify::secondaryIconStorageType"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconStorageType", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconTooltipMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconTooltipMarkup", callback)

    const handler = widget.handlers["notify::secondaryIconTooltipMarkup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconTooltipMarkup", expect.any(Function))
  })

  test("should connect onNotifySecondaryIconTooltipText", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconTooltipText", callback)

    const handler = widget.handlers["notify::secondaryIconTooltipText"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::secondaryIconTooltipText", expect.any(Function))
  })

  test("should connect onNotifyShowEmojiIcon", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowEmojiIcon", callback)

    const handler = widget.handlers["notify::showEmojiIcon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::showEmojiIcon", expect.any(Function))
  })

  test("should connect onNotifyTabs", () => {
    const callback = jest.fn()

    widget.set("onNotifyTabs", callback)

    const handler = widget.handlers["notify::tabs"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::tabs", expect.any(Function))
  })

  test("should connect onNotifyTextLength", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextLength", callback)

    const handler = widget.handlers["notify::textLength"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::textLength", expect.any(Function))
  })

  test("should connect onNotifyTruncateMultiline", () => {
    const callback = jest.fn()

    widget.set("onNotifyTruncateMultiline", callback)

    const handler = widget.handlers["notify::truncateMultiline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::truncateMultiline", expect.any(Function))
  })

  test("should connect onNotifyVisibility", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibility", callback)

    const handler = widget.handlers["notify::visibility"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::visibility", expect.any(Function))
  })

  test("should connect onNotifyName", () => {
    const callback = jest.fn()

    widget.set("onNotifyName", callback)

    const handler = widget.handlers["notify::name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::name", expect.any(Function))
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()

    widget.set("onNotifyAccessibleRole", callback)

    const handler = widget.handlers["notify::accessibleRole"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::accessibleRole", expect.any(Function))
  })

  test("should connect onNotifyEditingCanceled", () => {
    const callback = jest.fn()

    widget.set("onNotifyEditingCanceled", callback)

    const handler = widget.handlers["notify::editingCanceled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::editingCanceled", expect.any(Function))
  })

  test("should connect onNotifyCursorPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyCursorPosition", callback)

    const handler = widget.handlers["notify::cursorPosition"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::cursorPosition", expect.any(Function))
  })

  test("should connect onNotifyEditable", () => {
    const callback = jest.fn()

    widget.set("onNotifyEditable", callback)

    const handler = widget.handlers["notify::editable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::editable", expect.any(Function))
  })

  test("should connect onNotifyEnableUndo", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableUndo", callback)

    const handler = widget.handlers["notify::enableUndo"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::enableUndo", expect.any(Function))
  })

  test("should connect onNotifyMaxWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxWidthChars", callback)

    const handler = widget.handlers["notify::maxWidthChars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::maxWidthChars", expect.any(Function))
  })

  test("should connect onNotifySelectionBound", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectionBound", callback)

    const handler = widget.handlers["notify::selectionBound"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::selectionBound", expect.any(Function))
  })

  test("should connect onNotifyText", () => {
    const callback = jest.fn()

    widget.set("onNotifyText", callback)

    const handler = widget.handlers["notify::text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::text", expect.any(Function))
  })

  test("should connect onNotifyWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyWidthChars", callback)

    const handler = widget.handlers["notify::widthChars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::widthChars", expect.any(Function))
  })

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyXalign", callback)

    const handler = widget.handlers["notify::xalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::xalign", expect.any(Function))
  })

})
