<script setup lang="ts">
import IconPhotobooth from "./svg-icon/IconPhotobooth.vue";
import IconVideobooth from "./svg-icon/IconVideobooth.vue";
import IconActivation from "./svg-icon/IconActivation.vue";
import DashedCircle from "./svg-icon/DashedCircle.vue";

const services = [
  {
    num: "01",
    name: "Photobooth",
    desc: "Layanan foto instan menggunakan kamera DSLR 24MP, Lighting Studio 300W, dan Printer berkecepatan 15 detik per cetak.",
    icon: IconPhotobooth,
    features: [
      "Original Kertas Photo (Garansi 100 Tahun)",
      "Standar Paper Frame 2mm (Khusus Paket Cetak)",
      "Gratis Scan QR Code untuk Download File",
      "Gratis Transport Seluruh Bali",
    ],
  },
  {
    num: "02",
    name: "Videobooth 360°",
    desc: "Booth berdiameter 100cm untuk 5 orang, dilengkapi LED Ring Light dan 8 lampu tambahan total 240W untuk hasil video sinematik.",
    icon: IconVideobooth,
    features: [
      "Digital Delivery (QR Code / AirDrop / Email)",
      "Gratis Custom Design & Music Video",
      "Garansi Softcopy Foto Seumur Hidup",
      "Gratis Funprops: Bubble Gun, Saber, dll.",
    ],
  },
  {
    num: "03",
    name: "Event Activation",
    desc: "Solusi dokumentasi profesional untuk brand activation, corporate event, dan wedding dengan jaminan 100% uang kembali.",
    icon: IconActivation,
    features: [
      "Flashdisk Eksklusif Berisi Semua File",
      "Garansi Foto Ulang Sepuasnya di Lokasi",
      "2 Crew Operator Berpengalaman",
      "Layanan Mudah, Cepat, dan Ramah",
    ],
  },
];
// JSON-LD for Services SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((svc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: svc.name,
            description: svc.desc,
            provider: {
              "@type": "LocalBusiness",
              name: "NIL Entertain",
            },
            areaServed: "Bali",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: svc.name + " Features",
              itemListElement: svc.features.map((f) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: f,
                },
              })),
            },
          },
        })),
      }),
    },
  ],
});
</script>

<template>
  <section
    id="layanan"
    class="relative py-24! lg:py-40! overflow-hidden bg-black"
  >
    <!-- Background System -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/img/service-bg.jpg"
        alt="NIL Entertain Service Background"
        class="w-full h-full object-cover opacity-20 grayscale"
        width="1920"
        height="1080"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-black via-burg/20 to-black"
      ></div>
    </div>

    <!-- Decorative -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <DashedCircle
        positionClass="absolute -top-[100px] -right-[160px] opacity-40 text-burg xl:block"
      />
    </div>

    <div class="container relative z-2">
      <div class="text-center mb-16! lg:mb-24!">
        <div class="inline-flex items-center gap-3 mb-6! reveal">
          <div class="h-px w-8 bg-white/20"></div>
          <span
            class="text-sm font-bold tracking-[0.3em] uppercase text-white/70"
            >Layanan Kami</span
          >
          <div class="h-px w-8 bg-white/20"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-5xl lg:text-7xl font-light leading-tight text-white reveal d1"
        >
          Spesialisasi<br />
          <em class="italic text-white/90 font-normal">NIL Entertain</em>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(svc, i) in services"
          :key="svc.num"
          class="group relative bg-cream p-10! lg:p-14! transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl reveal"
          :class="'d' + (i + 1)"
        >
          <!-- Big Number Backdrop -->
          <div
            class="absolute top-6 right-6 font-[Cormorant_Garamond] text-[80px] font-light leading-none text-burg/15 group-hover:text-burg transition-colors duration-500 z-0"
          >
            {{ svc.num }}
          </div>

          <div class="relative z-1">
            <div
              class="w-16 h-16 rounded-full bg-burg/5 flex items-center justify-center mb-10! group-hover:bg-burg-light group-hover:scale-110 transition-all duration-500"
            >
              <component
                :is="svc.icon"
                class="w-8 h-8 text-burg group-hover:text-white transition-colors duration-500"
              />
            </div>

            <h3
              class="font-[Cormorant_Garamond] text-3xl font-bold text-black mb-6!"
            >
              {{ svc.name }}
            </h3>
            <p class="text-base text-black/70 leading-relaxed mb-10!">
              {{ svc.desc }}
            </p>

            <div class="w-full h-px bg-burg/10 mb-10!"></div>

            <ul class="space-y-4">
              <li
                v-for="feat in svc.features"
                :key="feat"
                class="text-sm font-medium text-black pl-8! relative before:content-['✓'] before:absolute before:left-0 before:text-burg before:font-bold"
              >
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.d1 {
  animation-delay: 0.1s;
}
.d2 {
  animation-delay: 0.3s;
}
.d3 {
  animation-delay: 0.5s;
}

@keyframes reveal-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
