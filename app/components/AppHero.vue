<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
const slides = [
  {
    image: "/img/portfolio/photobooth/p6.webp",
    tag: "Premium Photobooth Bali",
    title: "Quality & Service<br>is <em>Our Priority</em>",
    sub: "Solusi Photobooth premium dengan kamera DSLR 24MP dan pencahayaan studio. Garansi cetak foto berkualitas yang bertahan hingga 100 tahun.",
  },
  {
    image: "/img/portfolio/photobooth/img7.webp",
    tag: "Videobooth 360 Experience",
    title: "Cinematic 360°<br><em>Experience</em>",
    sub: "Abadikan momen seru Anda dengan Videobooth 360 berdiameter 100cm. Dilengkapi LED Ring Light dan custom design video instan.",
  },
  {
    image: "/img/hero/wedding.webp",
    tag: "Wedding Videography",
    title: "Wedding<br><em>Moments</em><br>Garansi 100%",
    sub: "Jaminan kepuasan dengan layanan profesional, gratis transportasi seluruh Bali, dan garansi uang kembali 100% jika tim tidak hadir.",
  },
];

const heroBgY = ref(0);
const onScroll = () => {
  if (window.scrollY < window.innerHeight) {
    heroBgY.value = window.scrollY * 0.3;
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <section
    id="hero"
    class="h-screen min-h-[750px] relative overflow-hidden bg-black"
  >
    <div
      class="absolute inset-0 z-1"
      :style="{ transform: `translateY(${heroBgY}px)` }"
    >
      <ClientOnly>
        <template #placeholder>
          <NuxtImg
            src="/img/portfolio/photobooth/p6.webp"
            alt="Premium Photobooth Bali"
            class="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[1.1] z-0"
            loading="eager"
            fetchpriority="high"
            width="1920"
            height="1080"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            format="webp"
          />
        </template>
        <Carousel
          :autoplay="6000"
          :wrap-around="true"
          :transition="1200"
          :items-to-show="1"
          v-model="currentSlide"
          class="h-full"
        >
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="relative w-full h-screen min-h-[750px] flex items-end">
              <NuxtImg
                :src="slide.image"
                :alt="slide.tag"
                format="webp"
                class="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[1.1] z-0"
                :fetchpriority="index === 0 ? 'high' : 'auto'"
                :loading="index === 0 ? 'eager' : 'lazy'"
                width="1920"
                height="1080"
                sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
              />

              <!-- Cinematic Overlays -->
              <div
                class="absolute inset-0 bg-linear-to-b from-burg/40 via-black/40 to-black z-1"
              ></div>

              <!-- Brand Spotlight (Left Glow) -->
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(137,0,21,0.2),transparent_50%)] z-1 pointer-events-none"
              ></div>

              <!-- Vignette & Grain -->
              <div
                class="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)] z-1 pointer-events-none"
              ></div>
              <div
                class="absolute inset-0 opacity-[0.03] pointer-events-none z-1 bg-grain"
              ></div>

              <!-- Bottom Fog -->
              <div
                class="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black via-black/80 to-transparent z-1"
              ></div>

              <div class="relative z-2 pb-20! lg:pb-32! w-full text-left">
                <div class="container">
                  <div class="max-w-3xl">
                    <div class="overflow-hidden mb-6!">
                      <div
                        class="flex items-center gap-4 transition-all duration-1000 delay-200"
                        :class="
                          currentSlide === index
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-full opacity-0'
                        "
                      >
                        <div class="w-6 h-px bg-white"></div>
                        <span
                          class="text-xs font-bold tracking-[0.3em] uppercase text-white"
                          >{{ slide.tag }}</span
                        >
                      </div>
                    </div>

                    <h1
                      class="font-[Cormorant_Garamond] text-5xl md:text-6xl leading-[0.95] text-white font-light tracking-tight mb-8! transition-all duration-1000 delay-300"
                      :class="
                        currentSlide === index
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-10 opacity-0'
                      "
                      v-html="slide.title"
                    ></h1>

                    <p
                      class="text-base lg:text-lg text-white/70 max-w-lg leading-relaxed mb-10! transition-all duration-1000 delay-500"
                      :class="
                        currentSlide === index
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-10 opacity-0'
                      "
                    >
                      {{ slide.sub }}
                    </p>

                    <div
                      class="flex flex-wrap gap-4 transition-all duration-1000 delay-700"
                      :class="
                        currentSlide === index
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-10 opacity-0'
                      "
                    >
                      <NuxtLink
                        to="/#portfolio"
                        class="px-8! py-4! bg-burg text-white text-xs font-bold tracking-widest uppercase hover:bg-burg-light transition-all hover:-translate-y-0.5"
                        >Lihat Portfolio</NuxtLink
                      >
                      <NuxtLink
                        to="https://tr.ee/awZJxowwW7"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-8! py-4! border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all hover:-translate-y-0.5"
                        >Reservasi Sekarang</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
        <template #fallback>
          <div
            v-if="slides.length > 0"
            class="relative w-full h-screen min-h-[750px] flex items-end"
          >
            <NuxtImg
              :src="slides[0]?.image"
              :alt="slides[0]?.tag"
              format="webp"
              preload
              class="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[1.1] z-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              sizes="100vw md:100vw lg:100vw"
              width="1920"
              height="1080"
            />
            <div
              class="absolute inset-0 bg-linear-to-b from-burg/40 via-black/40 to-black z-1"
            ></div>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(137,0,21,0.2),transparent_50%)] z-1 pointer-events-none"
            ></div>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)] z-1 pointer-events-none"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black via-black/80 to-transparent z-1"
            ></div>
            <div class="relative z-2 pb-20! lg:pb-32! w-full text-left">
              <div class="container">
                <div class="max-w-3xl">
                  <div class="flex items-center gap-4 mb-6!">
                    <div class="w-10 h-px bg-white"></div>
                    <span
                      class="text-xs font-bold tracking-[0.3em] uppercase text-white"
                      >{{ slides[0]?.tag }}</span
                    >
                  </div>
                  <h1
                    class="font-[Cormorant_Garamond] text-5xl md:text-6xl leading-[0.95] text-white font-light tracking-tight mb-8!"
                    v-html="slides[0]?.title"
                  ></h1>
                  <p
                    class="text-base lg:text-lg text-white/70 max-w-lg leading-relaxed mb-10!"
                  >
                    {{ slides[0]?.sub }}
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <NuxtLink
                      to="/#portfolio"
                      class="px-8! py-4! bg-burg text-white text-xs font-bold tracking-widest uppercase"
                      >Lihat Portfolio</NuxtLink
                    >
                    <NuxtLink
                      to="https://tr.ee/awZJxowwW7"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-8! py-4! border border-white/20 text-white text-xs font-bold tracking-widest uppercase"
                      >Reservasi Sekarang</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ClientOnly>

      <!-- Custom Pagination -->
      <div
        class="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="w-10 h-10 flex items-center justify-center transition-all duration-500 cursor-pointer group"
          :aria-label="'Go to slide ' + (index + 1)"
          :aria-current="currentSlide === index ? 'true' : 'false'"
          @click="currentSlide = index"
        >
          <div
            class="w-1.5 h-1.5 rounded-full transition-all duration-500"
            :class="
              currentSlide === index
                ? 'bg-burg scale-150'
                : 'bg-white/20 group-hover:bg-white/40'
            "
          ></div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  filter: contrast(120%) brightness(120%);
}

:deep(.carousel),
:deep(.carousel__viewport),
:deep(.carousel__track) {
  height: 100%;
}
</style>
