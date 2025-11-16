import { Video } from "@/generated/widgets.ts"
import Gio from "@/generated/girs/node-gio-2.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Video", () => {
  let widget: Video

  beforeEach(() => {
    widget = new Video({}, Video.createNode(    ))
  })

  test("should set autoplay", () => {
    const newValue = true
    widget.set("autoplay", newValue)
    expect(widget.node.setAutoplay).toHaveBeenCalledWith(newValue)
  })

  test("should set file", () => {
    const newValue = undefined
    widget.set("file", newValue)
    expect(widget.node.setFile).toHaveBeenCalledWith(newValue)
  })

  test("should set graphicsOffload", () => {
    const newValue = Gtk.GraphicsOffloadEnabled.ENABLED
    widget.set("graphicsOffload", newValue)
    expect(widget.node.setGraphicsOffload).toHaveBeenCalledWith(newValue)
  })

  test("should set loop", () => {
    const newValue = true
    widget.set("loop", newValue)
    expect(widget.node.setLoop).toHaveBeenCalledWith(newValue)
  })

  test("should set mediaStream", () => {
    const newValue = undefined
    widget.set("mediaStream", newValue)
    expect(widget.node.setMediaStream).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyAutoplay", () => {
    const callback = jest.fn()

    widget.set("onNotifyAutoplay", callback)

    const handler = widget.handlers["notify::autoplay"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::autoplay", expect.any(Function))
  })

  test("should connect onNotifyFile", () => {
    const callback = jest.fn()

    widget.set("onNotifyFile", callback)

    const handler = widget.handlers["notify::file"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::file", expect.any(Function))
  })

  test("should connect onNotifyGraphicsOffload", () => {
    const callback = jest.fn()

    widget.set("onNotifyGraphicsOffload", callback)

    const handler = widget.handlers["notify::graphicsOffload"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::graphicsOffload", expect.any(Function))
  })

  test("should connect onNotifyLoop", () => {
    const callback = jest.fn()

    widget.set("onNotifyLoop", callback)

    const handler = widget.handlers["notify::loop"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::loop", expect.any(Function))
  })

  test("should connect onNotifyMediaStream", () => {
    const callback = jest.fn()

    widget.set("onNotifyMediaStream", callback)

    const handler = widget.handlers["notify::mediaStream"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::mediaStream", expect.any(Function))
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
