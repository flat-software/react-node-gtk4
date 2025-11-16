import Gtk from "../../girs/node-gtk-4.0.js";
import {PrintUnixDialog} from "../printUnixDialog.js";

describe("PrintUnixDialog", () => {
  let widget: PrintUnixDialog;

  beforeEach(() => {
    widget = new PrintUnixDialog({}, PrintUnixDialog.createNode());
  });

  test("should set currentPage", () => {
    const newValue = 1;
    widget.set("currentPage", newValue);
    expect(widget.node.setCurrentPage).toHaveBeenCalledWith(newValue);
  });

  test("should set embedPageSetup", () => {
    const newValue = true;
    widget.set("embedPageSetup", newValue);
    expect(widget.node.setEmbedPageSetup).toHaveBeenCalledWith(newValue);
  });

  test("should set hasSelection", () => {
    const newValue = true;
    widget.set("hasSelection", newValue);
    expect(widget.node.setHasSelection).toHaveBeenCalledWith(newValue);
  });

  test("should set manualCapabilities", () => {
    const newValue = Gtk.PrintCapabilities.PAGE_SET;
    widget.set("manualCapabilities", newValue);
    expect(widget.node.setManualCapabilities).toHaveBeenCalledWith(newValue);
  });

  test("should set pageSetup", () => {
    const newValue = undefined;
    widget.set("pageSetup", newValue);
    expect(widget.node.setPageSetup).toHaveBeenCalledWith(newValue);
  });

  test("should set printSettings", () => {
    const newValue = undefined;
    widget.set("printSettings", newValue);
    expect(widget.node.setSettings).toHaveBeenCalledWith(newValue);
  });

  test("should set supportSelection", () => {
    const newValue = true;
    widget.set("supportSelection", newValue);
    expect(widget.node.setSupportSelection).toHaveBeenCalledWith(newValue);
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

  test("should connect onNotifyCurrentPage", () => {
    const callback = jest.fn();

    widget.set("onNotifyCurrentPage", callback);

    const handler = widget.handlers["notify::currentPage"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::currentPage",
      expect.any(Function)
    );
  });

  test("should connect onNotifyEmbedPageSetup", () => {
    const callback = jest.fn();

    widget.set("onNotifyEmbedPageSetup", callback);

    const handler = widget.handlers["notify::embedPageSetup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::embedPageSetup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyHasSelection", () => {
    const callback = jest.fn();

    widget.set("onNotifyHasSelection", callback);

    const handler = widget.handlers["notify::hasSelection"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hasSelection",
      expect.any(Function)
    );
  });

  test("should connect onNotifyManualCapabilities", () => {
    const callback = jest.fn();

    widget.set("onNotifyManualCapabilities", callback);

    const handler = widget.handlers["notify::manualCapabilities"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::manualCapabilities",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPageSetup", () => {
    const callback = jest.fn();

    widget.set("onNotifyPageSetup", callback);

    const handler = widget.handlers["notify::pageSetup"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pageSetup",
      expect.any(Function)
    );
  });

  test("should connect onNotifyPrintSettings", () => {
    const callback = jest.fn();

    widget.set("onNotifyPrintSettings", callback);

    const handler = widget.handlers["notify::printSettings"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::printSettings",
      expect.any(Function)
    );
  });

  test("should connect onNotifySelectedPrinter", () => {
    const callback = jest.fn();

    widget.set("onNotifySelectedPrinter", callback);

    const handler = widget.handlers["notify::selectedPrinter"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectedPrinter",
      expect.any(Function)
    );
  });

  test("should connect onNotifySupportSelection", () => {
    const callback = jest.fn();

    widget.set("onNotifySupportSelection", callback);

    const handler = widget.handlers["notify::supportSelection"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::supportSelection",
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
});
