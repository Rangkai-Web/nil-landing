<template>
  <svg
    :class="positionClass"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      :cx="size / 2"
      :cy="size / 2"
      :r="size * 0.4"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-dasharray="10 6"
    />
    <circle
      :cx="size / 2"
      :cy="size / 2"
      :r="size * 0.3"
      fill="none"
      stroke="currentColor"
      stroke-width="0.8"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 400 },
  positionClass: { type: String, default: "absolute -top-16 -right-16 opacity-[0.04] pointer-events-none" },
});
</script>
