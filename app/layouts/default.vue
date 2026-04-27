<script setup lang="ts">
const route = useRoute()

const initReveal = () => {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('visible') 
      } 
    })
  }, { threshold: 0.1 })
  
  revealEls.forEach(el => obs.observe(el))
}

onMounted(() => {
  initReveal()
})

// Re-initialize animations on route change
watch(() => route.path, () => {
  setTimeout(() => {
    initReveal()
  }, 100)
})
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <AppNavbar />
    <main class="grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global Reveal Animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal.visible,
.reveal-left.visible,
.reveal-right.visible {
  opacity: 1;
  transform: translate(0, 0);
}

/* Stagger Delays */
.d1 { transition-delay: 0.1s; }
.d2 { transition-delay: 0.2s; }
.d3 { transition-delay: 0.3s; }
.d4 { transition-delay: 0.4s; }
.d5 { transition-delay: 0.5s; }
</style>
