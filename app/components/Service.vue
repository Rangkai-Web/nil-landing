<template>
  <section id="services" class="relative py-32 overflow-hidden">
    <!-- Dark gradient background -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary"
    ></div>

    <!-- Decorative SVG elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Large geometric shape top-right -->
      <svg
        class="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.04]"
        viewBox="0 0 600 600"
      >
        <rect
          x="100"
          y="100"
          width="400"
          height="400"
          rx="80"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          transform="rotate(15 300 300)"
        />
        <rect
          x="150"
          y="150"
          width="300"
          height="300"
          rx="60"
          fill="none"
          stroke="white"
          stroke-width="1"
          stroke-dasharray="12 8"
          transform="rotate(15 300 300)"
        />
      </svg>

      <!-- Circle bottom-left -->
      <svg
        class="absolute -bottom-24 -left-24 w-[400px] h-[400px] opacity-[0.05]"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="white"
          stroke-width="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="white"
          stroke-width="0.8"
          stroke-dasharray="6 4"
        />
      </svg>

      <!-- Floating accent dots -->
      <div
        class="absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-accent/20"
      ></div>
      <div
        class="absolute top-[60%] right-[12%] w-2 h-2 rounded-full bg-accent/15"
      ></div>
      <div
        class="absolute bottom-[20%] left-[25%] w-4 h-4 rounded-full bg-white/5"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Layanan Utama
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
        >
          Solusi Lengkap untuk <br class="hidden md:block" />
          <span class="text-accent italic">Pengembangan SDM</span>
        </h2>
        <p
          class="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-medium leading-relaxed"
        >
          Kami menyediakan berbagai layanan terintegrasi untuk membantu
          organisasi Anda dalam membangun sumber daya manusia yang unggul.
        </p>
      </div>

      <!-- Services Grid: Top Row (3 cards) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div
          v-for="(srv, idx) in services.slice(0, 3)"
          :key="idx"
          class="group relative bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Hover glow -->
          <div
            class="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          ></div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500"
            >
              <Icon :name="srv.icon" size="32" />
            </div>
            <h3
              class="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-accent transition-colors duration-300"
            >
              {{ srv.title }}
            </h3>
            <p
              class="text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-300"
            >
              {{ srv.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Services Grid: Bottom Row (2 cards, centered) -->
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(srv, idx) in services.slice(3)"
          :key="idx + 3"
          class="group relative bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Hover glow -->
          <div
            class="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          ></div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500"
            >
              <Icon :name="srv.icon" size="32" />
            </div>
            <h3
              class="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-accent transition-colors duration-300"
            >
              {{ srv.title }}
            </h3>
            <p
              class="text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-300"
            >
              {{ srv.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "lucide:graduation-cap",
    title: "Training & Development",
    desc: "Pelatihan kerja sesuai kebutuhan industri mencakup hard skill, soft skill, dan sikap kerja profesional.",
  },
  {
    icon: "lucide:target",
    title: "Assessment Center",
    desc: "Penilaian psikologi untuk pemetaan kemampuan, potensi individu, dan kesiapan peran strategis.",
  },
  {
    icon: "lucide:heart-handshake",
    title: "Employee Counseling",
    desc: "Layanan pendukung SDM dalam menghadapi tantangan kerja dan menjaga keseimbangan mental.",
  },
  {
    icon: "lucide:users",
    title: "Team Building",
    desc: "Program peningkatan kerja sama, komunikasi, kepemimpinan, dan efektivitas tim secara menyeluruh.",
  },
  {
    icon: "lucide:building",
    title: "Advisory Services",
    desc: "Pendampingan BPD untuk Manajemen Risiko, Perkreditan, dan transformasi Digital Banking.",
  },
];
</script>

<style scoped></style>
