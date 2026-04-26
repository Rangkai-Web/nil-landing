<script setup lang="ts">
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'

const faqs = ref([
  {
    q: 'Area coverage dimana saja?',
    a: 'NIL Entertain melayani seluruh area Bali — Seminyak, Ubud, Nusa Dua, Kuta, Canggu, Sanur, dan sekitarnya. Untuk lokasi di luar Bali, silakan hubungi kami terlebih dahulu.',
    isOpen: true
  },
  {
    q: 'Berapa lama durasi booking minimal?',
    a: 'Durasi minimal booking adalah 3 jam untuk paket Basic dan 5 jam untuk paket Premium dan Corporate. Untuk acara khusus, durasi dapat disesuaikan sesuai kebutuhan.',
    isOpen: false
  },
  {
    q: 'Apakah bisa custom frame & template?',
    a: 'Tentu! Kami menyediakan layanan custom frame dan template design yang disesuaikan dengan tema acara, brand guideline, dan preferensi Anda. Revisi desain tersedia hingga final approval.',
    isOpen: false
  },
  {
    q: 'Apakah videobooth bisa indoor & outdoor?',
    a: 'Ya, layanan Videobooth360 kami tersedia untuk indoor maupun outdoor. Untuk outdoor, kami memastikan setup yang tepat sesuai kondisi pencahayaan dan lokasi event Anda.',
    isOpen: false
  },
  {
    q: 'Berapa minimal waktu booking sebelum acara?',
    a: 'Disarankan booking minimal 2 minggu sebelum tanggal acara untuk memastikan ketersediaan dan persiapan yang optimal. Untuk event besar, disarankan 1 bulan sebelumnya.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value.forEach((f, i) => {
    if (i === index) f.isOpen = !f.isOpen
    else f.isOpen = false
  })
}
</script>

<template>
  <section id="faq">
    <div class="faq-bg-overlay"></div>
    
    <!-- Decorative Background -->
    <div class="decor-wrapper">
      <TextureLines class="opacity-30 text-[#890015]" />
      <DoubleCircle :size="800" position-class="absolute -bottom-100 -left-100 opacity-20 text-[#890015]" />
    </div>

    <div class="container">
      <div class="faq-grid">
        <div class="faq-left">
          <div class="section-label reveal text-white!">FAQ</div>
          <h2 class="faq-h2 reveal d1">Pertanyaan<br>yang Sering<br><em>Ditanyakan</em></h2>
          <p class="faq-sub reveal d2">Kami hadir untuk memberikan solusi dokumentasi event terbaik. Jika masih ada keraguan, jangan ragu untuk menghubungi tim kami.</p>
          
          <div class="faq-cta reveal d3">
            <p>Butuh bantuan cepat?</p>
            <a href="https://wa.me/6281234567890" target="_blank" class="faq-wa-btn">
              <span>Chat WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="faq-list reveal d1">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: faq.isOpen }">
            <div class="faq-q" @click="toggleFaq(i)">
              <span class="faq-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
              <span class="faq-text">{{ faq.q }}</span>
              <div class="faq-toggle">
                <div class="toggle-line"></div>
                <div class="toggle-line"></div>
              </div>
            </div>
            <div class="faq-a-container" :style="{ maxHeight: faq.isOpen ? '300px' : '0' }">
              <div class="faq-a">
                <div class="faq-a-inner">
                  {{ faq.a }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#faq {
  padding: 160px 0;
  position: relative;
  background-image: url('/img/service-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.faq-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 10, 9, 0.98), rgba(125, 5, 22, 0.5), rgba(12, 10, 9, 0.98));
  z-index: 1;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 100px;
  align-items: start;
}

.faq-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 32px;
}

.faq-h2 em {
  font-style: italic;
  color: var(--burg-light);
  font-weight: 400;
}

.faq-sub {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  max-width: 450px;
}

.faq-cta {
  margin-top: 52px;
}

.faq-cta p {
  font-size: 13px;
  color: var(--burg-light);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.faq-wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 18px 36px;
  background: var(--burg);
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 100px;
  transition: all 0.4s var(--ease);
  box-shadow: 0 10px 30px rgba(125, 5, 22, 0.3);
}

.faq-wa-btn:hover {
  background: var(--burg-light);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(125, 5, 22, 0.4);
}

.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-q {
  display: flex;
  align-items: center;
  padding: 32px 0;
  cursor: pointer;
  gap: 30px;
}

.faq-num {
  font-family: var(--ff-head);
  font-size: 14px;
  color: var(--cream);
  font-weight: 600;
  opacity: 0.6;
}

.faq-text {
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
  color: var(--white);
  transition: color 0.3s ease;
}

.faq-item:hover .faq-text {
  color: var(--burg-light);
}

.faq-toggle {
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--white);
  transition: all 0.4s var(--ease);
}

.toggle-line:last-child {
  transform: rotate(90deg);
}

.faq-item.open .toggle-line {
  background: var(--burg-light);
}

.faq-item.open .toggle-line:last-child {
  transform: rotate(0deg);
}

.faq-a-container {
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-a-inner {
  padding-bottom: 32px;
  padding-left: 44px;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  max-width: 600px;
}

@media (max-width: 1024px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .faq-left {
    text-align: center;
  }
  .faq-sub {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  #faq {
    padding: 100px 0;
  }
  .faq-text {
    font-size: 16px;
  }
  .faq-q {
    gap: 20px;
  }
}
</style>

