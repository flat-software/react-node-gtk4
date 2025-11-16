import * as R from "remeda";
import {GirClass} from "../gir/class.ts";

export function widgetIndex(widgetClasses: readonly GirClass[]) {
  let ts = "";

  for (const widgetClass of widgetClasses) {
    ts += `export * from "./${R.toCamelCase(widgetClass.name)}.js"\n`;
  }

  return ts;
}
