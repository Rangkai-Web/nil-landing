<template>
  <section class="relative py-32 overflow-hidden text-center px-6">
    <!-- Dark gradient background -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary"
    ></div>

    <!-- Overlay gradient for depth -->
    <div
      class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
    ></div>

    <!-- Decorative SVG elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Large dashed circle top-right -->
      <!-- <svg
        class="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-[0.06]"
        viewBox="0 0 500 500"
      >
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          stroke-dasharray="12 8"
        />
        <circle
          cx="250"
          cy="250"
          r="160"
          fill="none"
          stroke="white"
          stroke-width="1"
        />
      </svg> -->

      <!-- Rotated square bottom-left -->
      <svg
        class="absolute -bottom-16 -left-16 w-[350px] h-[350px] opacity-[0.05]"
        viewBox="0 0 350 350"
      >
        <rect
          x="75"
          y="75"
          width="200"
          height="200"
          rx="40"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          transform="rotate(25 175 175)"
        />
        <rect
          x="100"
          y="100"
          width="150"
          height="150"
          rx="30"
          fill="none"
          stroke="white"
          stroke-width="0.8"
          stroke-dasharray="8 5"
          transform="rotate(25 175 175)"
        />
      </svg>

      <!-- Small accent circle center-left -->
      <svg
        class="absolute top-[30%] left-[5%] w-[120px] h-[120px] opacity-[0.08]"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="white"
          stroke-width="1"
        />
      </svg>

      <!-- Diamond shape right -->
      <svg
        class="absolute bottom-[25%] right-[8%] w-[80px] h-[80px] opacity-[0.07]"
        viewBox="0 0 80 80"
      >
        <rect
          x="15"
          y="15"
          width="50"
          height="50"
          rx="8"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          transform="rotate(45 40 40)"
        />
      </svg>

      <!-- Floating dots -->
      <div
        class="absolute top-[20%] right-[25%] w-3 h-3 rounded-full bg-accent/20"
      ></div>
      <div
        class="absolute bottom-[15%] left-[30%] w-2 h-2 rounded-full bg-white/15"
      ></div>
      <div
        class="absolute top-[55%] left-[15%] w-4 h-4 rounded-full bg-accent/10"
      ></div>

      <!-- Glow blobs -->
      <div
        class="absolute -top-20 left-1/3 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -bottom-20 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight"
      >
        Siap Tingkatkan <br />
        <span class="text-accent italic">Kompetensi Anda?</span>
      </h2>
      <p
        class="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed"
      >
        Bergabunglah dengan ratusan profesional yang telah mengembangkan
        keterampilan mereka bersama DKN Digital.
      </p>
      <a
        href="https://dkn.moodle.com"
        target="_blank"
        rel="noreferrer"
        class="flex items-center justify-center bg-accent text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-110 transition-all duration-300 shadow-2xl shadow-accent/30 uppercase tracking-wider"
      >
        Masuk E-Learning
        <Icon name="lucide:external-link" size="24" class="ml-3" />
      </a>
    </div>
  </section>
</template>

<style scoped></style>
