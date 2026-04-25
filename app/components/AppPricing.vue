<script setup lang="ts">
import IconCheck from './svg-icon/IconCheck.vue'
import DashedCircle from './svg-icon/DashedCircle.vue'
import TextureLines from './svg-icon/TextureLines.vue'

const packages = [
  {
    tier: 'Basic',
    name: 'Photobooth',
    tagline: 'Ideal untuk event intimate & gathering',
    features: [
      'Photobooth setup premium',
      'Durasi 4 jam event',
      '1 orang crew profesional',
      'Unlimited session',
      'Instant print on-site',
      'Custom frame design'
    ],
    cta: 'Konsultasi Paket',
    link: 'https://wa.me/6281234567890',
    featured: false
  },
  {
    tier: 'Premium',
    name: 'Photo + 360',
    tagline: 'Sempurna untuk wedding & birthday party',
    badge: 'Most Popular',
    features: [
      'Photobooth + Videobooth360',
      'Durasi 6 jam event',
      '2 orang crew terlatih',
      'Custom template design',
      'Branding booth custom',
      'Slow motion & music',
      'Digital delivery'
    ],
    cta: 'Booking Sekarang',
    link: 'https://wa.me/6281234567890',
    featured: true
  },
  {
    tier: 'Corporate',
    name: 'Full Activation',
    tagline: 'Solusi lengkap untuk corporate & brand event',
    features: [
      'Full event activation',
      'Branding booth eksklusif',
      'Full team support',
      'Multi-point setup',
      'Durasi full day',
      'Post-event report',
      'Custom deliverables'
    ],
    cta: 'Request Proposal',
    link: 'https://wa.me/6281234567890',
    featured: false
  }
]
</script>

<template>
  <section id="paket">
    <!-- Background Image with Overlay -->
    <div class="paket-bg">
      <img src="/img/others/photography.jpg" alt="Photography Background" class="bg-img" />
      <div class="bg-overlay"></div>
    </div>

    <div class="container">
      <div class="paket-header">
        <!-- <div class="section-label reveal">Pricing Plans</div> -->
        <h2 class="paket-h2 reveal d1">Paket <em>Eksklusif</em></h2>
        <p class="paket-sub reveal d2">Temukan paket yang paling sesuai untuk mengabadikan momen berharga di event spesial Anda.</p>
      </div>

      <div class="paket-grid">
        <div 
          v-for="(pkg, i) in packages" 
          :key="pkg.name" 
          class="paket-card reveal" 
          :class="[{ 'featured': pkg.featured }, 'd' + (i+1)]"
        >
          <!-- Background Decorations -->
          <div class="card-decor">
            <TextureLines v-if="pkg.featured" class="opacity-[0.05] text-white" />
            <DashedCircle :size="300" position-class="absolute -bottom-20 -right-20 opacity-[0.1] text-[var(--burg)]" />
          </div>

          <div v-if="pkg.badge" class="paket-badge">{{ pkg.badge }}</div>
          
          <div class="card-content">
            <div class="paket-tier">{{ pkg.tier }}</div>
            <div class="paket-name">{{ pkg.name }}</div>
            <div class="paket-tagline">{{ pkg.tagline }}</div>
            
            <div class="paket-divider"></div>
            
            <ul class="paket-features">
              <li v-for="feat in pkg.features" :key="feat">
                <IconCheck class="feature-icon" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="card-footer">
            <a :href="pkg.link" target="_blank" class="paket-cta">
              <span>{{ pkg.cta }}</span>
              <div class="cta-arrow">→</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#paket {
  padding: 160px 0;
  position: relative;
  overflow: hidden;
}

.paket-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 9, 7, 0.7); /* Deep dark primary */
  background: linear-gradient(
    to bottom,
    rgba(12, 9, 7, 0.8) 0%,
    rgba(125, 5, 22, 0.5) 50%,
    rgba(12, 9, 7, 0.9) 100%
  );
}

.container {
  position: relative;
  z-index: 2;
}

.paket-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.paket-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.1;
}

.paket-h2 em {
  font-style: italic;
  color: var(--burg-light);
  font-weight: 400;
}

.paket-sub {
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
  line-height: 1.6;
}

.paket-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: stretch;
}

.paket-card {
  background: rgba(20, 18, 16, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(233, 231, 221, 0.1);
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s var(--ease);
  border-radius: 4px;
}

.paket-card:hover {
  transform: translateY(-12px);
  border-color: var(--burg);
  background: rgba(20, 18, 16, 0.85);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.paket-card.featured {
  background: rgba(20, 18, 16, 0.8);
  border: 1px solid var(--burg);
  box-shadow: 0 20px 50px rgba(125, 5, 22, 0.2);
  transform: scale(1.05);
}

.paket-card.featured:hover {
  transform: scale(1.05) translateY(-12px);
  box-shadow: 0 40px 80px rgba(125, 5, 22, 0.3);
}

.card-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.paket-badge {
  position: absolute;
  top: 24px;
  right: -32px;
  background: var(--burg);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 8px 40px;
  transform: rotate(45deg);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-content {
  position: relative;
  z-index: 2;
}

.paket-tier {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--burg-light);
  margin-bottom: 10px;
}

.paket-name {
  font-family: var(--ff-head);
  font-size: 40px;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 10px;
}

.paket-tagline {
  font-size: 14px;
  color: #fff;
  margin-bottom: 40px;
}

.paket-divider {
  height: 1px;
  background: linear-gradient(to right, var(--white), transparent);
  margin-bottom: 40px;
  width: 60px;
}

.paket-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 60px;
}

.paket-features li {
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  line-height: 1.4;
}

.feature-icon {
  background-color: var(--white);
  padding: 2px;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  margin-top: 1px;
}

.card-footer {
  position: relative;
  z-index: 2;
}

.paket-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid rgba(233, 231, 221, 0.2);
  color: var(--cream);
  transition: all 0.4s var(--ease);
}

.cta-arrow {
  transition: transform 0.4s var(--ease);
}

.paket-cta:hover {
  background: var(--burg);
  border-color: var(--burg);
  color: var(--white);
}

.paket-cta:hover .cta-arrow {
  transform: translateX(6px);
}

.paket-card.featured .paket-cta {
  background: var(--burg);
  border-color: var(--burg);
  color: var(--white);
}

.paket-card.featured .paket-cta:hover {
  background: var(--burg-light);
  transform: scale(1.02);
}

@media (max-width: 1100px) {
  .paket-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .paket-card.featured {
    transform: none;
  }
  .paket-card.featured:hover {
    transform: translateY(-12px);
  }
}

@media (max-width: 768px) {
  #paket {
    padding: 100px 0;
  }
  .paket-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .paket-card {
    padding: 48px 30px;
  }
}
</style>

