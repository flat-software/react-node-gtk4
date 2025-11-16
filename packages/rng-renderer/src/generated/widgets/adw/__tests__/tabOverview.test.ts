import Adw from "@/generated/girs/node-adw-1.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {TabOverview} from "@/generated/widgets.ts";

describe("TabOverview", () => {
  let widget: TabOverview;

  beforeEach(() => {
    widget = new TabOverview({}, TabOverview.createNode());
  });

  test("should set enableNewTab", () => {
    const newValue = true;
    widget.set("enableNewTab", newValue);
    expect(widget.node.setEnableNewTab).toHaveBeenCalledWith(newValue);
  });

  test("should set enableSearch", () => {
    const newValue = true;
    widget.set("enableSearch", newValue);
    expect(widget.node.setEnableSearch).toHaveBeenCalledWith(newValue);
  });

  test("should set extraDragPreload", () => {
    const newValue = true;
    widget.set("extraDragPreload", newValue);
    expect(widget.node.setExtraDragPreload).toHaveBeenCalledWith(newValue);
  });

  test("should set inverted", () => {
    const newValue = true;
    widget.set("inverted", newValue);
    expect(widget.node.setInverted).toHaveBeenCalledWith(newValue);
  });

  test("should set open", () => {
    const newValue = true;
    widget.set("open", newValue);
    expect(widget.node.setOpen).toHaveBeenCalledWith(newValue);
  });

  test("should set secondaryMenu", () => {
    const newValue = undefined;
    widget.set("secondaryMenu", newValue);
    expect(widget.node.setSecondaryMenu).toHaveBeenCalledWith(newValue);
  });

  test("should set showEndTitleButtons", () => {
    const newValue = true;
    widget.set("showEndTitleButtons", newValue);
    expect(widget.node.setShowEndTitleButtons).toHaveBeenCalledWith(newValue);
  });

  test("should set showStartTitleButtons", () => {
    const newValue = true;
    widget.set("showStartTitleButtons", newValue);
    expect(widget.node.setShowStartTitleButtons).toHaveBeenCalledWith(newValue);
  });

  test("should set view", () => {
    const newValue = new Adw.TabView();
    widget.set("view", newValue);
    expect(widget.node.setView).toHaveBeenCalledWith(newValue);
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

  test("should connect onCreateTab", () => {
    const callback = jest.fn();

    widget.set("onCreateTab", callback);

    const handler = widget.handlers["create-tab"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "create-tab",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onExtraDragDrop", () => {
    const callback = jest.fn();

    widget.set("onExtraDragDrop", callback);

    const handler = widget.handlers["extra-drag-drop"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "extra-drag-drop",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onExtraDragValue", () => {
    const callback = jest.fn();

    widget.set("onExtraDragValue", callback);

    const handler = widget.handlers["extra-drag-value"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "extra-drag-value",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
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

  test("should connect onNotifyEnableNewTab", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableNewTab", callback);

    const handler = widget.handlers["notify::enableNewTab"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableNewTab",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEnableSearch", () => {
    const callback = jest.fn();

    widget.set("onNotifyEnableSearch", callback);

    const handler = widget.handlers["notify::enableSearch"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enableSearch",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraDragPreferredAction", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraDragPreferredAction", callback);

    const handler = widget.handlers["notify::extraDragPreferredAction"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraDragPreferredAction",
      expect.any(Function)
    );
  });

  test("should connect onNotifyExtraDragPreload", () => {
    const callback = jest.fn();

    widget.set("onNotifyExtraDragPreload", callback);

    const handler = widget.handlers["notify::extraDragPreload"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extraDragPreload",
      expect.any(Function)
    );
  });

  test("should connect onNotifyInverted", () => {
    const callback = jest.fn();

    widget.set("onNotifyInverted", callback);

    const handler = widget.handlers["notify::inverted"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inverted",
      expect.any(Function)
    );
  });

  test("should connect onNotifyOpen", () => {
    const callback = jest.fn();

    widget.set("onNotifyOpen", callback);

    const handler = widget.handlers["notify::open"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::open",
      expect.any(Function)
    );
  });

  test("should connect onNotifySearchActive", () => {
    const callback = jest.fn();

    widget.set("onNotifySearchActive", callback);

    const handler = widget.handlers["notify::searchActive"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::searchActive",
      expect.any(Function)
    );
  });

  test("should connect onNotifySecondaryMenu", () => {
    const callback = jest.fn();

    widget.set("onNotifySecondaryMenu", callback);

    const handler = widget.handlers["notify::secondaryMenu"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondaryMenu",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowEndTitleButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowEndTitleButtons", callback);

    const handler = widget.handlers["notify::showEndTitleButtons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showEndTitleButtons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyShowStartTitleButtons", () => {
    const callback = jest.fn();

    widget.set("onNotifyShowStartTitleButtons", callback);

    const handler = widget.handlers["notify::showStartTitleButtons"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::showStartTitleButtons",
      expect.any(Function)
    );
  });

  test("should connect onNotifyView", () => {
    const callback = jest.fn();

    widget.set("onNotifyView", callback);

    const handler = widget.handlers["notify::view"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::view",
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
    const child = new TabOverview({}, TabOverview.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new TabOverview({}, TabOverview.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new TabOverview({}, TabOverview.createNode());
    const sibling = new TabOverview({}, TabOverview.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
