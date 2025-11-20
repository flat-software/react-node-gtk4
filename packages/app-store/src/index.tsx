import render, {Gio, Gtk} from "@react-node-gtk4/renderer";
import chokidar from "chokidar";
import {FC, useEffect, useState} from "react";
import {App} from "./components/app";

const AppWrapper: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const watcher = chokidar.watch(require.resolve("./components/app"), {
      ignoreInitial: true,
    });

    watcher.on("change", file => {
      console.log("Got file change:", file);
    });

    return () => {
      watcher.close();
    };
  }, []);

  return <App />;
};

render(
  <AppWrapper />,
  new Gtk.Application("com.rougeos.store", Gio.ApplicationFlags.DEFAULT_FLAGS)
);
