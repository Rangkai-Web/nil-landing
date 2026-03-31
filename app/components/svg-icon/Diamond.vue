<template>
  <svg
    :class="positionClass"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :x="size * 0.19"
      :y="size * 0.19"
      :width="size * 0.62"
      :height="size * 0.62"
      :rx="size * 0.1"
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      :transform="`rotate(45 ${size / 2} ${size / 2})`"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 80 },
  strokeWidth: { type: Number, default: 1.5 },
  positionClass: { type: String, default: "" },
});
</script>
