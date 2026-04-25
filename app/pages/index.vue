<template>
  <div>
    <AppNavbar />
    <main>
      <AppHero />
      <AppAbout />
      <AppService />
      <AppProcess />
      <AppPricing />
      <AppWhyUs />
      <AppTestimoni />
      <AppPortfolio />
      <AppFaq />
      <AppContact />
    </main>
    <AppFooter />
    <!-- <AppWAFloat /> -->
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  // Reveal animations for all components
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('visible'); 
      } 
    });
  }, { threshold: 0.12 });
  
  revealEls.forEach(el => obs.observe(el));
})

useSeoMeta({
  title: "NIL Entertain — Photobooth & Videobooth360 Bali",
  description: "NIL Entertain — Photobooth & Videobooth360 premium untuk event spesial di Bali. Wedding, corporate, birthday, dan private event.",
  ogTitle: "NIL Entertain — Photobooth & Videobooth360 Bali",
  ogDescription: "Photobooth & Videobooth360 premium untuk event spesial di Bali. Wedding, corporate, birthday, dan private event.",
  ogType: "website",
  ogSiteName: "NIL Entertain",
  twitterCard: "summary_large_image",
  keywords: "photobooth bali, videobooth 360 bali, wedding photography bali, event activation bali",
  author: "NIL Entertain",
});
</script>
