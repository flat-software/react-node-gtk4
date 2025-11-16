import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Video<T extends Gtk.Video = Gtk.Video> extends Widget<T> {
  static createNode() {
    return new Gtk.Video({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "autoplay":
        this.node.setAutoplay(newValue);
        break;
      case "file":
        this.node.setFile(newValue);
        break;
      case "graphicsOffload":
        this.node.setGraphicsOffload(newValue);
        break;
      case "loop":
        this.node.setLoop(newValue);
        break;
      case "mediaStream":
        this.node.setMediaStream(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onNotifyAutoplay":
        this.setHandler("notify::autoplay", newValue);
        break;
      case "onNotifyFile":
        this.setHandler("notify::file", newValue);
        break;
      case "onNotifyGraphicsOffload":
        this.setHandler("notify::graphicsOffload", newValue);
        break;
      case "onNotifyLoop":
        this.setHandler("notify::loop", newValue);
        break;
      case "onNotifyMediaStream":
        this.setHandler("notify::mediaStream", newValue);
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
