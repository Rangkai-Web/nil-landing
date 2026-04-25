<template>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none mix-blend-overlay">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    
    <defs>
      <pattern id="linen" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M 0 0 L 6 0 M 0 3 L 6 3 M 0 0 L 0 6 M 3 0 L 3 6" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#linen)" />
  </svg>
</template>

