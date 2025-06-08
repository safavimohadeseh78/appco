<template>
  <div>
    <Header />
    <section class="hero">
      <div class="video-hero jquery-background-video-wrapper demo-video-wrapper">
        <video class="jquery-background-video" autoplay muted loop>
          <source src="@/rtl/assets/img/agency.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
        <div class="video-hero--content">
          <h2 class="tg-element-title">مشاهده پلن ها</h2>
          <div>
            <nuxt-link  class="button-style-1" href="project.html"> پروژه&zwnj;های بیشتر </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/pages/components/Header.vue'
import Footer from '~/pages/components/Footer.vue'



</script>
