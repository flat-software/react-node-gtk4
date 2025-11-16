import { PreferencesPage } from "@/generated/widgets.ts"
import Adw from "@/generated/girs/node-adw-1.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("PreferencesPage", () => {
  let widget: PreferencesPage

  beforeEach(() => {
    widget = new PreferencesPage({}, PreferencesPage.createNode(    ))
  })

  test("should set banner", () => {
    const newValue = new Adw.Banner()
    widget.set("banner", newValue)
    expect(widget.node.setBanner).toHaveBeenCalledWith(newValue)
  })

  test("should set description", () => {
    const newValue = "Some String"
    widget.set("description", newValue)
    expect(widget.node.setDescription).toHaveBeenCalledWith(newValue)
  })

  test("should set descriptionCentered", () => {
    const newValue = true
    widget.set("descriptionCentered", newValue)
    expect(widget.node.setDescriptionCentered).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set name", () => {
    const newValue = "Some String"
    widget.set("name", newValue)
    expect(widget.node.setName).toHaveBeenCalledWith(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.setTitle).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyBanner", () => {
    const callback = jest.fn()

    widget.set("onNotifyBanner", callback)

    const handler = widget.handlers["notify::banner"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::banner", expect.any(Function))
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

  test("should connect onNotifyDescriptionCentered", () => {
    const callback = jest.fn()

    widget.set("onNotifyDescriptionCentered", callback)

    const handler = widget.handlers["notify::descriptionCentered"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::descriptionCentered", expect.any(Function))
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

  test("should connect onNotifyName", () => {
    const callback = jest.fn()

    widget.set("onNotifyName", callback)

    const handler = widget.handlers["notify::name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::name", expect.any(Function))
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

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseUnderline", callback)

    const handler = widget.handlers["notify::useUnderline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith("notify::useUnderline", expect.any(Function))
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
