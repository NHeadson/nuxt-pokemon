// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  compatibilityDate: "2024-07-15",
});
