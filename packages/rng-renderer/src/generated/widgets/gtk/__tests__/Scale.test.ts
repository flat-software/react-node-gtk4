import { Scale } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Scale", () => {
  let widget: Scale

  beforeEach(() => {
    widget = new Scale({}, Scale.createNode(    ))
  })

  test("should set digits", () => {
    const newValue = 1
    widget.set("digits", newValue)
    expect(widget.node.setDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set drawValue", () => {
    const newValue = true
    widget.set("drawValue", newValue)
    expect(widget.node.setDrawValue).toHaveBeenCalledWith(newValue)
  })

  test("should set hasOrigin", () => {
    const newValue = true
    widget.set("hasOrigin", newValue)
    expect(widget.node.setHasOrigin).toHaveBeenCalledWith(newValue)
  })

  test("should set valuePos", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("valuePos", newValue)
    expect(widget.node.setValuePos).toHaveBeenCalledWith(newValue)
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onNotifyDigits", () => {
    const callback = jest.fn()

    widget.set("onNotifyDigits", callback)

    const handler = widget.handlers["notify::digits"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::digits", expect.any(Function))
  })

  test("should connect onNotifyDrawValue", () => {
    const callback = jest.fn()

    widget.set("onNotifyDrawValue", callback)

    const handler = widget.handlers["notify::drawValue"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::drawValue", expect.any(Function))
  })

  test("should connect onNotifyHasOrigin", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasOrigin", callback)

    const handler = widget.handlers["notify::hasOrigin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::hasOrigin", expect.any(Function))
  })

  test("should connect onNotifyValuePos", () => {
    const callback = jest.fn()

    widget.set("onNotifyValuePos", callback)

    const handler = widget.handlers["notify::valuePos"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::valuePos", expect.any(Function))
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()

    widget.set("onNotifyOrientation", callback)

    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::orientation", expect.any(Function))
  })

})
