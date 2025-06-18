<template>
  <div class="min-h-screen bg-black">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
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