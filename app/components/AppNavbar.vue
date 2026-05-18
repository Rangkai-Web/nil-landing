<script setup lang="ts">
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-1000 flex justify-center pointer-events-none transition-all duration-500"
    :class="isScrolled ? 'p-6!' : 'p-6! lg:px-10! lg:py-8!'"
  >
    <nav
      class="w-full max-w-7xl relative pointer-events-auto transition-all duration-500"
      :class="
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border border-cream/60 py-3! px-6! shadow-2xl'
          : 'py-3! px-6! bg-transparent'
      "
    >
      <div class="flex items-center justify-between px-4 h-[60px]">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 w-14"
          aria-label="NIL Entertainment Home"
        >
          <NuxtImg
            src="/logo/logo.webp"
            alt="Nil Entertainment Logo"
            class="rounded-full hover:scale-110 transition-all duration-500"
            loading="eager"
            fetchpriority="high"
            :width="100"
            :height="100"
          />
        </NuxtLink>

        <!-- Desktop Nav -->
        <ul class="hidden lg:flex gap-8 list-none m-0! p-0!">
          <li
            v-for="link in [
              'Tentang',
              'Layanan',
              'Paket',
              'Portfolio',
              'FAQ',
              'Kontak',
            ]"
            :key="link"
          >
            <NuxtLink
              :to="'/#' + link.toLowerCase()"
              class="text-base font-bold tracking-[0.15em] uppercase text-white hover:text-white/80 transition-all relative group"
            >
              {{ link }}
              <span
                class="absolute bottom-[-4px] left-1/2 w-0 h-px bg-burg transition-all duration-300 -translate-x-1/2 group-hover:w-8"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA -->
        <div class="hidden lg:flex items-center">
          <NuxtLink
            to="https://tr.ee/awZJxowwW7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a session with NIL Entertainment"
            class="px-7! py-3! bg-burg text-white text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-burg-light hover:-translate-y-0.5"
            >Book Now</NuxtLink
          >
        </div>

        <!-- Hamburger -->
        <button
          class="lg:hidden flex flex-col items-center justify-center gap-1.5 w-12 h-12 bg-white/5 border border-white/10 rounded-full transition-all duration-300 group cursor-pointer"
          @click="toggleMenu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
        >
          <span
            class="w-6 h-px bg-cream transition-all duration-300"
            :class="{ 'translate-y-2 rotate-45': isMenuOpen }"
          ></span>
          <span
            class="w-6 h-px bg-cream transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="w-6 h-px bg-cream transition-all duration-300"
            :class="{ ' -translate-y-1.5 -rotate-45': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 right-0 mt-3 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8! flex flex-col gap-8 shadow-2xl lg:hidden"
        >
          <ul class="list-none flex flex-col gap-6 m-0! p-0!">
            <li
              v-for="link in [
                'Tentang',
                'Layanan',
                'Paket',
                'Portfolio',
                'FAQ',
                'Kontak',
              ]"
              :key="link"
            >
              <NuxtLink
                :to="'/#' + link.toLowerCase()"
                @click="isMenuOpen = false"
                class="text-xs font-bold tracking-widest uppercase text-cream block py-2 hover:text-burg transition-colors"
              >
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
          <div class="mt-4">
            <NuxtLink
              to="https://tr.ee/awZJxowwW7"
              target="_blank"
              rel="noopener noreferrer"
              @click="isMenuOpen = false"
              class="block w-full text-center py-4! bg-burg text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-burg-light"
              >Book Now</NuxtLink
            >
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style scoped>
/* No custom CSS needed, all migrated to Tailwind 4 */
</style>
