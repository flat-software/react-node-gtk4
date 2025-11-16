import { Flap } from "@/generated/widgets.ts"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Adw from "@/generated/girs/node-adw-1.js"

describe("Flap", () => {
  let widget: Flap

  beforeEach(() => {
    widget = new Flap({}, Flap.createNode(    ))
  })

  test("should set content", () => {
    const newValue = new Gtk.Widget()
    widget.set("content", newValue)
    expect(widget.node.setContent).toHaveBeenCalledWith(newValue)
  })

  test("should set flap", () => {
    const newValue = new Gtk.Widget()
    widget.set("flap", newValue)
    expect(widget.node.setFlap).toHaveBeenCalledWith(newValue)
  })

  test("should set flapPosition", () => {
    const newValue = Gtk.PackType.START
    widget.set("flapPosition", newValue)
    expect(widget.node.setFlapPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set foldDuration", () => {
    const newValue = 1
    widget.set("foldDuration", newValue)
    expect(widget.node.setFoldDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set foldPolicy", () => {
    const newValue = Adw.FlapFoldPolicy.NEVER
    widget.set("foldPolicy", newValue)
    expect(widget.node.setFoldPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set foldThresholdPolicy", () => {
    const newValue = Adw.FoldThresholdPolicy.MINIMUM
    widget.set("foldThresholdPolicy", newValue)
    expect(widget.node.setFoldThresholdPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set locked", () => {
    const newValue = true
    widget.set("locked", newValue)
    expect(widget.node.setLocked).toHaveBeenCalledWith(newValue)
  })

  test("should set modal", () => {
    const newValue = true
    widget.set("modal", newValue)
    expect(widget.node.setModal).toHaveBeenCalledWith(newValue)
  })

  test("should set revealFlap", () => {
    const newValue = true
    widget.set("revealFlap", newValue)
    expect(widget.node.setRevealFlap).toHaveBeenCalledWith(newValue)
  })

  test("should set revealParams", () => {
    const newValue = undefined
    widget.set("revealParams", newValue)
    expect(widget.node.setRevealParams).toHaveBeenCalledWith(newValue)
  })

  test("should set separator", () => {
    const newValue = new Gtk.Widget()
    widget.set("separator", newValue)
    expect(widget.node.setSeparator).toHaveBeenCalledWith(newValue)
  })

  test("should set swipeToClose", () => {
    const newValue = true
    widget.set("swipeToClose", newValue)
    expect(widget.node.setSwipeToClose).toHaveBeenCalledWith(newValue)
  })

  test("should set swipeToOpen", () => {
    const newValue = true
    widget.set("swipeToOpen", newValue)
    expect(widget.node.setSwipeToOpen).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Adw.FlapTransitionType.OVER
    widget.set("transitionType", newValue)
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyContent", () => {
    const callback = jest.fn()

    widget.set("onNotifyContent", callback)

    const handler = widget.handlers["notify::content"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::content", expect.any(Function))
  })

  test("should connect onNotifyFlap", () => {
    const callback = jest.fn()

    widget.set("onNotifyFlap", callback)

    const handler = widget.handlers["notify::flap"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::flap", expect.any(Function))
  })

  test("should connect onNotifyFlapPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyFlapPosition", callback)

    const handler = widget.handlers["notify::flapPosition"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::flapPosition", expect.any(Function))
  })

  test("should connect onNotifyFoldDuration", () => {
    const callback = jest.fn()

    widget.set("onNotifyFoldDuration", callback)

    const handler = widget.handlers["notify::foldDuration"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::foldDuration", expect.any(Function))
  })

  test("should connect onNotifyFoldPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyFoldPolicy", callback)

    const handler = widget.handlers["notify::foldPolicy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::foldPolicy", expect.any(Function))
  })

  test("should connect onNotifyFoldThresholdPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyFoldThresholdPolicy", callback)

    const handler = widget.handlers["notify::foldThresholdPolicy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::foldThresholdPolicy", expect.any(Function))
  })

  test("should connect onNotifyFolded", () => {
    const callback = jest.fn()

    widget.set("onNotifyFolded", callback)

    const handler = widget.handlers["notify::folded"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::folded", expect.any(Function))
  })

  test("should connect onNotifyLocked", () => {
    const callback = jest.fn()

    widget.set("onNotifyLocked", callback)

    const handler = widget.handlers["notify::locked"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::locked", expect.any(Function))
  })

  test("should connect onNotifyModal", () => {
    const callback = jest.fn()

    widget.set("onNotifyModal", callback)

    const handler = widget.handlers["notify::modal"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::modal", expect.any(Function))
  })

  test("should connect onNotifyRevealFlap", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealFlap", callback)

    const handler = widget.handlers["notify::revealFlap"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealFlap", expect.any(Function))
  })

  test("should connect onNotifyRevealParams", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealParams", callback)

    const handler = widget.handlers["notify::revealParams"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealParams", expect.any(Function))
  })

  test("should connect onNotifyRevealProgress", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealProgress", callback)

    const handler = widget.handlers["notify::revealProgress"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::revealProgress", expect.any(Function))
  })

  test("should connect onNotifySeparator", () => {
    const callback = jest.fn()

    widget.set("onNotifySeparator", callback)

    const handler = widget.handlers["notify::separator"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::separator", expect.any(Function))
  })

  test("should connect onNotifySwipeToClose", () => {
    const callback = jest.fn()

    widget.set("onNotifySwipeToClose", callback)

    const handler = widget.handlers["notify::swipeToClose"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::swipeToClose", expect.any(Function))
  })

  test("should connect onNotifySwipeToOpen", () => {
    const callback = jest.fn()

    widget.set("onNotifySwipeToOpen", callback)

    const handler = widget.handlers["notify::swipeToOpen"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::swipeToOpen", expect.any(Function))
  })

  test("should connect onNotifyTransitionType", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionType", callback)

    const handler = widget.handlers["notify::transitionType"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::transitionType", expect.any(Function))
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
