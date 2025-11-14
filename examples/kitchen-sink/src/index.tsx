import render, {Gio, Gtk} from "@react-node-gtk4/renderer";
import React from "react";
import App from "./components/App.js";

render(
  <App />,
  new Gtk.Application(
    "com.example.kitchen-sink",
    Gio.ApplicationFlags.DEFAULT_FLAGS
  )
);
