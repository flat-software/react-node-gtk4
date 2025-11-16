import { Inscription } from "@/generated/widgets.ts"
import Pango from "@/generated/girs/node-pango-1.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Inscription", () => {
  let widget: Inscription

  beforeEach(() => {
    widget = new Inscription({}, Inscription.createNode(    ))
  })

  test("should set attributes", () => {
    const newValue = undefined
    widget.set("attributes", newValue)
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set markup", () => {
    const newValue = "Some String"
    widget.set("markup", newValue)
    expect(widget.node.setMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set minChars", () => {
    const newValue = 1
    widget.set("minChars", newValue)
    expect(widget.node.setMinChars).toHaveBeenCalledWith(newValue)
  })

  test("should set minLines", () => {
    const newValue = 1
    widget.set("minLines", newValue)
    expect(widget.node.setMinLines).toHaveBeenCalledWith(newValue)
  })

  test("should set natChars", () => {
    const newValue = 1
    widget.set("natChars", newValue)
    expect(widget.node.setNatChars).toHaveBeenCalledWith(newValue)
  })

  test("should set natLines", () => {
    const newValue = 1
    widget.set("natLines", newValue)
    expect(widget.node.setNatLines).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set textOverflow", () => {
    const newValue = Gtk.InscriptionOverflow.CLIP
    widget.set("textOverflow", newValue)
    expect(widget.node.setTextOverflow).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapMode", () => {
    const newValue = Pango.WrapMode.WORD
    widget.set("wrapMode", newValue)
    expect(widget.node.setWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.setXalign).toHaveBeenCalledWith(newValue)
  })

  test("should set yalign", () => {
    const newValue = 1
    widget.set("yalign", newValue)
    expect(widget.node.setYalign).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyAttributes", () => {
    const callback = jest.fn()

    widget.set("onNotifyAttributes", callback)

    const handler = widget.handlers["notify::attributes"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::attributes", expect.any(Function))
  })

  test("should connect onNotifyMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyMarkup", callback)

    const handler = widget.handlers["notify::markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::markup", expect.any(Function))
  })

  test("should connect onNotifyMinChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinChars", callback)

    const handler = widget.handlers["notify::minChars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::minChars", expect.any(Function))
  })

  test("should connect onNotifyMinLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinLines", callback)

    const handler = widget.handlers["notify::minLines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::minLines", expect.any(Function))
  })

  test("should connect onNotifyNatChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyNatChars", callback)

    const handler = widget.handlers["notify::natChars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::natChars", expect.any(Function))
  })

  test("should connect onNotifyNatLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyNatLines", callback)

    const handler = widget.handlers["notify::natLines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::natLines", expect.any(Function))
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

  test("should connect onNotifyTextOverflow", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextOverflow", callback)

    const handler = widget.handlers["notify::textOverflow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::textOverflow", expect.any(Function))
  })

  test("should connect onNotifyWrapMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyWrapMode", callback)

    const handler = widget.handlers["notify::wrapMode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::wrapMode", expect.any(Function))
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

  test("should connect onNotifyYalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyYalign", callback)

    const handler = widget.handlers["notify::yalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::yalign", expect.any(Function))
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

})
