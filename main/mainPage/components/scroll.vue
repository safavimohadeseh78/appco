<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollTop = ref(0)

const handleScroll = () => {
  scrollTop.value = window.scrollY
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- دکمه scroll-to-top -->
  <button
      class="scroll-top"
      :class="{ open: scrollTop > 300 }"
      @click="scrollToTop"
  >
    <i class="fas fa-angle-up"></i>
  </button>
</template>

<style scoped>
</style>
