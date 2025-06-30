<script setup lang="ts">
/*
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $("#sticky-header").removeClass("sticky-menu");
    $(".scroll-to-target").removeClass("open");
  } else {
    $("#sticky-header").addClass("sticky-menu");
    $(".scroll-to-target").addClass("open");
  }
});
*/

const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY
  })
})
</script>

<template>

  <!--Start Main Header One -->
  <header class="main-header main-header-one" dir="rtl">
    <div id="sticky-header" class="menu-area" :class="scrollTop > 245 && 'sticky-menu'">
      <div class="container">
        <div class="menu-area__inner">
          <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
          <div class="menu-wrap">
            <nav class="menu-nav">
              <div class="logo-box-one">
                <a href="index-2.html"
                ><img src="assets/img/resource/logo-1.png" alt="لوگو"
                /></a>
              </div>
              <div class="navbar-wrap main-menu">
                <ul class="navigation">
                  <li class="active menu-item-has-children">
                    <a href="#">خانه</a>
                    <ul class="sub-menu">
                      <li><a href="index-2.html">خانه اول</a></li>
                      <li><a href="index-3.html">خانه دوم</a></li>
                      <li><a href="index-4.html">خانه سوم</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">درباره ما</a></li>
                  <li class="menu-item-has-children">
                    <a href="#">خدمات</a>
                    <ul class="sub-menu">
                      <li><a href="service.html">خدمات</a></li>
                      <li><a href="ai-lnsights.html">خدمت تکی</a></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">پروژه‌ها</a>
                    <ul class="sub-menu">
                      <li><a href="project.html">پروژه‌ها</a></li>
                      <li>
                        <a href="project-details.html">جزئیات پروژه‌ها</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">صفحات</a>
                    <ul class="sub-menu">
                      <li><a href="testimonial.html">توصیه‌ها</a></li>
                      <li><a href="team.html">تیم</a></li>
                      <li><a href="pricing.html">قیمت‌ها</a></li>
                      <li><a href="faq.html">سؤالات متداول</a></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">بلاگ</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">بلاگ ما</a></li>
                      <li><a href="blog-details.html">جزئیات بلاگ</a></li>
                    </ul>
                  </li>
                  <li> <NuxtLink to="/ContactPage">تماس</NuxtLink></li>
                </ul>
              </div>

              <div class="menu-nav__right">
                <div class="contact-info-box-one">
                  <div class="icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="text">
                    <p>نیاز به کمک دارید؟</p>
                    <a href="tel:123456789">(307) 555-0133</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <!-- منوی موبایل -->
        <div class="mobile-menu">
          <nav class="menu-box">
            <div class="close-btn"><i class="fas fa-times"></i></div>
            <div class="nav-logo">
              <a href="index-2.html"
              ><img
                  src="assets/img/resource/mobile-menu-logo.png"
                  alt="لوگو"
              /></a>
            </div>
            <div class="menu-outer">
              <!--منو به صورت خودکار از طریق جاوااسکریپت اضافه خواهد شد-->
            </div>
            <div class="contact-info">
              <div class="icon-box"><span class="icon-call"></span></div>
              <p><a href="tel:123456789">(629) 555-0129</a></p>
            </div>
            <div class="social-links">
              <ul class="clearfix list-wrap">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="menu-backdrop"></div>
        <!-- پایان منوی موبایل -->
      </div>
    </div>
  </header>

  <!--End Main Header One -->

</template>


<style scoped>

</style>