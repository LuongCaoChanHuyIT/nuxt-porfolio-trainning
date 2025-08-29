// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],

  pinia: {
    storesDirs: ["./stores/**"],
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  // @ts-ignore
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "vi", iso: "vi-VN", file: "vi.json", name: "Tiếng Việt" },
    ],
    defaultLocale: "en",

    lazy: true,
    langDir: "lang/",
  },
});
