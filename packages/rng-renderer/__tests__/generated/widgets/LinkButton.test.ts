import { LinkButton } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import GLib from "@/generated/girs/node-glib-2.0.js"

describe("LinkButton", () => {
  let widget: LinkButton

  beforeEach(() => {
    widget = new LinkButton({}, LinkButton.createNode(    ))
  })

  test("should set uri", () => {
    const newValue = "Some String"
    widget.set("uri", newValue)
    expect(widget.node.setUri).toHaveBeenCalledWith(newValue)
  })

  test("should set visited", () => {
    const newValue = true
    widget.set("visited", newValue)
    expect(widget.node.setVisited).toHaveBeenCalledWith(newValue)
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

  test("should connect onActivateLink", () => {
    const callback = jest.fn()

    widget.set("onActivateLink", callback)

    const handler = widget.handlers["activate-link"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("activate-link", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyUri", () => {
    const callback = jest.fn()

    widget.set("onNotifyUri", callback)

    const handler = widget.handlers["notify::uri"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::uri", expect.any(Function))
  })

  test("should connect onNotifyVisited", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisited", callback)

    const handler = widget.handlers["notify::visited"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::visited", expect.any(Function))
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
