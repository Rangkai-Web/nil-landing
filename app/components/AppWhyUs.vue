<script setup lang="ts">
import IconStar from './svg-icon/IconStar.vue'
import IconCase from './svg-icon/IconCase.vue'
import IconCheck from './svg-icon/IconCheck.vue'
import IconClock from './svg-icon/IconClock.vue'
import IconHistory from './svg-icon/IconHistory.vue'
import IconList from './svg-icon/IconList.vue'

const advantages = [
  {
    title: 'Professional Team',
    desc: 'Tim berpengalaman yang terlatih menangani berbagai jenis event — dari intimate hingga skala besar.',
    icon: IconStar
  },
  {
    title: 'Equipment Premium',
    desc: 'Menggunakan peralatan foto dan video kelas atas untuk menghasilkan output berkualitas tinggi.',
    icon: IconCase
  },
  {
    title: 'High Quality Output',
    desc: 'Hasil foto dan video dengan resolusi tinggi, siap cetak dan siap share di sosial media.',
    icon: IconCheck
  },
  {
    title: 'Fast Response',
    desc: 'Respon cepat untuk setiap inquiry — kami memahami bahwa waktu perencanaan event sangat berharga.',
    icon: IconClock
  },
  {
    title: 'Berpengalaman',
    desc: 'Lebih dari 200 event sukses diselenggarakan bersama brand-brand ternama di Bali dan nasional.',
    icon: IconHistory
  },
  {
    title: 'Corporate Branding',
    desc: 'Solusi lengkap untuk corporate branding — dari booth design hingga branded content yang on-point.',
    icon: IconList
  }
]
</script>

<template>
  <section id="kenapa">
    <div class="container">
      <div class="kenapa-header">
        <div class="section-label reveal">Keunggulan</div>
        <h2 class="kenapa-h2 reveal d1">Kenapa Memilih<br>NIL Entertain?</h2>
      </div>
      <div class="kenapa-grid">
        <div 
          v-for="(adv, i) in advantages" 
          :key="adv.title" 
          class="kenapa-item reveal" 
          :class="'d' + (i % 3 + 1)"
        >
          <div class="kenapa-icon">
            <component :is="adv.icon" />
          </div>
          <div class="kenapa-item-title">{{ adv.title }}</div>
          <p class="kenapa-item-desc">{{ adv.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#kenapa {
  background: var(--cream); color: var(--black);
  padding: 120px 0;
}
.kenapa-header { margin-bottom: 72px; }
.kenapa-h2 {
  font-family: var(--ff-head);
  font-size: clamp(38px, 4.5vw, 62px); font-weight: 400; line-height: 1.1;
}

.kenapa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }

.kenapa-item {
  background: var(--cream2); padding: 44px 36px;
  border: 1px solid rgba(0,0,0,0.06);
  transition: background 0.3s, transform 0.3s;
}
.kenapa-item:hover { background: var(--white); transform: translateY(-4px); }

.kenapa-icon {
  width: 44px; height: 44px; margin-bottom: 24px;
  border-bottom: 2px solid var(--burg); padding-bottom: 16px;
  display: flex; align-items: flex-end;
}

.kenapa-item-title {
  font-family: var(--ff-head); font-size: 22px; font-weight: 500;
  color: var(--black); margin-bottom: 10px;
}
.kenapa-item-desc { font-size: 13px; color: #5a5652; line-height: 1.8; }

@media (max-width: 1024px) {
  .kenapa-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .kenapa-grid { grid-template-columns: 1fr; }
}
</style>
