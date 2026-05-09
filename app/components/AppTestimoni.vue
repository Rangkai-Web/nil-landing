<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = [
  {
    text: '"NIL Entertain benar-benar mengangkat keseluruhan pengalaman resepsi kami. Tamu-tamu sangat menikmati Videobooth360 — hasilnya cinematic dan viral di semua sosial media!"',
    name: "Ayu & Rama",
    role: "Pasangan Pengantin",
    eventType: "Wedding Event",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: '"Setup photobooth NIL Entertain di annual conference kami sangat profesional. Brand activation kami jadi jauh lebih berkesan dan engagement tamu meningkat signifikan."',
    name: "Budi Santoso",
    role: "Marketing Director",
    eventType: "Corporate Event",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: '"Ulang tahun ke-30 saya terasa sangat memorable berkat NIL Entertain. Semua tamu antusias dan foto-foto hasilnya sangat premium. Highly recommended!"',
    name: "Nadya Putri",
    role: "Client Private Event",
    eventType: "Birthday Party",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
  },
];

const currentIdx = ref(0);
let timer: any = null;

const goTesti = (n: number) => {
  currentIdx.value = (n + testimonials.length) % testimonials.length;
};

const startTimer = () => {
  timer = setInterval(() => goTesti(currentIdx.value + 1), 7000);
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
                  <svg aria-hidden="true"
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
                  <div class="relative group/avatar">
                    <div
                      class="absolute inset-0 bg-burg/50 rounded-full blur-xl opacity-0 group-hover/avatar:opacity-100 transition-opacity"
                    ></div>
                    <NuxtImg
                      :src="t.avatar"
                      :alt="t.name"
                      class="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-burg/30 p-1 bg-black z-10"
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div
                      class="font-[Cormorant_Garamond] text-xl md:text-2xl font-bold text-white leading-none mb-2!"
                    >
                      {{ t.name }}
                    </div>
                    <div
                      class="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-burg/70"
                    >
                      {{ t.role }}
                    </div>
                    <div
                      class="mt-2! md:mt-3! inline-block px-3! md:px-4! py-1! bg-white/5 rounded-full border border-white/10 text-[10px] md:text-sm font-bold tracking-widest text-white/50 uppercase"
                    >
                      {{ t.eventType }}
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
              :style="{ transform: `scale(${1 + currentIdx * 0.05})` }"
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
                <NuxtImg
                  :src="t.image"
                  :alt="t.name"
                  class="w-full h-full object-cover"
                  width="600"
                  height="800"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-linear-to-r from-black/40 to-transparent lg:hidden"
                ></div>
                <div
                  class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Luxury Navigation (Dots) -->
        <div
          class="absolute bottom-[-60px] xl:bottom-auto xl:top-1/2 xl:-left-24 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:-translate-y-1/2 flex xl:flex-col items-center justify-center gap-4 xl:gap-6 z-30"
        >
          <button
            v-for="(_, i) in testimonials"
            :key="'nav-' + i"
            @click="goTesti(i)"
            class="relative group transition-all duration-500 flex items-center justify-center cursor-pointer"
            :class="
              currentIdx === i
                ? 'w-12 xl:w-16 h-1 bg-burg'
                : 'w-6 xl:w-8 h-1 bg-white/10 hover:bg-white/30'
            "
            :aria-label="'Go to testimonial ' + (i + 1)"
          >
            <span
              class="absolute bottom-full mb-4 lg:mb-0 lg:bottom-auto lg:top-1/2 lg:right-full lg:mr-6! lg:-translate-y-1/2 text-[10px] lg:text-sm font-black tracking-[0.4em] text-white/20 group-hover:text-white transition-all whitespace-nowrap"
              :class="
                currentIdx === i
                  ? 'opacity-100 text-burg!'
                  : 'opacity-0 xl:group-hover:opacity-100'
              "
            >
              {{ (i + 1).toString().padStart(2, "0") }}
            </span>
          </button>
        </div>

        <!-- Desktop Prev/Next Buttons -->
        <div
          class="hidden xl:flex absolute top-1/2 -right-24 xl:-right-32 -translate-y-1/2 flex-col gap-6"
        >
          <button
            @click="goTesti(currentIdx - 1)"
            class="w-12 h-12 xl:w-16 xl:h-16 rounded-full border border-white/5 bg-white/2 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-burg hover:border-burg hover:-translate-x-2 group cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="group-hover:scale-110"
              
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          <button
            @click="goTesti(currentIdx + 1)"
            class="w-12 h-12 xl:w-16 xl:h-16 rounded-full border border-white/5 bg-white/2 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-burg hover:border-burg hover:translate-x-2 group cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="group-hover:scale-110"
              
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
