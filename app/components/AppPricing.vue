<script setup lang="ts">
import IconCheck from './svg-icon/IconCheck.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'
import TextureLines from './svg-icon/TextureLines.vue'

const packages = [
  {
    tier: 'Basic',
    name: 'Photobooth',
    tagline: 'Ideal untuk event intimate & gathering',
    price: 'Sangat Terjangkau',
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
    price: 'Paling Diminati',
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
    price: 'Custom Project',
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
    <div class="paket-bg-container">
      <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" alt="Luxury Event" class="bg-img" />
      <div class="bg-overlay"></div>
      
      <!-- Decorative Elements -->
      <div class="decor-layer">
        <TextureLines class="opacity-30 text-white" />
        <DoubleCircle :size="1000" position-class="absolute -top-100 -right-100 opacity-20 text-[#890015]" />
        <DoubleCircle :size="600" position-class="absolute -bottom-50 -left-50 opacity-20 text-[#890015]" />
      </div>
    </div>

    <div class="container">
      <div class="paket-header">
        <div class="section-label reveal text-white!">Investment</div>
        <h2 class="paket-h2 reveal d1">Pilih Paket <em>Terbaik</em> Anda</h2>
        <p class="paket-sub reveal d2">Setiap paket dirancang untuk memberikan pengalaman dokumentasi event yang tak terlupakan dengan sentuhan kemewahan.</p>
      </div>

      <div class="paket-grid">
        <div 
          v-for="(pkg, i) in packages" 
          :key="pkg.name" 
          class="paket-card reveal" 
          :class="[{ 'featured': pkg.featured }, 'd' + (i+1)]"
        >
          <div v-if="pkg.badge" class="paket-badge">{{ pkg.badge }}</div>
          
          <div class="card-head">
            <div class="paket-tier">{{ pkg.tier }}</div>
            <h3 class="paket-name">{{ pkg.name }}</h3>
            <p class="paket-tagline">{{ pkg.tagline }}</p>
          </div>

          <div class="paket-divider"></div>

          <div class="card-body">
            <ul class="paket-features">
              <li v-for="feat in pkg.features" :key="feat">
                <div class="feat-dot"></div>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="card-footer">
            <div class="paket-price">{{ pkg.price }}</div>
            <a :href="pkg.link" target="_blank" class="paket-cta-btn">
              <span>{{ pkg.cta }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="paket-note reveal d3">
        *Harga dapat menyesuaikan tergantung lokasi dan durasi tambahan. <a href="https://wa.me/6281234567890">Hubungi kami</a> untuk penawaran khusus.
      </div>
    </div>
  </section>
</template>

<style scoped>
#paket {
  padding: 160px 0;
  position: relative;
  overflow: hidden;
  background-color: #0c0a09;
}

.paket-bg-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  filter: brightness(0.4) saturate(1.2);
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #0c0a09, rgba(125, 5, 22, 0.4), #0c0a09);
  z-index: 2;
}

.decor-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.container {
  position: relative;
  z-index: 4;
}

.paket-header {
  text-align: center;
  margin-bottom: 100px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.paket-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  color: var(--white);
  line-height: 1.1;
  margin-top: 12px;
}

.paket-h2 em {
  font-style: italic;
  color: var(--burg-light);
  font-weight: 400;
}

.paket-sub {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 24px;
  line-height: 1.8;
}

.paket-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;
}

.paket-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 60px 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 4px;
}

.paket-card:hover {
  transform: translateY(-20px);
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--burg);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
}

.paket-card.featured {
  background: rgba(125, 5, 22, 0.15);
  border: 1px solid var(--burg);
  box-shadow: 0 20px 60px rgba(125, 5, 22, 0.2);
}

.paket-card.featured:hover {
  background: rgba(125, 5, 22, 0.2);
}

.paket-badge {
  position: absolute;
  top: 30px;
  right: -35px;
  background: var(--burg);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 10px 45px;
  transform: rotate(45deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.paket-tier {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--burg-light);
  margin-bottom: 12px;
}

.paket-name {
  font-family: var(--ff-head);
  font-size: 44px;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 16px;
  line-height: 1;
}

.paket-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

.paket-divider {
  height: 1px;
  background: linear-gradient(to right, var(--cream), transparent);
  margin: 40px 0;
  width: 80px;
}

.card-body {
  flex-grow: 1;
}

.paket-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
}

.paket-features li {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 16px;
}

.feat-dot {
  width: 6px;
  height: 6px;
  background: var(--burg-light);
  border-radius: 50%;
  flex-shrink: 0;
}

.paket-price {
  font-family: var(--ff-head);
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 24px;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.paket-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 20px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.4s var(--ease);
}

.paket-cta-btn:hover {
  background: var(--burg);
  border-color: var(--burg);
  transform: scale(1.02);
}

.paket-card.featured .paket-cta-btn {
  background: var(--burg);
  border-color: var(--burg);
}

.paket-card.featured .paket-cta-btn:hover {
  background: var(--burg-light);
  border-color: var(--burg-light);
}

.paket-note {
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.paket-note a {
  color: var(--burg-light);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .paket-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  #paket {
    padding: 100px 0;
  }
  .paket-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .paket-card {
    padding: 48px 32px;
  }
  .paket-name {
    font-size: 36px;
  }
}
</style>
