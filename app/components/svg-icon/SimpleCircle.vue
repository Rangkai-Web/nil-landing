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
      :r="size / 2 - 10"
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 120 },
  strokeWidth: { type: Number, default: 1 },
  positionClass: { type: String, default: "" },
});
</script>
