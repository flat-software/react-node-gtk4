import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class Leaflet<T extends Adw.Leaflet = Adw.Leaflet> extends GtkWidget<T> {
  static createNode() {
    return new Adw.Leaflet({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "canNavigateBack":
        this.node.setCanNavigateBack(newValue);
        break;
      case "canNavigateForward":
        this.node.setCanNavigateForward(newValue);
        break;
      case "canUnfold":
        this.node.setCanUnfold(newValue);
        break;
      case "childTransitionParams":
        this.node.setChildTransitionParams(newValue);
        break;
      case "foldThresholdPolicy":
        this.node.setFoldThresholdPolicy(newValue);
        break;
      case "homogeneous":
        this.node.setHomogeneous(newValue);
        break;
      case "modeTransitionDuration":
        this.node.setModeTransitionDuration(newValue);
        break;
      case "transitionType":
        this.node.setTransitionType(newValue);
        break;
      case "visibleChild":
        this.node.setVisibleChild(newValue);
        break;
      case "visibleChildName":
        this.node.setVisibleChildName(newValue);
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
      case "onNotifyCanNavigateBack":
        this.setHandler("notify::canNavigateBack", newValue);
        break;
      case "onNotifyCanNavigateForward":
        this.setHandler("notify::canNavigateForward", newValue);
        break;
      case "onNotifyCanUnfold":
        this.setHandler("notify::canUnfold", newValue);
        break;
      case "onNotifyChildTransitionParams":
        this.setHandler("notify::childTransitionParams", newValue);
        break;
      case "onNotifyChildTransitionRunning":
        this.setHandler("notify::childTransitionRunning", newValue);
        break;
      case "onNotifyFoldThresholdPolicy":
        this.setHandler("notify::foldThresholdPolicy", newValue);
        break;
      case "onNotifyFolded":
        this.setHandler("notify::folded", newValue);
        break;
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue);
        break;
      case "onNotifyModeTransitionDuration":
        this.setHandler("notify::modeTransitionDuration", newValue);
        break;
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue);
        break;
      case "onNotifyTransitionType":
        this.setHandler("notify::transitionType", newValue);
        break;
      case "onNotifyVisibleChild":
        this.setHandler("notify::visibleChild", newValue);
        break;
      case "onNotifyVisibleChildName":
        this.setHandler("notify::visibleChildName", newValue);
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
