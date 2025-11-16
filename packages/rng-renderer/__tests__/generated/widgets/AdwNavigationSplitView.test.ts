import { NavigationSplitView } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("NavigationSplitView", () => {
  let widget: NavigationSplitView

  beforeEach(() => {
    widget = new NavigationSplitView({}, NavigationSplitView.createNode(    ))
  })

  test("should set collapsed", () => {
    const newValue = true
    widget.set("collapsed", newValue)
    expect(widget.node.setCollapsed).toHaveBeenCalledWith(newValue)
  })

  test("should set content", () => {
    const newValue = new Adw.NavigationPage()
    widget.set("content", newValue)
    expect(widget.node.setContent).toHaveBeenCalledWith(newValue)
  })

  test("should set maxSidebarWidth", () => {
    const newValue = 1
    widget.set("maxSidebarWidth", newValue)
    expect(widget.node.setMaxSidebarWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set minSidebarWidth", () => {
    const newValue = 1
    widget.set("minSidebarWidth", newValue)
    expect(widget.node.setMinSidebarWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set showContent", () => {
    const newValue = true
    widget.set("showContent", newValue)
    expect(widget.node.setShowContent).toHaveBeenCalledWith(newValue)
  })

  test("should set sidebar", () => {
    const newValue = new Adw.NavigationPage()
    widget.set("sidebar", newValue)
    expect(widget.node.setSidebar).toHaveBeenCalledWith(newValue)
  })

  test("should set sidebarPosition", () => {
    const newValue = Gtk.PackType.START
    widget.set("sidebarPosition", newValue)
    expect(widget.node.setSidebarPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set sidebarWidthFraction", () => {
    const newValue = 1
    widget.set("sidebarWidthFraction", newValue)
    expect(widget.node.setSidebarWidthFraction).toHaveBeenCalledWith(newValue)
  })

  test("should set sidebarWidthUnit", () => {
    const newValue = Adw.LengthUnit.PX
    widget.set("sidebarWidthUnit", newValue)
    expect(widget.node.setSidebarWidthUnit).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyCollapsed", () => {
    const callback = jest.fn()

    widget.set("onNotifyCollapsed", callback)

    const handler = widget.handlers["notify::collapsed"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::collapsed", expect.any(Function))
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

  test("should connect onNotifyMaxSidebarWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxSidebarWidth", callback)

    const handler = widget.handlers["notify::maxSidebarWidth"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::maxSidebarWidth", expect.any(Function))
  })

  test("should connect onNotifyMinSidebarWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinSidebarWidth", callback)

    const handler = widget.handlers["notify::minSidebarWidth"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::minSidebarWidth", expect.any(Function))
  })

  test("should connect onNotifyShowContent", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowContent", callback)

    const handler = widget.handlers["notify::showContent"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::showContent", expect.any(Function))
  })

  test("should connect onNotifySidebar", () => {
    const callback = jest.fn()

    widget.set("onNotifySidebar", callback)

    const handler = widget.handlers["notify::sidebar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::sidebar", expect.any(Function))
  })

  test("should connect onNotifySidebarPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifySidebarPosition", callback)

    const handler = widget.handlers["notify::sidebarPosition"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::sidebarPosition", expect.any(Function))
  })

  test("should connect onNotifySidebarWidthFraction", () => {
    const callback = jest.fn()

    widget.set("onNotifySidebarWidthFraction", callback)

    const handler = widget.handlers["notify::sidebarWidthFraction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::sidebarWidthFraction", expect.any(Function))
  })

  test("should connect onNotifySidebarWidthUnit", () => {
    const callback = jest.fn()

    widget.set("onNotifySidebarWidthUnit", callback)

    const handler = widget.handlers["notify::sidebarWidthUnit"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::sidebarWidthUnit", expect.any(Function))
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
