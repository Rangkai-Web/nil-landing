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

// Multiply the array to ensure the marquee covers more than the screen width
const marqueeBrands = [...brands, ...brands, ...brands];
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
            class="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-zinc-500"
            >Our Valued Partners</span
          >
          <div class="w-8 h-px bg-burg"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl text-zinc-700 font-light tracking-tight"
        >
          Trusted by <em class="text-burg/80 not-italic">Industry Leaders</em>
        </h2>
      </div>

      <!-- Marquee Container -->
      <div class="relative overflow-hidden group">
        <!-- Overlay Fades for Smooth Transition -->
        <div
          class="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none"
        ></div>
        <div
          class="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none"
        ></div>

        <!-- The actual marquee -->
        <div class="flex items-center py-12! whitespace-nowrap overflow-hidden">
          <div
            class="flex animate-marquee-scroll group-hover:[animation-play-state:paused]"
          >
            <div
              v-for="(brand, index) in marqueeBrands"
              :key="index"
              class="flex-none px-10! md:px-16! flex items-center justify-center"
            >
              <div class="relative group/logo">
                <!-- Subtle glow effect behind logo on hover -->
                <div
                  class="absolute inset-0 bg-burg/70 blur-2xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 rounded-full"
                ></div>

                <NuxtImg
                  :src="brand.logo"
                  :alt="brand.name + ' logo'"
                  format="webp"
                  class="max-h-12 md:max-h-16 lg:max-h-20 w-auto object-contain transition-all duration-700 group-hover/logo:scale-110"
                  loading="lazy"
                  width="200"
                />
              </div>
            </div>
          </div>
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
@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.3333%);
  }
}

.animate-marquee-scroll {
  animation: marquee-scroll 45s linear infinite;
  display: flex;
  width: fit-content;
}

.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Ensure font is loaded if not already */
h2 {
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}
</style>
