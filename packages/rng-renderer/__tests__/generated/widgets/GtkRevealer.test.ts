import { Revealer } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Revealer", () => {
  let widget: Revealer

  beforeEach(() => {
    widget = new Revealer({}, Revealer.createNode(    ))
  })

  test("should set revealChild", () => {
    const newValue = true
    widget.set("revealChild", newValue)
    expect(widget.node.setRevealChild).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 1
    widget.set("transitionDuration", newValue)
    expect(widget.node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Gtk.RevealerTransitionType.NONE
    widget.set("transitionType", newValue)
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyChild", callback)

    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::child", expect.any(Function))
  })

  test("should connect onNotifyChildRevealed", () => {
    const callback = jest.fn()

    widget.set("onNotifyChildRevealed", callback)

    const handler = widget.handlers["notify::childRevealed"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::childRevealed", expect.any(Function))
  })

  test("should connect onNotifyRevealChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealChild", callback)

    const handler = widget.handlers["notify::revealChild"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealChild", expect.any(Function))
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

  test("should connect onNotifyTransitionType", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionType", callback)

    const handler = widget.handlers["notify::transitionType"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::transitionType", expect.any(Function))
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
    const child = new Revealer({}, Revealer.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test('should remove child', () => {
    const child = new Revealer({}, Revealer.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test('should insert child before', () => {
    const child = new Revealer({}, Revealer.createNode())
    const sibling = new Revealer({}, Revealer.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
