import { Expander } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Expander", () => {
  let widget: Expander

  beforeEach(() => {
    widget = new Expander({}, Expander.createNode(    ))
  })

  test("should set expanded", () => {
    const newValue = true
    widget.set("expanded", newValue)
    expect(widget.node.setExpanded).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "Some String"
    widget.set("label", newValue)
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("labelWidget", newValue)
    expect(widget.node.setLabelWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set resizeToplevel", () => {
    const newValue = true
    widget.set("resizeToplevel", newValue)
    expect(widget.node.setResizeToplevel).toHaveBeenCalledWith(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(widget.node.setUseMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue)
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

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyChild", callback)

    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::child", expect.any(Function))
  })

  test("should connect onNotifyExpanded", () => {
    const callback = jest.fn()

    widget.set("onNotifyExpanded", callback)

    const handler = widget.handlers["notify::expanded"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::expanded", expect.any(Function))
  })

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn()

    widget.set("onNotifyLabel", callback)

    const handler = widget.handlers["notify::label"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::label", expect.any(Function))
  })

  test("should connect onNotifyLabelWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyLabelWidget", callback)

    const handler = widget.handlers["notify::labelWidget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::labelWidget", expect.any(Function))
  })

  test("should connect onNotifyResizeToplevel", () => {
    const callback = jest.fn()

    widget.set("onNotifyResizeToplevel", callback)

    const handler = widget.handlers["notify::resizeToplevel"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::resizeToplevel", expect.any(Function))
  })

  test("should connect onNotifyUseMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseMarkup", callback)

    const handler = widget.handlers["notify::useMarkup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::useMarkup", expect.any(Function))
  })

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseUnderline", callback)

    const handler = widget.handlers["notify::useUnderline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::useUnderline", expect.any(Function))
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

  test('should append child', () => {
    const child = new Expander({}, Expander.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test('should remove child', () => {
    const child = new Expander({}, Expander.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test('should insert child before', () => {
    const child = new Expander({}, Expander.createNode())
    const sibling = new Expander({}, Expander.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
