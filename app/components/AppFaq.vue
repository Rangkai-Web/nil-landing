<script setup lang="ts">
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";

const faqs = ref([
  {
    q: "Area coverage dimana saja?",
    a: "NIL Entertain melayani seluruh area Bali dengan layanan GRATIS TRANSPORTASI ke seluruh lokasi di Bali tanpa terkecuali.",
    isOpen: true,
  },
  {
    q: "Bagaimana kualitas cetak fotonya?",
    a: "Kami menggunakan kertas foto original berkualitas tinggi dengan Garansi Ketahanan hingga 100 tahun. Hasil foto dijamin jernih dan tajam berkat dukungan lighting studio 300W.",
    isOpen: false,
  },
  {
    q: "Apakah ada jaminan uang kembali?",
    a: "Tentu! Kami memberikan Garansi 100% Uang Kembali apabila tim kami tidak datang ke lokasi acara sesuai jadwal yang telah disepakati.",
    isOpen: false,
  },
  {
    q: "Bagaimana cara tamu mendownload file foto/video?",
    a: "Kami menyediakan Scan QR Code di lokasi acara untuk download instan. Selain itu, kami memberikan jaminan akses softcopy foto seumur hidup dan gratis Flashdisk eksklusif berisi semua file.",
    isOpen: false,
  },
  {
    q: "Apakah sudah termasuk properti pendukung?",
    a: "Ya, setiap paket sudah termasuk Gratis Funprops atau aksesoris lucu seperti kacamata, bando, topi, hingga bubble gun dan light saber untuk paket Videobooth 360.",
    isOpen: false,
  },
]);

const toggleFaq = (index: number) => {
  faqs.value.forEach((f, i) => {
    if (i === index) f.isOpen = !f.isOpen;
    else f.isOpen = false;
  });
};

// JSON-LD for FAQ SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.value.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }),
    },
  ],
});
</script>

<template>
  <section id="faq" class="py-24! lg:py-40! relative overflow-hidden bg-black">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/img/service-bg.webp"
        alt="NIL Entertain Service Background"
        class="w-full h-full object-cover opacity-20 grayscale"
        width="1920"
        height="1080"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-black via-burg/20 to-black"
      ></div>
    </div>

    <!-- Decorative Background -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <TextureLines class="opacity-20 text-burg" />
      <DoubleCircle
        :size="800"
        position-class="absolute -bottom-100 -left-100 opacity-10 text-cream hidden lg:block"
      />
      <DoubleCircle
        :size="600"
        position-class="absolute top-50 -right-110 opacity-10 text-cream hidden lg:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 items-start"
      >
        <!-- Left: Content & CTA -->
        <div class="reveal-left">
          <div class="inline-flex items-center gap-3 mb-8!">
            <div class="h-px! w-10 bg-burg"></div>
            <span class="text-sm font-bold tracking-[0.4em] uppercase text-burg"
              >Pertanyaan Umum</span
            >
          </div>

          <h2
            class="font-[Cormorant_Garamond] text-5xl lg:text-7xl font-light leading-tight text-white mb-10!"
          >
            Punya
            <em class="italic text-burg font-normal">Pertanyaan?</em><br />
            Kami Punya Jawaban.
          </h2>

          <p class="text-white/75 text-lg leading-relaxed mb-12! max-w-md">
            Kami hadir untuk memastikan setiap detail acara Anda terencana
            dengan sempurna. Jika pertanyaan Anda tidak terjawab di sini,
            hubungi tim kami kapan saja.
          </p>

          <div class="relative group inline-block">
            <div
              class="absolute -inset-1 bg-burg/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <NuxtLink
              to="https://wa.me/6287866861146"
              target="_blank"
              rel="noopener noreferrer"
              class="relative flex items-center gap-4 px-10! py-5! bg-burg text-white rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-burg-light hover:-translate-y-1 shadow-2xl"
            >
              <span>Konsultasi via WhatsApp</span>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                class="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Accordion List -->
        <div class="flex flex-col gap-5 reveal-right d1">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="group border border-white/5 rounded-2xl overflow-hidden transition-all duration-500"
            :class="
              faq.isOpen
                ? 'bg-white/3 border-burg/30 shadow-2xl shadow-burg/5'
                : 'bg-white/1 hover:bg-white/3 hover:border-white/10'
            "
          >
            <!-- Question -->
            <button
              @click="toggleFaq(i)"
              class="w-full text-left p-8! lg:px-10! lg:py-9! flex items-center justify-between gap-8 focus:ring-2 focus:ring-burg/50 focus:outline-none"
            >
              <div class="flex items-center gap-6 lg:gap-10">
                <span
                  class="font-[Cormorant_Garamond] text-xl text-burg/40 font-bold tracking-widest group-hover:text-burg transition-colors"
                  :class="{ 'text-burg!': faq.isOpen }"
                >
                  {{ (i + 1).toString().padStart(2, "0") }}
                </span>
                <span
                  class="text-lg lg:text-xl font-medium text-white group-hover:text-burg-light transition-colors"
                  :class="{ 'text-burg-light!': faq.isOpen }"
                >
                  {{ faq.q }}
                </span>
              </div>

              <!-- Icon -->
              <div
                class="relative w-6 h-6 flex items-center justify-center shrink-0"
              >
                <div
                  class="absolute w-full h-0.5 bg-white/20 transition-all duration-500"
                  :class="{ 'rotate-180 bg-burg!': faq.isOpen }"
                ></div>
                <div
                  class="absolute w-0.5 h-full bg-white/20 transition-all duration-500"
                  :class="{ 'rotate-90 opacity-0 bg-burg!': faq.isOpen }"
                ></div>
              </div>
            </button>

            <!-- Answer (Smooth Transition using Grid) -->
            <div
              class="grid transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              :style="{ gridTemplateRows: faq.isOpen ? '1fr' : '0fr' }"
              :class="faq.isOpen ? 'opacity-100' : 'opacity-0'"
            >
              <div class="overflow-hidden">
                <div
                  class="p-10! text-white/70 text-base lg:text-lg leading-relaxed border-t border-white/5 mt-4 ml-16 lg:ml-20"
                >
                  {{ faq.a }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: reveal-x 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.reveal-right {
  opacity: 0;
  transform: translateX(30px);
  animation: reveal-x 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.d1 {
  animation-delay: 0.2s;
}

@keyframes reveal-x {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
