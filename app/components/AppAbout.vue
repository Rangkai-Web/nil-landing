<script setup lang="ts">
import IconCameraElegant from "./svg-icon/IconCameraElegant.vue";
</script>

<template>
  <section
    id="tentang"
    class="bg-cream py-24! lg:py-40! relative overflow-hidden z-1"
  >
    <div class="container relative z-2">
      <div
        class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center"
      >
        <!-- Left: Visual Stack -->
        <div class="relative reveal-left">
          <div class="relative p-6! lg:p-10! group">
            <div
              class="relative h-[400px] lg:h-[600px] w-full overflow-hidden shadow-2xl z-2"
            >
              <NuxtImg
                src="/img/portfolio/photobooth/img1.webp"
                alt="NIL Entertainment Photography"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                width="600"
                height="800"
                loading="eager"
                fetchpriority="high"
                format="webp"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
              ></div>
            </div>
            <div
              class="absolute top-0 left-0 w-4/5 h-4/5 border border-burg/50 z-1"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-burg text-white rounded-full flex items-center justify-center z-3 shadow-2xl translate-x-1/4 translate-y-1/4"
            >
              <div class="text-center">
                <IconCameraElegant class="w-8 h-8 mb-1! mx-auto!" />
                <div class="flex flex-col leading-none">
                  <span
                    class="text-xs tracking-[0.3em] font-bold opacity-80 uppercase"
                    >Since</span
                  >
                  <strong
                    class="font-[Cormorant_Garamond] text-lg lg:text-xl tracking-widest"
                    >2021</strong
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="reveal-right text-center lg:text-left">
          <div class="inline-flex items-center gap-3 mb-6!">
            <div class="h-px w-8 bg-burg hidden md:block"></div>
            <span class="text-sm font-bold tracking-[0.3em] uppercase text-burg"
              >Tentang Kami</span
            >
          </div>

          <h2
            class="font-[Cormorant_Garamond] text-4xl lg:text-6xl font-light leading-tight text-black mb-10!"
          >
            Quality & Service<br />
            is <em class="italic text-burg font-normal">Our Priority</em>
          </h2>

          <div class="mb-14! space-y-6">
            <p
              class="text-lg lg:text-xl font-medium text-black leading-relaxed"
            >
              NIL Entertainment berkomitmen menghadirkan standar estetika
              premium dalam dokumentasi event di Bali dengan jaminan kualitas
              tanpa kompromi.
            </p>
            <p class="text-base text-black/70 leading-relaxed">
              Kami memberikan ketenangan pikiran melalui
              <strong class="text-black">Garansi 100% uang kembali</strong>
              jika tim tidak hadir, serta jaminan
              <strong class="text-black">Kertas Foto original</strong> yang
              mampu bertahan hingga 100 tahun. Setiap momen berharga Anda
              didokumentasikan menggunakan teknologi kamera DSLR 24MP dan
              pencahayaan studio 300W untuk hasil yang jernih, tajam, dan
              bercahaya rata.
            </p>
          </div>

          <div
            class="grid grid-cols-3 md:grid-cols-3 gap-8 mb-14! pb-14! border-b border-black/20"
          >
            <div class="text-center">
              <div
                class="font-[Cormorant_Garamond] text-4xl lg:text-5xl font-bold text-burg leading-none"
              >
                200<sup>+</sup>
              </div>
              <div
                class="text-xs font-bold tracking-[0.15em] uppercase text-[#888] mt-3!"
              >
                Event Selesai
              </div>
            </div>
            <div class="text-center">
              <div
                class="font-[Cormorant_Garamond] text-4xl lg:text-5xl font-bold text-burg leading-none"
              >
                5.0
              </div>
              <div
                class="text-xs font-bold tracking-[0.15em] uppercase text-[#888] mt-3!"
              >
                Rating Client
              </div>
            </div>
            <div class="text-center">
              <div
                class="font-[Cormorant_Garamond] text-4xl lg:text-5xl font-bold text-burg leading-none"
              >
                5<sup>+</sup>
              </div>
              <div
                class="text-xs font-bold tracking-[0.15em] uppercase text-[#888] mt-3!"
              >
                Tahun Pengalaman
              </div>
            </div>
          </div>

          <div
            class="font-[Cormorant_Garamond] text-xl lg:text-2xl italic text-[#888] text-left pl-6! border-l-4 border-burg"
          >
            "Capture the soul of the celebration, not just the scene."
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

@keyframes reveal-x {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
