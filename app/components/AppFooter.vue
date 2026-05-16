<template>
  <footer
    class="bg-black pt-24! pb-12! relative overflow-hidden border-t border-white/5"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <DoubleCircle
        :size="600"
        position-class="absolute -top-2/4 -right-100 opacity-20 text-cream hidden lg:block"
      />
    </div>

    <div class="app-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-16 mb-20!">
        <!-- Brand Section -->
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <NuxtLink
            to="/"
            class="group mb-10! inline-block"
            aria-label="NIL Entertain Home"
          >
            <div class="relative">
              <div
                class="absolute -inset-4 bg-burg/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
              <NuxtImg
                src="/logo/logo.webp"
                alt="Nil Entertain Logo"
                class="relative w-24 h-24 rounded-full border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                :width="96"
                :height="96"
                format="webp"
              />
            </div>
          </NuxtLink>

          <p
            class="text-lg text-white/70 leading-relaxed max-w-sm mb-10! font-light italic"
          >
            "Abadikan setiap tawa dan momen berharga Anda dengan teknologi
            Photobooth dan Videobooth 360 terbaik di Bali."
          </p>

          <div class="flex gap-4">
            <NuxtLink
              v-for="social in socialLinks"
              :key="social.name"
              :to="social.url"
              class="relative w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white rounded-full transition-all duration-500 hover:bg-burg hover:border-burg hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(125,5,22,0.3)] group/social"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'Follow us on ' + social.name"
            >
              <!-- Tooltip Badge -->
              <span
                class="absolute bottom-full mb-3! px-3! py-1! bg-burg text-xs font-black tracking-widest uppercase text-white rounded-full opacity-0 -translate-y-2 group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-50"
              >
                {{ social.name }}
                <span
                  class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-burg"
                ></span>
              </span>

              <span
                class="transition-transform duration-500 group-hover/social:scale-110"
              >
                <span v-if="social.icon === 'ig'">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </span>
                <span v-else-if="social.icon === 'yt'">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                    ></path>
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    ></polygon>
                  </svg>
                </span>
                <span v-else-if="social.icon === 'wa'">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    ></path>
                    <path
                      d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <span v-else-if="social.icon === 'tt'">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </span>
                <span v-else>
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                </span>
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Links Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left"
        >
          <div class="footer-col">
            <h3
              class="text-xs font-black tracking-[0.4em] uppercase text-burg mb-8!"
            >
              Services
            </h3>
            <ul class="flex flex-col gap-4 list-none p-0">
              <li
                v-for="link in [
                  'Photobooth',
                  'Videobooth 360',
                  'Event Activation',
                ]"
                :key="link"
              >
                <NuxtLink
                  to="/#layanan"
                  class="text-sm text-white/60 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                >
                  <span
                    class="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-burg"
                    >/</span
                  >
                  {{ link }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3
              class="text-xs font-black tracking-[0.4em] uppercase text-burg mb-8!"
            >
              Navigation
            </h3>
            <ul class="flex flex-col gap-4 list-none p-0">
              <li
                v-for="item in [
                  { t: 'Tentang Kami', l: 'tentang' },
                  { t: 'Portfolio', l: 'gallery' },
                  { t: 'Testimoni', l: 'testimoni' },
                  { t: 'Pertanyaan Umum', l: 'faq' },
                ]"
                :key="item.l"
              >
                <NuxtLink
                  :to="'/#' + item.l"
                  class="text-sm text-white/60 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                >
                  <span
                    class="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-burg"
                    >/</span
                  >
                  {{ item.t }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3
              class="text-xs font-black tracking-[0.4em] uppercase text-burg mb-8!"
            >
              Contact Us
            </h3>
            <ul class="flex flex-col gap-4 list-none p-0">
              <li>
                <NuxtLink
                  :to="contactStore.whatsappLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-white/60 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-3 group"
                >
                  <span
                    class="w-4 h-px bg-white/20 group-hover:w-2 group-hover:bg-burg transition-all"
                  ></span>
                  {{ contactStore.whatsapp.label }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="'mailto:' + contactStore.email"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-white/60 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-3 group"
                >
                  <span
                    class="w-4 h-px bg-white/20 group-hover:w-2 group-hover:bg-burg transition-all"
                  ></span>
                  {{ contactStore.email }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://maps.app.goo.gl/J3yJmJ8w8H9X9Z9X9"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-white/60 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-3 group"
                >
                  <span
                    class="w-4 h-px bg-white/20 group-hover:w-2 group-hover:bg-burg transition-all"
                  ></span>
                  {{ contactStore.location }}
                </NuxtLink>
              </li>
              <li class="mt-4!">
                <NuxtLink
                  to="https://tr.ee/awZJxowwW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your event reservation now"
                  class="inline-block px-6! py-3! bg-burg/70 border border-burg/20 text-white text-xs font-black tracking-widest uppercase hover:bg-burg hover:text-white transition-all duration-500 translate-y-1! hover:translate-y-0!"
                >
                  Book Event
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-12! border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left"
      >
        <div class="text-sm text-white/60 tracking-widest uppercase">
          &copy; {{ currentYear }}
          <span class="text-white font-bold mx-1!">NIL Entertain</span> &mdash;
          Premiere Event Services in Bali
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import DoubleCircle from "./svg-icon/DoubleCircle.vue";
import { useContactStore } from "~/stores/contactStore";

const contactStore = useContactStore();
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "Instagram",
    icon: "ig",
    url: `https://www.instagram.com/${contactStore.instagram}/`,
  },
  { name: "TikTok", icon: "tt", url: "https://www.tiktok.com/@nil_entertaint" },
  {
    name: "WhatsApp",
    icon: "wa",
    url: contactStore.whatsappLink,
  },
];
</script>

<style scoped></style>
