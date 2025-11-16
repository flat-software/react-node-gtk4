import { ViewStack } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("ViewStack", () => {
  let widget: ViewStack

  beforeEach(() => {
    widget = new ViewStack({}, ViewStack.createNode(    ))
  })

  test("should set enableTransitions", () => {
    const newValue = true
    widget.set("enableTransitions", newValue)
    expect(widget.node.setEnableTransitions).toHaveBeenCalledWith(newValue)
  })

  test("should set hhomogeneous", () => {
    const newValue = true
    widget.set("hhomogeneous", newValue)
    expect(widget.node.setHhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 1
    widget.set("transitionDuration", newValue)
    expect(widget.node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set vhomogeneous", () => {
    const newValue = true
    widget.set("vhomogeneous", newValue)
    expect(widget.node.setVhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("visibleChild", newValue)
    expect(widget.node.setVisibleChild).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChildName", () => {
    const newValue = "Some String"
    widget.set("visibleChildName", newValue)
    expect(widget.node.setVisibleChildName).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyEnableTransitions", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableTransitions", callback)

    const handler = widget.handlers["notify::enableTransitions"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::enableTransitions", expect.any(Function))
  })

  test("should connect onNotifyHhomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyHhomogeneous", callback)

    const handler = widget.handlers["notify::hhomogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::hhomogeneous", expect.any(Function))
  })

  test("should connect onNotifyPages", () => {
    const callback = jest.fn()

    widget.set("onNotifyPages", callback)

    const handler = widget.handlers["notify::pages"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::pages", expect.any(Function))
  })

  test("should connect onNotifyTransitionDuration", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionDuration", callback)

    const handler = widget.handlers["notify::transitionDuration"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::transitionDuration", expect.any(Function))
  })

  test("should connect onNotifyTransitionRunning", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionRunning", callback)

    const handler = widget.handlers["notify::transitionRunning"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::transitionRunning", expect.any(Function))
  })

  test("should connect onNotifyVhomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyVhomogeneous", callback)

    const handler = widget.handlers["notify::vhomogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::vhomogeneous", expect.any(Function))
  })

  test("should connect onNotifyVisibleChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibleChild", callback)

    const handler = widget.handlers["notify::visibleChild"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::visibleChild", expect.any(Function))
  })

  test("should connect onNotifyVisibleChildName", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibleChildName", callback)

    const handler = widget.handlers["notify::visibleChildName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::visibleChildName", expect.any(Function))
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
