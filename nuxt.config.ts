// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/devtools",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "vue3-carousel-nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "NIL Entertain — Photobooth & Videobooth360 Bali",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'NIL Entertain — Photobooth & Videobooth360 premium untuk event spesial di Bali. Wedding, corporate, birthday, dan private event.' },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap" },
      ],
    },
  },
  site: {
    url: "https://nilentertain.com",
    name: "NIL Entertain",
    description: "Photobooth & Videobooth360 Bali",
    defaultLocale: "id",
    indexable: true,
  },
  fonts: {
    families: [
      { name: 'Cormorant Garamond', provider: 'google' },
      { name: 'Manrope', provider: 'google' }
    ],
  },
  image: {
    quality: 80,
    format: ["webp", "avif"],
    domains: ["127.0.0.1:8000"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "/",
    },
  },
});
