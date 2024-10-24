export default defineNuxtConfig({
  app: {
    head: {
      title: "Weplan FullStack Test",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "white" },
      ],
      htmlAttrs: {
        "data-bs-theme": "light",
      },
    },
  },

  css: ["@/assets/main.scss"],

  modules: [
    "@vueuse/nuxt",
    "@bootstrap-vue-next/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  compatibilityDate: "2024-09-05",
});
