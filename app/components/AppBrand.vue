<script setup lang="ts">
const brands = [
  { name: "Cafe del Mar", logo: "/img/brand/Cafe-del-Mar.webp" },
  { name: "MS Glow", logo: "/img/brand/MS-Glow.webp" },
  { name: "Aeroxspace", logo: "/img/brand/aeroxspace.webp" },
  { name: "Atlas", logo: "/img/brand/atlas.webp" },
  { name: "Finns", logo: "/img/brand/finns.webp" },
  { name: "Ibinet", logo: "/img/brand/ibinet.webp" },
  { name: "Kamari", logo: "/img/brand/kamari.webp" },
  { name: "Make Over", logo: "/img/brand/make-over.webp" },
  { name: "Pertamina", logo: "/img/brand/pertamina.webp" },
  { name: "Sanctoo", logo: "/img/brand/sanctoo.webp" },
  { name: "Secret Garden", logo: "/img/brand/secret-garden.webp" },
  { name: "Wardah", logo: "/img/brand/wardah.webp" },
];
</script>

<template>
  <section
    id="brand"
    class="bg-zinc-50 py-24! px-4! border-y border-zinc-200 relative overflow-hidden"
  >
    <!-- Cinematic Background Glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)] pointer-events-none"
    ></div>

    <div class="container relative z-10 mx-auto!">
      <div class="text-center mb-16!">
        <div class="flex items-center justify-center gap-4 mb-4!">
          <div class="w-8 h-px bg-burg"></div>
          <span
            class="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-zinc-700"
            >Klien Terpercaya</span
          >
          <div class="w-8 h-px bg-burg"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-7xl text-zinc-900 font-light tracking-tight"
        >
          Our <em class="text-burg not-italic font-medium">Customer</em>
        </h2>
      </div>

      <!-- Grid Layout -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50"
      >
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="bg-white group/brand relative flex items-center justify-center p-6! md:p-8! transition-all duration-500 hover:bg-zinc-50"
        >
          <!-- Subtle hover background effect -->
          <div
            class="absolute inset-0 bg-radial-to-br from-burg/5 to-transparent opacity-0 group-hover/brand:opacity-100 transition-opacity duration-700"
          ></div>

          <div class="relative z-10 w-full flex items-center justify-center">
            <NuxtImg
              :src="brand.logo"
              :alt="brand.name + ' logo'"
              format="webp"
              class="max-h-12 md:max-h-16 w-auto object-contain group-hover/brand:scale-110 transition-all duration-700 ease-out"
              loading="lazy"
              width="200"
            />
          </div>

          <!-- Tooltip or Name on Hover (Optional, keeping it clean for now) -->
        </div>
      </div>
    </div>

    <!-- Subtle Grain Overlay -->
    <div
      class="absolute inset-0 opacity-[0.02] pointer-events-none z-1 bg-grain"
    ></div>
  </section>
</template>

<style scoped>
.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

h2 {
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Custom grid gap fix for thin lines */
.grid {
  mask-image: linear-gradient(to bottom, black, black);
}
</style>
