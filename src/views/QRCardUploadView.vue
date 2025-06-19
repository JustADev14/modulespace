<template>
  <div class="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center">
    <div class="absolute inset-0 bg-nzxt-gradient pointer-events-none" />
    <div class="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-[0.03] pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-glow opacity-20 pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-glow opacity-10 pointer-events-none" />
    <!-- Banner Navigation Bar with ModuleSpace Hub logo inside -->
    <div class="w-full fixed top-0 left-0 z-50 bg-[#1a1a2e] border-b-2 border-purple-500 shadow-lg flex items-center h-16 px-8">
      <div class="flex items-center gap-3 mr-6">
        <div class="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
          <Code2 class="w-5 h-5 text-primary-foreground" />
        </div>
        <span class="text-xl font-semibold text-foreground">ModuleSpace Hub</span>
      </div>
      <router-link to="/" class="flex items-center text-purple-400 hover:text-white font-bold text-lg transition-colors">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Home
      </router-link>
      <span class="ml-4 text-purple-200 text-base font-medium">/ QR Card Upload</span>
    </div>
    <div class="h-16"></div> <!-- Spacer for fixed banner -->
    <div
      class="w-full max-w-2xl bg-[#23234d] rounded-3xl shadow-2xl border border-[#a259ff] px-8 py-12 flex flex-col items-center transition-all duration-300 z-10 relative mx-auto"
    >
      <h1 class="text-4xl font-bold text-white mb-10 text-center">QR Card Upload</h1>
      <div v-if="showDuplicateAlert" class="w-full mb-4">
        <div class="bg-pink-700/90 text-white text-center rounded-lg py-2 px-4 font-semibold shadow-lg animate-fade-in">
          Duplicate file detected! Each file must be unique.
        </div>
      </div>
      <div class="w-full flex-1 flex flex-col items-center justify-center">
        <div
          class="w-full min-h-[220px] md:min-h-[240px] md:w-[600px] flex flex-col justify-between rounded-xl border-2 border-dashed border-purple-400 bg-[#23234d]/70 transition-all duration-200 cursor-pointer select-none relative mx-auto p-8"
          :class="{ 'ring-4 ring-purple-400/60': isDragging }"
          @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
        >
          <div class="flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10" class="text-purple-400" />
            </svg>
            <div class="text-center mb-2">
              <span class="font-semibold text-purple-100">Choose a file</span>
              <span class="text-purple-200"> or drag it here.</span>
            </div>
          </div>
          <input type="file" class="absolute inset-0 opacity-0 cursor-pointer" multiple @change="handleFiles" :disabled="files.length >= 7" />
          <div v-if="files.length" class="w-full mt-4 flex flex-wrap gap-3 justify-center">
            <div v-for="(file, idx) in files" :key="file.name + idx" class="flex items-center px-4 py-2 rounded-full border-2 border-purple-400 bg-[#23234d] shadow-lg gap-2 relative animate-fade-in">
              <span class="truncate text-purple-100">{{ file.name }}</span>
              <button @click.stop="removeFile(idx)" class="ml-2 text-purple-400 hover:text-pink-400 text-lg font-bold px-2 focus:outline-none" aria-label="Remove file">&times;</button>
            </div>
          </div>
          <div v-if="files.length >= 7" class="text-pink-400 text-xs mt-2 text-center">Maximum 7 files allowed.</div>
        </div>
        <button
          class="mt-8 w-full md:w-[600px] bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Code2 } from 'lucide-vue-next'

const files = ref<File[]>([])
const isDragging = ref(false)
const showDuplicateAlert = ref(false)

function isDuplicate(newFile: File) {
  return files.value.some(f => f.name === newFile.name && f.size === newFile.size)
}

function handleFiles(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) {
    const newFiles = Array.from(input.files)
    const uniqueFiles = newFiles.filter(f => !isDuplicate(f))
    if (uniqueFiles.length < newFiles.length) {
      showDuplicateAlert.value = true
    }
    if (uniqueFiles.length > 0) {
      showDuplicateAlert.value = false
    }
    files.value = files.value.concat(uniqueFiles).slice(0, 7)
  }
}

function onDragOver() {
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onDrop(event: DragEvent) {
  isDragging.value = false
  if (event.dataTransfer && event.dataTransfer.files) {
    const newFiles = Array.from(event.dataTransfer.files)
    const uniqueFiles = newFiles.filter(f => !isDuplicate(f))
    if (uniqueFiles.length < newFiles.length) {
      showDuplicateAlert.value = true
    }
    if (uniqueFiles.length > 0) {
      showDuplicateAlert.value = false
    }
    files.value = files.value.concat(uniqueFiles).slice(0, 7)
  }
}

function removeFile(idx: number) {
  files.value = files.value.filter((_, i) => i !== idx)
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 0.3s;
}
</style> 