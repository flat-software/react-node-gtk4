import { ExpanderRow } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import GLib from "@/generated/girs/node-glib-2.0.js"

describe("ExpanderRow", () => {
  let widget: ExpanderRow

  beforeEach(() => {
    widget = new ExpanderRow({}, ExpanderRow.createNode(    ))
  })

  test("should set enableExpansion", () => {
    const newValue = true
    widget.set("enableExpansion", newValue)
    expect(widget.node.setEnableExpansion).toHaveBeenCalledWith(newValue)
  })

  test("should set expanded", () => {
    const newValue = true
    widget.set("expanded", newValue)
    expect(widget.node.setExpanded).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set showEnableSwitch", () => {
    const newValue = true
    widget.set("showEnableSwitch", newValue)
    expect(widget.node.setShowEnableSwitch).toHaveBeenCalledWith(newValue)
  })

  test("should set subtitle", () => {
    const newValue = "Some String"
    widget.set("subtitle", newValue)
    expect(widget.node.setSubtitle).toHaveBeenCalledWith(newValue)
  })

  test("should set subtitleLines", () => {
    const newValue = 1
    widget.set("subtitleLines", newValue)
    expect(widget.node.setSubtitleLines).toHaveBeenCalledWith(newValue)
  })

  test("should set titleLines", () => {
    const newValue = 1
    widget.set("titleLines", newValue)
    expect(widget.node.setTitleLines).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyEnableExpansion", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableExpansion", callback)

    const handler = widget.handlers["notify::enableExpansion"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::enableExpansion", expect.any(Function))
  })

  test("should connect onNotifyExpanded", () => {
    const callback = jest.fn()

    widget.set("onNotifyExpanded", callback)

    const handler = widget.handlers["notify::expanded"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::expanded", expect.any(Function))
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

  test("should connect onNotifyShowEnableSwitch", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowEnableSwitch", callback)

    const handler = widget.handlers["notify::showEnableSwitch"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::showEnableSwitch", expect.any(Function))
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

  test("should connect onNotifySubtitleLines", () => {
    const callback = jest.fn()

    widget.set("onNotifySubtitleLines", callback)

    const handler = widget.handlers["notify::subtitleLines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::subtitleLines", expect.any(Function))
  })

  test("should connect onNotifyTitleLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitleLines", callback)

    const handler = widget.handlers["notify::titleLines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::titleLines", expect.any(Function))
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
