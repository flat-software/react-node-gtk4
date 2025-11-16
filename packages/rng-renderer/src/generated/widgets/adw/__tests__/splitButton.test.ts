import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {SplitButton} from "../widgets.js";

describe("SplitButton", () => {
  let widget: SplitButton;

  beforeEach(() => {
    widget = new SplitButton({}, SplitButton.createNode());
  });

  test("should set canShrink", () => {
    const newValue = true;
    widget.set("canShrink", newValue);
    expect(widget.node.setCanShrink).toHaveBeenCalledWith(newValue);
  });

  test("should set direction", () => {
    const newValue = Gtk.ArrowType.UP;
    widget.set("direction", newValue);
    expect(widget.node.setDirection).toHaveBeenCalledWith(newValue);
  });

  test("should set dropdownTooltip", () => {
    const newValue = "Some String";
    widget.set("dropdownTooltip", newValue);
    expect(widget.node.setDropdownTooltip).toHaveBeenCalledWith(newValue);
  });

  test("should set iconName", () => {
    const newValue = "Some String";
    widget.set("iconName", newValue);
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue);
  });

  test("should set label", () => {
    const newValue = "Some String";
    widget.set("label", newValue);
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue);
  });

  test("should set menuModel", () => {
    const newValue = undefined;
    widget.set("menuModel", newValue);
    expect(widget.node.setMenuModel).toHaveBeenCalledWith(newValue);
  });

  test("should set popover", () => {
    const newValue = new Gtk.Popover();
    widget.set("popover", newValue);
    expect(widget.node.setPopover).toHaveBeenCalledWith(newValue);
  });

  test("should set useUnderline", () => {
    const newValue = true;
    widget.set("useUnderline", newValue);
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue);
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

  test("should connect onActivate", () => {
    const callback = jest.fn();

    widget.set("onActivate", callback);

    const handler = widget.handlers["activate"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onClicked", () => {
    const callback = jest.fn();

    widget.set("onClicked", callback);

    const handler = widget.handlers["clicked"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "clicked",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyCanShrink", () => {
    const callback = jest.fn();

    widget.set("onNotifyCanShrink", callback);

    const handler = widget.handlers["notify::canShrink"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::canShrink",
      expect.any(Function)
    );
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

  test("should connect onNotifyDirection", () => {
    const callback = jest.fn();

    widget.set("onNotifyDirection", callback);

    const handler = widget.handlers["notify::direction"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::direction",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDropdownTooltip", () => {
    const callback = jest.fn();

    widget.set("onNotifyDropdownTooltip", callback);

    const handler = widget.handlers["notify::dropdownTooltip"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::dropdownTooltip",
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

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn();

    widget.set("onNotifyLabel", callback);

    const handler = widget.handlers["notify::label"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label",
      expect.any(Function)
    );
  });

  test("should connect onNotifyMenuModel", () => {
    const callback = jest.fn();

    widget.set("onNotifyMenuModel", callback);

    const handler = widget.handlers["notify::menuModel"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::menuModel",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPopover", () => {
    const callback = jest.fn();

    widget.set("onNotifyPopover", callback);

    const handler = widget.handlers["notify::popover"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::popover",
      expect.any(Function)
    );
  });

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn();

    widget.set("onNotifyUseUnderline", callback);

    const handler = widget.handlers["notify::useUnderline"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::useUnderline",
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

  test("should append child", () => {
    const child = new SplitButton({}, SplitButton.createNode());
    widget.appendChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node);
  });

  test("should remove child", () => {
    const child = new SplitButton({}, SplitButton.createNode());
    widget.appendChild(child);
    widget.removeChild(child);
    expect(widget.node.setChild).toHaveBeenCalledWith(null);
  });
  test("should insert child before", () => {
    const child = new SplitButton({}, SplitButton.createNode());
    const sibling = new SplitButton({}, SplitButton.createNode());
    widget.appendChild(child);
    widget.insertBefore(sibling, child);
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node);
  });
});
