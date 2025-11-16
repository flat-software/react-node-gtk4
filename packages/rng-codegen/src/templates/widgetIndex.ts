import * as R from "remeda";
import {Gir} from "../gir.ts";

export function widgetIndex(gir: Gir) {
  let ts = "";

  for (const widgetClass of gir.widgetClasses) {
    ts += `export * from "./widgets/${R.toCamelCase(widgetClass.jsxName)}.js"\n`;
  }

  return ts;
}
