import { Dialog } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Dialog", () => {
  let widget: Dialog

  beforeEach(() => {
    widget = new Dialog({}, Dialog.createNode(    ))
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

  test("should connect onClose", () => {
    const callback = jest.fn()

    widget.set("onClose", callback)

    const handler = widget.handlers["close"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("close", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onResponse", () => {
    const callback = jest.fn()

    widget.set("onResponse", callback)

    const handler = widget.handlers["response"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("response", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyUseHeaderBar", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseHeaderBar", callback)

    const handler = widget.handlers["notify::useHeaderBar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::useHeaderBar", expect.any(Function))
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
