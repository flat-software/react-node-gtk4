import { ButtonRow } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import GLib from "@/generated/girs/node-glib-2.0.js"

describe("ButtonRow", () => {
  let widget: ButtonRow

  beforeEach(() => {
    widget = new ButtonRow({}, ButtonRow.createNode(    ))
  })

  test("should set endIconName", () => {
    const newValue = "Some String"
    widget.set("endIconName", newValue)
    expect(widget.node.setEndIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set startIconName", () => {
    const newValue = "Some String"
    widget.set("startIconName", newValue)
    expect(widget.node.setStartIconName).toHaveBeenCalledWith(newValue)
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

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = undefined
    widget.set("actionTarget", newValue)
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue)
  })

  test("should connect onActivated", () => {
    const callback = jest.fn()

    widget.set("onActivated", callback)

    const handler = widget.handlers["activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("activated", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyEndIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyEndIconName", callback)

    const handler = widget.handlers["notify::endIconName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::endIconName", expect.any(Function))
  })

  test("should connect onNotifyStartIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyStartIconName", callback)

    const handler = widget.handlers["notify::startIconName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::startIconName", expect.any(Function))
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn()

    widget.set("onNotifyActionName", callback)

    const handler = widget.handlers["notify::actionName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::actionName", expect.any(Function))
  })

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn()

    widget.set("onNotifyActionTarget", callback)

    const handler = widget.handlers["notify::actionTarget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::actionTarget", expect.any(Function))
  })

})
