import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],

    },
  }),
  {
    files: ["**/*.{js,ts,mjs,mts,cjs,cts,vue}"],
    rules: {
      "perfectionist/sort-imports": ["error", {
        tsconfig: { rootDir: "." },
      }],
    },
  },
);
// Your custom configs here
