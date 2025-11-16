import {AbstractWidget} from "@/abstractWidget.js";
import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class Dialog<T extends Adw.Dialog = Adw.Dialog> extends GtkWidget<T> {
  static createNode() {
    return new Adw.Dialog({});
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
      case "canClose":
        this.node.setCanClose(newValue);
        break;
      case "contentHeight":
        this.node.setContentHeight(newValue);
        break;
      case "contentWidth":
        this.node.setContentWidth(newValue);
        break;
      case "defaultWidget":
        this.node.setDefaultWidget(newValue);
        break;
      case "focusWidget":
        this.node.setFocus(newValue);
        break;
      case "followsContentSize":
        this.node.setFollowsContentSize(newValue);
        break;
      case "presentationMode":
        this.node.setPresentationMode(newValue);
        break;
      case "title":
        this.node.setTitle(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onCloseAttempt":
        this.setHandler("close-attempt", newValue);
        break;
      case "onClosed":
        this.setHandler("closed", newValue);
        break;
      case "onNotifyCanClose":
        this.setHandler("notify::canClose", newValue);
        break;
      case "onNotifyChild":
        this.setHandler("notify::child", newValue);
        break;
      case "onNotifyContentHeight":
        this.setHandler("notify::contentHeight", newValue);
        break;
      case "onNotifyContentWidth":
        this.setHandler("notify::contentWidth", newValue);
        break;
      case "onNotifyCurrentBreakpoint":
        this.setHandler("notify::currentBreakpoint", newValue);
        break;
      case "onNotifyDefaultWidget":
        this.setHandler("notify::defaultWidget", newValue);
        break;
      case "onNotifyFocusWidget":
        this.setHandler("notify::focusWidget", newValue);
        break;
      case "onNotifyFollowsContentSize":
        this.setHandler("notify::followsContentSize", newValue);
        break;
      case "onNotifyPresentationMode":
        this.setHandler("notify::presentationMode", newValue);
        break;
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue);
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
