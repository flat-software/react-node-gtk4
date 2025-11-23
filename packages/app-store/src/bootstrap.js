const RefreshRuntime = require("react-refresh/runtime");

RefreshRuntime.injectIntoGlobalHook(global);

global.$RefreshReg$ = (type, id) => {
  console.log("RefreshReg:", type, id);
  RefreshRuntime.register(type, id);
};
global.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
global.__REACT_REFRESH_RUNTIME__ = RefreshRuntime;

require("@babel/register")({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  ignore: [/node_modules/],
  presets: [
    // Optional but nice: targets current Node.
    ["@babel/preset-env", {targets: {node: "current"}}],
    // Strip types + handle TS syntax.
    ["@babel/preset-typescript", {isTSX: true, allExtensions: true}],
    // If you use JSX with React.
    ["@babel/preset-react", {runtime: "automatic"}],
  ],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", {loose: true}],
    ["react-refresh/babel", {skipEnvCheck: true}],
  ],
});

require("./index.tsx");
