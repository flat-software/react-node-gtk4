import { ShortcutsSection } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("ShortcutsSection", () => {
  let widget: ShortcutsSection

  beforeEach(() => {
    widget = new ShortcutsSection({}, ShortcutsSection.createNode(    ))
  })

  test("should set maxHeight", () => {
    const newValue = 1
    widget.set("maxHeight", newValue)
    expect(widget.node.maxHeight).toBe(newValue)
  })

  test("should set sectionName", () => {
    const newValue = "Some String"
    widget.set("sectionName", newValue)
    expect(widget.node.sectionName).toBe(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.title).toBe(newValue)
  })

  test("should set viewName", () => {
    const newValue = "Some String"
    widget.set("viewName", newValue)
    expect(widget.node.viewName).toBe(newValue)
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

  test("should connect onChangeCurrentPage", () => {
    const callback = jest.fn()

    widget.set("onChangeCurrentPage", callback)

    const handler = widget.handlers["change-current-page"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("change-current-page", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyMaxHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxHeight", callback)

    const handler = widget.handlers["notify::maxHeight"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::maxHeight", expect.any(Function))
  })

  test("should connect onNotifySectionName", () => {
    const callback = jest.fn()

    widget.set("onNotifySectionName", callback)

    const handler = widget.handlers["notify::sectionName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::sectionName", expect.any(Function))
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

  test("should connect onNotifyViewName", () => {
    const callback = jest.fn()

    widget.set("onNotifyViewName", callback)

    const handler = widget.handlers["notify::viewName"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::viewName", expect.any(Function))
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
