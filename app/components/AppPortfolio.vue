<script setup lang="ts">
import portfolioData from '~/assets/data/portfolio.json'
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'

const categories = ['Semua', 'Photobooth', 'Videobooth', 'Wedding', 'Pre Wedding', 'Graduation', 'Photobox', 'Lainnya']
const activeCategory = ref('Semua')
const visibleCount = ref(8)
const selectedImage = ref<string | null>(null)

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') return portfolioData.items
  return portfolioData.items.filter(item => item.category === activeCategory.value)
})

const visibleItems = computed(() => {
  return filteredItems.value.slice(0, visibleCount.value)
})

const hasMore = computed(() => {
  return visibleCount.value < filteredItems.value.length
})

const loadMore = () => {
  visibleCount.value += 8
}

const filterCategory = (cat: string) => {
  activeCategory.value = cat
  visibleCount.value = 8
}

const openLightbox = (img: string) => {
  selectedImage.value = img
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <section id="gallery">
    <!-- Decorative Background -->
    <div class="decor-wrapper">
      <TextureLines class="opacity-40 text-[#890015]" />
      <DoubleCircle :size="600" position-class="absolute -top-70 -right-70 opacity-40 text-[#890015]" />
    </div>

    <div class="container">
      <div class="portfolio-header">
        <div class="section-label reveal">Our Work</div>
        <h2 class="portfolio-h2 reveal d1">Portfolio <em>Gallery</em></h2>
        <p class="portfolio-sub reveal d2">Kumpulan momen berharga yang telah kami abadikan bersama para client istimewa kami.</p>
      </div>

      <!-- Categories -->
      <div class="portfolio-cats reveal d3">
        <button 
          v-for="cat in categories" 
          :key="cat"
          class="cat-btn"
          :class="{ active: activeCategory === cat }"
          @click="filterCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="portfolio-grid">
        <TransitionGroup name="list">
          <div 
            v-for="(item, i) in visibleItems" 
            :key="item.id" 
            class="portfolio-item"
            @click="openLightbox(item.image)"
          >
            <div class="item-inner">
              <img :src="item.image" :alt="item.title" class="item-img" />
              <div class="item-overlay">
                <div class="overlay-content">
                  <span class="item-cat">{{ item.category }}</span>
                  <h3 class="item-title">{{ item.title }}</h3>
                </div>
                <div class="zoom-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 7V13M7 10H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Load More -->
      <div v-if="hasMore" class="portfolio-footer">
        <button class="load-more-btn" @click="loadMore">
          <span>Tampilkan Lebih Banyak</span>
          <div class="btn-circle"></div>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeLightbox">
        <div class="lightbox-close">×</div>
        <div class="lightbox-content" @click.stop>
          <img :src="selectedImage" alt="Zoomed portfolio" />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
#gallery {
  padding: 160px 0;
  background: var(--cream2);
  position: relative;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  color: var(--black);
  line-height: 1.1;
}

.portfolio-h2 em {
  font-style: italic;
  color: var(--burg);
}

.portfolio-sub {
  font-size: 16px;
  color: #666;
  margin-top: 20px;
  line-height: 1.6;
}

.portfolio-cats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
}

.cat-btn {
  padding: 10px 24px;
  border: 1px solid rgba(125, 5, 22, 0.1);
  background: var(--white);
  color: var(--black);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s var(--ease);
  border-radius: 100px;
}

.cat-btn:hover, .cat-btn.active {
  background: var(--burg);
  border-color: var(--burg);
  color: var(--white);
  box-shadow: 0 10px 20px rgba(125, 5, 22, 0.2);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.portfolio-item {
  aspect-ratio: 1/1;
  cursor: pointer;
  overflow: hidden;
}

.item-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease);
}

.portfolio-item:hover .item-img {
  transform: scale(1.1);
}

.item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 9, 7, 0.8) 0%, rgba(125, 5, 22, 0.4) 100%);
  opacity: 0;
  transition: all 0.5s var(--ease);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
}

.portfolio-item:hover .item-overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(20px);
  transition: transform 0.5s var(--ease);
}

.portfolio-item:hover .overlay-content {
  transform: translateY(0);
}

.item-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--burg-light);
  display: block;
  margin-bottom: 8px;
}

.item-title {
  font-family: var(--ff-head);
  font-size: 20px;
  font-weight: 400;
  color: var(--white);
}

.zoom-icon {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.5s var(--ease);
}

.portfolio-item:hover .zoom-icon {
  opacity: 1;
  transform: scale(1);
}

.portfolio-footer {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.load-more-btn {
  position: relative;
  padding: 18px 48px;
  background: transparent;
  border: 1px solid var(--burg);
  color: var(--burg);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s var(--ease);
  z-index: 1;
}

.load-more-btn span {
  position: relative;
  z-index: 2;
}

.load-more-btn:hover {
  color: var(--white);
}

.load-more-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--burg);
  transition: left 0.4s var(--ease);
  z-index: 0;
}

.load-more-btn:hover::before {
  left: 0;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(12, 9, 7, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: pointer;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 40px;
  right: 40px;
  color: var(--white);
  font-size: 40px;
  cursor: pointer;
  z-index: 10000;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s var(--ease);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.list-move {
  transition: transform 0.5s var(--ease);
}

@media (max-width: 1100px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  #gallery {
    padding: 100px 0;
  }
  .portfolio-cats {
    gap: 8px;
  }
  .cat-btn {
    padding: 8px 16px;
    font-size: 10px;
  }
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>


