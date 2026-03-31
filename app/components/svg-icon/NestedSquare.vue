<template>
  <svg
    :class="positionClass"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :x="size * 0.125"
      :y="size * 0.125"
      :width="size * 0.75"
      :height="size * 0.75"
      :rx="size * 0.15"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <rect
      :x="size * 0.25"
      :y="size * 0.25"
      :width="size * 0.5"
      :height="size * 0.5"
      :rx="size * 0.1"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-dasharray="6 4"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 160 },
  positionClass: { type: String, default: "" },
});
</script>
