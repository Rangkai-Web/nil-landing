<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";
import IconCheck from "./svg-icon/IconCheck.vue";

const pricelistPdfUrl = "/file/pricelist_nil.pdf";
const isPreviewOpen = ref(false);

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    isPreviewOpen.value = false;
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
    id="unduh-pricelist"
    class="relative overflow-hidden bg-[#0c0a09] pb-24! lg:pb-40! border-b border-white/5"
  >
    <!-- Decorative Elements (Kept subtle as it bridges pricing and video) -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <TextureLines class="opacity-[0.04] text-[#890015]" />
      <DoubleCircle
        :size="800"
        position-class="absolute -bottom-[20%] -left-[10%] opacity-[0.06] text-[#890015] blur-3xl"
      />
    </div>

    <!-- Main Container -->
    <div class="app-container relative z-10 mx-auto!">
      <div
        class="relative bg-[#0f0d0b] border border-white/10 rounded-[2.5rem] overflow-hidden group/panel shadow-2xl p-8! md:p-16! lg:p-20!"
      >
        <!-- Card-specific Glowing Backgrounds -->
        <div
          class="absolute -top-32 -right-32 w-96 h-96 bg-[#890015]/10 blur-[120px] rounded-full group-hover/panel:bg-[#890015]/15 transition-colors duration-1000"
        ></div>
        <div
          class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#890015]/5 blur-[120px] rounded-full"
        ></div>

        <!-- Layout Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <!-- LEFT COLUMN: 3D Booklet Cover Mockup (Pure CSS) -->
          <div
            class="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div
              @click="isPreviewOpen = true"
              class="relative group/book perspective-1000 w-[240px] sm:w-[280px] aspect-3/4 cursor-pointer"
              title="Klik untuk melihat preview"
            >
              <!-- The Book Container -->
              <div
                class="w-full h-full rounded-2xl bg-linear-to-b from-[#181512] to-[#0c0a09] border border-white/15 p-6! sm:p-8! flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/book:-translate-y-4 group-hover/book:rotate-y-12 transform-style-3d overflow-hidden"
              >
                <!-- Gold Accent Spine Line -->
                <div
                  class="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-[#890015] via-[#c5a880] to-[#890015] opacity-80"
                ></div>

                <!-- Gold Pattern Border -->
                <div
                  class="absolute inset-2 border border-[#890015]/20 rounded-xl pointer-events-none"
                ></div>

                <!-- Booklet Header -->
                <div class="relative z-10 text-center mt-6!">
                  <span
                    class="text-[9px] font-black tracking-[0.35em] text-[#c5a880] uppercase block mb-1!"
                  >
                    Official Brochure
                  </span>
                  <div class="h-px w-8 bg-[#c5a880]/30 mx-auto! mb-6!"></div>
                </div>

                <!-- Booklet Center (Logo & Title) -->
                <div
                  class="relative z-10 text-center my-auto! flex flex-col items-center"
                >
                  <!-- Logo Placeholder -->
                  <div
                    class="w-14 h-14 rounded-full border border-[#c5a880]/30 bg-black/40 flex items-center justify-center mb-6!"
                  >
                    <span
                      class="font-[Cormorant_Garamond] text-2xl font-light text-[#c5a880] tracking-widest"
                      >N</span
                    >
                  </div>

                  <h4
                    class="font-[Cormorant_Garamond] text-2xl sm:text-3xl text-white font-light tracking-wide leading-tight"
                  >
                    PRICELIST<br />
                    <span class="text-[#c5a880] italic">&amp; CATALOG</span>
                  </h4>
                </div>

                <!-- Booklet Footer -->
                <div class="relative z-10 text-center mb-4!">
                  <div class="h-px w-12 bg-white/10 mx-auto! mb-3!"></div>
                  <span
                    class="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase"
                  >
                    NIL Entertainment
                  </span>
                </div>

                <!-- Quick Preview Label on Hover -->
                <div
                  class="absolute inset-0 z-30 bg-black/60 opacity-0 group-hover/book:opacity-100 flex items-center justify-center transition-all duration-500 backdrop-blur-xs"
                >
                  <span
                    class="px-5! py-2.5! bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg shadow-xl scale-90 group-hover/book:scale-100 transition-all duration-500"
                  >
                    Buka Preview
                  </span>
                </div>
              </div>

              <!-- Backing Shadow Effect -->
              <div
                class="absolute -inset-2 bg-linear-to-r from-black to-transparent opacity-40 blur-lg rounded-2xl -z-10 transition-transform duration-700 group-hover/book:scale-95"
              ></div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Text & Action Buttons -->
          <div
            class="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2"
          >
            <h3
              class="font-[Cormorant_Garamond] text-4xl sm:text-5xl text-white font-light mb-6! leading-tight"
            >
              Butuh Rincian Paket
              <em class="text-[#890015] not-italic font-normal">Lengkap?</em>
            </h3>

            <p
              class="text-white/60 text-base leading-relaxed mb-10! font-light max-w-xl mx-auto! lg:mx-0!"
            >
              Dapatkan pricelist resmi kami dalam format PDF, berisi informasi
              lengkap mengenai rincian paket dan layanan kami.
            </p>

            <!-- Highlights Checklist -->
            <!-- <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto! lg:mx-0! mb-10! text-left"
            >
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 w-6 h-6 rounded-md bg-[#890015]/10 border border-[#890015]/30 flex items-center justify-center text-[#890015]"
                >
                  <IconCheck class="w-3 h-3" />
                </div>
                <span class="text-sm text-white/80 font-medium"
                  >Brosur Format PDF Siap Share</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 w-6 h-6 rounded-md bg-[#890015]/10 border border-[#890015]/30 flex items-center justify-center text-[#890015]"
                >
                  <IconCheck class="w-3 h-3" />
                </div>
                <span class="text-sm text-white/80 font-medium"
                  >Syarat & Ketentuan Reservasi</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 w-6 h-6 rounded-md bg-[#890015]/10 border border-[#890015]/30 flex items-center justify-center text-[#890015]"
                >
                  <IconCheck class="w-3 h-3" />
                </div>
                <span class="text-sm text-white/80 font-medium"
                  >Detail Pilihan Biaya Add-on</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 w-6 h-6 rounded-md bg-[#890015]/10 border border-[#890015]/30 flex items-center justify-center text-[#890015]"
                >
                  <IconCheck class="w-3 h-3" />
                </div>
                <span class="text-sm text-white/80 font-medium"
                  >Katalog Opsi Custom Frame</span
                >
              </div>
            </div> -->

            <!-- Action Buttons Group -->
            <div
              class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <!-- Download Button -->
              <a
                :href="pricelistPdfUrl"
                target="_blank"
                download="pricelist_nil_entertainment.pdf"
                class="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8! py-4.5! bg-[#890015] hover:bg-[#a01020] text-white text-xs font-black tracking-[0.25em] uppercase rounded-xl transition-all duration-300 shadow-xl shadow-burg/20 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Unduh PDF</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  class="animate-bounce"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>

              <!-- Preview Button -->
              <button
                @click="isPreviewOpen = true"
                class="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8! py-4.5! bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white text-xs font-black tracking-[0.25em] uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Baca Online</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  class="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen PDF Preview Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isPreviewOpen"
          @click.self="isPreviewOpen = false"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4! md:p-8!"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="relative w-full max-w-6xl h-[90vh] bg-[#0c0a09] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <!-- Modal Header -->
            <div
              class="flex items-center justify-between px-6! py-4! border-b border-white/10 bg-[#0f0d0b]"
            >
              <div class="flex items-center gap-3">
                <span
                  class="font-[Cormorant_Garamond] text-lg sm:text-xl text-white font-medium tracking-wide"
                >
                  Catalog &amp; Pricelist &mdash; NIL Entertainment
                </span>
              </div>
              <div class="flex items-center gap-4">
                <!-- Direct Link helper for mobile devices -->
                <a
                  :href="pricelistPdfUrl"
                  target="_blank"
                  download="pricelist_nil_entertainment.pdf"
                  class="hidden sm:inline-flex items-center gap-2 px-4! py-2! bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase rounded-lg tracking-wider transition-all"
                >
                  Unduh PDF
                </a>
                <!-- Close Button -->
                <button
                  @click="isPreviewOpen = false"
                  class="text-white/70 hover:text-white p-2! rounded-full hover:bg-white/5 transition-all cursor-pointer"
                  aria-label="Tutup Preview"
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
            </div>

            <!-- Modal Body (Iframe) -->
            <div
              class="grow bg-[#090706] relative flex flex-col justify-center"
            >
              <!-- Fallback text / suggestion -->
              <div
                class="absolute inset-x-0 top-6 text-center z-10 pointer-events-none px-4!"
              >
                <span class="text-[11px] text-white/30">
                  Mengalami kendala melihat dokumen? Anda dapat
                  <a
                    :href="pricelistPdfUrl"
                    target="_blank"
                    class="text-[#c5a880] underline pointer-events-auto hover:text-white"
                    >membukanya langsung di tab baru</a
                  >.
                </span>
              </div>
              <iframe
                :src="pricelistPdfUrl"
                class="w-full h-full border-0 relative z-20"
                title="Pricelist NIL Entertainment PDF Preview"
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* 3D Transform Utilities for Perspective Design */
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.rotate-y-12 {
  transform: rotateY(-15deg) rotateX(5deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
