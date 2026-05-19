<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

const isVideoModalOpen = ref(false);
const activeVideoUrl = ref("");
const activeVideoTitle = ref("");

const isMobileDevice = () => {
  if (typeof window !== "undefined") {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || navigator.maxTouchPoints > 0
    );
  }
  return false;
};

const playVideo = (title: string, fileId: string) => {
  const url = `https://drive.google.com/file/d/${fileId}/preview`;
  if (isMobileDevice()) {
    window.open(url, "_blank");
  } else {
    activeVideoTitle.value = title;
    activeVideoUrl.value = url;
    isVideoModalOpen.value = true;
  }
};

const closeVideo = () => {
  isVideoModalOpen.value = false;
  activeVideoUrl.value = "";
  activeVideoTitle.value = "";
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeVideo();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
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
          Bingung memilih paket? Lihat perbandingan hasil rekaman Video kami.
          Bandingkan versi kamera darat (standar) dengan versi premium
          menggunakan drone udara.
        </p>
      </div>

      <!-- Comparison Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 max-w-6xl mx-auto!"
      >
        <!-- CARD 1: TANPA DRONE (STANDARD VIEW) -->
        <div
          @click="
            playVideo(
              'Kamera Darat (Tanpa Drone)',
              '12MNKfdxdjw0CV2QOdwIswSjNsl0UfAQd',
            )
          "
          class="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/2 backdrop-blur-xs flex flex-col justify-between aspect-video shadow-2xl cursor-pointer"
        >
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
            </div>
          </div>

          <!-- Play Button Overlay -->
          <div
            class="absolute inset-0 z-20 flex items-center justify-center group"
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
          @click="
            playVideo(
              'Kamera Udara (Dengan Drone)',
              '1lc0lxptYVemM2pscakEY66QbXHzQlKIu',
            )
          "
          class="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/2 backdrop-blur-xs flex flex-col justify-between aspect-video shadow-2xl cursor-pointer"
        >
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
            </div>
          </div>

          <!-- Play Button Overlay -->
          <div
            class="absolute inset-0 z-20 flex items-center justify-center group"
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

    <!-- Fullscreen Video Theater Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isVideoModalOpen"
          @click.self="closeVideo"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4! md:p-8!"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="relative w-full max-w-5xl aspect-video bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <!-- Modal Header -->
            <div
              class="flex items-center justify-between px-6! py-4! border-b border-white/10 bg-[#0f0d0b]"
            >
              <span
                class="font-[Cormorant_Garamond] text-lg sm:text-xl text-white font-medium tracking-wide"
              >
                {{ activeVideoTitle }}
              </span>
              <button
                @click="closeVideo"
                class="text-white/70 hover:text-white p-2! rounded-full hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Tutup Video"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Body (Iframe) -->
            <div class="grow bg-black relative">
              <iframe
                v-if="activeVideoUrl"
                :src="activeVideoUrl"
                class="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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
