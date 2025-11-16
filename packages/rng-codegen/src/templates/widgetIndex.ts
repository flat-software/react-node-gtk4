import {GirClass} from "../gir/class.ts";

export function widgetIndex(widgetClasses: readonly GirClass[]) {
  let ts = "";

  for (const widgetClass of widgetClasses) {
    ts += `export * from "./${widgetClass.name}.js"\n`;
  }

  return ts;
}
