type Adw1 = typeof import("./node-adw-1.js").default;

declare global {
  interface NodeGtkGi {
    require(ns: "Adw", ver?: "1"): Adw1;
  }
}

export default NodeGtkGi;
