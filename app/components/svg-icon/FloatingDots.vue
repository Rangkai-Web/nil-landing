<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div
      v-for="(dot, idx) in dots"
      :key="idx"
      class="absolute rounded-full"
      :class="dot.color"
      :style="{
        top: dot.top,
        bottom: dot.bottom,
        left: dot.left,
        right: dot.right,
        width: dot.size,
        height: dot.size,
      }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  dots: {
    type: Array,
    required: true,
  },
});
</script>
