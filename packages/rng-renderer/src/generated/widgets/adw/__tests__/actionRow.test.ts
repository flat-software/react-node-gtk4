import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {ActionRow} from "@/generated/widgets.ts";

describe("ActionRow", () => {
  let widget: ActionRow;

  beforeEach(() => {
    widget = new ActionRow({}, ActionRow.createNode());
  });

  test("should set activatableWidget", () => {
    const newValue = new Gtk.Widget();
    widget.set("activatableWidget", newValue);
    expect(widget.node.setActivatableWidget).toHaveBeenCalledWith(newValue);
  });

  test("should set iconName", () => {
    const newValue = "Some String";
    widget.set("iconName", newValue);
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue);
  });

  test("should set subtitle", () => {
    const newValue = "Some String";
    widget.set("subtitle", newValue);
    expect(widget.node.setSubtitle).toHaveBeenCalledWith(newValue);
  });

  test("should set subtitleLines", () => {
    const newValue = 1;
    widget.set("subtitleLines", newValue);
    expect(widget.node.setSubtitleLines).toHaveBeenCalledWith(newValue);
  });

  test("should set subtitleSelectable", () => {
    const newValue = true;
    widget.set("subtitleSelectable", newValue);
    expect(widget.node.setSubtitleSelectable).toHaveBeenCalledWith(newValue);
  });

  test("should set titleLines", () => {
    const newValue = 1;
    widget.set("titleLines", newValue);
    expect(widget.node.setTitleLines).toHaveBeenCalledWith(newValue);
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

  test("should set actionName", () => {
    const newValue = "Some String";
    widget.set("actionName", newValue);
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue);
  });

  test("should set actionTarget", () => {
    const newValue = undefined;
    widget.set("actionTarget", newValue);
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue);
  });

  test("should connect onActivated", () => {
    const callback = jest.fn();

    widget.set("onActivated", callback);

    const handler = widget.handlers["activated"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "activated",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyActivatableWidget", () => {
    const callback = jest.fn();

    widget.set("onNotifyActivatableWidget", callback);

    const handler = widget.handlers["notify::activatableWidget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activatableWidget",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn();

    widget.set("onNotifyIconName", callback);

    const handler = widget.handlers["notify::iconName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::iconName",
      expect.any(Function)
    );
  });

  test("should connect onNotifySubtitle", () => {
    const callback = jest.fn();

    widget.set("onNotifySubtitle", callback);

    const handler = widget.handlers["notify::subtitle"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::subtitle",
      expect.any(Function)
    );
  });

  test("should connect onNotifySubtitleLines", () => {
    const callback = jest.fn();

    widget.set("onNotifySubtitleLines", callback);

    const handler = widget.handlers["notify::subtitleLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::subtitleLines",
      expect.any(Function)
    );
  });

  test("should connect onNotifySubtitleSelectable", () => {
    const callback = jest.fn();

    widget.set("onNotifySubtitleSelectable", callback);

    const handler = widget.handlers["notify::subtitleSelectable"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::subtitleSelectable",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTitleLines", () => {
    const callback = jest.fn();

    widget.set("onNotifyTitleLines", callback);

    const handler = widget.handlers["notify::titleLines"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::titleLines",
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionName", callback);

    const handler = widget.handlers["notify::actionName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn();

    widget.set("onNotifyActionTarget", callback);

    const handler = widget.handlers["notify::actionTarget"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::actionTarget",
      expect.any(Function)
    );
  });
});
