<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

onMounted(() => {
  initTestimonialSwiper();
});

const initTestimonialSwiper = () => {
  const carousels = document.querySelectorAll(".testimonial-carousel-one");
  if (carousels) {
    carousels.forEach((carousel) => {
      new Swiper(carousel, {
        // Use modules
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        },
        speed: 2000,
        pagination: {
          el: ".swiper-pagination-dots-line",
          clickable: true,
          type: 'bullets',
          dynamicBullets: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // RTL support if needed
        rtl: true,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 30 },
          375: { slidesPerView: 1, spaceBetween: 30 },
          575: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 30 },
          992: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 2, spaceBetween: 30 }
        },
      });
    });
  }
};
</script>

<template>
  <!-- Start Testimonial One -->
  <section class="testimonial-one">
    <div class="container">
      <div class="section-title tg-heading-subheading animation-style2">
        <h5 class="tg-element-title">نظرات مشتریان</h5>
        <h2 class="tg-element-title">
          شریک فناوری اطلاعات شما برای<br />
          آینده‌ای پویا
        </h2>
      </div>

      <div class="swiper-container testimonial-carousel-one">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!-- Testimonial One Single Start -->
            <div class="testimonial-one__single">
              <div class="testimonial-one__single-inner">
                <div class="testimonial-one__single-img">
                  <div class="inner">
                    <img
                        src="assets/img/testimonial/tesimonial-v1-1.jpg"
                        alt=""
                    />
                  </div>
                  <div class="quotes">
                    <i class="icon-quote11"></i>
                  </div>
                </div>
                <div class="testimonial-one__single-text">
                  <h3>مریم رحیمی</h3>
                  <span>رهبر تیم</span>
                  <div class="rating-box">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    یک حقیقت ثابت شده این است که خواننده توسط محتوای قابل
                    خواندن صفحه‌ای با طرح طولانی حواس‌پرت می‌شود.
                  </p>
                </div>
              </div>
            </div>
            <!-- Testimonial One Single End -->
          </div>

          <div class="swiper-slide">
            <!-- Testimonial One Single Start -->
            <div class="testimonial-one__single">
              <div class="testimonial-one__single-inner">
                <div class="testimonial-one__single-img">
                  <div class="inner">
                    <img
                        src="assets/img/testimonial/tesimonial-v1-2.jpg"
                        alt=""
                    />
                  </div>
                  <div class="quotes">
                    <i class="icon-quote11"></i>
                  </div>
                </div>
                <div class="testimonial-one__single-text">
                  <h3>علی رضایی</h3>
                  <span>مدیر توسعه نرم‌افزار</span>
                  <div class="rating-box">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    یک حقیقت ثابت شده این است که خواننده توسط محتوای قابل
                    خواندن صفحه‌ای با طرح طولانی حواس‌پرت می‌شود.
                  </p>
                </div>
              </div>
            </div>
            <!-- Testimonial One Single End -->
          </div>

          <div class="swiper-slide">
            <!-- Testimonial One Single Start -->
            <div class="testimonial-one__single">
              <div class="testimonial-one__single-inner">
                <div class="testimonial-one__single-img">
                  <div class="inner">
                    <img
                        src="assets/img/testimonial/tesimonial-v1-1.jpg"
                        alt=""
                    />
                  </div>
                  <div class="quotes">
                    <i class="icon-quote11"></i>
                  </div>
                </div>
                <div class="testimonial-one__single-text">
                  <h3>مریم رحیمی</h3>
                  <span>رهبر تیم</span>
                  <div class="rating-box">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    یک حقیقت ثابت شده این است که خواننده توسط محتوای قابل
                    خواندن صفحه‌ای با طرح طولانی حواس‌پرت می‌شود.
                  </p>
                </div>
              </div>
            </div>
            <!-- Testimonial One Single End -->
          </div>

          <div class="swiper-slide">
            <!-- Testimonial One Single Start -->
            <div class="testimonial-one__single">
              <div class="testimonial-one__single-inner">
                <div class="testimonial-one__single-img">
                  <div class="inner">
                    <img
                        src="assets/img/testimonial/tesimonial-v1-2.jpg"
                        alt=""
                    />
                  </div>
                  <div class="quotes">
                    <i class="icon-quote11"></i>
                  </div>
                </div>
                <div class="testimonial-one__single-text">
                  <h3>علی رضایی</h3>
                  <span>مدیر توسعه نرم‌افزار</span>
                  <div class="rating-box">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    یک حقیقت ثابت شده این است که خواننده توسط محتوای قابل
                    خواندن صفحه‌ای با طرح طولانی حواس‌پرت می‌شود.
                  </p>
                </div>
              </div>
            </div>
            <!-- Testimonial One Single End -->
          </div>
        </div>
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-pagination-dots-line"></div>
      <div class="swiper-nav-style1">
        <div class="swiper-button-prev">
          <i class="icon-right-arrow-2" aria-hidden="true"></i>
        </div>
        <div class="swiper-button-next">
          <i class="icon-left-arrow-2" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial One -->
</template>
<style>
.swiper-pagination-dots-line {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>