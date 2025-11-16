import { CellView } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("CellView", () => {
  let widget: CellView

  beforeEach(() => {
    widget = new CellView({}, CellView.createNode(    ))
  })

  test("should set drawSensitive", () => {
    const newValue = true
    widget.set("drawSensitive", newValue)
    expect(widget.node.setDrawSensitive).toHaveBeenCalledWith(newValue)
  })

  test("should set fitModel", () => {
    const newValue = true
    widget.set("fitModel", newValue)
    expect(widget.node.setFitModel).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = undefined
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyCellArea", () => {
    const callback = jest.fn()

    widget.set("onNotifyCellArea", callback)

    const handler = widget.handlers["notify::cellArea"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::cellArea", expect.any(Function))
  })

  test("should connect onNotifyCellAreaContext", () => {
    const callback = jest.fn()

    widget.set("onNotifyCellAreaContext", callback)

    const handler = widget.handlers["notify::cellAreaContext"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::cellAreaContext", expect.any(Function))
  })

  test("should connect onNotifyDrawSensitive", () => {
    const callback = jest.fn()

    widget.set("onNotifyDrawSensitive", callback)

    const handler = widget.handlers["notify::drawSensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::drawSensitive", expect.any(Function))
  })

  test("should connect onNotifyFitModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyFitModel", callback)

    const handler = widget.handlers["notify::fitModel"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::fitModel", expect.any(Function))
  })

  test("should connect onNotifyModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyModel", callback)

    const handler = widget.handlers["notify::model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::model", expect.any(Function))
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
