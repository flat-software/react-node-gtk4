import { ListView } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("ListView", () => {
  let widget: ListView

  beforeEach(() => {
    widget = new ListView({}, ListView.createNode(    ))
  })

  test("should set enableRubberband", () => {
    const newValue = true
    widget.set("enableRubberband", newValue)
    expect(widget.node.setEnableRubberband).toHaveBeenCalledWith(newValue)
  })

  test("should set factory", () => {
    const newValue = undefined
    widget.set("factory", newValue)
    expect(widget.node.setFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set headerFactory", () => {
    const newValue = undefined
    widget.set("headerFactory", newValue)
    expect(widget.node.setHeaderFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = undefined
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set showSeparators", () => {
    const newValue = true
    widget.set("showSeparators", newValue)
    expect(widget.node.setShowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set singleClickActivate", () => {
    const newValue = true
    widget.set("singleClickActivate", newValue)
    expect(widget.node.setSingleClickActivate).toHaveBeenCalledWith(newValue)
  })

  test("should set tabBehavior", () => {
    const newValue = Gtk.ListTabBehavior.ALL
    widget.set("tabBehavior", newValue)
    expect(widget.node.setTabBehavior).toHaveBeenCalledWith(newValue)
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

  test("should set hadjustment", () => {
    const newValue = undefined
    widget.set("hadjustment", newValue)
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(widget.node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = undefined
    widget.set("vadjustment", newValue)
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(widget.node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyEnableRubberband", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableRubberband", callback)

    const handler = widget.handlers["notify::enableRubberband"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::enableRubberband", expect.any(Function))
  })

  test("should connect onNotifyFactory", () => {
    const callback = jest.fn()

    widget.set("onNotifyFactory", callback)

    const handler = widget.handlers["notify::factory"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::factory", expect.any(Function))
  })

  test("should connect onNotifyHeaderFactory", () => {
    const callback = jest.fn()

    widget.set("onNotifyHeaderFactory", callback)

    const handler = widget.handlers["notify::headerFactory"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::headerFactory", expect.any(Function))
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

  test("should connect onNotifyShowSeparators", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowSeparators", callback)

    const handler = widget.handlers["notify::showSeparators"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::showSeparators", expect.any(Function))
  })

  test("should connect onNotifySingleClickActivate", () => {
    const callback = jest.fn()

    widget.set("onNotifySingleClickActivate", callback)

    const handler = widget.handlers["notify::singleClickActivate"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::singleClickActivate", expect.any(Function))
  })

  test("should connect onNotifyTabBehavior", () => {
    const callback = jest.fn()

    widget.set("onNotifyTabBehavior", callback)

    const handler = widget.handlers["notify::tabBehavior"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::tabBehavior", expect.any(Function))
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

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyHadjustment", callback)

    const handler = widget.handlers["notify::hadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::hadjustment", expect.any(Function))
  })

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyHscrollPolicy", callback)

    const handler = widget.handlers["notify::hscrollPolicy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::hscrollPolicy", expect.any(Function))
  })

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyVadjustment", callback)

    const handler = widget.handlers["notify::vadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::vadjustment", expect.any(Function))
  })

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyVscrollPolicy", callback)

    const handler = widget.handlers["notify::vscrollPolicy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::vscrollPolicy", expect.any(Function))
  })

})
