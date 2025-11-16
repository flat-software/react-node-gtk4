import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {SearchBar} from "../widgets.js";

describe("SearchBar", () => {
  let widget: SearchBar;

  beforeEach(() => {
    widget = new SearchBar({}, SearchBar.createNode());
  });

  test("should set keyCaptureWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("keyCaptureWidget", newValue);
    expect(widget.node.setKeyCaptureWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set searchModeEnabled", () => {
    const newValue = true;
    widget.set("searchModeEnabled", newValue);
    expect(widget.node.setSearchMode).toHaveBeenCalledWith(newValue);
  });

  test("should set showCloseButton", () => {
    const newValue = true;
    widget.set("showCloseButton", newValue);
    expect(widget.node.setShowCloseButton).toHaveBeenCalledWith(newValue);
  });

  test("should set name", () => {
    const newValue = "Some String";
    widget.set("name", newValue);
    expect(widget.node.name).toBe(newValue);
  });

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT;
    widget.set("accessibleRole", newValue);
    expect(widget.node.accessibleRole).toBe(newValue);
  });

  test("should connect onNotifyChild", () => {
    const callback = jest.fn();

    widget.set("onNotifyChild", callback);

    const handler = widget.handlers["notify::child"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    );
  });

  test("should connect onNotifyKeyCaptureWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyKeyCaptureWidget", callback);

    const handler = widget.handlers["notify::keyCaptureWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::keyCaptureWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifySearchModeEnabled", () => {
    const callback = jest.fn();

    widget.set("onNotifySearchModeEnabled", callback);

    const handler = widget.handlers["notify::searchModeEnabled"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::searchModeEnabled",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowCloseButton", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowCloseButton", callback);

    const handler = widget.handlers["notify::showCloseButton"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showCloseButton",
      expect.any(Function)
    );
  });

  test("should connect onNotifyName", () => {
    const callback = jest.fn();

    widget.set("onNotifyName", callback);

    const handler = widget.handlers["notify::name"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::name",
      expect.any(Function)
    );
  });

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn();

    widget.set("onNotifyAccessibleRole", callback);

    const handler = widget.handlers["notify::accessibleRole"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessibleRole",
      expect.any(Function)
    );
  });

  test("should append child", () => {
    const child = new SearchBar({}, SearchBar.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new SearchBar({}, SearchBar.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new SearchBar({}, SearchBar.createNode());
    const sibling = new SearchBar({}, SearchBar.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
