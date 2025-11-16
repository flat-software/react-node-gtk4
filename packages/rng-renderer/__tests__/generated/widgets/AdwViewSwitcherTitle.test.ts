import { ViewSwitcherTitle } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("ViewSwitcherTitle", () => {
  let widget: ViewSwitcherTitle

  beforeEach(() => {
    widget = new ViewSwitcherTitle({}, ViewSwitcherTitle.createNode(    ))
  })

  test("should set stack", () => {
    const newValue = new Adw.ViewStack()
    widget.set("stack", newValue)
    expect(widget.node.setStack).toHaveBeenCalledWith(newValue)
  })

  test("should set subtitle", () => {
    const newValue = "Some String"
    widget.set("subtitle", newValue)
    expect(widget.node.setSubtitle).toHaveBeenCalledWith(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue)
  })

  test("should set viewSwitcherEnabled", () => {
    const newValue = true
    widget.set("viewSwitcherEnabled", newValue)
    expect(widget.node.setViewSwitcherEnabled).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyStack", () => {
    const callback = jest.fn()

    widget.set("onNotifyStack", callback)

    const handler = widget.handlers["notify::stack"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::stack", expect.any(Function))
  })

  test("should connect onNotifySubtitle", () => {
    const callback = jest.fn()

    widget.set("onNotifySubtitle", callback)

    const handler = widget.handlers["notify::subtitle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::subtitle", expect.any(Function))
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

  test("should connect onNotifyTitleVisible", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitleVisible", callback)

    const handler = widget.handlers["notify::titleVisible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::titleVisible", expect.any(Function))
  })

  test("should connect onNotifyViewSwitcherEnabled", () => {
    const callback = jest.fn()

    widget.set("onNotifyViewSwitcherEnabled", callback)

    const handler = widget.handlers["notify::viewSwitcherEnabled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::viewSwitcherEnabled", expect.any(Function))
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
