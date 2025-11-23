import RefreshRuntime from "react-refresh/runtime";

// RefreshRuntime.injectIntoGlobalHook(global as any);

// Provide a minimal DevTools global hook so our custom renderer can register.
// (global as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ ??= (() => {
//   let nextId = 0;
//   const renderers = new Map<number, any>();
//   return {
//     supportsFiber: true,
//     renderers,
//     inject(renderer: any) {
//       console.log("Injecting:", renderer);
//       const id = ++nextId;
//       renderers.set(id, renderer);
//       return id;
//     },
//     onCommitFiberRoot() {},
//     onCommitFiberUnmount() {},
//   };
// })();

// const baseRegister = RefreshRuntime.register;
// RefreshRuntime.register = (type: unknown, id: string) => {
//   console.log("Registering with Refresh Runtime:", type, id);
//   baseRegister.call(RefreshRuntime, type, id);
// };

// Default no-op so non-transformed modules don’t crash
// (global as any).$RefreshReg$ = (type: unknown, id: string) => {
//   console.log("RefreshReg:", type, id);
//   RefreshRuntime.register(type, id);
// };
// (global as any).$RefreshSig$ =
//   RefreshRuntime.createSignatureFunctionForTransform;
// (global as any).__REACT_REFRESH_RUNTIME__ = RefreshRuntime;

// require("@babel/register")({
//   extensions: [".js", ".jsx", ".ts", ".tsx"],
//   ignore: [/node_modules/],
//   plugins: [require("react-refresh/babel")],
// });

import render, {Gio, Gtk} from "@react-node-gtk4/renderer";
import chokidar from "chokidar";
import {FC, useEffect, useState} from "react";

const reloadPreserveExports = (fileName: string) => {
  const cached = require.cache[fileName];
  const prevExports = cached?.exports;

  delete require.cache[fileName];
  const nextExports = require(fileName);

  if (prevExports && typeof prevExports === "object") {
    for (const key of Object.keys(prevExports)) {
      delete (prevExports as any)[key];
    }
    if (nextExports && typeof nextExports === "object") {
      Object.assign(prevExports, nextExports);
    } else {
      (prevExports as any).default = nextExports;
    }
    return prevExports;
  }

  return nextExports;
};

if ((global as any).__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers) {
  for (const [id, helpers] of (global as any).__REACT_DEVTOOLS_GLOBAL_HOOK__
    .renderers) {
    console.log("renderer", id, Object.keys(helpers));
  }
}

console.log("Test resolve:", require.resolve("./components/label"));

const AppWrapper: FC = () => {
  const [App] = useState(() => require("./components/app").App);
  const [, setTick] = useState(0);

  useEffect(() => {
    const watcher = chokidar.watch("./src/components", {
      ignoreInitial: true,
    });

    watcher.on("change", file => {
      console.log("Got file change:", file);

      const fileName = require.resolve(file.replace("src/", "./"));
      console.log({fileName});

      // delete require.cache[fileName];
      reloadPreserveExports(fileName);
      RefreshRuntime.performReactRefresh();

      setTick(t => t + 1);
    });

    return () => {
      watcher.close();
    };
  }, []);

  console.log("Rendering");
  return <App />;
};

render(
  <AppWrapper />,
  new Gtk.Application("com.rougeos.store", Gio.ApplicationFlags.DEFAULT_FLAGS)
);
