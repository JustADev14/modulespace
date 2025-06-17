<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>
  <template>
    <div class="text-3xl font-bold text-blue-600 p-10">
      🎉 Tailwind CSS is working!
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
