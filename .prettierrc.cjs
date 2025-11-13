/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  bracketSpacing: false,
  arrowParens: "avoid",
  trailingComma: "es5",
  tailwindFunctions: ["tiwi"],
  tailwindPreserveWhitespace: true,
  plugins: ["prettier-plugin-organize-imports"],
};

module.exports = config;
