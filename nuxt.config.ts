// https://nuxt.com/docs/api/configuration/nuxt-config

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
    build: {
      cssCodeSplit: true,
      minify: "esbuild",
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
        { rel: "icon", type: "image/png", href: "/favicon/favicon-32x32.png" },
        { rel: "preload", as: "image", href: "/img/portfolio/photobooth/p6.webp" }
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
      { name: 'Cormorant Garamond', provider: 'google', display: 'swap' },
      { name: 'Manrope', provider: 'google', display: 'swap' }
    ],
  },
  image: {
    quality: 75,
    format: ["webp", "avif"],
    domains: ["127.0.0.1:8000", "images.unsplash.com"],
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
  nitro: {
    compressPublicAssets: true,
  },
});
