import { MultiLayoutView } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("MultiLayoutView", () => {
  let widget: MultiLayoutView

  beforeEach(() => {
    widget = new MultiLayoutView({}, MultiLayoutView.createNode(    ))
  })

  test("should set layout", () => {
    const newValue = undefined
    widget.set("layout", newValue)
    expect(widget.node.setLayout).toHaveBeenCalledWith(newValue)
  })

  test("should set layoutName", () => {
    const newValue = "Some String"
    widget.set("layoutName", newValue)
    expect(widget.node.setLayoutName).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyLayout", () => {
    const callback = jest.fn()

    widget.set("onNotifyLayout", callback)

    const handler = widget.handlers["notify::layout"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::layout", expect.any(Function))
  })

  test("should connect onNotifyLayoutName", () => {
    const callback = jest.fn()

    widget.set("onNotifyLayoutName", callback)

    const handler = widget.handlers["notify::layoutName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::layoutName", expect.any(Function))
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
    const child = new MultiLayoutView({}, MultiLayoutView.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test('should remove child', () => {
    const child = new MultiLayoutView({}, MultiLayoutView.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test('should insert child before', () => {
    const child = new MultiLayoutView({}, MultiLayoutView.createNode())
    const sibling = new MultiLayoutView({}, MultiLayoutView.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
