<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = [
  {
    text: '"holaa kakkk, kita sangat berterimakasih juga yaaa buat service nya yang sangat luar biasa semoga next bisa bekerjasama lagi, terimakasih banyak kakkkk 😇🙏🏼"',
    name: "Nadia Raghda - Azarine",
    image: "img/testimoni/testi1.webp",
  },
  {
    text: '"Terima kasih banyak Mas Fendi. Siappp nanti kita bantu suggest ke rekan rekan kerja kita yaa"',
    name: "Om Erwin IDP",
    image: "img/testimoni/testi2.webp",
  },
  {
    text: '"Thank you kakk 🥰"',
    name: "Sanctoo",
    image: "img/testimoni/testi3.webp",
  },
  {
    text: '"Kak Fendi Suksma nggh 🥳🥳🥳. Aman, mantappp 🥳🥳"',
    name: "Arinanti",
    image: "img/testimoni/testi4.webp",
  },
  {
    text: '"Ihh cakepp bgt editannyaaa. Thankyouuu kakakkk"',
    name: "Shinta",
    image: "img/testimoni/testi5.webp",
  },
  {
    text: '"Thank you doanya ya kakkk Next klo ada project lagi, pasti bakal langganan sma kakak 🥰👍🏼👍🏼. thank you bgt udh di support eventnya kmrin yaa Sangat sangat bersyukur photobooth nya pakai Nil 😊🙏🏼🙏🏼"',
    name: "Devi Wantera",
    image: "img/testimoni/testi6.webp",
  },
];

const currentIdx = ref(0);
const selectedImage = ref<string | null>(null);
let timer: any = null;

const goTesti = (n: number) => {
  currentIdx.value = (n + testimonials.length) % testimonials.length;
  // Reset timer on manual navigation to prevent immediate auto-slide
  stopTimer();
  startTimer();
};

const openZoom = (image: string) => {
  selectedImage.value = image;
  document.body.style.overflow = "hidden";
  stopTimer();
};

const closeZoom = () => {
  selectedImage.value = null;
  document.body.style.overflow = "auto";
  startTimer();
};

const startTimer = () => {
  if (selectedImage.value) return;
  timer = setInterval(() => {
    currentIdx.value = (currentIdx.value + 1) % testimonials.length;
  }, 3000);
};

const stopTimer = () => {
  if (timer) clearInterval(timer);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <section
    id="testimoni"
    class="relative py-24! lg:py-48! overflow-hidden bg-[#0a0807]"
  >
    <!-- Immersive Background Image -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(t, i) in testimonials"
        :key="'bg-' + i"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="
          currentIdx === i ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
        "
      >
        <NuxtImg
          :src="t.image"
          class="w-full h-full object-cover grayscale brightness-50"
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
        />
      </div>
      <div
        class="absolute inset-0 bg-linear-to-b from-[#0a0807] via-burg/10 to-[#0a0807]"
      ></div>
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>

    <!-- Vertical Side Text -->
    <div
      class="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:block pointer-events-none opacity-10"
    >
      <div
        class="font-[Cormorant_Garamond] text-[180px] font-black leading-none uppercase tracking-tighter text-white -rotate-90 origin-center whitespace-nowrap"
      >
        Testimonials
      </div>
    </div>

    <div class="app-container relative z-10 mx-auto!">
      <div class="text-center mb-20! lg:mb-32!">
        <div class="inline-flex items-center gap-3 mb-6! reveal">
          <div class="h-px w-10 bg-burg"></div>
          <span class="text-sm font-black tracking-[0.5em] uppercase text-burg"
            >Client Stories</span
          >
          <div class="h-px w-10 bg-burg"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-5xl lg:text-8xl font-light leading-tight text-white reveal d1"
        >
          Voices of <em class="italic text-burg font-normal">Excellence</em>
        </h2>
      </div>

      <div
        class="relative max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto!"
        @mouseenter="stopTimer"
        @mouseleave="startTimer"
      >
        <!-- Main Content Area -->
        <div
          class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 items-center bg-white/2 backdrop-blur-3xl border border-white/15 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <!-- Left: Text & Info -->
          <div
            class="p-10! md:p-14! xl:p-20! relative order-2 lg:order-1 min-h-[450px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <!-- Large Decorative Quote Mark -->
            <div
              class="absolute -top-10 -left-5 text-white/5 font-[Cormorant_Garamond] text-[200px] md:text-[300px] leading-none pointer-events-none"
            >
              “
            </div>

            <div class="relative z-10 h-full">
              <div
                v-for="(t, i) in testimonials"
                :key="t.name"
                class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                :class="
                  currentIdx === i
                    ? 'opacity-100 translate-y-0 z-10'
                    : 'opacity-0 translate-y-10 z-0 pointer-events-none'
                "
              >
                <div class="flex gap-1 mb-6! md:mb-8!">
                  <svg
                    aria-hidden="true"
                    v-for="s in 5"
                    :key="s"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="text-burg fill-burg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>

                <p
                  class="font-[Cormorant_Garamond] text-xl md:text-2xl xl:text-3xl italic text-white/90 leading-relaxed mb-10! xl:mb-12!"
                >
                  {{ t.text }}
                </p>

                <div class="flex items-center gap-4 md:gap-6 mt-auto!">
                  <div>
                    <div
                      class="font-[Cormorant_Garamond] text-xl md:text-2xl font-bold text-white leading-none mb-2!"
                    >
                      {{ t.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Visual -->
          <div
            class="relative h-[300px] md:h-[400px] lg:h-full order-1 lg:order-2 overflow-hidden bg-black/40 lg:border-l border-white/5"
          >
            <div
              class="absolute inset-0 transition-transform duration-1000 ease-out"
            >
              <div
                v-for="(t, i) in testimonials"
                :key="'img-' + i"
                class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                :class="
                  currentIdx === i
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                "
              >
                <div
                  class="w-full h-full bg-burg flex items-center justify-center p-4! lg:p-10!"
                >
                  <NuxtImg
                    :src="t.image"
                    :alt="t.name"
                    class="max-w-full max-h-full object-contain shadow-2xl rounded-xl cursor-zoom-in transition-transform duration-500 hover:scale-[1.02] active:scale-95"
                    loading="lazy"
                    @click="openZoom(t.image)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons (Desktop & Mobile) -->
        <div
          class="absolute bottom-[-80px] xl:bottom-auto xl:top-1/2 xl:-right-32 left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0 xl:-translate-y-1/2 flex flex-row xl:flex-col gap-6 z-30"
        >
          <button
            @click="goTesti(currentIdx - 1)"
            class="w-14 h-14 xl:w-16 xl:h-16 rounded-full border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-burg hover:border-burg hover:scale-110 active:scale-95 group cursor-pointer shadow-xl"
            aria-label="Previous testimonial"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="transition-transform group-hover:-translate-x-1"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          <button
            @click="goTesti(currentIdx + 1)"
            class="w-14 h-14 xl:w-16 xl:h-16 rounded-full border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-burg hover:border-burg hover:scale-110 active:scale-95 group cursor-pointer shadow-xl"
            aria-label="Next testimonial"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="transition-transform group-hover:translate-x-1"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Premium Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
          @click="closeZoom"
        >
          <div
            class="absolute top-6 right-6 md:top-10 md:right-10 z-[2010]"
            @click.stop="closeZoom"
          >
            <button
              class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:rotate-90 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <Transition
            enter-active-class="transition duration-500 delay-100 ease-out"
            enter-from-class="opacity-0 scale-90 translate-y-10"
            enter-to-class="opacity-100 scale-100 translate-y-0"
          >
            <div
              v-if="selectedImage"
              class="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              @click.stop
            >
              <NuxtImg
                :src="selectedImage"
                class="max-w-full max-h-[85vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-lg"
              />
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped></style>
