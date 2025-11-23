import * as React from "react";
import ReactReconciler, {HostConfig} from "react-reconciler";
import {DefaultEventPriority} from "react-reconciler/constants.js";
import * as R from "remeda";
import Gtk from "./generated/girs/node-gtk-4.0.js";
import * as widgets from "./generated/widgets.js";
import {Label} from "./generated/widgets/label.js";
import {Widget} from "./generated/widgets/widget.js";
import Node from "./node.js";

type ElementType = keyof typeof widgets;
type UpdatePayload = [string, any][];

type WidgetConstructor = typeof Widget & {
  createNode(props: Record<string, any>): Gtk.Widget;
};

function definedProps(obj: Record<string, any>) {
  return R.omitBy(
    obj,
    (value, key) => value === undefined || key === "children"
  );
}

export function getWidgetClass(type: string): WidgetConstructor {
  const Widget = widgets[type as keyof typeof widgets];

  if (!Widget) {
    throw new Error(`Unknown widget type: ${type}`);
  }

  return Widget as WidgetConstructor;
}

const hostConfig: HostConfig<
  ElementType,
  Record<string, any>,
  Node,
  Widget,
  Widget,
  Widget,
  Widget,
  Gtk.Widget,
  unknown,
  UpdatePayload,
  Set<Widget>,
  ReturnType<typeof setTimeout>,
  -1
> = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsHydration: false,
  isPrimaryRenderer: true,
  noTimeout: -1,
  createInstance(type, instanceProps) {
    const Widget = getWidgetClass(type);
    const props = definedProps(instanceProps);
    const node = Widget.createNode(props);
    return new Widget(props, node);
  },
  createTextInstance(text) {
    const node = Label.createNode();
    return new Label({label: text}, node);
  },
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },
  finalizeInitialChildren() {
    return true;
  },
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },
  insertBefore(parentInstance, child, beforeChild) {
    parentInstance.insertBefore(child, beforeChild);
  },
  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  prepareUpdate(_instance, _type, oldProps, newProps) {
    return Object.keys(definedProps(newProps)).reduce((acc, propName) => {
      if (oldProps[propName] !== newProps[propName]) {
        acc.push([propName, newProps[propName]]);
      }
      return acc;
    }, [] as UpdatePayload);
  },
  commitMount(instance) {
    instance.commitMount();
  },
  commitUpdate(instance, updatePayload) {
    for (const [propName, newValue] of updatePayload) {
      instance.set(propName, newValue);
    }
  },
  commitTextUpdate(textInstance, _oldText, newText) {
    textInstance.set("label", newText);
  },
  shouldSetTextContent() {
    return false;
  },
  getRootHostContext() {
    return null;
  },
  getChildHostContext(parentHostContext) {
    return parentHostContext;
  },
  getPublicInstance(instance) {
    return instance.node;
  },
  prepareForCommit() {
    return null;
  },
  resetAfterCommit() {
    return null;
  },
  preparePortalMount() {},
  scheduleTimeout(fn, delay) {
    return setTimeout(fn, delay);
  },
  cancelTimeout(id) {
    clearTimeout(id);
  },
  getCurrentEventPriority() {
    return DefaultEventPriority;
  },
  getInstanceFromNode() {
    return null;
  },
  beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur() {},
  prepareScopeUpdate() {},
  getInstanceFromScope() {
    return null;
  },
  detachDeletedInstance() {},
  clearContainer(container) {
    for (const child of container.children) {
      container.removeChild(child);
    }
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  insertInContainerBefore(container, child, beforeChild) {
    container.insertBefore(child, beforeChild);
  },
  scheduleMicrotask(fn) {
    queueMicrotask(fn);
  },
};

export function createReconciler(): Reconciler {
  const reconciler = ReactReconciler(hostConfig);

  // const baseInject = (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.inject;
  // (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = (
  //   injected: unknown
  // ) => {
  //   console.log("Trying to inject:", injected);
  //   baseInject.call(
  //     (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__,
  //     injected
  //   );
  // };

  // Register with the global DevTools hook so React Refresh can discover roots.
  console.log(
    "Got env:",
    process.env.NODE_ENV,
    "hasHook:",
    typeof (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined"
  );
  console.log("Hooks:", (global as any).__REACT_DEVTOOLS_GLOBAL_HOOK__);
  const result = reconciler.injectIntoDevTools({
    bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
    version: React.version,
    rendererPackageName: "@react-node-gtk4/renderer",
    findFiberByHostInstance: (reconciler as any).findFiberByHostInstance,
  });
  console.log(
    "Injection result:",
    result,
    "rendererCount:",
    0
    // devtoolsHook.renderers?.size
  );
  console.log("Hooks:", (global as any).__REACT_DEVTOOLS_GLOBAL_HOOK__);

  return reconciler;
}

export type Reconciler = ReturnType<typeof ReactReconciler>;
export const Reconciler = createReconciler();
