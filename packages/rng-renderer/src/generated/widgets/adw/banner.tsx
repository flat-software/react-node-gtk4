import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class Banner<T extends Adw.Banner = Adw.Banner> extends Widget<T> {
  static createNode() {
    return new Adw.Banner({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "buttonLabel":
        this.node.setButtonLabel(newValue);
        break;
      case "buttonStyle":
        this.node.setButtonStyle(newValue);
        break;
      case "revealed":
        this.node.setRevealed(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "useMarkup":
        this.node.setUseMarkup(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "actionName":
        this.node.setActionName(newValue);
        break;
      case "actionTarget":
        this.node.setActionTargetValue(newValue);
        break;
      case "onButtonClicked":
        this.setHandler("button-clicked", newValue);
        break;
      case "onNotifyButtonLabel":
        this.setHandler("notify::buttonLabel", newValue);
        break;
      case "onNotifyButtonStyle":
        this.setHandler("notify::buttonStyle", newValue);
        break;
      case "onNotifyRevealed":
        this.setHandler("notify::revealed", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
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
      case "onNotifyActionName":
        this.setHandler("notify::actionName", newValue);
        break;
      case "onNotifyActionTarget":
        this.setHandler("notify::actionTarget", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
