import {Gir} from "../gir.ts";

export function intrinsics(gir: Gir) {
  let ts = "";

  for (const widgetClass of gir.widgetClasses) {
    ts += `export const ${widgetClass.jsxName} = "${widgetClass.jsxName}"\n`;
  }

  return ts;
}
