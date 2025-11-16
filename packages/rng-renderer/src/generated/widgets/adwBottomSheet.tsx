import Adw from "../girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwBottomSheet<
  T extends Adw.BottomSheet = Adw.BottomSheet,
> extends Widget<T> {
  static createNode() {
    return new Adw.BottomSheet({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "align":
        this.node.setAlign(newValue);
        break;
      case "bottomBar":
        this.node.setBottomBar(newValue);
        break;
      case "canClose":
        this.node.setCanClose(newValue);
        break;
      case "canOpen":
        this.node.setCanOpen(newValue);
        break;
      case "content":
        this.node.setContent(newValue);
        break;
      case "fullWidth":
        this.node.setFullWidth(newValue);
        break;
      case "modal":
        this.node.setModal(newValue);
        break;
      case "open":
        this.node.setOpen(newValue);
        break;
      case "revealBottomBar":
        this.node.setRevealBottomBar(newValue);
        break;
      case "sheet":
        this.node.setSheet(newValue);
        break;
      case "showDragHandle":
        this.node.setShowDragHandle(newValue);
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
      case "onNotifyAlign":
        this.setHandler("notify::align", newValue);
        break;
      case "onNotifyBottomBar":
        this.setHandler("notify::bottomBar", newValue);
        break;
      case "onNotifyBottomBarHeight":
        this.setHandler("notify::bottomBarHeight", newValue);
        break;
      case "onNotifyCanClose":
        this.setHandler("notify::canClose", newValue);
        break;
      case "onNotifyCanOpen":
        this.setHandler("notify::canOpen", newValue);
        break;
      case "onNotifyContent":
        this.setHandler("notify::content", newValue);
        break;
      case "onNotifyFullWidth":
        this.setHandler("notify::fullWidth", newValue);
        break;
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue);
        break;
      case "onNotifyOpen":
        this.setHandler("notify::open", newValue);
        break;
      case "onNotifyRevealBottomBar":
        this.setHandler("notify::revealBottomBar", newValue);
        break;
      case "onNotifySheet":
        this.setHandler("notify::sheet", newValue);
        break;
      case "onNotifySheetHeight":
        this.setHandler("notify::sheetHeight", newValue);
        break;
      case "onNotifyShowDragHandle":
        this.setHandler("notify::showDragHandle", newValue);
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
