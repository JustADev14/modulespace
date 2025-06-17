<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar :isDark="darkMode" @toggle="toggleDarkMode" />
      <HeroSection />
      <ModuleGrid :modules="modules" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ModuleGrid from './components/ModuleGrid.vue'
import Footer from './components/Footer.vue'

const darkMode = ref(false)
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

const modules = [
  { title: 'QR Code Generator', description: 'Generate and manage QR codes for your team.' },
  { title: 'Data Cleaner', description: 'Clean CSV files and prep for import/export.' },
  { title: 'Image Resizer', description: 'Fast image resizing with drag-n-drop support.' },
  { title: 'Form Tester', description: 'Mock and test form data submissions.' },
  { title: 'Webhook Viewer', description: 'View and debug webhook payloads in real time.' },
  { title: 'Text Converter', description: 'Convert text between formats and encodings.' }
]
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>


