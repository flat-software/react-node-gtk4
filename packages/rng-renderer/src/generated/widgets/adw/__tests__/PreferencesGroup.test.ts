import { PreferencesGroup } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("PreferencesGroup", () => {
  let widget: PreferencesGroup

  beforeEach(() => {
    widget = new PreferencesGroup({}, PreferencesGroup.createNode(    ))
  })

  test("should set description", () => {
    const newValue = "Some String"
    widget.set("description", newValue)
    expect(widget.node.setDescription).toHaveBeenCalledWith(newValue)
  })

  test("should set headerSuffix", () => {
    const newValue = new Gtk.Widget()
    widget.set("headerSuffix", newValue)
    expect(widget.node.setHeaderSuffix).toHaveBeenCalledWith(newValue)
  })

  test("should set separateRows", () => {
    const newValue = true
    widget.set("separateRows", newValue)
    expect(widget.node.setSeparateRows).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyDescription", () => {
    const callback = jest.fn()

    widget.set("onNotifyDescription", callback)

    const handler = widget.handlers["notify::description"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::description", expect.any(Function))
  })

  test("should connect onNotifyHeaderSuffix", () => {
    const callback = jest.fn()

    widget.set("onNotifyHeaderSuffix", callback)

    const handler = widget.handlers["notify::headerSuffix"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::headerSuffix", expect.any(Function))
  })

  test("should connect onNotifySeparateRows", () => {
    const callback = jest.fn()

    widget.set("onNotifySeparateRows", callback)

    const handler = widget.handlers["notify::separateRows"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::separateRows", expect.any(Function))
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

})
