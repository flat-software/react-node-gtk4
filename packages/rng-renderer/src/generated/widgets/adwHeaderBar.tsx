import Adw from "@/generated/girs/node-adw-1.js";
import {Widget} from "./widget.js";

export class AdwHeaderBar<
  T extends Adw.HeaderBar = Adw.HeaderBar,
> extends Widget<T> {
  static createNode() {
    return new Adw.HeaderBar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "centeringPolicy":
        this.node.setCenteringPolicy(newValue);
        break;
      case "decorationLayout":
        this.node.setDecorationLayout(newValue);
        break;
      case "showBackButton":
        this.node.setShowBackButton(newValue);
        break;
      case "showEndTitleButtons":
        this.node.setShowEndTitleButtons(newValue);
        break;
      case "showStartTitleButtons":
        this.node.setShowStartTitleButtons(newValue);
        break;
      case "showTitle":
        this.node.setShowTitle(newValue);
        break;
      case "titleWidget":
        this.node.setTitleWidget(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyCenteringPolicy":
        this.setHandler("notify::centeringPolicy", newValue);
        break;
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decorationLayout", newValue);
        break;
      case "onNotifyShowBackButton":
        this.setHandler("notify::showBackButton", newValue);
        break;
      case "onNotifyShowEndTitleButtons":
        this.setHandler("notify::showEndTitleButtons", newValue);
        break;
      case "onNotifyShowStartTitleButtons":
        this.setHandler("notify::showStartTitleButtons", newValue);
        break;
      case "onNotifyShowTitle":
        this.setHandler("notify::showTitle", newValue);
        break;
      case "onNotifyTitleWidget":
        this.setHandler("notify::titleWidget", newValue);
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
