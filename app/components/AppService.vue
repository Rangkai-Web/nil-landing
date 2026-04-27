<script setup lang="ts">
import IconPhotobooth from './svg-icon/IconPhotobooth.vue'
import IconVideobooth from './svg-icon/IconVideobooth.vue'
import IconActivation from './svg-icon/IconActivation.vue'
import DashedCircle from './svg-icon/DashedCircle.vue'

const services = [
  {
    num: '01',
    name: 'Photobooth',
    desc: 'Booth foto premium dengan hasil instan berkualitas tinggi — memori terbaik untuk setiap tamu Anda.',
    icon: IconPhotobooth,
    features: [
      'Unlimited session selama event',
      'Custom frame & template design',
      'Instant print on-site',
      'Props & backdrop premium'
    ]
  },
  {
    num: '02',
    name: 'Videobooth 360°',
    desc: 'Pengalaman video 360 derajat yang cinematic dan memukau — viral content siap pakai untuk tamu Anda.',
    icon: IconVideobooth,
    features: [
      'Video cinematic 360 derajat',
      'Slow motion effect premium',
      'Background music custom',
      'Digital delivery instan'
    ]
  },
  {
    num: '03',
    name: 'Event Activation',
    desc: 'Brand experience yang menciptakan engagement maksimal — solusi terlengkap untuk brand activation Anda.',
    icon: IconActivation,
    features: [
      'Custom branding experience',
      'Audience engagement tinggi',
      'Multi-point activation setup',
      'Full team support'
    ]
  }
]
</script>

<template>
  <section id="spesialisasi">
    <DashedCircle class="service-dashed-circle hidden xl:block" />
    
    <div class="container">
      <div class="spec-header">

        <div class="section-label reveal">Layanan Kami</div>
        <h2 class="spec-h2 reveal d1">Spesialisasi<br><em>NIL Entertain</em></h2>
      </div>
      
      <div class="spec-grid">
        <div v-for="(svc, i) in services" :key="svc.num" class="spec-card reveal" :class="'d' + (i+1)">
          <div class="spec-card-inner">
            <div class="spec-num">{{ svc.num }}</div>
            <div class="spec-icon-wrapper">
              <component :is="svc.icon" class="spec-icon" />
            </div>
            <h3 class="spec-name">{{ svc.name }}</h3>
            <p class="spec-desc">{{ svc.desc }}</p>
            
            <div class="divider"></div>
            
            <ul class="spec-features">
              <li v-for="feat in svc.features" :key="feat">{{ feat }}</li>
            </ul>
            
            <!-- Hover corner accent -->
            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#spesialisasi {
  background-image: url('/img/service-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 160px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.service-dashed-circle {
  position: absolute;
  top: -100px;
  right: -160px;
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

.container {

  position: relative;
  z-index: 2;
}

.spec-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  color: rgba(233, 231, 221, 0.7);
  border-color: rgba(233, 231, 221, 0.2);
}

.spec-h2 {
  font-family: var(--ff-head);
  font-size: clamp(44px, 5vw, 68px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--cream);
  margin-top: 16px;
}

.spec-h2 em {
  font-style: italic;
  font-weight: 400;
  color: var(--cream);
  opacity: 0.9;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.spec-card {
  background: var(--cream);
  border-radius: 2px;
  position: relative;
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
  cursor: default;
}

.spec-card-inner {
  padding: 56px 48px;
  height: 100%;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(125, 5, 22, 0.05);
}

.spec-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.spec-num {
  font-family: var(--ff-head);
  font-size: 80px;
  font-weight: 300;
  color: rgba(125, 5, 22, 0.15);
  line-height: 1;
  position: absolute;
  top: 24px;
  right: 24px;
  transition: color 0.5s var(--ease);
}

.spec-card:hover .spec-num {
  color: rgba(125, 5, 22, 1);
}

.spec-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(125, 5, 22, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  transition: background 0.5s var(--ease), transform 0.5s var(--ease);
}

.spec-card:hover .spec-icon-wrapper {
  background: var(--burg-light);
  transform: scale(1.1);
}

.spec-icon {
  width: 32px;
  height: 32px;
  color: var(--burg);
  transition: color 0.5s var(--ease);
}

.spec-card:hover .spec-icon {
  color: var(--cream);
}

.spec-name {
  font-family: var(--ff-head);
  font-size: 32px;
  font-weight: 600;
  color: var(--black);
  margin-bottom: 20px;
}

.spec-desc {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 32px;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(125, 5, 22, 0.1);
  margin-bottom: 32px;
}

.spec-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.spec-features li {
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
  padding-left: 28px;
  position: relative;
}

.spec-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--burg);
  font-weight: bold;
}

.card-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 0px solid var(--burg);
  border-left: 0px solid transparent;
  transition: border-width 0.5s var(--ease);
  z-index: 1;
}

.spec-card:hover .card-accent {
  border-bottom: 40px solid var(--burg);
  border-left: 40px solid transparent;
}

@media (max-width: 1024px) {
  .spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  #spesialisasi {
    padding: 100px 0;
  }
  .spec-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .spec-card-inner {
    padding: 40px 32px;
  }
}
</style>

