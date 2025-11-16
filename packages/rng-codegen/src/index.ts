import fs from "fs";
import * as R from "remeda";
import {Gir} from "./gir.ts";
import * as templates from "./templates.ts";

const GIRS_DIR = process.argv[2];
const OUT_DIR = process.argv[3];

function createDirectory(path: string) {
  fs.mkdirSync(`${OUT_DIR}/${path}`, {recursive: true});
}

function writeGeneratedFile(path: string, content: string) {
  fs.writeFileSync(`${OUT_DIR}/${path}`, content);
}

async function main() {
  if (!GIRS_DIR) {
    throw new Error("GIRS_DIR required.");
  }

  if (!OUT_DIR) {
    throw new Error("OUT_DIR required.");
  }

  const gir = await Gir.parse(GIRS_DIR);
  const widgetClasses = gir.widgetClasses;

  R.pipe(
    widgetClasses,
    R.groupBy(wc => R.toCamelCase(wc.type.namespace)),
    R.entries(),
    R.forEach(([namespace, namespaceClasses]) => {
      const widgetPath = `src/generated/widgets/${namespace}`;
      const widgetTestsPath = `${widgetPath}/__tests__`;
      createDirectory(widgetPath);
      createDirectory(widgetTestsPath);

      for (const widgetClass of namespaceClasses) {
        const filename = R.toCamelCase(widgetClass.name);
        writeGeneratedFile(
          `${widgetPath}/${filename}.tsx`,
          templates.widget(widgetClass)
        );

        writeGeneratedFile(
          `${widgetTestsPath}/${filename}.test.ts`,
          templates.widgetTest(widgetClass, gir)
        );
      }

      writeGeneratedFile(
        `${widgetPath}/widgets.ts`,
        templates.widgetIndex(namespaceClasses)
      );
    })
  );

  // for (const widgetClass of gir.widgetClasses) {
  //   // const
  //   const fileName = widgetClass.type.namespace;
  //   writeGeneratedFile(
  //     `src/generated/widgets/${fileName}.tsx`,
  //     templates.widget(widgetClass)
  //   );

  //   writeGeneratedFile(
  //     `__tests__/generated/widgets/${fileName}.test.ts`,
  //     templates.widgetTest(widgetClass, gir)
  //   );
  // }

  // writeGeneratedFile("src/generated/intrinsics.ts", templates.intrinsics(gir));
  // writeGeneratedFile("src/generated/jsx.ts", templates.jsx(gir));
  // writeGeneratedFile("src/generated/widgets.ts", templates.widgetIndex(gir));
}

main();
