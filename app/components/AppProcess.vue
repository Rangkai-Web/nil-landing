<script setup lang="ts">
import IconChat from "./svg-icon/IconChat.vue";
import IconSelect from "./svg-icon/IconSelect.vue";
import IconCalendar from "./svg-icon/IconCalendar.vue";
import IconFlash from "./svg-icon/IconFlash.vue";
import IconDownload from "./svg-icon/IconDownload.vue";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

const steps = [
  {
    num: "01",
    title: "Perkenalan",
    desc: "Perkenalkan nama dan tanggal acara Anda kepada tim kami.",
    icon: IconChat,
  },
  {
    num: "02",
    title: "Booking",
    desc: "Booking melalui WhatsApp atau jadwalkan meeting secara langsung.",
    icon: IconSelect,
  },
  {
    num: "03",
    title: "Formulir",
    desc: "Pengisian formulir booking dengan detail lengkap acara Anda.",
    icon: IconCalendar,
  },
  {
    num: "04",
    title: "Invoice",
    desc: "Anda akan mendapatkan invoice yang berisikan total harga layanan.",
    icon: IconFlash,
  },
  {
    num: "05",
    title: "DP (Down Payment)",
    desc: "Lakukan pembayaran DP sebesar Rp 500.000,- untuk mengamankan jadwal.",
    icon: IconDownload,
  },
  {
    num: "06",
    title: "Teknis Acara",
    desc: "Mendapatkan informasi lebih lanjut mengenai teknis persiapan di hari H.",
    icon: IconChat,
  },
];
</script>

<template>
  <section
    id="alur"
    class="bg-cream2 py-24! lg:py-40! relative overflow-hidden z-1"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <TextureLines class="opacity-40 text-burg" />
      <DoubleCircle
        :size="600"
        position-class="absolute -top-50 -left-50 opacity-40 text-burg hidden xl:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div class="text-center mb-20! max-w-2xl mx-auto!">
        <div class="inline-flex items-center gap-3 mb-6! reveal justify-center">
          <div class="h-px w-8 bg-burg/30"></div>
          <span class="text-sm font-black tracking-[0.4em] uppercase text-burg"
            >How To Order</span
          >
          <div class="h-px w-8 bg-burg/30"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-5xl lg:text-7xl font-light leading-tight text-black mb-8! reveal d1"
        >
          Alur Booking<br /><em class="italic text-burg font-normal"
            >yang Mudah & Cepat</em
          >
        </h2>
        <p class="text-lg text-black/60 leading-relaxed reveal d2">
          Kami memastikan setiap langkah perjalanan Anda bersama NIL
          Entertainment terasa seamless dan profesional.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
      >
        <div
          v-for="(step, i) in steps"
          :key="step.num"
          class="reveal group"
          :class="'d' + (i + 1)"
        >
          <div
            class="bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-10! lg:p-14! text-center h-full relative overflow-hidden transition-all duration-500 hover:bg-white/90 hover:-translate-y-2 hover:shadow-2xl hover:border-burg flex flex-col items-center"
          >
            <!-- Step Number Backdrop -->
            <div
              class="absolute -top-2 -right-2 font-[Cormorant_Garamond] text-7xl lg:text-8xl font-black text-burg/10 leading-none pointer-events-none transition-all duration-500 group-hover:text-burg group-hover:scale-110"
            >
              {{ step.num }}
            </div>

            <div
              class="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8! text-burg relative shadow-lg transition-all duration-500 group-hover:bg-burg group-hover:text-white group-hover:rotate-12 group-hover:scale-110"
            >
              <component :is="step.icon" class="w-8 h-8" />
              <div
                class="absolute -inset-1.5 border border-dashed border-burg/20 rounded-full transition-all duration-500 group-hover:-inset-2.5 group-hover:border-burg group-hover:-rotate-12"
              ></div>
            </div>

            <div class="relative z-10">
              <h3
                class="font-[Cormorant_Garamond] text-2xl lg:text-3xl font-bold text-black mb-4!"
              >
                {{ step.title }}
              </h3>
              <p
                class="text-base text-black/60 leading-relaxed group-hover:text-black/80 transition-colors"
              >
                {{ step.desc }}
              </p>
            </div>
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

.d1 {
  animation-delay: 0.1s;
}
.d2 {
  animation-delay: 0.2s;
}
.d3 {
  animation-delay: 0.3s;
}
.d4 {
  animation-delay: 0.4s;
}
.d5 {
  animation-delay: 0.5s;
}
.d6 {
  animation-delay: 0.6s;
}

@keyframes reveal-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
