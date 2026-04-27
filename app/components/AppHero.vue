<script setup lang="ts">
const currentSlide = ref(0)
const slides = [
  {
    image: '/img/hero/photobooth.jpg',
    tag: 'Premium Photobooth Bali',
    title: 'Capture Every<br><em>Celebration</em><br>in Luxury',
    sub: 'Photobooth & Videobooth360 premium untuk event spesial di Bali — wedding, corporate, birthday, dan private event.'
  },
  {
    image: '/img/hero/360booth.png',
    tag: 'Videobooth 360 Experience',
    title: 'Experience<br><em>The Magic</em><br>of 360°',
    sub: 'Ciptakan momen tak terlupakan dengan teknologi Videobooth360 tercanggih untuk event Anda.'
  },
  {
    image: 'https://images.unsplash.com/photo-1554080353-321e452ccf19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Professional Photography',
    title: 'Timeless<br><em>Moments</em><br>Perfectly Shot',
    sub: 'Dokumentasikan setiap detik berharga Anda dengan sentuhan estetika tinggi dan kualitas profesional.'
  }
]

const heroBgY = ref(0)
const onScroll = () => {
  if (window.scrollY < window.innerHeight) {
    heroBgY.value = window.scrollY * 0.3
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section id="hero">
    <client-only>
      <div class="hero-carousel-wrapper" :style="{ transform: `translateY(${heroBgY}px)` }">
        <Carousel 
          :autoplay="6000" 
          :wrap-around="true" 
          :transition="1200" 
          :items-to-show="1"
          v-model="currentSlide"
        >
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="hero-slide">
              <img :src="slide.image" :alt="slide.tag" class="hero-img">
              <div class="hero-overlay"></div>
              <div class="hero-maroon-tint"></div>
              
              <div class="hero-slide-content">

                <div class="container">
                  <div class="hero-main-info">
                    <!-- <div class="hero-tag" :class="{ 'active': currentSlide === index }">{{ slide.tag }}</div> -->
                    <h1 class="hero-h1" :class="{ 'active': currentSlide === index }" v-html="slide.title"></h1>
                    <p class="hero-sub" :class="{ 'active': currentSlide === index }">{{ slide.sub }}</p>
                    <div class="hero-ctas" :class="{ 'active': currentSlide === index }">
                      <a href="#gallery" class="btn-primary">Lihat Portfolio</a>
                      <a href="/reservation" class="btn-ghost">Reservasi Sekarang</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>

        <!-- Custom Pagination -->
        <div class="hero-pagination">
          <button 
            v-for="(_, index) in slides" 
            :key="index"
            class="pagination-dot"
            :class="{ 'active': currentSlide === index }"
            @click="currentSlide = index"
          ></button>
        </div>
      </div>
    </client-only>

    <!-- Static Elements on Top -->
    <div class="hero-static-overlay">
      <div class="container">
        <div class="hero-right">
          <div class="hero-stats">
            <div class="stat-item reveal-right visible d1">
              <div class="stat-num">200<sup>+</sup></div>
              <div class="stat-label">Event Selesai</div>
            </div>
            <div class="stat-item reveal-right visible d2">
              <div class="stat-num">5<sup>★</sup></div>
              <div class="stat-label">Rating Client</div>
            </div>
            <div class="stat-item reveal-right visible d3">
              <div class="stat-num">3<sup>+</sup></div>
              <div class="stat-label">Tahun Berpengalaman</div>
            </div>
          </div>
          <div class="hero-scroll reveal visible d4">
            <span class="hero-scroll-line"></span>
            <span>Scroll to Explore</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  height: 100vh;
  min-height: 750px;
  position: relative;
  overflow: hidden;
  background: var(--black);
}

.hero-carousel-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-slide {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 750px;
  display: flex;
  align-items: flex-end;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6) contrast(1.1);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(125, 5, 22, 0.35) 0%,
    rgba(20, 18, 16, 0.6) 50%,
    var(--black) 100%
  );
  z-index: 1;
}

.hero-maroon-tint {
  position: absolute;
  inset: 0;
  background: var(--burg);
  opacity: 0.1;
  mix-blend-mode: multiply;
  z-index: 1;
  pointer-events: none;
}

.hero-slide-content {
  position: relative;
  z-index: 2;
  padding-bottom: 80px;
  width: 100%;
  text-align: left;
}

.hero-main-info {
  max-width: 800px;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease) 0.2s;
}
.hero-tag.active {
  opacity: 1;
  transform: translateY(0);
}
.hero-tag::before {
  content: '';
  width: 40px;
  height: 1px;
  background: var(--cream);
}

.hero-h1 {
  font-family: var(--ff-head);
  font-size: clamp(48px, 8vw, 100px);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--cream);
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease) 0.4s;
}
.hero-h1.active {
  opacity: 1;
  transform: translateY(0);
}
.hero-h1 :deep(em) {
  font-style: italic;
  color: var(--white);
  font-weight: 400;
}

.hero-sub {
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 400;
  color: rgba(233, 231, 221, 0.7);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease) 0.6s;
}
.hero-sub.active {
  opacity: 1;
  transform: translateY(0);
}

.hero-ctas {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease) 0.8s;
}
.hero-ctas.active {
  opacity: 1;
  transform: translateY(0);
}

/* Static Elements */
.hero-static-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  display: none;
  /* display: flex; */
  align-items: flex-end;
  padding-bottom: 80px;
}

.hero-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  pointer-events: auto;
  margin-left: auto;
}

.hero-stats {
  display: flex;
  gap: 48px;
}

.stat-item {
  text-align: right;
}

.stat-num {
  font-family: var(--ff-head);
  font-size: 56px;
  font-weight: 500;
  line-height: 1;
  color: var(--cream);
}
.stat-num sup {
  font-size: 24px;
  color: var(--burg);
  margin-left: 2px;
}

.stat-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: 8px;
}

.hero-scroll {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gray);
}
.hero-scroll-line {
  width: 60px;
  height: 1px;
  background: rgba(136, 132, 128, 0.3);
}

/* Pagination */
.hero-pagination {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 20;
}

.pagination-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(233, 231, 221, 0.2);
  transition: all 0.4s var(--ease);
  padding: 0;
}
.pagination-dot.active {
  background: var(--burg);
  transform: scale(1.5);
}

@media (max-width: 1024px) {
  .hero-static-overlay {
    position: relative;
    padding: 0 0 60px;
    background: var(--black);
  }
  .hero-right {
    align-items: flex-start;
    margin-left: 0;
  }
  .stat-item {
    text-align: left;
  }
  .hero-pagination {
    display: none;
  }
}

@media (max-width: 768px) {
  #hero {
    height: auto;
    min-height: 100vh;
  }
  .hero-slide {
    height: 80vh;
    min-height: 600px;
  }
  .hero-slide-content {
    padding-bottom: 40px;
  }
  .hero-stats {
    gap: 24px;
    width: 100%;
    justify-content: space-between;
  }
  .stat-num {
    font-size: 36px;
  }
  .hero-scroll {
    display: none;
  }
}

:deep(.carousel), :deep(.carousel__viewport), :deep(.carousel__track) {
  height: 100%;
}
</style>
