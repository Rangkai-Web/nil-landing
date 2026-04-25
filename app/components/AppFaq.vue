<script setup lang="ts">
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
    <div class="container">
      <div class="faq-grid">
        <div class="faq-left">
          <div class="section-label reveal">FAQ</div>
          <h2 class="faq-h2 reveal d1">Pertanyaan<br>yang Sering<br>Ditanyakan</h2>
          <p class="faq-sub reveal d2">Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp.</p>
          <br><br>
          <a href="https://wa.me/6281234567890" target="_blank" class="btn-primary reveal d3">Chat WhatsApp</a>
        </div>
        <div class="faq-list reveal d1">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: faq.isOpen }">
            <div class="faq-q" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-a-container" :style="{ maxHeight: faq.isOpen ? '200px' : '0' }">
              <div class="faq-a">{{ faq.a }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#faq { background: var(--black); padding: 120px 0; }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }

.faq-h2 {
  font-family: var(--ff-head);
  font-size: clamp(38px, 4.5vw, 60px); font-weight: 400; line-height: 1.1;
  color: var(--cream); margin-bottom: 24px;
}
.faq-sub { font-size: 14px; color: var(--gray); line-height: 1.8; }

.faq-list { display: flex; flex-direction: column; }
.faq-item { border-top: 1px solid var(--border); }
.faq-item:last-child { border-bottom: 1px solid var(--border); }

.faq-q {
  display: flex; justify-content: space-between; align-items: center;
  padding: 24px 0; cursor: pointer;
  font-size: 15px; font-weight: 500; color: var(--cream);
  gap: 20px;
  transition: color 0.3s;
}
.faq-q:hover { color: var(--burg); }

.faq-icon {
  width: 24px; height: 24px; border: 1px solid rgba(233,231,221,0.2);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 16px; color: var(--cream); transition: all 0.3s;
  line-height: 1;
}
.faq-item.open .faq-icon { background: var(--burg); border-color: var(--burg); transform: rotate(45deg); }

.faq-a-container {
  overflow: hidden;
  transition: max-height 0.4s var(--ease);
}
.faq-a {
  font-size: 13px; color: var(--gray); line-height: 1.8;
  padding-bottom: 24px;
}

@media (max-width: 768px) {
  .faq-grid { grid-template-columns: 1fr; }
}
</style>
