import render, {Gio, Gtk} from "@react-node-gtk4/renderer";
import {App} from "./components/app.js";

render(
  <App />,
  new Gtk.Application("com.rougeos.store", Gio.ApplicationFlags.DEFAULT_FLAGS)
);
