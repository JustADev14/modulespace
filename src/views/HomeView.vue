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
              href="https://github.com/JustADev14/modulespace"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
              @click.prevent="handleMailIconClick"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Modal Popup -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div class="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-xl">&times;</button>
        <h2 class="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
        <form @submit.prevent="sendMail" class="flex flex-col gap-4">
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Send to</label>
            <input type="email" value="modulespace.dev@gmail.com" readonly class="w-full rounded bg-zinc-800 border border-zinc-700 px-3 py-2 text-foreground opacity-70 cursor-not-allowed" />
          </div>
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Your Email</label>
            <input v-model="userEmail" type="email" required placeholder="you@email.com" class="w-full rounded bg-zinc-800 border border-zinc-700 px-3 py-2 text-foreground" />
          </div>
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Message</label>
            <textarea v-model="userMessage" required rows="4" placeholder="Write your message..." class="w-full rounded bg-zinc-800 border border-zinc-700 px-3 py-2 text-foreground"></textarea>
          </div>
          <button type="submit" :disabled="sending" class="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:scale-105 disabled:opacity-60">
            {{ sending ? 'Sending...' : 'Send Message' }}
          </button>
          <div v-if="sendSuccess" class="text-green-400 text-sm mt-2">Message sent successfully!</div>
          <div v-if="sendError" class="text-red-400 text-sm mt-2">{{ sendError }}</div>
        </form>
      </div>
    </div>

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
          <router-link to="/qr-upload" class="group relative bg-card/70 border border-border/50 rounded-xl p-6 flex flex-col min-h-[240px] shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)] hover:scale-[1.03] cursor-pointer">
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
          </router-link>
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
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { Github, Mail, ExternalLink, Code2, Sparkles, Zap, Shield, Star, Clock } from 'lucide-vue-next'
const showModal = ref(false)
const userEmail = ref('')
const userMessage = ref('')
const sending = ref(false)
const sendSuccess = ref(false)
const sendError = ref('')

function openModal() {
  showModal.value = true
  userEmail.value = ''
  userMessage.value = ''
  sendSuccess.value = false
  sendError.value = ''
}
function closeModal() {
  showModal.value = false
}

async function sendMail() {
  sending.value = true
  sendSuccess.value = false
  sendError.value = ''
  try {
    await emailjs.send(
      'service_kf31ncn',
      'template_2hqvho5',
      {
        user_email: userEmail.value,
        message: userMessage.value,
        name: userEmail.value,
        email: userEmail.value,
        time: new Date().toLocaleString(),
      },
      'thGw9TpAz_qB8GDBZ'
    )
    sendSuccess.value = true
    userEmail.value = ''
    userMessage.value = ''
  } catch (err: any) {
    sendError.value = 'Failed to send. Please try again.'
  } finally {
    sending.value = false
  }
}

function handleMailIconClick(e: Event) {
  e.preventDefault()
  openModal()
}

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