import {AbstractWidget} from "../../abstractWidget.js";
import Gtk from "../girs/node-gtk-4.0.js";

export class Widget<
  T extends Gtk.Widget = Gtk.Widget,
> extends AbstractWidget<T> {
  static createNode() {
    return new Gtk.Widget({});
  }
  commitMount() {}
  set(propName: string, newValue: any) {
    switch (propName) {
      case "canFocus":
        this.node.setCanFocus(newValue);
        break;
      case "canTarget":
        this.node.setCanTarget(newValue);
        break;
      case "cssClasses":
        this.node.setCssClasses(newValue);
        break;
      case "cursor":
        this.node.setCursor(newValue);
        break;
      case "focusOnClick":
        this.node.setFocusOnClick(newValue);
        break;
      case "focusable":
        this.node.setFocusable(newValue);
        break;
      case "halign":
        this.node.setHalign(newValue);
        break;
      case "hasTooltip":
        this.node.setHasTooltip(newValue);
        break;
      case "heightRequest":
        this.node.heightRequest = newValue;
        break;
      case "hexpand":
        this.node.setHexpand(newValue);
        break;
      case "hexpandSet":
        this.node.setHexpandSet(newValue);
        break;
      case "layoutManager":
        this.node.setLayoutManager(newValue);
        break;
      case "limitEvents":
        this.node.setLimitEvents(newValue);
        break;
      case "marginBottom":
        this.node.setMarginBottom(newValue);
        break;
      case "marginEnd":
        this.node.setMarginEnd(newValue);
        break;
      case "marginStart":
        this.node.setMarginStart(newValue);
        break;
      case "marginTop":
        this.node.setMarginTop(newValue);
        break;
      case "name":
        this.node.setName(newValue);
        break;
      case "opacity":
        this.node.setOpacity(newValue);
        break;
      case "overflow":
        this.node.setOverflow(newValue);
        break;
      case "receivesDefault":
        this.node.setReceivesDefault(newValue);
        break;
      case "sensitive":
        this.node.setSensitive(newValue);
        break;
      case "tooltipMarkup":
        this.node.setTooltipMarkup(newValue);
        break;
      case "tooltipText":
        this.node.setTooltipText(newValue);
        break;
      case "valign":
        this.node.setValign(newValue);
        break;
      case "vexpand":
        this.node.setVexpand(newValue);
        break;
      case "vexpandSet":
        this.node.setVexpandSet(newValue);
        break;
      case "visible":
        this.node.setVisible(newValue);
        break;
      case "widthRequest":
        this.node.widthRequest = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onDestroy":
        this.setHandler("destroy", newValue);
        break;
      case "onDirectionChanged":
        this.setHandler("direction-changed", newValue);
        break;
      case "onHide":
        this.setHandler("hide", newValue);
        break;
      case "onKeynavFailed":
        this.setHandler("keynav-failed", newValue);
        break;
      case "onMap":
        this.setHandler("map", newValue);
        break;
      case "onMnemonicActivate":
        this.setHandler("mnemonic-activate", newValue);
        break;
      case "onMoveFocus":
        this.setHandler("move-focus", newValue);
        break;
      case "onQueryTooltip":
        this.setHandler("query-tooltip", newValue);
        break;
      case "onRealize":
        this.setHandler("realize", newValue);
        break;
      case "onShow":
        this.setHandler("show", newValue);
        break;
      case "onStateFlagsChanged":
        this.setHandler("state-flags-changed", newValue);
        break;
      case "onUnmap":
        this.setHandler("unmap", newValue);
        break;
      case "onUnrealize":
        this.setHandler("unrealize", newValue);
        break;
      case "onNotifyCanFocus":
        this.setHandler("notify::canFocus", newValue);
        break;
      case "onNotifyCanTarget":
        this.setHandler("notify::canTarget", newValue);
        break;
      case "onNotifyCssClasses":
        this.setHandler("notify::cssClasses", newValue);
        break;
      case "onNotifyCssName":
        this.setHandler("notify::cssName", newValue);
        break;
      case "onNotifyCursor":
        this.setHandler("notify::cursor", newValue);
        break;
      case "onNotifyFocusOnClick":
        this.setHandler("notify::focusOnClick", newValue);
        break;
      case "onNotifyFocusable":
        this.setHandler("notify::focusable", newValue);
        break;
      case "onNotifyHalign":
        this.setHandler("notify::halign", newValue);
        break;
      case "onNotifyHasDefault":
        this.setHandler("notify::hasDefault", newValue);
        break;
      case "onNotifyHasFocus":
        this.setHandler("notify::hasFocus", newValue);
        break;
      case "onNotifyHasTooltip":
        this.setHandler("notify::hasTooltip", newValue);
        break;
      case "onNotifyHeightRequest":
        this.setHandler("notify::heightRequest", newValue);
        break;
      case "onNotifyHexpand":
        this.setHandler("notify::hexpand", newValue);
        break;
      case "onNotifyHexpandSet":
        this.setHandler("notify::hexpandSet", newValue);
        break;
      case "onNotifyLayoutManager":
        this.setHandler("notify::layoutManager", newValue);
        break;
      case "onNotifyLimitEvents":
        this.setHandler("notify::limitEvents", newValue);
        break;
      case "onNotifyMarginBottom":
        this.setHandler("notify::marginBottom", newValue);
        break;
      case "onNotifyMarginEnd":
        this.setHandler("notify::marginEnd", newValue);
        break;
      case "onNotifyMarginStart":
        this.setHandler("notify::marginStart", newValue);
        break;
      case "onNotifyMarginTop":
        this.setHandler("notify::marginTop", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyOpacity":
        this.setHandler("notify::opacity", newValue);
        break;
      case "onNotifyOverflow":
        this.setHandler("notify::overflow", newValue);
        break;
      case "onNotifyParent":
        this.setHandler("notify::parent", newValue);
        break;
      case "onNotifyReceivesDefault":
        this.setHandler("notify::receivesDefault", newValue);
        break;
      case "onNotifyRoot":
        this.setHandler("notify::root", newValue);
        break;
      case "onNotifyScaleFactor":
        this.setHandler("notify::scaleFactor", newValue);
        break;
      case "onNotifySensitive":
        this.setHandler("notify::sensitive", newValue);
        break;
      case "onNotifyTooltipMarkup":
        this.setHandler("notify::tooltipMarkup", newValue);
        break;
      case "onNotifyTooltipText":
        this.setHandler("notify::tooltipText", newValue);
        break;
      case "onNotifyValign":
        this.setHandler("notify::valign", newValue);
        break;
      case "onNotifyVexpand":
        this.setHandler("notify::vexpand", newValue);
        break;
      case "onNotifyVexpandSet":
        this.setHandler("notify::vexpandSet", newValue);
        break;
      case "onNotifyVisible":
        this.setHandler("notify::visible", newValue);
        break;
      case "onNotifyWidthRequest":
        this.setHandler("notify::widthRequest", newValue);
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
