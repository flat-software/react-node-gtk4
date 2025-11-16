import { StatusPage } from "@/generated/widgets.ts"
import Gdk from "@/generated/girs/node-gdk-4.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("StatusPage", () => {
  let widget: StatusPage

  beforeEach(() => {
    widget = new StatusPage({}, StatusPage.createNode(    ))
  })

  test("should set description", () => {
    const newValue = "Some String"
    widget.set("description", newValue)
    expect(widget.node.setDescription).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set paintable", () => {
    const newValue = undefined
    widget.set("paintable", newValue)
    expect(widget.node.setPaintable).toHaveBeenCalledWith(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyDescription", () => {
    const callback = jest.fn()

    widget.set("onNotifyDescription", callback)

    const handler = widget.handlers["notify::description"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::description", expect.any(Function))
  })

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyIconName", callback)

    const handler = widget.handlers["notify::iconName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::iconName", expect.any(Function))
  })

  test("should connect onNotifyPaintable", () => {
    const callback = jest.fn()

    widget.set("onNotifyPaintable", callback)

    const handler = widget.handlers["notify::paintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::paintable", expect.any(Function))
  })

  test("should connect onNotifyTitle", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitle", callback)

    const handler = widget.handlers["notify::title"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::title", expect.any(Function))
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
    const child = new StatusPage({}, StatusPage.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test('should remove child', () => {
    const child = new StatusPage({}, StatusPage.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test('should insert child before', () => {
    const child = new StatusPage({}, StatusPage.createNode())
    const sibling = new StatusPage({}, StatusPage.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
