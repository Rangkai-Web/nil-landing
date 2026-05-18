<script setup lang="ts">
import { ref } from "vue";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

const isDronePlaying = ref(false);
const isGroundPlaying = ref(false);

const droneEmbedUrl =
  "https://drive.google.com/file/d/1lc0lxptYVemM2pscakEY66QbXHzQlKIu/preview";
const groundEmbedUrl =
  "https://drive.google.com/file/d/12MNKfdxdjw0CV2QOdwIswSjNsl0UfAQd/preview";
</script>

<template>
  <section
    id="video-experience"
    class="relative overflow-hidden bg-[#0c0a09] py-24! lg:py-40! border-t border-white/5"
  >
    <!-- Background & Decorative Elements -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <TextureLines class="opacity-[0.05] text-[#890015]" />
      <DoubleCircle
        :size="900"
        position-class="absolute -top-[10%] -left-[10%] opacity-[0.08] text-[#890015] blur-2xl"
      />
      <DoubleCircle
        :size="900"
        position-class="absolute -bottom-[10%] -right-[10%] opacity-[0.08] text-[#890015] blur-2xl"
      />
    </div>

    <!-- Container -->
    <div class="app-container relative z-10 mx-auto!">
      <!-- Section Header -->
      <div class="mb-20! text-center max-w-3xl mx-auto!">
        <div class="inline-flex items-center gap-3 mb-6! justify-center">
          <div
            class="h-px w-8 bg-linear-to-r from-transparent to-[#890015]"
          ></div>
          <span
            class="text-xs font-black tracking-[0.45em] text-[#890015] uppercase"
          >
            Perbandingan Video
          </span>
          <div
            class="h-px w-8 bg-linear-to-l from-transparent to-[#890015]"
          ></div>
        </div>

        <h2
          class="font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-8xl text-white font-light leading-tight"
        >
          Drone vs
          <em class="text-[#890015] not-italic font-normal">Standar</em>
        </h2>

        <p
          class="mt-6! text-base lg:text-lg text-white/65 font-light leading-relaxed max-w-2xl mx-auto!"
        >
          Bingung memilih paket? Lihat perbandingan hasil rekaman Videobooth
          kami. Bandingkan versi kamera darat (standar) dengan versi premium
          menggunakan drone udara.
        </p>
      </div>

      <!-- Comparison Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 max-w-6xl mx-auto!"
      >
        <!-- CARD 1: TANPA DRONE (STANDARD VIEW) -->
        <div
          class="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/2 backdrop-blur-xs flex flex-col justify-between aspect-video shadow-2xl"
        >
          <!-- Video Iframe (Lazy Loaded) -->
          <Transition name="fade">
            <div v-if="isGroundPlaying" class="absolute inset-0 z-30 bg-black">
              <iframe
                :src="groundEmbedUrl"
                class="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
              <button
                @click="isGroundPlaying = false"
                class="absolute top-4 right-4 z-40 bg-black/60 hover:bg-[#890015] text-white p-2! rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-105"
                title="Tutup Video"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Transition>

          <!-- Card Cover (High-end aesthetics placeholder) -->
          <div
            class="absolute inset-0 z-10 pointer-events-none transition-all duration-700 group-hover:scale-105"
          >
            <!-- Luxury Abstract Background for Ground View -->
            <div
              class="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000&quot;);
              "
            ></div>
            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"
            ></div>
          </div>

          <!-- Cover Content -->
          <div
            class="relative z-20 p-8! lg:p-12! h-full flex flex-col justify-between items-start"
          >
            <span
              class="px-4! py-1.5! bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase text-white/70 rounded-full"
            >
              Standard View
            </span>

            <div class="w-full">
              <h3
                class="font-[Cormorant_Garamond] text-3xl lg:text-4xl text-white font-medium mb-3!"
              >
                Kamera Darat (Tanpa Drone)
              </h3>
              <!-- <p
                class="text-sm text-white/50 font-light leading-relaxed max-w-md"
              >
                Hasil video 360° klasik dari sudut pandang sejajar mata (eye-level). Sangat cocok untuk mengabadikan ekspresi seru Anda dan teman-teman secara dekat dengan pencahayaan studio yang terang.
              </p> -->
            </div>
          </div>

          <!-- Play Button Overlay -->
          <div
            v-if="!isGroundPlaying"
            @click="isGroundPlaying = true"
            class="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group"
          >
            <div
              class="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#890015] group-hover:border-[#890015] group-hover:scale-110 shadow-2xl group-hover:shadow-[0_0_30px_rgba(137,0,21,0.5)]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- CARD 2: DENGAN DRONE (PREMIUM VIEW) -->
        <div
          class="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/2 backdrop-blur-xs flex flex-col justify-between aspect-video shadow-2xl"
        >
          <!-- Video Iframe (Lazy Loaded) -->
          <Transition name="fade">
            <div v-if="isDronePlaying" class="absolute inset-0 z-30 bg-black">
              <iframe
                :src="droneEmbedUrl"
                class="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
              <button
                @click="isDronePlaying = false"
                class="absolute top-4 right-4 z-40 bg-black/60 hover:bg-[#890015] text-white p-2! rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-105"
                title="Tutup Video"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Transition>

          <!-- Card Cover (High-end aesthetics placeholder) -->
          <div
            class="absolute inset-0 z-10 pointer-events-none transition-all duration-700 group-hover:scale-105"
          >
            <!-- Luxury Abstract Background for Drone View -->
            <div
              class="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000&quot;);
              "
            ></div>
            <!-- Gradient Overlay with Burgundy glow -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/80 to-[#890015]/10"
            ></div>
          </div>

          <!-- Cover Content -->
          <div
            class="relative z-20 p-8! lg:p-12! h-full flex flex-col justify-between items-start"
          >
            <span
              class="px-4! py-1.5! bg-[#890015]/20 border border-[#890015]/30 text-[10px] font-black tracking-widest uppercase text-[#f0c040] rounded-full"
            >
              Premium Upgrade
            </span>

            <div class="w-full">
              <h3
                class="font-[Cormorant_Garamond] text-3xl lg:text-4xl text-white font-medium mb-3!"
              >
                Kamera Udara (Dengan Drone)
              </h3>
              <!-- <p
                class="text-sm text-white/50 font-light leading-relaxed max-w-md"
              >
                Hasil video 360° sinematik yang diambil dari udara menggunakan drone. Pilihan terbaik untuk memperlihatkan kemegahan venue, dekorasi panggung, serta keseruan seluruh tamu pesta.
              </p> -->
            </div>
          </div>

          <!-- Play Button Overlay -->
          <div
            v-if="!isDronePlaying"
            @click="isDronePlaying = true"
            class="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group"
          >
            <div
              class="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#890015] group-hover:border-[#890015] group-hover:scale-110 shadow-2xl group-hover:shadow-[0_0_30px_rgba(137,0,21,0.5)]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
