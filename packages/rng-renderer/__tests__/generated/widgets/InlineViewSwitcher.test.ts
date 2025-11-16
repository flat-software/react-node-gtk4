import { InlineViewSwitcher } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("InlineViewSwitcher", () => {
  let widget: InlineViewSwitcher

  beforeEach(() => {
    widget = new InlineViewSwitcher({}, InlineViewSwitcher.createNode(    ))
  })

  test("should set canShrink", () => {
    const newValue = true
    widget.set("canShrink", newValue)
    expect(widget.node.setCanShrink).toHaveBeenCalledWith(newValue)
  })

  test("should set displayMode", () => {
    const newValue = Adw.InlineViewSwitcherDisplayMode.LABELS
    widget.set("displayMode", newValue)
    expect(widget.node.setDisplayMode).toHaveBeenCalledWith(newValue)
  })

  test("should set homogeneous", () => {
    const newValue = true
    widget.set("homogeneous", newValue)
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set stack", () => {
    const newValue = new Adw.ViewStack()
    widget.set("stack", newValue)
    expect(widget.node.setStack).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyCanShrink", () => {
    const callback = jest.fn()

    widget.set("onNotifyCanShrink", callback)

    const handler = widget.handlers["notify::canShrink"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::canShrink", expect.any(Function))
  })

  test("should connect onNotifyDisplayMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyDisplayMode", callback)

    const handler = widget.handlers["notify::displayMode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::displayMode", expect.any(Function))
  })

  test("should connect onNotifyHomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyHomogeneous", callback)

    const handler = widget.handlers["notify::homogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::homogeneous", expect.any(Function))
  })

  test("should connect onNotifyStack", () => {
    const callback = jest.fn()

    widget.set("onNotifyStack", callback)

    const handler = widget.handlers["notify::stack"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::stack", expect.any(Function))
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
