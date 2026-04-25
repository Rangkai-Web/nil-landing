<script setup lang="ts">
import IconWhatsApp from './svg-icon/IconWhatsApp.vue'
</script>

<template>
  <a href="https://wa.me/6281234567890" id="wa-float" target="_blank" rel="noopener" title="Chat WhatsApp">
    <div class="wa-pulse"></div>
    <IconWhatsApp />
  </a>
</template>

<style scoped>
#wa-float {
  position: fixed; bottom: 32px; right: 32px; z-index: 900;
  width: 56px; height: 56px;
  background: #25D366; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 8px 32px rgba(37,211,102,0.35);
  transition: transform 0.3s, box-shadow 0.3s;
  color: white;
}
#wa-float:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 12px 40px rgba(37,211,102,0.45); }
#wa-float svg { width: 28px; height: 28px; fill: currentColor; }

.wa-pulse {
  position: absolute; inset: 0; border-radius: 50%;
  background: rgba(37,211,102,0.4);
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.5);opacity:0} }
</style>
