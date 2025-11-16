import Adw from "@/generated/girs/node-adw-1.js";
import {Window} from "./window.js";

export class AdwMessageDialog<
  T extends Adw.MessageDialog = Adw.MessageDialog,
> extends Window<T> {
  static createNode() {
    return new Adw.MessageDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "body":
        this.node.setBody(newValue);
        break;
      case "bodyUseMarkup":
        this.node.setBodyUseMarkup(newValue);
        break;
      case "closeResponse":
        this.node.setCloseResponse(newValue);
        break;
      case "defaultResponse":
        this.node.setDefaultResponse(newValue);
        break;
      case "extraChild":
        this.node.setExtraChild(newValue);
        break;
      case "heading":
        this.node.setHeading(newValue);
        break;
      case "headingUseMarkup":
        this.node.setHeadingUseMarkup(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onResponse":
        this.setHandler("response", newValue);
        break;
      case "onNotifyBody":
        this.setHandler("notify::body", newValue);
        break;
      case "onNotifyBodyUseMarkup":
        this.setHandler("notify::bodyUseMarkup", newValue);
        break;
      case "onNotifyCloseResponse":
        this.setHandler("notify::closeResponse", newValue);
        break;
      case "onNotifyDefaultResponse":
        this.setHandler("notify::defaultResponse", newValue);
        break;
      case "onNotifyExtraChild":
        this.setHandler("notify::extraChild", newValue);
        break;
      case "onNotifyHeading":
        this.setHandler("notify::heading", newValue);
        break;
      case "onNotifyHeadingUseMarkup":
        this.setHandler("notify::headingUseMarkup", newValue);
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
