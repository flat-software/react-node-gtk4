import Adw from "../girs/node-adw-1.js";
import {AdwDialog} from "./adwDialog.js";

export class AdwAboutDialog<
  T extends Adw.AboutDialog = Adw.AboutDialog,
> extends AdwDialog<T> {
  static createNode() {
    return new Adw.AboutDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "applicationIcon":
        this.node.setApplicationIcon(newValue);
        break;
      case "applicationName":
        this.node.setApplicationName(newValue);
        break;
      case "artists":
        this.node.setArtists(newValue);
        break;
      case "comments":
        this.node.setComments(newValue);
        break;
      case "copyright":
        this.node.setCopyright(newValue);
        break;
      case "debugInfo":
        this.node.setDebugInfo(newValue);
        break;
      case "debugInfoFilename":
        this.node.setDebugInfoFilename(newValue);
        break;
      case "designers":
        this.node.setDesigners(newValue);
        break;
      case "developerName":
        this.node.setDeveloperName(newValue);
        break;
      case "developers":
        this.node.setDevelopers(newValue);
        break;
      case "documenters":
        this.node.setDocumenters(newValue);
        break;
      case "issueUrl":
        this.node.setIssueUrl(newValue);
        break;
      case "license":
        this.node.setLicense(newValue);
        break;
      case "licenseType":
        this.node.setLicenseType(newValue);
        break;
      case "releaseNotes":
        this.node.setReleaseNotes(newValue);
        break;
      case "releaseNotesVersion":
        this.node.setReleaseNotesVersion(newValue);
        break;
      case "supportUrl":
        this.node.setSupportUrl(newValue);
        break;
      case "translatorCredits":
        this.node.setTranslatorCredits(newValue);
        break;
      case "version":
        this.node.setVersion(newValue);
        break;
      case "website":
        this.node.setWebsite(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onActivateLink":
        this.setHandler("activate-link", newValue);
        break;
      case "onNotifyApplicationIcon":
        this.setHandler("notify::applicationIcon", newValue);
        break;
      case "onNotifyApplicationName":
        this.setHandler("notify::applicationName", newValue);
        break;
      case "onNotifyArtists":
        this.setHandler("notify::artists", newValue);
        break;
      case "onNotifyComments":
        this.setHandler("notify::comments", newValue);
        break;
      case "onNotifyCopyright":
        this.setHandler("notify::copyright", newValue);
        break;
      case "onNotifyDebugInfo":
        this.setHandler("notify::debugInfo", newValue);
        break;
      case "onNotifyDebugInfoFilename":
        this.setHandler("notify::debugInfoFilename", newValue);
        break;
      case "onNotifyDesigners":
        this.setHandler("notify::designers", newValue);
        break;
      case "onNotifyDeveloperName":
        this.setHandler("notify::developerName", newValue);
        break;
      case "onNotifyDevelopers":
        this.setHandler("notify::developers", newValue);
        break;
      case "onNotifyDocumenters":
        this.setHandler("notify::documenters", newValue);
        break;
      case "onNotifyIssueUrl":
        this.setHandler("notify::issueUrl", newValue);
        break;
      case "onNotifyLicense":
        this.setHandler("notify::license", newValue);
        break;
      case "onNotifyLicenseType":
        this.setHandler("notify::licenseType", newValue);
        break;
      case "onNotifyReleaseNotes":
        this.setHandler("notify::releaseNotes", newValue);
        break;
      case "onNotifyReleaseNotesVersion":
        this.setHandler("notify::releaseNotesVersion", newValue);
        break;
      case "onNotifySupportUrl":
        this.setHandler("notify::supportUrl", newValue);
        break;
      case "onNotifyTranslatorCredits":
        this.setHandler("notify::translatorCredits", newValue);
        break;
      case "onNotifyVersion":
        this.setHandler("notify::version", newValue);
        break;
      case "onNotifyWebsite":
        this.setHandler("notify::website", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
