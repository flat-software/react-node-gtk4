import Gtk from "@/generated/girs/node-gtk-4.0.js";
import Container from "./container.js";
import "./overrides.js";
import {createReconciler} from "./reconciler.js";
import {createRootNode} from "./rootNode.js";

export {default as Gdk} from "@/generated/girs/node-gdk-4.0.js";
export {default as Gio} from "@/generated/girs/node-gio-2.0.js";
export {default as GLib} from "@/generated/girs/node-glib-2.0.js";
export {default as GObject} from "@/generated/girs/node-gobject-2.0.js";
export {default as Gtk} from "@/generated/girs/node-gtk-4.0.js";
export {default as Pango} from "@/generated/girs/node-pango-1.0.js";
export * from "./hooks.js";
export * from "./portal.js";
export {createReconciler, createRootNode};

export {
  AboutDialog,
  ActionBar,
  ApplicationWindow,
  Calendar,
  CenterBox,
  CheckButton,
  ColorDialogButton,
  ColumnView,
  DropDown,
  EmojiChooser,
  Expander,
  FontDialogButton,
  Frame,
  Grid,
  HeaderBar,
  LevelBar,
  ListModelProvider,
  ListProvider,
  ListView,
  MenuButton,
  MultipleFileDialog,
  Notebook,
  Overlay,
  PageSetupUnixDialog,
  Paned,
  Popover,
  PopoverMenu,
  PopoverMenuBar,
  PrintUnixDialog,
  Scale,
  SingleFileDialog,
  SpinButton,
  Stack,
  TextView,
  TreeProvider,
} from "./components.js";

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  const rootNode = createRootNode(application);
  const container = new Container(rootNode);

  rootNode.run(() => {
    container.render(element);
  });
}
