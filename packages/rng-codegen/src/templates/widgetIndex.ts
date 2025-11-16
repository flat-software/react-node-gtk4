import {Gir} from "../gir.ts";

export function widgetIndex(gir: Gir) {
  let ts = "";

  for (const widgetClass of gir.widgetClasses) {
    ts += `export { default as ${widgetClass.name} } from "./widgets/${widgetClass.name}.ts"\n`;
  }

  return ts;
}
