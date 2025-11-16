import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class TextView<T extends Gtk.TextView = Gtk.TextView> extends Widget<T> {
  static createNode() {
    return new Gtk.TextView({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "acceptsTab":
        this.node.setAcceptsTab(newValue);
        break;
      case "bottomMargin":
        this.node.setBottomMargin(newValue);
        break;
      case "buffer":
        this.node.setBuffer(newValue);
        break;
      case "cursorVisible":
        this.node.setCursorVisible(newValue);
        break;
      case "editable":
        this.node.setEditable(newValue);
        break;
      case "extraMenu":
        this.node.setExtraMenu(newValue);
        break;
      case "imModule":
        this.node.imModule = newValue;
        break;
      case "indent":
        this.node.setIndent(newValue);
        break;
      case "inputHints":
        this.node.setInputHints(newValue);
        break;
      case "inputPurpose":
        this.node.setInputPurpose(newValue);
        break;
      case "justification":
        this.node.setJustification(newValue);
        break;
      case "leftMargin":
        this.node.setLeftMargin(newValue);
        break;
      case "monospace":
        this.node.setMonospace(newValue);
        break;
      case "overwrite":
        this.node.setOverwrite(newValue);
        break;
      case "pixelsAboveLines":
        this.node.setPixelsAboveLines(newValue);
        break;
      case "pixelsBelowLines":
        this.node.setPixelsBelowLines(newValue);
        break;
      case "pixelsInsideWrap":
        this.node.setPixelsInsideWrap(newValue);
        break;
      case "rightMargin":
        this.node.setRightMargin(newValue);
        break;
      case "tabs":
        this.node.setTabs(newValue);
        break;
      case "topMargin":
        this.node.setTopMargin(newValue);
        break;
      case "wrapMode":
        this.node.setWrapMode(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "hadjustment":
        this.node.setHadjustment(newValue);
        break;
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue);
        break;
      case "vadjustment":
        this.node.setVadjustment(newValue);
        break;
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue);
        break;
      case "onBackspace":
        this.setHandler("backspace", newValue);
        break;
      case "onCopyClipboard":
        this.setHandler("copy-clipboard", newValue);
        break;
      case "onCutClipboard":
        this.setHandler("cut-clipboard", newValue);
        break;
      case "onDeleteFromCursor":
        this.setHandler("delete-from-cursor", newValue);
        break;
      case "onExtendSelection":
        this.setHandler("extend-selection", newValue);
        break;
      case "onInsertAtCursor":
        this.setHandler("insert-at-cursor", newValue);
        break;
      case "onInsertEmoji":
        this.setHandler("insert-emoji", newValue);
        break;
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue);
        break;
      case "onMoveViewport":
        this.setHandler("move-viewport", newValue);
        break;
      case "onPasteClipboard":
        this.setHandler("paste-clipboard", newValue);
        break;
      case "onPreeditChanged":
        this.setHandler("preedit-changed", newValue);
        break;
      case "onSelectAll":
        this.setHandler("select-all", newValue);
        break;
      case "onSetAnchor":
        this.setHandler("set-anchor", newValue);
        break;
      case "onToggleCursorVisible":
        this.setHandler("toggle-cursor-visible", newValue);
        break;
      case "onToggleOverwrite":
        this.setHandler("toggle-overwrite", newValue);
        break;
      case "onNotifyAcceptsTab":
        this.setHandler("notify::acceptsTab", newValue);
        break;
      case "onNotifyBottomMargin":
        this.setHandler("notify::bottomMargin", newValue);
        break;
      case "onNotifyBuffer":
        this.setHandler("notify::buffer", newValue);
        break;
      case "onNotifyCursorVisible":
        this.setHandler("notify::cursorVisible", newValue);
        break;
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue);
        break;
      case "onNotifyExtraMenu":
        this.setHandler("notify::extraMenu", newValue);
        break;
      case "onNotifyImModule":
        this.setHandler("notify::imModule", newValue);
        break;
      case "onNotifyIndent":
        this.setHandler("notify::indent", newValue);
        break;
      case "onNotifyInputHints":
        this.setHandler("notify::inputHints", newValue);
        break;
      case "onNotifyInputPurpose":
        this.setHandler("notify::inputPurpose", newValue);
        break;
      case "onNotifyJustification":
        this.setHandler("notify::justification", newValue);
        break;
      case "onNotifyLeftMargin":
        this.setHandler("notify::leftMargin", newValue);
        break;
      case "onNotifyMonospace":
        this.setHandler("notify::monospace", newValue);
        break;
      case "onNotifyOverwrite":
        this.setHandler("notify::overwrite", newValue);
        break;
      case "onNotifyPixelsAboveLines":
        this.setHandler("notify::pixelsAboveLines", newValue);
        break;
      case "onNotifyPixelsBelowLines":
        this.setHandler("notify::pixelsBelowLines", newValue);
        break;
      case "onNotifyPixelsInsideWrap":
        this.setHandler("notify::pixelsInsideWrap", newValue);
        break;
      case "onNotifyRightMargin":
        this.setHandler("notify::rightMargin", newValue);
        break;
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue);
        break;
      case "onNotifyTopMargin":
        this.setHandler("notify::topMargin", newValue);
        break;
      case "onNotifyWrapMode":
        this.setHandler("notify::wrapMode", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue);
        break;
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscrollPolicy", newValue);
        break;
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue);
        break;
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscrollPolicy", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
