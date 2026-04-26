<script setup lang="ts">
const testimonials = [
  {
    text: '"NIL Entertain benar-benar mengangkat keseluruhan pengalaman resepsi kami. Tamu-tamu sangat menikmati Videobooth360 — hasilnya cinematic dan viral di semua sosial media!"',
    name: 'Ayu & Rama',
    role: 'Pasangan Pengantin',
    eventType: 'Wedding Event',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
  },
  {
    text: '"Setup photobooth NIL Entertain di annual conference kami sangat profesional. Brand activation kami jadi jauh lebih berkesan dan engagement tamu meningkat signifikan."',
    name: 'Budi Santoso',
    role: 'Marketing Director',
    eventType: 'Corporate Event',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop'
  },
  {
    text: '"Ulang tahun ke-30 saya terasa sangat memorable berkat NIL Entertain. Semua tamu antusias dan foto-foto hasilnya sangat premium. Highly recommended!"',
    name: 'Nadya Putri',
    role: 'Client Private Event',
    eventType: 'Birthday Party',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop'
  }
]

const currentIdx = ref(0)
let timer: any = null

const goTesti = (n: number) => {
  currentIdx.value = (n + testimonials.length) % testimonials.length
}

const startTimer = () => {
  timer = setInterval(() => goTesti(currentIdx.value + 1), 6000)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <section id="testimoni">
    <div class="testi-bg-overlay"></div>
    <div class="container">
      <div class="testi-header">
        <div class="section-label reveal text-white!">What They Say</div>
        <h2 class="testi-h2 reveal d1">Pengalaman <em>Client</em> Kami</h2>
      </div>
      
      <div class="testi-slider" @mouseenter="stopTimer" @mouseleave="startTimer">
        <div class="testi-track" :style="{ transform: `translateX(-${currentIdx * 100}%)` }">
          <div v-for="t in testimonials" :key="t.name" class="testi-card">
            <div class="testi-quote">
              <div class="quote-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 15.2386 16.2556 13 19.017 13H21V6H14.017V13.017C14.017 13.017 14.017 13.017 14.017 13.017V21H14.017ZM3 21L3 18C3 15.2386 5.23858 13 8 13H10V6H3V13.017C3 13.017 3 13.017 3 13.017V21H3Z" fill="currentColor"/>
                </svg>
              </div>
              <p class="testi-text">{{ t.text }}</p>
              
              <div class="testi-author">
                <div class="testi-avatar">
                  <img :src="t.avatar" :alt="t.name" />
                </div>
                <div class="author-info">
                  <div class="testi-name">{{ t.name }}</div>
                  <div class="testi-role">{{ t.role }}</div>
                  <div class="testi-event-badge">{{ t.eventType }}</div>
                </div>
              </div>
            </div>
            
            <div class="testi-img-wrapper">
              <div class="testi-img-inner">
                <img :src="t.image" :alt="t.eventType" class="main-testi-img" />
                <div class="testi-img-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testi-controls">
        <button class="testi-arr prev" @click="goTesti(currentIdx - 1)" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="testi-dots">
          <button 
            v-for="(_, i) in testimonials" 
            :key="i" 
            class="testi-dot" 
            :class="{ active: currentIdx === i }"
            @click="goTesti(i)"
            :aria-label="'Go to slide ' + (i+1)"
          ></button>
        </div>
        <button class="testi-arr next" @click="goTesti(currentIdx + 1)" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#testimoni {
  padding: 160px 0;
  position: relative;
  background-image: url('/img/service-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.testi-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(12, 10, 9, 0.95), rgba(125, 5, 22, 0.4), rgba(12, 10, 9, 0.95));
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.testi-header {
  text-align: center;
  margin-bottom: 100px;
}

.testi-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 72px);
  font-weight: 300;
  color: var(--white);
  line-height: 1.1;
}

.testi-h2 em {
  font-style: italic;
  color: var(--burg-light);
  font-weight: 400;
}

.testi-slider {
  overflow: hidden;
  position: relative;
}

.testi-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.testi-card {
  min-width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;
}

.testi-quote {
  position: relative;
}

.quote-icon {
  color: var(--burg-light);
  opacity: 0.3;
  margin-bottom: 20px;
}

.testi-text {
  font-family: var(--ff-head);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 400;
  font-style: italic;
  color: var(--white);
  line-height: 1.5;
  margin-bottom: 48px;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 24px;
}

.testi-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--burg-light);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.testi-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testi-name {
  font-family: var(--ff-head);
  font-size: 20px;
  font-weight: 600;
  color: var(--white);
}

.testi-role {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.testi-event-badge {
  display: inline-block;
  margin-top: 16px;
  padding: 6px 16px;
  background: var(--burg);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 100px;
}

.testi-img-wrapper {
  perspective: 1000px;
}

.testi-img-inner {
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  transform: rotateY(-5deg);
  transition: transform 0.5s ease;
}

.testi-card:hover .testi-img-inner {
  transform: rotateY(0deg);
}

.main-testi-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testi-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 10, 9, 0.6), transparent);
}

.testi-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
}

.testi-dots {
  display: flex;
  gap: 12px;
}

.testi-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  padding: 0;
}

.testi-dot.active {
  background: var(--burg-light);
  transform: scale(1.5);
  box-shadow: 0 0 15px var(--burg-light);
}

.testi-arr {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: all 0.4s ease;
}

.testi-arr:hover {
  background: var(--burg-light);
  border-color: var(--burg-light);
  color: var(--white);
  transform: scale(1.1);
}

@media (max-width: 1100px) {
  .testi-card {
    gap: 40px;
  }
}

@media (max-width: 900px) {
  .testi-card {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .testi-author {
    justify-content: center;
  }
  .testi-img-wrapper {
    display: none;
  }
}

@media (max-width: 768px) {
  #testimoni {
    padding: 100px 0;
  }
  .testi-track {
    transition: transform 0.6s ease;
  }
}
</style>

