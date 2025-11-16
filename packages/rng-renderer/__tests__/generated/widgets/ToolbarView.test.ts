import { ToolbarView } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("ToolbarView", () => {
  let widget: ToolbarView

  beforeEach(() => {
    widget = new ToolbarView({}, ToolbarView.createNode(    ))
  })

  test("should set bottomBarStyle", () => {
    const newValue = Adw.ToolbarStyle.FLAT
    widget.set("bottomBarStyle", newValue)
    expect(widget.node.setBottomBarStyle).toHaveBeenCalledWith(newValue)
  })

  test("should set content", () => {
    const newValue = undefined
    widget.set("content", newValue)
    expect(widget.node.setContent).toHaveBeenCalledWith(newValue)
  })

  test("should set extendContentToBottomEdge", () => {
    const newValue = true
    widget.set("extendContentToBottomEdge", newValue)
    expect(widget.node.setExtendContentToBottomEdge).toHaveBeenCalledWith(newValue)
  })

  test("should set extendContentToTopEdge", () => {
    const newValue = true
    widget.set("extendContentToTopEdge", newValue)
    expect(widget.node.setExtendContentToTopEdge).toHaveBeenCalledWith(newValue)
  })

  test("should set revealBottomBars", () => {
    const newValue = true
    widget.set("revealBottomBars", newValue)
    expect(widget.node.setRevealBottomBars).toHaveBeenCalledWith(newValue)
  })

  test("should set revealTopBars", () => {
    const newValue = true
    widget.set("revealTopBars", newValue)
    expect(widget.node.setRevealTopBars).toHaveBeenCalledWith(newValue)
  })

  test("should set topBarStyle", () => {
    const newValue = Adw.ToolbarStyle.FLAT
    widget.set("topBarStyle", newValue)
    expect(widget.node.setTopBarStyle).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyBottomBarHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyBottomBarHeight", callback)

    const handler = widget.handlers["notify::bottomBarHeight"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::bottomBarHeight", expect.any(Function))
  })

  test("should connect onNotifyBottomBarStyle", () => {
    const callback = jest.fn()

    widget.set("onNotifyBottomBarStyle", callback)

    const handler = widget.handlers["notify::bottomBarStyle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::bottomBarStyle", expect.any(Function))
  })

  test("should connect onNotifyContent", () => {
    const callback = jest.fn()

    widget.set("onNotifyContent", callback)

    const handler = widget.handlers["notify::content"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::content", expect.any(Function))
  })

  test("should connect onNotifyExtendContentToBottomEdge", () => {
    const callback = jest.fn()

    widget.set("onNotifyExtendContentToBottomEdge", callback)

    const handler = widget.handlers["notify::extendContentToBottomEdge"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::extendContentToBottomEdge", expect.any(Function))
  })

  test("should connect onNotifyExtendContentToTopEdge", () => {
    const callback = jest.fn()

    widget.set("onNotifyExtendContentToTopEdge", callback)

    const handler = widget.handlers["notify::extendContentToTopEdge"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::extendContentToTopEdge", expect.any(Function))
  })

  test("should connect onNotifyRevealBottomBars", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealBottomBars", callback)

    const handler = widget.handlers["notify::revealBottomBars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealBottomBars", expect.any(Function))
  })

  test("should connect onNotifyRevealTopBars", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealTopBars", callback)

    const handler = widget.handlers["notify::revealTopBars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealTopBars", expect.any(Function))
  })

  test("should connect onNotifyTopBarHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyTopBarHeight", callback)

    const handler = widget.handlers["notify::topBarHeight"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::topBarHeight", expect.any(Function))
  })

  test("should connect onNotifyTopBarStyle", () => {
    const callback = jest.fn()

    widget.set("onNotifyTopBarStyle", callback)

    const handler = widget.handlers["notify::topBarStyle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::topBarStyle", expect.any(Function))
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
