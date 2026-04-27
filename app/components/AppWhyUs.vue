<script setup lang="ts">
import IconStar from './svg-icon/IconStar.vue'
import IconCase from './svg-icon/IconCase.vue'
import IconCheck from './svg-icon/IconCheck.vue'
import IconClock from './svg-icon/IconClock.vue'
import IconHistory from './svg-icon/IconHistory.vue'
import IconList from './svg-icon/IconList.vue'
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'

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
    <!-- Decorative Background -->
    <div class="decor-wrapper">
      <TextureLines class="opacity-40 text-[#890015]" />
    </div>

    <div class="container">
      <div class="kenapa-header">
        <div class="section-label reveal">Why Choose Us</div>
        <h2 class="kenapa-h2 reveal d1">Dedikasi Kami untuk<br><em>Momen Spesial</em> Anda</h2>
      </div>
      
      <div class="kenapa-grid">
        <div 
          v-for="(adv, i) in advantages" 
          :key="adv.title" 
          class="kenapa-item reveal" 
          :class="'d' + (i % 3 + 1)"
        >
          <div class="item-inner">
            <div class="kenapa-icon-wrapper">
              <div class="kenapa-icon">
                <component :is="adv.icon" />
              </div>
              <div class="icon-accent"></div>
            </div>
            <div class="kenapa-content">
              <h3 class="kenapa-item-title">{{ adv.title }}</h3>
              <p class="kenapa-item-desc">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#kenapa {
  background: var(--cream);
  color: var(--black);
  padding: 160px 0;
  position: relative;
  overflow: hidden;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.kenapa-header {
  margin-bottom: 80px;
  text-align: center;
}

.kenapa-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--black);
}

.kenapa-h2 em {
  font-style: italic;
  color: var(--burg);
  font-weight: 400;
}

.kenapa-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.kenapa-item {
  position: relative;
  background: var(--cream2);
  padding: 48px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.5s var(--ease);
  border-radius: 4px;
}

.kenapa-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(125, 5, 22, 0.08);
  border-color: rgba(125, 5, 22, 0.1);
}

.kenapa-icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kenapa-icon {
  width: 44px;
  height: 44px;
  color: var(--burg);
  z-index: 2;
}

.icon-accent {
  position: absolute;
  width: 100%;
  height: 100%;
  left: -8px;
  top: -8px;
  background: rgba(125, 5, 22, 0.05);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.5s var(--ease);
}

.kenapa-item:hover .icon-accent {
  transform: scale(1.2);
}

.kenapa-item-title {
  font-family: var(--ff-head);
  font-size: 24px;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.kenapa-item:hover .kenapa-item-title {
  color: var(--burg);
}

.kenapa-item-desc {
  font-size: 15px;
  color: #6a6662;
  line-height: 1.8;
}

@media (max-width: 1024px) {
  .kenapa-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  #kenapa {
    padding: 100px 0;
  }
  .kenapa-grid {
    grid-template-columns: 1fr;
  }
  .kenapa-item {
    padding: 40px;
  }
}
</style>

