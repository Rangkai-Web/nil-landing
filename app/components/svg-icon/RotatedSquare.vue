<template>
  <svg
    :class="positionClass"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :x="size * 0.167"
      :y="size * 0.167"
      :width="size * 0.667"
      :height="size * 0.667"
      :rx="size * 0.133"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      :transform="`rotate(${rotation} ${size / 2} ${size / 2})`"
    />
    <rect
      :x="size * 0.267"
      :y="size * 0.267"
      :width="size * 0.467"
      :height="size * 0.467"
      :rx="size * 0.093"
      fill="none"
      stroke="currentColor"
      stroke-width="0.8"
      stroke-dasharray="8 5"
      :transform="`rotate(${rotation} ${size / 2} ${size / 2})`"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 300 },
  rotation: { type: Number, default: 20 },
  positionClass: { type: String, default: "absolute -bottom-12 -left-12 opacity-[0.04] pointer-events-none" },
});
</script>
