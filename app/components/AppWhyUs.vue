<script setup lang="ts">
import IconStar from "./svg-icon/IconStar.vue";
import IconCase from "./svg-icon/IconCase.vue";
import IconCheck from "./svg-icon/IconCheck.vue";
import IconClock from "./svg-icon/IconClock.vue";
import IconHistory from "./svg-icon/IconHistory.vue";
import IconList from "./svg-icon/IconList.vue";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

const advantages = [
  {
    title: "Garansi 100% Uang Kembali",
    desc: "Kami memberikan garansi 100% uang kembali tanpa potongan apabila tim kami tidak hadir di lokasi acara.",
    icon: IconCheck,
  },
  {
    title: "Softcopy Seumur Hidup",
    desc: "Kehilangan file? Jangan khawatir, kami memberikan garansi penyimpanan softcopy foto Anda seumur hidup.",
    icon: IconHistory,
  },
  {
    title: "Kualitas Foto Jernih & Tajam",
    desc: "Hasil foto dengan pencahayaan yang rata, jernih, dan sangat tajam untuk kualitas dokumentasi terbaik.",
    icon: IconStar,
  },
  {
    title: "Foto Ulang Sepuasnya",
    desc: "Kepuasan Anda adalah prioritas. Kami memberikan garansi foto ulang sepuasnya hingga hasil terlihat sempurna.",
    icon: IconCase,
  },
  {
    title: "Kertas Foto 100 Tahun",
    desc: "Menggunakan kertas foto original berkualitas yang dijamin awet dan tidak pudar hingga 100 tahun.",
    icon: IconList,
  },
  {
    title: "Alat Canggih & Cepat",
    desc: "Didukung perangkat photobooth paling canggih yang praktis dan sangat cepat untuk menghindari antrean panjang.",
    icon: IconList,
  },
  {
    title: "Pelayanan Mudah & Ramah",
    desc: "Sistem reservasi yang sangat mudah serta kru di lapangan yang ramah, sigap, dan profesional.",
    icon: IconClock,
  },
  {
    title: "Original Kertas Berkualitas",
    desc: "Hanya menggunakan material cetak original berkualitas tinggi untuk memastikan tekstur dan warna yang mewah.",
    icon: IconCase,
  },
];
</script>

<template>
  <section
    id="kenapa"
    class="bg-cream text-black py-24! lg:py-40! relative overflow-hidden"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <TextureLines class="opacity-30 text-burg" />
      <DoubleCircle
        :size="800"
        position-class="absolute -top-100 -right-100 opacity-20 text-burg hidden xl:block"
      />
      <DoubleCircle
        :size="600"
        position-class="absolute -bottom-60 -left-60 opacity-20 text-burg hidden xl:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div class="text-center mb-16! lg:mb-20!">
        <div class="inline-flex items-center gap-4 mb-8! reveal">
          <div class="h-px w-12 bg-burg/30"></div>
          <span class="text-sm font-black tracking-[0.5em] text-burg uppercase"
            >Why Choose Us</span
          >
          <div class="h-px w-12 bg-burg/30"></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-5xl lg:text-8xl font-light leading-tight text-black reveal d1"
        >
          Our <em class="italic text-burg font-normal">Commitment</em>
        </h2>
        <div
          class="mt-10! mx-auto! h-px w-24 bg-linear-to-r from-transparent via-burg/40 to-transparent reveal d2"
        ></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(adv, i) in advantages"
          :key="adv.title"
          class="relative bg-cream2 p-10! border border-black/5 rounded-sm transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_30px_60px_rgba(125,5,22,0.08)] hover:border-burg/10 group reveal"
          :class="'d' + ((i % 3) + 1)"
        >
          <div
            class="relative w-15 h-15 mb-8! flex items-center justify-center"
          >
            <div class="w-11 h-11 text-burg z-10">
              <component :is="adv.icon" />
            </div>
            <div
              class="absolute inset-0 bg-burg/5 rounded-full scale-0 transition-transform duration-500 group-hover:scale-125 -translate-x-2 -translate-y-2"
            ></div>
          </div>
          <div class="text-left">
            <h3
              class="font-[Cormorant_Garamond] text-2xl font-medium text-black mb-4! transition-colors group-hover:text-burg"
            >
              {{ adv.title }}
            </h3>
            <p class="text-base text-[#6a6662] leading-loose">
              {{ adv.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
