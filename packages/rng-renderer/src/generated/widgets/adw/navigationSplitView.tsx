import Adw from "@/generated/girs/node-adw-1.js";
import {Widget as GtkWidget} from "../gtk/widget.js";

export class NavigationSplitView<
  T extends Adw.NavigationSplitView = Adw.NavigationSplitView,
> extends GtkWidget<T> {
  static createNode() {
    return new Adw.NavigationSplitView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "collapsed":
        this.node.setCollapsed(newValue);
        break;
      case "content":
        this.node.setContent(newValue);
        break;
      case "maxSidebarWidth":
        this.node.setMaxSidebarWidth(newValue);
        break;
      case "minSidebarWidth":
        this.node.setMinSidebarWidth(newValue);
        break;
      case "showContent":
        this.node.setShowContent(newValue);
        break;
      case "sidebar":
        this.node.setSidebar(newValue);
        break;
      case "sidebarPosition":
        this.node.setSidebarPosition(newValue);
        break;
      case "sidebarWidthFraction":
        this.node.setSidebarWidthFraction(newValue);
        break;
      case "sidebarWidthUnit":
        this.node.setSidebarWidthUnit(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyCollapsed":
        this.setHandler("notify::collapsed", newValue);
        break;
      case "onNotifyContent":
        this.setHandler("notify::content", newValue);
        break;
      case "onNotifyMaxSidebarWidth":
        this.setHandler("notify::maxSidebarWidth", newValue);
        break;
      case "onNotifyMinSidebarWidth":
        this.setHandler("notify::minSidebarWidth", newValue);
        break;
      case "onNotifyShowContent":
        this.setHandler("notify::showContent", newValue);
        break;
      case "onNotifySidebar":
        this.setHandler("notify::sidebar", newValue);
        break;
      case "onNotifySidebarPosition":
        this.setHandler("notify::sidebarPosition", newValue);
        break;
      case "onNotifySidebarWidthFraction":
        this.setHandler("notify::sidebarWidthFraction", newValue);
        break;
      case "onNotifySidebarWidthUnit":
        this.setHandler("notify::sidebarWidthUnit", newValue);
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
