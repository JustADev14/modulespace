<template>
  <div class="min-h-screen bg-black">
    <router-view></router-view>
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
// Component logic goes here
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
}

body {
  @apply bg-black text-white antialiased;
}
</style> 