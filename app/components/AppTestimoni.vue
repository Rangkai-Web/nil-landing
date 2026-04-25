<script setup lang="ts">
const testimonials = [
  {
    text: '"NIL Entertain benar-benar mengangkat keseluruhan pengalaman resepsi kami. Tamu-tamu sangat menikmati Videobooth360 — hasilnya cinematic dan viral di semua sosial media!"',
    name: 'Ayu & Rama',
    role: 'Pasangan Pengantin',
    eventType: 'Wedding Event',
    imgLabel: 'Wedding Event Photo'
  },
  {
    text: '"Setup photobooth NIL Entertain di annual conference kami sangat profesional. Brand activation kami jadi jauh lebih berkesan dan engagement tamu meningkat signifikan."',
    name: 'Budi Santoso',
    role: 'Marketing Director',
    eventType: 'Corporate Event',
    imgLabel: 'Corporate Event Photo'
  },
  {
    text: '"Ulang tahun ke-30 saya terasa sangat memorable berkat NIL Entertain. Semua tamu antusias dan foto-foto hasilnya sangat premium. Highly recommended!"',
    name: 'Nadya Putri',
    role: 'Client Private Event',
    eventType: 'Birthday Party',
    imgLabel: 'Birthday Event Photo'
  }
]

const currentIdx = ref(0)
let timer: any = null

const goTesti = (n: number) => {
  currentIdx.value = (n + testimonials.length) % testimonials.length
}

const startTimer = () => {
  timer = setInterval(() => goTesti(currentIdx.value + 1), 5000)
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
    <div class="container">
      <div class="testi-header">
        <div class="section-label reveal">Testimonial</div>
        <h2 class="testi-h2 reveal d1">Kata <em>Client</em> Kami</h2>
      </div>
      
      <div class="testi-slider" @mouseenter="stopTimer" @mouseleave="startTimer">
        <div class="testi-track" :style="{ transform: `translateX(-${currentIdx * 100}%)` }">
          <div v-for="t in testimonials" :key="t.name" class="testi-card">
            <div class="testi-quote">
              <p class="testi-text">{{ t.text }}</p>
              <div class="testi-author">
                <div class="testi-avatar">
                  <div class="img-ph" style="height:100%;font-size:9px">Photo</div>
                </div>
                <div>
                  <div class="testi-name">{{ t.name }}</div>
                  <div class="testi-role">{{ t.role }}</div>
                  <div class="testi-event-type">{{ t.eventType }}</div>
                </div>
              </div>
            </div>
            <div class="testi-img">
              <div class="img-ph" style="height:100%">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="12" width="36" height="26" rx="2" stroke="#e9e7dd" stroke-width="1.5"></rect><circle cx="24" cy="25" r="8" stroke="#7d0516" stroke-width="1.5"></circle></svg>
                <span>{{ t.imgLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testi-controls">
        <button class="testi-arr" @click="goTesti(currentIdx - 1)">←</button>
        <button 
          v-for="(_, i) in testimonials" 
          :key="i" 
          class="testi-dot" 
          :class="{ active: currentIdx === i }"
          @click="goTesti(i)"
        ></button>
        <button class="testi-arr" @click="goTesti(currentIdx + 1)">→</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#testimoni { background: var(--black2); padding: 120px 0; }
.testi-header { text-align: center; margin-bottom: 72px; }
.testi-h2 {
  font-family: var(--ff-head);
  font-size: clamp(40px, 5vw, 68px); font-weight: 300; color: var(--cream);
}
.testi-h2 em { font-style: italic; color: var(--burg); }

.testi-slider { overflow: hidden; position: relative; }
.testi-track { display: flex; transition: transform 0.7s var(--ease); }

.testi-card {
  min-width: 100%; padding: 0 80px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
}

.testi-quote {
  position: relative; padding-top: 40px;
}
.testi-quote::before {
  content: '\201C';
  font-family: var(--ff-head); font-size: 120px; font-weight: 300; line-height: 1;
  color: var(--burg); opacity: 0.4;
  position: absolute; top: -20px; left: -10px;
}

.testi-text {
  font-family: var(--ff-head); font-size: 24px; font-weight: 400; font-style: italic;
  color: var(--cream); line-height: 1.6; margin-bottom: 32px;
}

.testi-author { display: flex; align-items: center; gap: 16px; }
.testi-avatar {
  width: 56px; height: 56px; border-radius: 50%;
  border: 2px solid var(--burg); overflow: hidden;
  background: #2a2220; flex-shrink: 0;
}
.testi-name { font-size: 14px; font-weight: 600; color: var(--cream); }
.testi-role { font-size: 11px; color: var(--gray); margin-top: 2px; letter-spacing: 0.1em; text-transform: uppercase; }
.testi-event-type {
  padding: 6px 14px; border: 1px solid var(--burg);
  font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--burg); display: inline-block; margin-top: 12px;
}

.testi-img { height: 400px; }
.testi-img .img-ph { height: 100%; }

.testi-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 52px; }
.testi-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(233,231,221,0.2); cursor: pointer; transition: all 0.3s;
  border: none;
}
.testi-dot.active { background: var(--burg); transform: scale(1.4); }

.testi-arr {
  width: 44px; height: 44px; border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  color: var(--cream); cursor: pointer; transition: all 0.3s;
}
.testi-arr:hover { border-color: var(--burg); color: var(--burg); }

@media (max-width: 768px) {
  .testi-card { grid-template-columns: 1fr; padding: 0 20px; }
  .testi-img { display: none; }
}
</style>
