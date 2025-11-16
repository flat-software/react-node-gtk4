import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "../gtk/widget.js";

export class Flap<T extends Adw.Flap = Adw.Flap> extends Widget<T> {
  static createNode() {
    return new Adw.Flap({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "content":
        this.node.setContent(newValue);
        break;
      case "flap":
        this.node.setFlap(newValue);
        break;
      case "flapPosition":
        this.node.setFlapPosition(newValue);
        break;
      case "foldDuration":
        this.node.setFoldDuration(newValue);
        break;
      case "foldPolicy":
        this.node.setFoldPolicy(newValue);
        break;
      case "foldThresholdPolicy":
        this.node.setFoldThresholdPolicy(newValue);
        break;
      case "locked":
        this.node.setLocked(newValue);
        break;
      case "modal":
        this.node.setModal(newValue);
        break;
      case "revealFlap":
        this.node.setRevealFlap(newValue);
        break;
      case "revealParams":
        this.node.setRevealParams(newValue);
        break;
      case "separator":
        this.node.setSeparator(newValue);
        break;
      case "swipeToClose":
        this.node.setSwipeToClose(newValue);
        break;
      case "swipeToOpen":
        this.node.setSwipeToOpen(newValue);
        break;
      case "transitionType":
        this.node.setTransitionType(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "orientation":
        this.node.setOrientation(newValue);
        break;
      case "onNotifyContent":
        this.setHandler("notify::content", newValue);
        break;
      case "onNotifyFlap":
        this.setHandler("notify::flap", newValue);
        break;
      case "onNotifyFlapPosition":
        this.setHandler("notify::flapPosition", newValue);
        break;
      case "onNotifyFoldDuration":
        this.setHandler("notify::foldDuration", newValue);
        break;
      case "onNotifyFoldPolicy":
        this.setHandler("notify::foldPolicy", newValue);
        break;
      case "onNotifyFoldThresholdPolicy":
        this.setHandler("notify::foldThresholdPolicy", newValue);
        break;
      case "onNotifyFolded":
        this.setHandler("notify::folded", newValue);
        break;
      case "onNotifyLocked":
        this.setHandler("notify::locked", newValue);
        break;
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue);
        break;
      case "onNotifyRevealFlap":
        this.setHandler("notify::revealFlap", newValue);
        break;
      case "onNotifyRevealParams":
        this.setHandler("notify::revealParams", newValue);
        break;
      case "onNotifyRevealProgress":
        this.setHandler("notify::revealProgress", newValue);
        break;
      case "onNotifySeparator":
        this.setHandler("notify::separator", newValue);
        break;
      case "onNotifySwipeToClose":
        this.setHandler("notify::swipeToClose", newValue);
        break;
      case "onNotifySwipeToOpen":
        this.setHandler("notify::swipeToOpen", newValue);
        break;
      case "onNotifyTransitionType":
        this.setHandler("notify::transitionType", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
