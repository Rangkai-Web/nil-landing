<script setup lang="ts">
import portfolioData from "~/assets/data/portfolio.json";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

// const categories = ['Semua', 'Photobooth', 'Videobooth', 'Wedding', 'Pre Wedding', 'Graduation', 'Photobox', 'Lainnya']
const categories = ["Semua"];
const activeCategory = ref("Semua");
const visibleCount = ref(8);
const selectedImage = ref<string | null>(null);

const filteredItems = computed(() => {
  if (activeCategory.value === "Semua") return portfolioData.items;
  return portfolioData.items.filter(
    (item) => item.category === activeCategory.value,
  );
});

const visibleItems = computed(() => {
  return filteredItems.value.slice(0, visibleCount.value);
});

const hasMore = computed(() => {
  return visibleCount.value < filteredItems.value.length;
});

const loadMore = () => {
  visibleCount.value += 8;
};

const filterCategory = (cat: string) => {
  activeCategory.value = cat;
  visibleCount.value = 8;
};

const openLightbox = (img: string) => {
  selectedImage.value = img;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  selectedImage.value = null;
  document.body.style.overflow = "auto";
};
</script>

<template>
  <section
    id="portfolio"
    class="bg-cream2 py-24! lg:py-48! relative overflow-hidden"
  >
    <!-- Decorative Background (Background color kept as requested) -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <TextureLines class="opacity-30 text-burg" />
      <DoubleCircle
        :size="800"
        position-class="absolute -top-100 -right-100 opacity-20 text-burg blur-3xl hidden xl:block"
      />
      <DoubleCircle
        :size="600"
        position-class="absolute -bottom-60 -left-60 opacity-20 text-burg blur-2xl hidden xl:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div class="text-center mb-16! max-w-3xl mx-auto!">
        <div class="inline-flex items-center gap-3 mb-8! reveal">
          <div class="h-px! w-10! bg-burg"></div>
          <span class="text-sm font-black tracking-[0.5em] uppercase text-burg"
            >The Gallery</span
          >
          <div class="h-px! w-10! bg-burg"></div>
        </div>

        <h2
          class="font-[Cormorant_Garamond] text-5xl lg:text-8xl font-light leading-tight text-black mb-10! reveal d1"
        >
          Masterpieces of
          <em class="italic text-burg font-normal">Joy</em>
        </h2>

        <p
          class="text-black/60 text-lg leading-relaxed reveal d2 max-w-xl mx-auto!"
        >
          Setiap bingkai menceritakan kisah kebahagiaan yang unik. Jelajahi
          galeri momen berharga yang telah kami abadikan.
        </p>
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-16! reveal d3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="filterCategory(cat)"
          class="relative px-8! py-3! text-sm font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-500 cursor-pointer overflow-hidden group"
          :class="
            activeCategory === cat
              ? 'bg-burg text-white shadow-[0_15px_30px_rgba(125,5,22,0.3)] scale-105'
              : 'bg-white/50 backdrop-blur-md border border-burg/10 text-black hover:border-burg hover:text-burg'
          "
        >
          <span class="relative z-10">{{ cat }}</span>
        </button>
      </div>

      <!-- Grid Layout with Improved Spacing -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10"
      >
        <TransitionGroup
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-12 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-400 ease-in absolute"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
          move-class="transition duration-500 ease-in-out"
        >
          <div
            v-for="(item, idx) in visibleItems"
            :key="item.id"
            class="group relative aspect-4/5 cursor-pointer overflow-hidden bg-white shadow-xl shadow-black/5"
            @click="openLightbox(item.image)"
          >
            <!-- Image with Parallax-like effect on hover -->
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
              width="400"
              height="500"
              loading="lazy"
            />

            <!-- Hover Overlay (Premium Design) -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-8! lg:p-10! flex flex-col justify-end"
            >
              <div
                class="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <span
                  class="inline-block px-3! py-1! bg-burg/20 backdrop-blur-md border border-burg/30 text-xs font-black tracking-[0.25em] uppercase text-white mb-4! rounded-full"
                >
                  {{ item.category }}
                </span>
                <h3
                  class="font-[Cormorant_Garamond] text-xl lg:text-2xl text-white leading-tight mb-2!"
                >
                  {{ item.title }}
                </h3>
                <div
                  class="h-1 w-0 group-hover:w-16 bg-burg transition-all duration-700 delay-100"
                ></div>
              </div>

              <!-- Zoom Icon -->
              <div
                class="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200"
              >
                <svg aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-white"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 7V13M7 10H13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Elegant Load More Button -->
      <div v-if="hasMore" class="mt-32! flex justify-center">
        <button
          @click="loadMore"
          class="group relative px-16! py-6! bg-white border border-burg/20 text-burg text-sm font-black tracking-[0.4em] uppercase transition-all duration-500 hover:text-white hover:border-burg overflow-hidden cursor-pointer rounded-full shadow-lg shadow-burg/5"
        >
          <span class="relative z-10">Load More Stories</span>
          <div
            class="absolute inset-0 bg-burg translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 z-0"
          ></div>
        </button>
      </div>
    </div>

    <!-- Enhanced Lightbox -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 backdrop-blur-0"
      enter-to-class="opacity-100 backdrop-blur-2xl"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 backdrop-blur-2xl"
      leave-to-class="opacity-0 backdrop-blur-0"
    >
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center p-6! lg:p-20! cursor-pointer"
        @click="closeLightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
      >
        <button
          class="absolute top-10 right-10 w-16 h-16 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
          @click="closeLightbox"
          aria-label="Close gallery"
        >
          <svg aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div
          class="max-w-full max-h-full relative flex items-center justify-center"
          @click.stop
        >
          <NuxtImg
            :src="selectedImage"
            alt="Zoomed portfolio image"
            class="max-w-full max-h-[85vh] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-xl"
            width="1200"
            height="1500"
          />
          <div
            class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap"
          >
            Click anywhere to close
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped></style>
