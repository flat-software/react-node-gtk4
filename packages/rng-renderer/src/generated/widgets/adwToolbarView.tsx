import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwToolbarView<
  T extends Adw.ToolbarView = Adw.ToolbarView,
> extends Widget<T> {
  static createNode() {
    return new Adw.ToolbarView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "bottomBarStyle":
        this.node.setBottomBarStyle(newValue);
        break;
      case "content":
        this.node.setContent(newValue);
        break;
      case "extendContentToBottomEdge":
        this.node.setExtendContentToBottomEdge(newValue);
        break;
      case "extendContentToTopEdge":
        this.node.setExtendContentToTopEdge(newValue);
        break;
      case "revealBottomBars":
        this.node.setRevealBottomBars(newValue);
        break;
      case "revealTopBars":
        this.node.setRevealTopBars(newValue);
        break;
      case "topBarStyle":
        this.node.setTopBarStyle(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyBottomBarHeight":
        this.setHandler("notify::bottomBarHeight", newValue);
        break;
      case "onNotifyBottomBarStyle":
        this.setHandler("notify::bottomBarStyle", newValue);
        break;
      case "onNotifyContent":
        this.setHandler("notify::content", newValue);
        break;
      case "onNotifyExtendContentToBottomEdge":
        this.setHandler("notify::extendContentToBottomEdge", newValue);
        break;
      case "onNotifyExtendContentToTopEdge":
        this.setHandler("notify::extendContentToTopEdge", newValue);
        break;
      case "onNotifyRevealBottomBars":
        this.setHandler("notify::revealBottomBars", newValue);
        break;
      case "onNotifyRevealTopBars":
        this.setHandler("notify::revealTopBars", newValue);
        break;
      case "onNotifyTopBarHeight":
        this.setHandler("notify::topBarHeight", newValue);
        break;
      case "onNotifyTopBarStyle":
        this.setHandler("notify::topBarStyle", newValue);
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
