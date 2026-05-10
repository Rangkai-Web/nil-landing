<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import IconCheck from "./svg-icon/IconCheck.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";
import TextureLines from "./svg-icon/TextureLines.vue";

const activeTab = ref("photobooth");
const activePhotoIdx = ref(0);
const activeVideoIdx = ref(0);
const photoCarouselRef = ref<HTMLElement | null>(null);
const videoCarouselRef = ref<HTMLElement | null>(null);

const photoboothPackages = [
  {
    name: "QR Files Only",
    tagline: "Digital Experience",
    desc: "File foto tanpa cetak fisik. Tamu mendapatkan kartu QR Code untuk mengunduh foto langsung di lokasi.",
    prices: [
      { label: "4 Hours", price: "1.700.000" },
      { label: "5 Hours", price: "2.100.000" },
      { label: "6 Hours", price: "2.500.000" },
      { label: "7 Hours", price: "2.900.000" },
      { label: "8 Hours", price: "3.300.000" },
      { label: "9 Hours", price: "3.700.000" },
      { label: "10 Hours", price: "4.100.000" },
      { label: "11 Hours", price: "4.500.000" },
      { label: "12 Hours", price: "4.900.000" },
    ],
    notes: [
      "Additional Charge in Venue: 1 Hour File Only, Rp 400.000",
      "Paket tidak termasuk Backdrop/Dekorasi",
    ],
  },
  {
    name: "2D Frame Limited",
    tagline: "Classic Touch",
    desc: "Standart Paper Frame ketebalan 2mm & kertas foto original. Dibatasi sesuai jumlah cetak. Include QR Code.",
    prices: [
      { label: "100 Prints, 4 Hours", price: "1.900.000" },
      { label: "200 Prints, 5 Hours", price: "2.900.000" },
      { label: "300 Prints, 6 Hours", price: "3.800.000" },
      { label: "400 Prints, 7 Hours", price: "4.700.000" },
      { label: "500 Prints, 8 Hours", price: "5.500.000" },
      { label: "600 Prints, 9 Hours", price: "6.300.000" },
      { label: "700 Prints, 10 Hours", price: "7.000.000" },
      { label: "800 Prints, 11 Hours", price: "7.700.000" },
      { label: "900 Prints, 12 Hours", price: "8.400.000" },
    ],
    notes: [
      "Additional in Venue: 1 Print Rp 10.000, 1 Hour No Print Rp 300.000",
      "Paket tidak termasuk Backdrop/Dekorasi",
    ],
  },
  {
    name: "2D Frame Unlimited",
    tagline: "Infinite Memories",
    desc: "Standart Paper Frame ketebalan 2mm & kertas foto original. Cetak sepuasnya tanpa batas. Include QR Code.",
    prices: [
      { label: "2 Hours Prints", price: "3.400.000" },
      { label: "3 Hours Prints", price: "4.100.000" },
      { label: "4 Hours Prints", price: "4.800.000" },
      { label: "5 Hours Prints", price: "5.500.000" },
      { label: "6 Hours Prints", price: "6.200.000" },
      { label: "7 Hours Prints", price: "6.900.000" },
      { label: "8 Hours Prints", price: "7.600.000" },
      { label: "9 Hours Prints", price: "8.300.000" },
      { label: "10 Hours Prints", price: "9.000.000" },
    ],
    notes: [
      "Additional Charge in Venue: 1 Hour Print, Rp 800.000",
      "Paket tidak termasuk Backdrop/Dekorasi",
    ],
    featured: true,
  },
];

const photoboothIncludes = [
  "Gratis Scan QR Code untuk Download File & Video GIF",
  "Gratis Flashdisk Eksklusif Semua File",
  "Gratis Transportasi Seluruh Bali",
  "Gratis Template & Desain Foto",
  "Gratis Funprops/Aksesoris Lucu-Lucu",
  "2 Crew Operator Berpengalaman",
  "Alat & Sistem Photobooth Praktis dan Cepat",
  "Mirror Screen Monitor untuk Selfie",
  "Kamera DSLR 24 MP",
  "Printer Tercepat 15 Detik Per Print",
  "Lighting Flash Studio 300 Watt",
  "Lampu LED 48 Watt",
];

const videoPackages = [
  {
    name: "Paket Silver",
    duration: "2 Jam Video",
    price: "2.000.000",
    additionalTime: "1 Hours / Rp 300.000",
    desc: "Pengalaman Video 360 elegan untuk acara intimate Anda dengan durasi 2 jam.",
  },
  {
    name: "Paket Gold",
    duration: "4 Jam Video",
    price: "2.500.000",
    additionalTime: "1 Hours / Rp 300.000",
    desc: "Durasi 4 jam untuk mengabadikan setiap momen tamu tanpa terburu-buru.",
    featured: true,
  },
];

const videoIncludes = [
  "Gratis Video Konten 1 Menit",
  "Gratis Scan QR Code / Air Drop / Email",
  "Gratis Flashdisk Eksklusif Semua File",
  "Gratis Transportasi Seluruh Bali",
  "Gratis Custom Desain Video",
  "Gratis Custom Music Video",
  "Gratis Funprops (Bubble gun, Light saber, dll)",
  "2 Crew Operator Berpengalaman",
  "Alat dan Software Praktis dan Cepat",
  "LED Ring Light",
  "8 Lampu LED Tambahan (Total 240 Watt)",
  "Booth Video 360 Diameter 100cm (Max 5 Orang)",
];

const videoNotes = [
  "Additional Time: 1 Hours / Rp 300.000",
  "Garansi 100% Uang Kembali Bila Tidak Datang",
  "Paket tidak termasuk Backdrop/Dekorasi",
];

function setupCarouselScroll(
  containerRef: { value: HTMLElement | null },
  idxRef: { value: number },
) {
  const el = containerRef.value;
  if (!el) return;

  el.addEventListener(
    "scroll",
    () => {
      const cards = el.querySelectorAll(".carousel-card");
      if (!cards.length) return;
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const c = card as HTMLElement;
        const cardCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      idxRef.value = closestIdx;
    },
    { passive: true },
  );
}

function scrollToIdx(el: HTMLElement | null, idx: number) {
  if (!el) return;
  const cards = el.querySelectorAll(".carousel-card");
  const card = cards[idx] as HTMLElement | undefined;
  card?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function triggerSwipeHint(containerRef: { value: HTMLElement | null }) {
  const el = containerRef.value;
  if (!el || window.innerWidth >= 1024) return;
  el.scrollTo({ left: 56, behavior: "smooth" });
  setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 600);
}

onMounted(() => {
  setupCarouselScroll(photoCarouselRef, activePhotoIdx);
  setupCarouselScroll(videoCarouselRef, activeVideoIdx);
  setTimeout(() => triggerSwipeHint(photoCarouselRef), 1400);
});

watch(activeTab, (tab) => {
  activePhotoIdx.value = 0;
  activeVideoIdx.value = 0;
  if (tab === "video360") {
    setTimeout(() => triggerSwipeHint(videoCarouselRef), 400);
  }
});
// JSON-LD for Pricing SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "NIL Entertain Pricing Packages",
        itemListElement: [
          ...photoboothPackages.map((pkg, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: pkg.name,
              description: pkg.desc,
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "IDR",
                lowPrice: pkg.prices?.[0]?.price?.replace(/\./g, "") || "0",
                highPrice:
                  pkg.prices?.[pkg.prices.length - 1]?.price?.replace(
                    /\./g,
                    "",
                  ) || "0",
                offerCount: pkg.prices?.length || 0,
              },
            },
          })),
          ...videoPackages.map((pkg, i) => ({
            "@type": "ListItem",
            position: photoboothPackages.length + i + 1,
            item: {
              "@type": "Product",
              name: pkg.name,
              description: pkg.desc,
              offers: {
                "@type": "Offer",
                price: pkg.price?.replace(/\./g, "") || "0",
                priceCurrency: "IDR",
              },
            },
          })),
        ],
      }),
    },
  ],
});
</script>

<template>
  <section
    id="paket"
    class="relative overflow-hidden bg-[#0c0a09] py-24! lg:py-40!"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
        alt=""
        class="h-full w-full object-cover opacity-25 mix-blend-overlay grayscale"
        width="1920"
        height="1080"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-[#0c0a09] via-[#0c0a09]/75 to-[#0c0a09]"
      ></div>
    </div>

    <!-- Decorative -->
    <div class="pointer-events-none absolute inset-0 z-1">
      <TextureLines class="opacity-[0.06] text-[#890015]" />
      <DoubleCircle
        :size="1300"
        position-class="absolute -top-[25%] -right-[15%] opacity-[0.12] text-[#890015] blur-3xl"
      />
      <DoubleCircle
        :size="1000"
        position-class="absolute -bottom-[20%] -left-[15%] opacity-[0.12] text-[#890015] blur-3xl"
      />
    </div>

    <!-- Main Container -->
    <div class="app-container relative z-10 mx-auto!">
      <!-- Section Header -->
      <div class="mb-20! text-center lg:mb-28!">
        <div class="inline-flex items-center gap-3 mb-6!">
          <div
            class="h-px w-10 bg-linear-to-r from-transparent to-[#890015]"
          ></div>
          <span
            class="text-sm font-black tracking-[0.45em] text-[#890015] uppercase"
            >Exclusive Services</span
          >
          <div
            class="h-px w-10 bg-linear-to-l from-transparent to-[#890015]"
          ></div>
        </div>
        <h2
          class="font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-8xl text-white font-light leading-[1.05] animate-fade-up"
        >
          Pilih Paket<br />
          <em class="text-[#890015] not-italic">Terbaik</em> Anda
        </h2>
        <div
          class="mt-8! mx-auto! h-px! w-24 bg-linear-to-r from-transparent via-[#890015] to-transparent"
        ></div>
        <p
          class="mt-8! mx-auto! max-w-xl text-base lg:text-lg text-white/65 font-light leading-relaxed"
        >
          Harmoni sempurna antara teknologi modern dan estetika klasik untuk
          setiap momen berharga Anda.
        </p>
      </div>

      <!-- Tab Navigation -->
      <div class="flex justify-center mb-16! lg:mb-24!">
        <div
          class="relative flex items-center p-1.5! bg-white/4 backdrop-blur-xl rounded-2xl border border-white/8 shadow-2xl w-full max-w-[360px]"
          role="tablist"
        >
          <button
            @click="activeTab = 'photobooth'"
            role="tab"
            :aria-selected="activeTab === 'photobooth'"
            aria-controls="photobooth-panel"
            aria-label="Show Photobooth Packages"
            class="relative z-10 flex-1 flex justify-center cursor-pointer items-center py-4! rounded-xl text-sm font-black tracking-[0.2em] uppercase transition-all duration-500"
            :class="
              activeTab === 'photobooth'
                ? 'text-white'
                : 'text-white/65 hover:text-white/80'
            "
          >
            Photobooth
          </button>
          <button
            @click="activeTab = 'video360'"
            role="tab"
            :aria-selected="activeTab === 'video360'"
            aria-controls="video-panel"
            aria-label="Show Video 360 Packages"
            class="relative z-10 flex-1 flex justify-center cursor-pointer items-center py-4! rounded-xl text-sm font-black tracking-[0.2em] uppercase transition-all duration-500"
            :class="
              activeTab === 'video360'
                ? 'text-white'
                : 'text-white/65 hover:text-white/80'
            "
          >
            Video 360
          </button>
          <div
            class="absolute top-1.5 bottom-1.5 w-[calc(50%-9px)] bg-[#890015] rounded-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_20px_rgba(137,0,21,0.3)]"
            aria-hidden="true"
            :style="{
              left: activeTab === 'photobooth' ? '6px' : 'calc(50% + 3px)',
            }"
          ></div>
        </div>
      </div>

      <!-- PHOTOBOOTH SECTION -->
      <div v-if="activeTab === 'photobooth'" class="animate-fade-in">
        <!-- Desktop Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10!">
          <div
            v-for="pkg in photoboothPackages"
            :key="pkg.name"
            class="group relative rounded-4xl p-[1.5px]!"
            :class="
              pkg.featured
                ? 'bg-linear-to-r from-[#890015] via-[#f0c040] to-[#890015]'
                : 'bg-white/10'
            "
          >
            <div
              class="bg-black rounded-[calc(2rem-1.5px)] h-full flex flex-col relative"
            >
              <div
                v-if="pkg.featured"
                class="absolute top-0 left-1/2 -translate-x-1/2 bg-[#890015] text-white text-center text-xs font-black tracking-widest uppercase px-6! py-1! md:py-2! rounded-b-xl z-20"
              >
                Most Popular
              </div>
              <!-- Back to pure Tailwind 4 utilities -->
              <div class="p-8! lg:p-12! xl:p-15! flex flex-col grow">
                <div class="mb-10!" :class="pkg.featured ? 'mt-6' : ''">
                  <span
                    class="text-xs font-black tracking-[0.4em] text-[#890015] uppercase block mb-3!"
                    >{{ pkg.tagline }}</span
                  >
                  <h3
                    class="font-[Cormorant_Garamond] text-3xl xl:text-4xl text-white font-medium mb-4!"
                  >
                    {{ pkg.name }}
                  </h3>
                  <div class="w-10 h-0.5 bg-[#890015] mb-6!"></div>
                  <p class="text-sm text-white/65 leading-relaxed font-light">
                    {{ pkg.desc }}
                  </p>
                </div>

                <div class="grow space-y-2 mb-10!">
                  <div
                    v-for="(price, pIdx) in pkg.prices"
                    :key="price.label"
                    class="flex justify-between items-center px-4! py-3.5! rounded-lg transition-colors duration-300"
                    :class="pIdx % 2 === 0 ? 'bg-white/3' : 'bg-transparent'"
                  >
                    <span class="text-xs text-white/65 font-light">{{
                      price.label
                    }}</span>
                    <span
                      class="font-[Cormorant_Garamond] text-lg font-semibold text-white"
                      >Rp {{ price.price }}</span
                    >
                  </div>
                </div>

                <div class="mt-auto border-t border-white/5 pt-8">
                  <div class="mb-8! space-y-2">
                    <p
                      v-for="note in pkg.notes"
                      :key="note"
                      class="text-xs text-white/65 italic font-light leading-relaxed"
                    >
                      * {{ note }}
                    </p>
                  </div>
                  <NuxtLink
                    to="/reservation"
                    class="block w-full text-center py-5! rounded-xl text-sm font-black tracking-[0.3em] uppercase transition-all duration-300 bg-[#890015] text-white hover:bg-[#a01020] shadow-[0_10px_30px_rgba(137,0,21,0.2)] hover:shadow-[0_15px_40px_rgba(137,0,21,0.4)] hover:-translate-y-1"
                    >Book Package</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Inclusions Panel -->
        <div
          class="relative bg-[#0f0d0b] border border-white/20 rounded-[3rem] overflow-hidden group/panel shadow-2xl p-8!"
        >
          <div
            class="absolute -top-24 -left-24 w-64 h-64 bg-[#890015]/20 blur-[100px] rounded-full"
          ></div>
          <div
            class="absolute -bottom-24 -right-24 w-64 h-64 bg-[#890015]/10 blur-[100px] rounded-full"
          ></div>
          <div class="relative z-10">
            <div class="text-center mb-16! px-6!">
              <div class="inline-flex items-center gap-2 mb-4!">
                <div class="w-8 h-px bg-[#890015]/40"></div>
                <span
                  class="text-xs font-black tracking-[0.5em] text-[#890015] uppercase block"
                  >The Premium Standard</span
                >
                <div class="w-8 h-px bg-[#890015]/40"></div>
              </div>
              <h3
                class="font-[Cormorant_Garamond] text-4xl lg:text-6xl text-white font-light"
              >
                Standard
                <em class="text-[#890015] not-italic font-normal"
                  >Inclusions</em
                >
              </h3>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <div
                v-for="inc in photoboothIncludes"
                :key="inc"
                class="flex items-center gap-4 p-5! rounded-2xl bg-white/2 border border-white/3 hover:bg-white/5 hover:border-[#890015]/30 hover:translate-x-1 transition-all duration-300 group/item"
              >
                <div
                  class="shrink-0 w-10 h-10 rounded-xl bg-cream2 border border-burg-light flex items-center justify-center group-hover/item:bg-cream group-hover/item:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(137,0,21,0.45)] group-hover/item:shadow-[0_0_20px_rgba(137,0,21,0.45)]"
                >
                  <IconCheck
                    class="w-4 h-4 text-cream group-hover/item:text-white transition-colors"
                  />
                </div>
                <span
                  class="text-sm text-white/80 leading-snug font-medium group-hover/item:text-white transition-colors"
                  >{{ inc }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- VIDEO 360 SECTION -->
      <div v-else class="animate-fade-in">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto! mb-10!"
        >
          <div
            v-for="pkg in videoPackages"
            :key="pkg.name"
            class="rounded-4xl p-[1.5px]! bg-white/10"
          >
            <div
              class="bg-black rounded-[calc(2rem-1.5px)] h-full p-10! lg:p-14! xl:p-20! flex flex-col text-center"
            >
              <div class="mb-10!">
                <span
                  class="text-sm font-black tracking-[0.4em] text-[#890015] uppercase block mb-4!"
                  >Videobooth 360</span
                >
                <h3
                  class="font-[Cormorant_Garamond] text-4xl xl:text-5xl text-white font-medium mb-4!"
                >
                  {{ pkg.name }}
                </h3>
                <p class="text-sm text-white/70 leading-relaxed font-light">
                  {{ pkg.desc }}
                </p>
              </div>
              <div class="mb-14!">
                <span
                  class="text-sm text-white/50 tracking-[0.3em] uppercase block mb-2!"
                  >{{ pkg.duration }}</span
                >
                <div class="flex items-baseline justify-center gap-2">
                  <span
                    class="font-[Cormorant_Garamond] text-2xl text-[#890015]"
                    >Rp</span
                  >
                  <span
                    class="font-[Cormorant_Garamond] text-7xl xl:text-[90px] text-white font-light tracking-tighter"
                    >{{ pkg.price }}</span
                  >
                </div>
                <div v-if="pkg.additionalTime" class="mt-4!">
                  <span
                    class="text-xs text-white/60 tracking-widest uppercase italic"
                  >
                    Additional Time: {{ pkg.additionalTime }}
                  </span>
                </div>
              </div>
              <div class="mt-auto border-t border-white/5 pt-10">
                <NuxtLink
                  to="/reservation"
                  class="block w-full py-5! bg-[#890015] text-white rounded-xl text-sm font-black tracking-[0.3em] uppercase hover:bg-[#a01020] transition-all shadow-[0_10px_30px_rgba(137,0,21,0.25)] hover:shadow-[0_15px_40px_rgba(137,0,21,0.45)] hover:-translate-y-1"
                  >Book Now</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Video Inclusions Panel -->
        <div
          class="relative bg-[#0f0d0b] border border-white/20 rounded-[3rem] overflow-hidden group/panel shadow-2xl p-8!"
        >
          <div
            class="absolute -top-24 -right-24 w-64 h-64 bg-[#890015]/20 blur-[100px] rounded-full"
          ></div>
          <div class="relative z-10">
            <div class="text-center mb-16! px-6!">
              <span
                class="text-sm font-black tracking-[0.5em] text-[#890015] uppercase block mb-4!"
                >Ultimate Tech</span
              >
              <h3
                class="font-[Cormorant_Garamond] text-4xl lg:text-6xl text-white font-light"
              >
                Standard
                <em class="text-[#890015] not-italic font-normal">Features</em>
              </h3>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <div
                v-for="inc in videoIncludes"
                :key="inc"
                class="flex items-center gap-4 p-5! rounded-2xl bg-white/2 border border-white/3 hover:bg-white/5 hover:border-[#890015]/30 hover:translate-x-1 transition-all duration-300 group/item"
              >
                <div
                  class="shrink-0 w-10 h-10 rounded-xl bg-cream2 border border-burg-light flex items-center justify-center group-hover/item:bg-cream group-hover/item:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(137,0,21,0.45)] group-hover/item:shadow-[0_0_20px_rgba(137,0,21,0.45)]"
                >
                  <IconCheck
                    class="w-4 h-4 text-cream group-hover/item:text-white transition-colors"
                  />
                </div>
                <span
                  class="text-sm text-white/80 leading-snug font-medium group-hover/item:text-white transition-colors"
                  >{{ inc }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-up {
  animation: fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
