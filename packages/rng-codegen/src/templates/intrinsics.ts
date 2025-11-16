import {Gir} from "../gir.ts";

export function intrinsics(gir: Gir) {
  let ts = "";

  for (const widgetClass of gir.widgetClasses) {
    ts += `export const ${widgetClass.name} = "${widgetClass.name}"\n`;
  }

  return ts;
}
