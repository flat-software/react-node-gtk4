import Gtk from "../girs/node-gtk-4.0.js";
import {Dialog} from "./dialog.js";

export class MessageDialog<
  T extends Gtk.MessageDialog = Gtk.MessageDialog,
> extends Dialog<T> {
  static createNode() {
    return new Gtk.MessageDialog({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "messageType":
        this.node.messageType = newValue;
        break;
      case "secondaryText":
        this.node.secondaryText = newValue;
        break;
      case "secondaryUseMarkup":
        this.node.secondaryUseMarkup = newValue;
        break;
      case "text":
        this.node.text = newValue;
        break;
      case "useMarkup":
        this.node.useMarkup = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyButtons":
        this.setHandler("notify::buttons", newValue);
        break;
      case "onNotifyMessageArea":
        this.setHandler("notify::messageArea", newValue);
        break;
      case "onNotifyMessageType":
        this.setHandler("notify::messageType", newValue);
        break;
      case "onNotifySecondaryText":
        this.setHandler("notify::secondaryText", newValue);
        break;
      case "onNotifySecondaryUseMarkup":
        this.setHandler("notify::secondaryUseMarkup", newValue);
        break;
      case "onNotifyText":
        this.setHandler("notify::text", newValue);
        break;
      case "onNotifyUseMarkup":
        this.setHandler("notify::useMarkup", newValue);
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
