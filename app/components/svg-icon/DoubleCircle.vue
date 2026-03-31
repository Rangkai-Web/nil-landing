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
    />
    <circle
      :cx="size / 2"
      :cy="size / 2"
      :r="size * 0.46"
      fill="none"
      stroke="currentColor"
      stroke-width="0.5"
      stroke-dasharray="8 6"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 500 },
  positionClass: { type: String, default: "absolute -top-32 -right-32 opacity-[0.06] pointer-events-none" },
});
</script>
