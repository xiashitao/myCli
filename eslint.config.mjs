import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.ts"],
//   ignores: ["node_modules", "*.js"],
  rules: {
    "no-console": "error",
  },
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...globals.node,
    },
    parserOptions: {
        // project, 有哪些子包
        project: ["./tsconfig.eslint.json", "**/*/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname
    }
  },
//   plugins: {
//     "simple-import-sort": simpleImportSort,
//   },
});
