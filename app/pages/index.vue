<template>
  <AppHero />
  <AppBrand />
  <AppAbout />
  <AppService />
  <AppProcess />
  <AppPricing />
  <AppPricelistDownload />
  <AppVideoExperience />
  <AppPortfolio />
  <AppTestimoni />
  <AppWhyUs />
  <AppFaq />
  <AppContact />
  <!-- <AppWAFloat /> -->
</template>

<script setup lang="ts">
useSeoMeta({
  title: "NIL Entertainment — Jasa Sewa Photobooth & Videobooth 360 Bali",
  description:
    "NIL Entertainment — Penyedia Photobooth & Videobooth 360 premium di Bali. Kualitas cetak 15 detik, kamera DSLR 24MP, dan garansi kepuasan 100% untuk Wedding, Corporate, & Private Event.",
  ogTitle: "NIL Entertainment — Photobooth & Videobooth 360 Bali",
  ogDescription:
    "Layanan Photobooth & Videobooth 360 premium untuk event spesial di Bali. Wedding, corporate, birthday, dan private event.",
  ogType: "website",
  ogSiteName: "NIL Entertainment",
  twitterCard: "summary_large_image",
  keywords:
    "photobooth bali, sewa photobooth bali, videobooth 360 bali, vendor photobooth bali, wedding photobooth bali, event documentation bali",
  author: "NIL Entertainment",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "NIL Entertainment",
        image: "https://nilphotoboothbali.com/logo/logo.webp",
        "@id": "https://nilphotoboothbali.com",
        url: "https://nilphotoboothbali.com",
        telephone: "+6287866861146",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Tukad Batanghari VII No.2A",
          addressLocality: "Denpasar",
          addressRegion: "Bali",
          postalCode: "80225",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -8.67,
          longitude: 115.2285,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [
          "https://www.instagram.com/nil_entertain/",
          "https://www.tiktok.com/@nil_entertaint",
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NIL Entertainment",
        url: "https://nilphotoboothbali.com",
        logo: "https://nilphotoboothbali.com/logo/logo.webp",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+6287866861146",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
      }),
    },
  ],
});
</script>
