<script setup lang="ts">
import IconChat from './svg-icon/IconChat.vue'
import IconSelect from './svg-icon/IconSelect.vue'
import IconCalendar from './svg-icon/IconCalendar.vue'
import IconFlash from './svg-icon/IconFlash.vue'
import IconDownload from './svg-icon/IconDownload.vue'
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'
import DotPattern from './svg-icon/DotPattern.vue'

const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Diskusikan kebutuhan event dan konsep yang Anda inginkan bersama tim ahli kami.', icon: IconChat },
  { num: '02', title: 'Pilih Paket', desc: 'Pilih paket layanan yang paling sesuai dengan kebutuhan, durasi, dan budget Anda.', icon: IconSelect },
  { num: '03', title: 'Reservasi', desc: 'Konfirmasi tanggal event Anda dan lakukan pembayaran untuk mengamankan slot.', icon: IconCalendar },
  { num: '04', title: 'Event Day', desc: 'Tim profesional kami hadir tepat waktu dan memastikan segalanya berjalan sempurna.', icon: IconFlash },
  { num: '05', title: 'Delivery', desc: 'Hasil foto & video berkualitas tinggi dikirimkan secara digital segera setelah event.', icon: IconDownload }
]
</script>

<template>
  <section id="alur">
    <!-- Decorative Background -->
    <div class="decor-wrapper">
      <TextureLines class="opacity-40 text-[#890015]" />
      <DoubleCircle :size="600" position-class="absolute -top-50 -left-50 opacity-40 text-[#890015]" />
    </div>

    <div class="container">
      <div class="alur-header">
        <div class="section-label reveal">Proses Kerja</div>
        <h2 class="alur-h2 reveal d1">Alur Booking<br><em>yang Mudah & Cepat</em></h2>
        <p class="alur-intro reveal d2">Kami memastikan setiap langkah perjalanan Anda bersama NIL Entertain terasa seamless dan profesional.</p>
      </div>

      <div class="alur-grid">
        <div v-for="(step, i) in steps" :key="step.num" class="alur-step reveal" :class="'d' + (i+1)">
          <div class="step-card">
            <div class="step-bg-num">{{ step.num }}</div>
            
            <div class="step-icon-box">
              <component :is="step.icon" class="step-icon" />
              <div class="step-circle-decorator"></div>
            </div>
            
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
          </div>
          
          <!-- Connecting Line (Desktop) -->
          <div v-if="i < steps.length - 1" class="step-connector">
            <div class="connector-line"></div>
            <div class="connector-dot"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#alur {
  background: var(--cream2);
  padding: 160px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
}

.alur-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.alur-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 64px);
  font-weight: 400;
  line-height: 1.1;
  color: var(--black);
  margin-bottom: 24px;
}

.alur-h2 em {
  font-style: italic;
  color: var(--burg);
}

.alur-intro {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.alur-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
}

.alur-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 48px 24px;
  border-radius: 24px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.5s var(--ease);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-card:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border-color: var(--burg);
}

.step-bg-num {
  position: absolute;
  top: -10px;
  right: -10px;
  font-family: var(--ff-head);
  font-size: 80px;
  font-weight: 700;
  color: rgba(125, 5, 22, 0.5);
  line-height: 1;
  pointer-events: none;
  transition: all 0.5s var(--ease);
}

.step-card:hover .step-bg-num {
  color: var(--burg);
  transform: scale(1.1);
}

.step-icon-box {
  width: 80px;
  height: 80px;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--burg);
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.5s var(--ease);
}

.step-card:hover .step-icon-box {
  background: var(--burg);
  color: var(--white);
  transform: rotate(10deg);
}

.step-circle-decorator {
  position: absolute;
  inset: -6px;
  border: 1px dashed rgba(125, 5, 22, 0.2);
  border-radius: 50%;
  transition: all 0.5s var(--ease);
}

.step-card:hover .step-circle-decorator {
  inset: -10px;
  border-color: var(--burg);
  transform: rotate(-20deg);
}

.step-title {
  font-family: var(--ff-head);
  font-size: 22px;
  font-weight: 600;
  color: var(--black);
  margin-bottom: 12px;
}

.step-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.step-connector {
  position: absolute;
  top: 40%;
  right: -20px;
  width: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.connector-line {
  width: 100%;
  height: 2px;
  border-top: 4px solid rgba(125, 5, 22, 0.5);
}

.connector-dot {
  position: absolute;
  right: 5px;
  width: 8px;
  height: 8px;
  background: var(--burg);
  border-radius: 50%;
}

@media (max-width: 1100px) {
  .alur-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  #alur { padding: 100px 0; }
  .alur-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .step-card {
    flex-direction: row;
    text-align: left;
    padding: 32px 24px;
    align-items: center;
    gap: 24px;
  }
  .step-icon-box {
    margin-bottom: 0;
    flex-shrink: 0;
  }
  .step-bg-num {
    font-size: 60px;
    bottom: -10px;
    top: auto;
    right: 20px;
  }
}
</style>

