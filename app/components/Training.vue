<template>
  <section id="training" class="relative py-32 px-6 overflow-hidden">
    <!-- Background SVG Pattern -->
    <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="training-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              fill="currentColor"
              class="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#training-dots)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Program Unggulan
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1]"
        >
          Program <span class="text-primary italic">Pelatihan</span> Kami
        </h2>
        <p
          class="text-slate-500 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed"
        >
          Temukan kelas pengembangan diri dan profesionalisme yang dikurasi
          khusus untuk kebutuhan industri.
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="flex justify-center mb-12">
        <div
          class="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl shadow-lg shadow-primary/5"
        >
          <button
            v-for="(courses, cat) in trainingData"
            :key="cat"
            @click="activeTab = String(cat)"
            :class="[
              'px-6 py-3 rounded-xl text-sm font-black tracking-tight transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'text-slate-500 hover:text-primary hover:bg-primary/5',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Course Cards -->
      <div
        class="bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 mb-16"
      >
        <div class="flex items-center gap-4 mb-10">
          <div
            class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
          >
            <Icon name="lucide:book-open" size="24" />
          </div>
          <div>
            <h3 class="text-2xl font-black text-text tracking-tight">
              {{ activeTab }}
            </h3>
            <p class="text-slate-500 text-sm font-medium">
              {{ (trainingData[activeTab] || []).length }} program tersedia
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(course, idx) in trainingData[activeTab]"
            :key="idx"
            class="group flex items-center gap-5 p-5 rounded-2xl bg-background/80 border border-slate-300 hover:border-primary/30 hover:bg-white transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0 group-hover:text-white transition-all duration-500"
            >
              {{ String(idx + 1).padStart(2, "0") }}
            </div>
            <div class="flex flex-col">
              <h4
                class="font-black text-text tracking-tight group-hover:text-primary transition-colors duration-300"
              >
                {{ course }}
              </h4>
              <span
                class="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1"
              >
                Digital Material
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="relative bg-linear-to-r from-primary to-secondary rounded-3xl p-10 md:p-14 overflow-hidden"
      >
        <!-- Decorative SVGs -->
        <svg
          class="absolute -top-12 -right-12 w-64 h-64 text-white opacity-[0.06]"
          viewBox="0 0 256 256"
        >
          <circle
            cx="128"
            cy="128"
            r="100"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
          <circle
            cx="128"
            cy="128"
            r="70"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-dasharray="8 6"
          />
        </svg>
        <div
          class="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        ></div>

        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3
              class="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight"
            >
              Akses Materi
              <span class="text-accent">Tanpa Batas</span>
            </h3>
            <p class="text-white/60 text-lg font-medium max-w-lg">
              Seluruh program pelatihan tersedia di platform E-Learning Moodle
              kami — kapan saja, di mana saja.
            </p>
          </div>
          <a
            href="https://dkn.moodle.com"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:bg-slate-100 hover:scale-110 transition-all duration-300 shadow-2xl uppercase tracking-wider shrink-0"
          >
            Akses E-Learning
            <Icon name="lucide:external-link" size="24" class="ml-3" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("Core Banking");

const trainingData = {
  "Core Banking": [
    "General Banking Level 4",
    "Cash Handling Level 4",
    "Cash Handling Level 5",
    "Branch Operations Excellence Program",
  ],
  Leadership: [
    "Officer Development Program (ODP)",
    "Building High-Performance Corporate Culture",
    "Performance Management for High-Impact Teams",
    "Coaching Skills for Leaders & Supervisors",
    "Strategic Personal Branding for Professionals",
  ],
  Finance: [
    "Financial Statement Analysis & Investment Evaluation",
    "Fundamentals of Financial Management",
    "Financial Planning",
    "Wealth Management Basics",
  ],
  "Business Strategy": [
    "Strategic Management & Execution Excellence",
    "Business Planning & Business Model Development",
    "Value Chain Management & Business Ecosystem Strategy",
    "Business Case Writing for Decision Making",
    "Value-Based Management for Organizational Performance",
  ],
  "Marketing & Sales": [
    "Digital Marketing",
    "Marketing Fundamentals for Business Growth",
    "Smart Selling Skills",
    "Service Excellence & Customer Experience Mastery",
  ],
};
</script>

<style scoped></style>
