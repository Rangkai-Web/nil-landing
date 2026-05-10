<script setup lang="ts">
import TextureLines from "./svg-icon/TextureLines.vue";
import DoubleCircle from "./svg-icon/DoubleCircle.vue";
import { useContactStore } from "~/stores/contactStore";

const contactStore = useContactStore();
</script>

<template>
  <section
    id="kontak"
    class="bg-cream text-black py-24! lg:py-40! relative overflow-hidden"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <TextureLines class="opacity-40 text-[#890015]" />
      <DoubleCircle
        :size="500"
        position-class="absolute top-0 right-0 opacity-40 text-[#890015] hidden xl:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center"
      >
        <div class="text-center lg:text-left">
          <div
            class="inline-flex items-center gap-4 mb-8! reveal justify-center lg:justify-start"
          >
            <div class="h-px w-12 bg-burg/30"></div>
            <span
              class="text-sm font-black tracking-[0.5em] text-burg uppercase"
              >Get in Touch</span
            >
            <div class="h-px w-12 bg-burg/30"></div>
          </div>
          <h2
            class="font-[Cormorant_Garamond] text-5xl lg:text-7xl font-light leading-tight text-black mb-10! reveal d1"
          >
            Ayo Buat Momen<br />Tak
            <em class="italic text-burg font-normal">Terlupakan</em> Bersama
          </h2>
          <div
            class="hidden lg:block h-px w-24 bg-linear-to-r from-burg/40 to-transparent reveal d2 mb-14!"
          ></div>

          <div
            class="flex flex-col gap-8 mb-12 items-center lg:items-start reveal d2"
          >
            <div
              class="flex gap-6 items-start w-full max-w-md lg:max-w-none group cursor-default"
            >
              <div
                class="w-13 h-13 bg-white border border-burg/10 flex items-center justify-center shrink-0 text-burg rounded-xl transition-all duration-300 group-hover:bg-burg group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(125,5,22,0.1)]"
              >
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="text-left">
                <div
                  class="text-xs font-bold tracking-[0.2em] uppercase text-[#666] mb-1.5!"
                >
                  Email Kami
                </div>
                <div class="text-lg text-black font-medium">
                  <NuxtLink
                    :to="'mailto:' + contactStore.email"
                    class="hover:text-burg transition-colors"
                    >{{ contactStore.email }}</NuxtLink
                  >
                </div>
              </div>
            </div>

            <div
              class="flex gap-6 items-start w-full max-w-md lg:max-w-none group cursor-default"
            >
              <div
                class="w-13 h-13 bg-white border border-burg/10 flex items-center justify-center shrink-0 text-burg rounded-xl transition-all duration-300 group-hover:bg-burg group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(125,5,22,0.1)]"
              >
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
              </div>
              <div class="text-left">
                <div
                  class="text-xs font-bold tracking-[0.2em] uppercase text-[#666] mb-1.5!"
                >
                  WhatsApp ({{ contactStore.whatsapp.name }})
                </div>
                <div class="text-lg text-black font-medium">
                  <NuxtLink
                    :to="contactStore.whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-burg transition-colors"
                    >{{ contactStore.whatsapp.label }}</NuxtLink
                  >
                </div>
              </div>
            </div>

            <div
              class="flex gap-6 items-start w-full max-w-md lg:max-w-none group cursor-default"
            >
              <div
                class="w-13 h-13 bg-white border border-burg/10 flex items-center justify-center shrink-0 text-burg rounded-xl transition-all duration-300 group-hover:bg-burg group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(125,5,22,0.1)]"
              >
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="text-left">
                <div
                  class="text-xs font-bold tracking-[0.2em] uppercase text-[#666] mb-1.5!"
                >
                  Lokasi Studio
                </div>
                <div class="text-lg text-black font-medium">
                  Jl. Tukad Batanghari VII No.2A, Denpasar, Bali
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal d3 mt-10!"
          >
            <NuxtLink
              :to="contactStore.whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="px-9! py-4.5! bg-burg text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-400 hover:bg-burg-light hover:-translate-y-1 hover:shadow-[0_15px_30_rgba(125,5,22,0.2)] text-center"
              >Konsultasi Gratis</NuxtLink
            >
            <NuxtLink
              to="https://maps.app.goo.gl/J3yJmJ8w8H9X9Z9X9"
              target="_blank"
              rel="noopener noreferrer"
              class="px-9! py-4.5! border border-black text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-400 hover:bg-black hover:text-white hover:-translate-y-1 text-center"
              >Get Direction</NuxtLink
            >
          </div>
        </div>

        <div class="reveal-right d2">
          <div
            class="h-[400px] lg:h-[650px] w-full overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-black/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.20811928014!2d115.2285!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f0000000000%3A0x0!2sJl.%20Tukad%20Batanghari%20VII%20No.2A%2C%20Denpasar!5e0!3m2!1sid!2sid!4v1714115000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="NIL Entertain Studio Location"
            ></iframe>
            <div
              class="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No custom CSS needed, all migrated to Tailwind 4 */
</style>
