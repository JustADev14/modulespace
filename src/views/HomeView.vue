<template>
  <div class="min-h-screen bg-background relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-nzxt-gradient pointer-events-none" />
    <div class="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-[0.03] pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-glow opacity-20 pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-glow opacity-10 pointer-events-none" />

    <!-- Header -->
    <header class="relative border-b border-border/30 backdrop-blur-md bg-background/80">
      <div class="container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
              <Code2 class="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 class="text-xl font-semibold text-foreground">
              ModuleSpace Hub
            </h1>
          </div>
          <div class="flex items-center gap-4">
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-24 px-6">
      <div class="container mx-auto text-center max-w-4xl">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
          <Sparkles class="w-4 h-4" />
          Professional Developer Tools
        </div>

        <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Powerful Tools for
          <span class="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent block">
            Modern Development
          </span>
        </h1>

        <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Enterprise-ready tools and utilities built for developers,
          designers, and businesses. Streamline your workflow with our
          collection of professional-grade applications.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" @click.prevent="scrollToProjects" class="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 cursor-pointer">
            <ExternalLink class="w-4 h-4" />
            Explore Tools
          </a>
          <a href="https://github.com/JustADev14/modulespace" target="_blank" rel="noopener noreferrer" class="border border-border/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:border-primary/30">
            <Github class="w-4 h-4" />
            View Source
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-6 bg-gradient-to-b from-background/50 to-muted/20 backdrop-blur-sm">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
              <Shield class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-lg font-semibold text-foreground mb-2">
              Enterprise Ready
            </h3>
            <p class="text-muted-foreground text-sm">
              Built with security and scalability in mind for business use
            </p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
              <Zap class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-lg font-semibold text-foreground mb-2">
              Lightning Fast
            </h3>
            <p class="text-muted-foreground text-sm">
              Optimized for performance with modern web technologies
            </p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
              <Code2 class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-lg font-semibold text-foreground mb-2">
              Developer First
            </h3>
            <p class="text-muted-foreground text-sm">
              Clean APIs and documentation for seamless integration
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of professional tools and utilities designed to enhance your development workflow.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Card 1: QR Sticker Sheet Generator -->
          <div class="group relative bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col min-h-[240px] shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <span class="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Star class="w-3 h-3" /> Featured
            </span>
            <h3 class="text-xl font-bold text-foreground mb-2 mt-8">QR Sticker Sheet Generator</h3>
            <p class="text-muted-foreground mb-4">
              Generate professional QR code sticker sheets for events, marketing campaigns, and business cards. Customizable layouts with batch processing capabilities.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-zinc-700/60 text-foreground text-xs rounded">Google API</span>
              <span class="px-2 py-1 bg-zinc-700/60 text-foreground text-xs rounded">QRCode Monkey API</span>
              <span class="px-2 py-1 bg-zinc-700/60 text-foreground text-xs rounded">File Export</span>
              <span class="px-2 py-1 bg-zinc-700/60 text-foreground text-xs rounded">QR Codes</span>
            </div>
            <div class="flex items-center justify-end mt-auto pt-2">
              <span class="text-muted-foreground text-xs">2025</span>
            </div>
          </div>
          <!-- Card 2: Coming Soon -->
          <div class="group bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <h3 class="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
            <div class="flex flex-col items-center gap-2">
              <Clock class="w-8 h-8 text-muted-foreground" />
              <span class="text-muted-foreground text-sm">Stay tuned...</span>
            </div>
          </div>
          <!-- Card 3: Coming Soon -->
          <div class="group bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <h3 class="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
            <div class="flex flex-col items-center gap-2">
              <Clock class="w-8 h-8 text-muted-foreground" />
              <span class="text-muted-foreground text-sm">Stay tuned...</span>
            </div>
          </div>
          <!-- Card 4: Coming Soon -->
          <div class="group bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <h3 class="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
            <div class="flex flex-col items-center gap-2">
              <Clock class="w-8 h-8 text-muted-foreground" />
              <span class="text-muted-foreground text-sm">Stay tuned...</span>
            </div>
          </div>
          <!-- Card 5: Coming Soon -->
          <div class="group bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <h3 class="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
            <div class="flex flex-col items-center gap-2">
              <Clock class="w-8 h-8 text-muted-foreground" />
              <span class="text-muted-foreground text-sm">Stay tuned...</span>
            </div>
          </div>
          <!-- Card 6: Coming Soon -->
          <div class="group bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03]">
            <h3 class="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
            <div class="flex flex-col items-center gap-2">
              <Clock class="w-8 h-8 text-muted-foreground" />
              <span class="text-muted-foreground text-sm">Stay tuned...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Github, Mail, ExternalLink, Code2, Sparkles, Zap, Shield, Layout, Database, Star, Clock } from 'lucide-vue-next'
import { nextTick } from 'vue'

function scrollToProjects() {
  const target = document.getElementById('projects');
  if (!target) return;
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const distance = Math.abs(endY - startY);
  // Dynamic duration: 400ms minimum, up to 1200ms for long scrolls
  const duration = Math.min(1200, Math.max(400, distance * 0.7));
  const startTime = performance.now();

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startY + (endY - startY) * ease);
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-nzxt-gradient {
  background: radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
}

.bg-purple-glow {
  background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}
</style> 