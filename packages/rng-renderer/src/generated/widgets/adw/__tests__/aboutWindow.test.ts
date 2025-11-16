import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {AboutWindow} from "../widgets.js";

describe("AboutWindow", () => {
  let widget: AboutWindow;

  beforeEach(() => {
    widget = new AboutWindow({}, AboutWindow.createNode());
  });

  test("should set applicationIcon", () => {
    const newValue = "Some String";
    widget.set("applicationIcon", newValue);
    expect(widget.node.setApplicationIcon).toHaveBeenCalledWith(newValue);
  });

  test("should set applicationName", () => {
    const newValue = "Some String";
    widget.set("applicationName", newValue);
    expect(widget.node.setApplicationName).toHaveBeenCalledWith(newValue);
  });

  test("should set artists", () => {
    const newValue = "Some String";
    widget.set("artists", newValue);
    expect(widget.node.setArtists).toHaveBeenCalledWith(newValue);
  });

  test("should set comments", () => {
    const newValue = "Some String";
    widget.set("comments", newValue);
    expect(widget.node.setComments).toHaveBeenCalledWith(newValue);
  });

  test("should set copyright", () => {
    const newValue = "Some String";
    widget.set("copyright", newValue);
    expect(widget.node.setCopyright).toHaveBeenCalledWith(newValue);
  });

  test("should set debugInfo", () => {
    const newValue = "Some String";
    widget.set("debugInfo", newValue);
    expect(widget.node.setDebugInfo).toHaveBeenCalledWith(newValue);
  });

  test("should set debugInfoFilename", () => {
    const newValue = "Some String";
    widget.set("debugInfoFilename", newValue);
    expect(widget.node.setDebugInfoFilename).toHaveBeenCalledWith(newValue);
  });

  test("should set designers", () => {
    const newValue = "Some String";
    widget.set("designers", newValue);
    expect(widget.node.setDesigners).toHaveBeenCalledWith(newValue);
  });

  test("should set developerName", () => {
    const newValue = "Some String";
    widget.set("developerName", newValue);
    expect(widget.node.setDeveloperName).toHaveBeenCalledWith(newValue);
  });

  test("should set developers", () => {
    const newValue = "Some String";
    widget.set("developers", newValue);
    expect(widget.node.setDevelopers).toHaveBeenCalledWith(newValue);
  });

  test("should set documenters", () => {
    const newValue = "Some String";
    widget.set("documenters", newValue);
    expect(widget.node.setDocumenters).toHaveBeenCalledWith(newValue);
  });

  test("should set issueUrl", () => {
    const newValue = "Some String";
    widget.set("issueUrl", newValue);
    expect(widget.node.setIssueUrl).toHaveBeenCalledWith(newValue);
  });

  test("should set license", () => {
    const newValue = "Some String";
    widget.set("license", newValue);
    expect(widget.node.setLicense).toHaveBeenCalledWith(newValue);
  });

  test("should set licenseType", () => {
    const newValue = Gtk.License.UNKNOWN;
    widget.set("licenseType", newValue);
    expect(widget.node.setLicenseType).toHaveBeenCalledWith(newValue);
  });

  test("should set releaseNotes", () => {
    const newValue = "Some String";
    widget.set("releaseNotes", newValue);
    expect(widget.node.setReleaseNotes).toHaveBeenCalledWith(newValue);
  });

  test("should set releaseNotesVersion", () => {
    const newValue = "Some String";
    widget.set("releaseNotesVersion", newValue);
    expect(widget.node.setReleaseNotesVersion).toHaveBeenCalledWith(newValue);
  });

  test("should set supportUrl", () => {
    const newValue = "Some String";
    widget.set("supportUrl", newValue);
    expect(widget.node.setSupportUrl).toHaveBeenCalledWith(newValue);
  });

  test("should set translatorCredits", () => {
    const newValue = "Some String";
    widget.set("translatorCredits", newValue);
    expect(widget.node.setTranslatorCredits).toHaveBeenCalledWith(newValue);
  });

  test("should set version", () => {
    const newValue = "Some String";
    widget.set("version", newValue);
    expect(widget.node.setVersion).toHaveBeenCalledWith(newValue);
  });

  test("should set website", () => {
    const newValue = "Some String";
    widget.set("website", newValue);
    expect(widget.node.setWebsite).toHaveBeenCalledWith(newValue);
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

  test("should connect onActivateLink", () => {
    const callback = jest.fn();

    widget.set("onActivateLink", callback);

    const handler = widget.handlers["activate-link"];
    expect(handler).toBeDefined();
    handler();
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-link",
      expect.any(Function)
    );
    expect(callback).toHaveBeenCalled();
  });

  test("should connect onNotifyApplicationIcon", () => {
    const callback = jest.fn();

    widget.set("onNotifyApplicationIcon", callback);

    const handler = widget.handlers["notify::applicationIcon"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::applicationIcon",
      expect.any(Function)
    );
  });

  test("should connect onNotifyApplicationName", () => {
    const callback = jest.fn();

    widget.set("onNotifyApplicationName", callback);

    const handler = widget.handlers["notify::applicationName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::applicationName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyArtists", () => {
    const callback = jest.fn();

    widget.set("onNotifyArtists", callback);

    const handler = widget.handlers["notify::artists"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::artists",
      expect.any(Function)
    );
  });

  test("should connect onNotifyComments", () => {
    const callback = jest.fn();

    widget.set("onNotifyComments", callback);

    const handler = widget.handlers["notify::comments"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::comments",
      expect.any(Function)
    );
  });

  test("should connect onNotifyCopyright", () => {
    const callback = jest.fn();

    widget.set("onNotifyCopyright", callback);

    const handler = widget.handlers["notify::copyright"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::copyright",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDebugInfo", () => {
    const callback = jest.fn();

    widget.set("onNotifyDebugInfo", callback);

    const handler = widget.handlers["notify::debugInfo"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::debugInfo",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDebugInfoFilename", () => {
    const callback = jest.fn();

    widget.set("onNotifyDebugInfoFilename", callback);

    const handler = widget.handlers["notify::debugInfoFilename"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::debugInfoFilename",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDesigners", () => {
    const callback = jest.fn();

    widget.set("onNotifyDesigners", callback);

    const handler = widget.handlers["notify::designers"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::designers",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDeveloperName", () => {
    const callback = jest.fn();

    widget.set("onNotifyDeveloperName", callback);

    const handler = widget.handlers["notify::developerName"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::developerName",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDevelopers", () => {
    const callback = jest.fn();

    widget.set("onNotifyDevelopers", callback);

    const handler = widget.handlers["notify::developers"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::developers",
      expect.any(Function)
    );
  });

  test("should connect onNotifyDocumenters", () => {
    const callback = jest.fn();

    widget.set("onNotifyDocumenters", callback);

    const handler = widget.handlers["notify::documenters"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::documenters",
      expect.any(Function)
    );
  });

  test("should connect onNotifyIssueUrl", () => {
    const callback = jest.fn();

    widget.set("onNotifyIssueUrl", callback);

    const handler = widget.handlers["notify::issueUrl"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::issueUrl",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLicense", () => {
    const callback = jest.fn();

    widget.set("onNotifyLicense", callback);

    const handler = widget.handlers["notify::license"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::license",
      expect.any(Function)
    );
  });

  test("should connect onNotifyLicenseType", () => {
    const callback = jest.fn();

    widget.set("onNotifyLicenseType", callback);

    const handler = widget.handlers["notify::licenseType"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::licenseType",
      expect.any(Function)
    );
  });

  test("should connect onNotifyReleaseNotes", () => {
    const callback = jest.fn();

    widget.set("onNotifyReleaseNotes", callback);

    const handler = widget.handlers["notify::releaseNotes"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::releaseNotes",
      expect.any(Function)
    );
  });

  test("should connect onNotifyReleaseNotesVersion", () => {
    const callback = jest.fn();

    widget.set("onNotifyReleaseNotesVersion", callback);

    const handler = widget.handlers["notify::releaseNotesVersion"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::releaseNotesVersion",
      expect.any(Function)
    );
  });

  test("should connect onNotifySupportUrl", () => {
    const callback = jest.fn();

    widget.set("onNotifySupportUrl", callback);

    const handler = widget.handlers["notify::supportUrl"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::supportUrl",
      expect.any(Function)
    );
  });

  test("should connect onNotifyTranslatorCredits", () => {
    const callback = jest.fn();

    widget.set("onNotifyTranslatorCredits", callback);

    const handler = widget.handlers["notify::translatorCredits"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::translatorCredits",
      expect.any(Function)
    );
  });

  test("should connect onNotifyVersion", () => {
    const callback = jest.fn();

    widget.set("onNotifyVersion", callback);

    const handler = widget.handlers["notify::version"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::version",
      expect.any(Function)
    );
  });

  test("should connect onNotifyWebsite", () => {
    const callback = jest.fn();

    widget.set("onNotifyWebsite", callback);

    const handler = widget.handlers["notify::website"];
    expect(handler).toBeDefined();
    handler();
    expect(callback).toHaveBeenCalled();
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::website",
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
