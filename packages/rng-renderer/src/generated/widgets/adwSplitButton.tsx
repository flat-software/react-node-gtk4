import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwSplitButton<
  T extends Adw.SplitButton = Adw.SplitButton,
> extends Widget<T> {
  static createNode() {
    return new Adw.SplitButton({});
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child);
    this.node.setChild(child.node);
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child);
    this.node.setChild(null);
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild);
    this.node.setChild(child.node);
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "canShrink":
        this.node.setCanShrink(newValue);
        break;
      case "direction":
        this.node.setDirection(newValue);
        break;
      case "dropdownTooltip":
        this.node.setDropdownTooltip(newValue);
        break;
      case "iconName":
        this.node.setIconName(newValue);
        break;
      case "label":
        this.node.setLabel(newValue);
        break;
      case "menuModel":
        this.node.setMenuModel(newValue);
        break;
      case "popover":
        this.node.setPopover(newValue);
        break;
      case "useUnderline":
        this.node.setUseUnderline(newValue);
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
      case "onActivate":
        this.setHandler("activate", newValue);
        break;
      case "onClicked":
        this.setHandler("clicked", newValue);
        break;
      case "onNotifyCanShrink":
        this.setHandler("notify::canShrink", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyDirection":
        this.setHandler("notify::direction", newValue);
        break;
      case "onNotifyDropdownTooltip":
        this.setHandler("notify::dropdownTooltip", newValue);
        break;
      case "onNotifyIconName":
        this.setHandler("notify::iconName", newValue);
        break;
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue);
        break;
      case "onNotifyMenuModel":
        this.setHandler("notify::menuModel", newValue);
        break;
      case "onNotifyPopover":
        this.setHandler("notify::popover", newValue);
        break;
      case "onNotifyUseUnderline":
        this.setHandler("notify::useUnderline", newValue);
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
