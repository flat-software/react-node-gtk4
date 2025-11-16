import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class FileChooserWidget<
  T extends Gtk.FileChooserWidget = Gtk.FileChooserWidget,
> extends Widget<T> {
  static createNode() {
    return new Gtk.FileChooserWidget({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "searchMode":
        this.node.searchMode = newValue;
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "action":
        this.node.setAction(newValue);
        break;
      case "createFolders":
        this.node.setCreateFolders(newValue);
        break;
      case "filter":
        this.node.setFilter(newValue);
        break;
      case "selectMultiple":
        this.node.setSelectMultiple(newValue);
        break;
      case "onDesktopFolder":
        this.setHandler("desktop-folder", newValue);
        break;
      case "onDownFolder":
        this.setHandler("down-folder", newValue);
        break;
      case "onHomeFolder":
        this.setHandler("home-folder", newValue);
        break;
      case "onLocationPopup":
        this.setHandler("location-popup", newValue);
        break;
      case "onLocationPopupOnPaste":
        this.setHandler("location-popup-on-paste", newValue);
        break;
      case "onLocationTogglePopup":
        this.setHandler("location-toggle-popup", newValue);
        break;
      case "onPlacesShortcut":
        this.setHandler("places-shortcut", newValue);
        break;
      case "onQuickBookmark":
        this.setHandler("quick-bookmark", newValue);
        break;
      case "onRecentShortcut":
        this.setHandler("recent-shortcut", newValue);
        break;
      case "onSearchShortcut":
        this.setHandler("search-shortcut", newValue);
        break;
      case "onShowHidden":
        this.setHandler("show-hidden", newValue);
        break;
      case "onUpFolder":
        this.setHandler("up-folder", newValue);
        break;
      case "onNotifySearchMode":
        this.setHandler("notify::searchMode", newValue);
        break;
      case "onNotifyShowTime":
        this.setHandler("notify::showTime", newValue);
        break;
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyAction":
        this.setHandler("notify::action", newValue);
        break;
      case "onNotifyCreateFolders":
        this.setHandler("notify::createFolders", newValue);
        break;
      case "onNotifyFilter":
        this.setHandler("notify::filter", newValue);
        break;
      case "onNotifyFilters":
        this.setHandler("notify::filters", newValue);
        break;
      case "onNotifySelectMultiple":
        this.setHandler("notify::selectMultiple", newValue);
        break;
      case "onNotifyShortcutFolders":
        this.setHandler("notify::shortcutFolders", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
