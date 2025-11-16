import { Dialog } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Adw from "@/generated/girs/node-adw-1.js"

describe("Dialog", () => {
  let widget: Dialog

  beforeEach(() => {
    widget = new Dialog({}, Dialog.createNode(    ))
  })

  test("should set canClose", () => {
    const newValue = true
    widget.set("canClose", newValue)
    expect(widget.node.setCanClose).toHaveBeenCalledWith(newValue)
  })

  test("should set contentHeight", () => {
    const newValue = 1
    widget.set("contentHeight", newValue)
    expect(widget.node.setContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set contentWidth", () => {
    const newValue = 1
    widget.set("contentWidth", newValue)
    expect(widget.node.setContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultWidget", () => {
    const newValue = undefined
    widget.set("defaultWidget", newValue)
    expect(widget.node.setDefaultWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set focusWidget", () => {
    const newValue = undefined
    widget.set("focusWidget", newValue)
    expect(widget.node.setFocus).toHaveBeenCalledWith(newValue)
  })

  test("should set followsContentSize", () => {
    const newValue = true
    widget.set("followsContentSize", newValue)
    expect(widget.node.setFollowsContentSize).toHaveBeenCalledWith(newValue)
  })

  test("should set presentationMode", () => {
    const newValue = Adw.DialogPresentationMode.AUTO
    widget.set("presentationMode", newValue)
    expect(widget.node.setPresentationMode).toHaveBeenCalledWith(newValue)
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

  test("should connect onCloseAttempt", () => {
    const callback = jest.fn()

    widget.set("onCloseAttempt", callback)

    const handler = widget.handlers["close-attempt"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("close-attempt", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onClosed", () => {
    const callback = jest.fn()

    widget.set("onClosed", callback)

    const handler = widget.handlers["closed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("closed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyCanClose", () => {
    const callback = jest.fn()

    widget.set("onNotifyCanClose", callback)

    const handler = widget.handlers["notify::canClose"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::canClose", expect.any(Function))
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

  test("should connect onNotifyContentHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentHeight", callback)

    const handler = widget.handlers["notify::contentHeight"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::contentHeight", expect.any(Function))
  })

  test("should connect onNotifyContentWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentWidth", callback)

    const handler = widget.handlers["notify::contentWidth"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::contentWidth", expect.any(Function))
  })

  test("should connect onNotifyCurrentBreakpoint", () => {
    const callback = jest.fn()

    widget.set("onNotifyCurrentBreakpoint", callback)

    const handler = widget.handlers["notify::currentBreakpoint"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::currentBreakpoint", expect.any(Function))
  })

  test("should connect onNotifyDefaultWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultWidget", callback)

    const handler = widget.handlers["notify::defaultWidget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::defaultWidget", expect.any(Function))
  })

  test("should connect onNotifyFocusWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyFocusWidget", callback)

    const handler = widget.handlers["notify::focusWidget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::focusWidget", expect.any(Function))
  })

  test("should connect onNotifyFollowsContentSize", () => {
    const callback = jest.fn()

    widget.set("onNotifyFollowsContentSize", callback)

    const handler = widget.handlers["notify::followsContentSize"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::followsContentSize", expect.any(Function))
  })

  test("should connect onNotifyPresentationMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyPresentationMode", callback)

    const handler = widget.handlers["notify::presentationMode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::presentationMode", expect.any(Function))
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
    const child = new Dialog({}, Dialog.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test('should remove child', () => {
    const child = new Dialog({}, Dialog.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test('should insert child before', () => {
    const child = new Dialog({}, Dialog.createNode())
    const sibling = new Dialog({}, Dialog.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
