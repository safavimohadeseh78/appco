<script setup lang="ts">
import "@/rtl/assets/js/vendor/jquery-3.6.0.min.js"
import "@/rtl/assets/js/vendor/jquery-sidebar-content.js"
import "@/rtl/assets/js/bootstrap.min.js"
import "@/rtl/assets/js/isotope.pkgd.min.js"
import "@/rtl/assets/js/imagesloaded.pkgd.min.js"
import "@/rtl/assets/js/jquery.odometer.min.js"
import "@/rtl/assets/js/jquery.appear.js"
import "@/rtl/assets/js/ajax-form.js"
import "@/rtl/assets/js/wow.min.js"
import "@/rtl/assets/js/isotope.js"
import "@/rtl/assets/js/jquery.magnific-popup.min.js"
import "@/rtl/assets/js/gsap.js"
import "@/rtl/assets/js/ScrollTrigger.js"
import "@/rtl/assets/js/SplitText.js"
import "@/rtl/assets/js/swiper.min.js"
import "@/rtl/assets/js/main.js"
</script>

<template>
  <div class="body-dark-bg">
  <!-- preloader -->
  <div id="preloader">
    <div id="loading-center">
      <div class="loader">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
  </div>
  <!-- preloader-end -->

  <!-- Scroll-top -->
  <button class="scroll-top scroll-to-target" data-target="html">
    <i class="fas fa-angle-up"></i>
  </button>
  <!-- Scroll-top-end-->

  <!--Start Main Header Two -->
  <header class="main-header main-header-two">
    <div id="sticky-header" class="menu-area">
      <div class="container">
        <div class="menu-area__inner overlap">
          <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
          <div class="menu-wrap">
            <nav class="menu-nav">
              <div class="main-header-two__inner">
                <div class="logo-box-two">
                  <a href="index-2.html"><img src="@/rtl/assets/img/resource/logo-1.png" alt="لوگو" /></a>
                </div>
                <div class="main-header-two__top">
                  <div class="main-header-two__top-left">
                    <div class="header-contact-info">
                      <ul>
                        <li>
                          <div class="icon-box">
                            <span class="icon-call"></span>
                          </div>
                          <p><a href="tel:123456789" dir="ltr">(629) 555-0129</a></p>
                        </li>
                        <li>
                          <div class="icon-box">
                            <span class="icon-envelope"></span>
                          </div>
                          <p>
                            <a href="mailto:yourmail@email.com">info@example.com</a>
                          </p>
                        </li>
                        <li>
                          <div class="icon-box">
                            <span class="icon-pin"></span>
                          </div>
                          <p>ایران ، تهران خیابان ولیعصر خیابان هاشمی فر 212</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="main-header-two__top-right">
                    <div class="btn-box">
                      <a class="button-style-1" href="contact.html">
                        دریافت پیشنهاد قیمت
                        <i class="icon-left-arrow-2"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="main-header-two__bottom">
                  <div class="main-header-two__bottom-left">
                    <div class="navbar-wrap main-menu">
                      <ul class="navigation">
                        <li class="active menu-item-has-children">
                          <a href="#">خانه</a>
                          <ul class="sub-menu">
<!--                            <li><a href="index-2.html">خانه اول</a></li>
                            <li><a href="index-3.html">خانه دوم</a></li>
                            <li><a href="index-4.html">خانه سوم</a></li>-->
                          </ul>
                        </li>
<!--                        <li><a href="about.html">درباره ما</a></li>-->
                        <li class="menu-item-has-children">
                          <a href="#">خدمات</a>
                          <ul class="sub-menu">
<!--                            <li><a href="service.html">خدمات فناوری</a></li>
                            <li><a href="ai-lnsights.html">تحلیل هوش مصنوعی</a></li>-->
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">پروژه‌ها</a>
                          <ul class="sub-menu">
<!--                            <li><a href="project.html">پروژه‌های ما</a></li>-->
                            <li>
<!--                              <a href="project-details.html">جزئیات پروژه‌ها</a>-->
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">صفحات</a>
                          <ul class="sub-menu">
<!--                            <li><a href="testimonial.html">نظرات کاربران</a></li>
                            <li><a href="team.html">تیم ما</a></li>
                            <li><a href="pricing.html">قیمت‌ها</a></li>
                            <li><a href="faq.html">سؤالات متداول</a></li>-->
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">بلاگ</a>
                          <ul class="sub-menu">
<!--                            <li><a href="blog.html">بلاگ ما</a></li>-->
                            <li>
<!--                              <a href="blog-details.html">جزئیات بلاگ</a>-->
                            </li>
                          </ul>
                        </li>
<!--                        <li><a href="contact.html">تماس</a></li>-->
                      </ul>
                    </div>
                  </div>

                  <div class="main-header-two__bottom-right">
                    <ul>
                      <li>
                        <a href="#" class="main-menu__search search-toggler icon-loupe icon3"></a>
                      </li>
                      <li>
                        <a href="#" class="icon1"><span class="icon-shopping-cart"></span></a>
                      </li>
                      <li>
                        <a class="navSidebar-button icon2" href="#"><span class="icon-menu-2"></span></a>
                      </li>
                    </ul>
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
              <a href="index-2.html"><img src="@/rtl/assets/img/resource/mobile-menu-logo.png" alt="لوگو" /></a>
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

  <!--End Main Header Two -->

  <div class="fix">




    <!-- End sidebar widget content -->

    <!--Start banner One -->
    <section class="banner-one">
      <!-- Start video hero -->
      <div class="video-hero jquery-background-video-wrapper demo-video-wrapper">
        <video class="jquery-background-video" autoplay muted loop>
          <source src="@/rtl/assets/img/agency.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
        <div class="video-hero--content">
          <h2 class="tg-element-title">مشاهده پلن ها</h2>
          <div>
            <a class="button-style-1" href="project.html"> پروژه&zwnj;های بیشتر </a>
          </div>
        </div>
      </div>
      <!-- End video hero -->
    </section>
    <!--End banner One -->

    <!-- Start About Two -->
    <section class="about-two">
      <div class="container">
        <div class="row">
          <!-- Start About Two Content-->
          <div class="col-xl-6">
            <div class="about-two__content">
              <div class="section-title tg-heading-subheading animation-style2">
                <h5 class="tg-element-title">درباره ما</h5>
                <h2 class="tg-element-title">
                  خلق چشم‌اندازهای <br />
                  دیجیتال
                </h2>
              </div>
              <div class="text">
                <p>
                  هیچ‌وقت به‌این شکل نبوده که زندگی خالی از چالش باشد. اکنون
                  باید نگاهی بیاندازیم به دلایل مهمی که باعث موفقیت
                  کسب‌وکارهای نوپا شده‌اند. از گذشته درس بگیریم و از اشتباهات
                  دیگران برای بهبود خودمان استفاده کنیم.
                </p>
              </div>

              <div class="about-two__content-list-box">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="about-two__content-list-box-single">
                      <ul>
                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>اشتباهاتی که باید از آن‌ها اجتناب کرد</p>
                        </li>

                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>کسب‌وکار نوپای شما</p>
                        </li>

                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>دانش درباره فونت‌ها</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="about-two__content-list-box-single">
                      <ul>
                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>اشتباهاتی که باید از آن‌ها اجتناب کرد</p>
                        </li>

                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>کسب‌وکار نوپای شما</p>
                        </li>

                        <li>
                          <div class="icon-box">
                            <span class="icon-checklist-2"></span>
                          </div>
                          <p>دانش درباره فونت‌ها</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End About Two Content-->

          <!-- Start About Two Img-->
          <div class="col-xl-6 wow fadeInRight" data-wow-delay=".3s">
            <div class="about-two__img">
              <div class="inner">
                <img src="@/rtl/assets/img/about/about-two__img1.jpg" alt="" />
                <div class="about-two__video">
                  <a href="https://www.youtube.com/watch?v=6mkoGSqTqFI" class="about-two__video-btn popup-video">
                    <span class="icon-play-button-arrowhead"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- End About Two Img-->
        </div>
      </div>
    </section>
    <!-- End About Two -->

    <section class="testimonial-one testimonial-one--about">
      <div class="container">
        <div class="section-title tg-heading-subheading animation-style2">
          <h5 class="tg-element-title">نظرات مشتریان</h5>
          <h2 class="tg-element-title">
            نظرات همکاران ما
          </h2>
        </div>

        <div class="swiper-container testimonial-carousel-three">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-img">
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v1-1.jpg" alt="" />
                    </div>
                    <div class="quotes">
                      <i class="icon-quote11"></i>
                    </div>
                  </div>
                  <div class="testimonial-one__single-text">
                    <h3>علی تهرانی</h3>
                    <span>رهبر تیم</span>
                    <div class="rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <p>
                      این یک واقعیت شناخته‌شده است که یک خواننده توسط محتوای
                      قابل خواندن صفحه هنگام نگاه کردن به چیدمان آن منحرف
                      می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-img">
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v1-2.jpg" alt="" />
                    </div>
                    <div class="quotes">
                      <i class="icon-quote11"></i>
                    </div>
                  </div>
                  <div class="testimonial-one__single-text">
                    <h3>دانیال ابراهیمی </h3>
                    <span>مدیر توسعه نرم‌افزار</span>
                    <div class="rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <p>
                      این یک واقعیت شناخته‌شده است که یک خواننده توسط محتوای
                      قابل خواندن صفحه هنگام نگاه کردن به چیدمان آن منحرف
                      می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-img">
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v1-1.jpg" alt="" />
                    </div>
                    <div class="quotes">
                      <i class="icon-quote11"></i>
                    </div>
                  </div>
                  <div class="testimonial-one__single-text">
                    <h3>مجتبی رنجبر</h3>
                    <span>رهبر تیم</span>
                    <div class="rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <p>
                      این یک واقعیت شناخته‌شده است که یک خواننده توسط محتوای
                      قابل خواندن صفحه هنگام نگاه کردن به چیدمان آن منحرف
                      می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-img">
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v1-2.jpg" alt="" />
                    </div>
                    <div class="quotes">
                      <i class="icon-quote11"></i>
                    </div>
                  </div>
                  <div class="testimonial-one__single-text">
                    <h3>سعید خداپرست </h3>
                    <span>مدیر توسعه نرم‌افزار</span>
                    <div class="rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <p>
                      این یک واقعیت شناخته‌شده است که یک خواننده توسط محتوای
                      قابل خواندن صفحه هنگام نگاه کردن به چیدمان آن منحرف
                      می‌شود.
                    </p>
                  </div>
                </div>
              </div>
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

    <!-- Services Two Start -->
    <div class="services-two">
      <div class="container">
        <div class="section-title text-center tg-heading-subheading animation-style2">
          <h5 class="tg-element-title">خدمات ما</h5>
          <h2 class="tg-element-title">ارتقاء کسب‌وکارها با <br> نبوغ IT</h2>
        </div>
        <div class="row">
          <!--Start Services Two Single -->
          <div class="col-xl-4 col-lg-4 text-center wow animated fadeInUp" data-wow-delay="0.1s">
            <div class="services-two__single">
              <div class="services-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/service/services-v2-img1.jpg" alt="">
                </div>
                <div class="icon-box">
                  <span class="icon-net-connect-plus"></span>
                </div>
              </div>
              <div class="services-two__single-text">
                <h3><a href="ai-lnsights.html">راهکارهای وب ویو</a></h3>
                <p>ما راه‌حل‌های خلاقانه‌ای برای تقویت حضور آنلاین کسب‌وکارها ارائه می‌دهیم.</p>
                <a href="ai-lnsights.html" class="services-two__single-btn">
                  <i class="icon-left-arrow-2"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Services Two Single -->
          <!--Start Services Two Single -->
          <div class="col-xl-4 col-lg-4 text-center wow animated fadeInUp" data-wow-delay="0.3s">
            <div class="services-two__single">
              <div class="services-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/service/services-v2-img2.jpg" alt="">
                </div>
                <div class="icon-box">
                  <span class="icon-app-swift"></span>
                </div>
              </div>
              <div class="services-two__single-text">
                <h3><a href="ai-lnsights.html">مرکز نبوغ کدنویسی</a></h3>
                <p>ما به توسعه نرم‌افزارهای نوآورانه و سفارشی برای نیازهای خاص شما می‌پردازیم.</p>
                <a href="ai-lnsights.html" class="services-two__single-btn">
                  <i class="icon-left-arrow-2"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Services Two Single -->
          <!--Start Services Two Single -->
          <div class="col-xl-4 col-lg-4 text-center wow animated fadeInUp" data-wow-delay="0.5s">
            <div class="services-two__single">
              <div class="services-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/service/services-v2-img3.jpg" alt="">
                </div>
                <div class="icon-box">
                  <span class="icon-data-guard-sentinel"></span>
                </div>
              </div>
              <div class="services-two__single-text">
                <h3><a href="ai-lnsights.html">مشاوره جریان فناوری</a></h3>
                <p>ما راهکارهای مشاوره‌ای برای بهینه‌سازی فرآیندهای کسب‌وکار ارائه می‌دهیم.</p>
                <a href="ai-lnsights.html" class="services-two__single-btn">
                  <i class="icon-left-arrow-2"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Services Two Single -->
        </div>
      </div>
    </div>

    <!--Start Subscribe One -->
    <section class="subscribe-one subscribe-one--two">
      <div class="shape1 float-bob-x">
        <img src="@/rtl/assets/img/shape/subscribe-v2-shape1.png" alt="شکل اشتراک" />
      </div>
      <div class="container">
        <div class="row">
          <!--Start Subscribe Two Content -->
          <div class="col-xl-5">
            <div class="subscribe-one--two__content clearfix tg-heading-subheading animation-style2">
              <h2 class="tg-element-title">
                کارهای سخت را به ما بسپارید <br />
                و از نتایج لذت ببرید
              </h2>
              <p>
                ما به شما کمک می‌کنیم تا از محتوای جذاب و موثر بهره‌مند شوید و به راحتی به اهداف خود برسید.
              </p>
            </div>
          </div>
          <!--End Subscribe Two Content -->

          <!--Start Subscribe Two Form Box-->
          <div class="col-xl-7">
            <div class="subscribe-one--two__form-box">
              <form class="subscribe-one__form" action="#">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" name="name" value="" placeholder="نام شما" required="" />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" placeholder="شماره تلفن شما" name="phone" />
                    </div>
                  </div>
                </div>
                <div class="subscribe-one__form-bottom">
                  <input type="email" name="email" placeholder="ایمیل خود را وارد کنید" />
                  <button type="submit" class="button-style-1 secondary-white">
                    <span class="txt">اشتراک‌گذاری</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--End Subscribe Two Form Box-->
        </div>
      </div>
    </section>

    <!--End Subscribe One -->

    <!-- Start Pricing Two -->
    <section class="pricing-two">
      <div class="container">
        <div class="row">
          <!-- Pricing Two Single Start -->
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div class="pricing-two__single">
              <div class="pricing-two__top text-center tg-heading-subheading animation-style2">
                <h3 class="pricing-two__title tg-element-title">پلن پایه</h3>
                <p class="pricing-two__text">
                  این پلن شامل خدمات ابتدایی و ضروری است.
                </p>
                <div class="pricing-two__price">
                  <h2>۱۹ تومان <span>ماهانه</span></h2>
                </div>
              </div>
              <div class="pricing-two__bottom">
                <div class="pricing-two__list">
                  <ul>
                    <li><i class="fa fa-check"></i>اشتباهاتی که باید اجتناب کنید</li>
                    <li><i class="fa fa-check"></i>استارتاپ شما</li>
                    <li><i class="fa fa-check"></i>آشنایی با فونت‌ها</li>
                    <li><i class="fa fa-check"></i>معیارهای موفقیت برای استارتاپ شما</li>
                  </ul>
                </div>
                <div class="pricing-btn">
                  <a class="button-style-1" href="#"> سفارش بسته </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pricing Two Single End -->

          <!-- Pricing Two Single Start -->
          <div class="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
            <div class="pricing-two__single">
              <div class="pricing-two__top text-center tg-heading-subheading animation-style2">
                <h3 class="pricing-two__title tg-element-title">پلن سخت</h3>
                <p class="pricing-two__text">
                  این پلن شامل خدمات پیشرفته‌تری است.
                </p>
                <div class="pricing-two__price active">
                  <h2>۳۰ تومان <span>ماهانه</span></h2>
                </div>
              </div>
              <div class="pricing-two__bottom">
                <div class="pricing-two__list">
                  <ul>
                    <li><i class="fa fa-check"></i>اشتباهاتی که باید اجتناب کنید</li>
                    <li><i class="fa fa-check"></i>استارتاپ شما</li>
                    <li><i class="fa fa-check"></i>آشنایی با فونت‌ها</li>
                    <li><i class="fa fa-check"></i>معیارهای موفقیت برای استارتاپ شما</li>
                  </ul>
                </div>
                <div class="pricing-btn">
                  <a class="button-style-1" href="#"> سفارش بسته </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pricing Two Single End -->

          <!-- Pricing Two Single Start -->
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div class="pricing-two__single">
              <div class="pricing-two__top text-center tg-heading-subheading animation-style2">
                <h3 class="pricing-two__title tg-element-title">پلن آسان</h3>
                <p class="pricing-two__text">
                  این پلن شامل تمامی خدمات ما است.
                </p>
                <div class="pricing-two__price">
                  <h2>۴۹ تومان <span>ماهانه</span></h2>
                </div>
              </div>
              <div class="pricing-two__bottom">
                <div class="pricing-two__list">
                  <ul>
                    <li><i class="fa fa-check"></i>اشتباهاتی که باید اجتناب کنید</li>
                    <li><i class="fa fa-check"></i>استارتاپ شما</li>
                    <li><i class="fa fa-check"></i>آشنایی با فونت‌ها</li>
                    <li><i class="fa fa-check"></i>معیارهای موفقیت برای استارتاپ شما</li>
                  </ul>
                </div>
                <div class="pricing-btn">
                  <a class="button-style-1" href="#"> سفارش بسته </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pricing Two Single End -->
        </div>
      </div>
    </section>

    <!-- End Pricing Two -->



    <!--Start Feature One-->
    <section class="feature-one">
      <div class="feature-one__wrap">
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>طراحی وب سایت</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>توسعه نرم‌افزار</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>بهینه‌سازی سرعت</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>طراحی رابط کاربری</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>تست و ارزیابی کیفیت</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>مدیریت پایگاه داده</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>امنیت سایبری</h2>
        </div>
        <div class="feature-one__title-box">
          <h2 class="feature-one__title"><span class="icon-sparkle icon-one"></span>پشتیبانی و نگهداری</h2>
        </div>
      </div>
    </section>
    <!--End Feature One-->


    <!-- شروع فرآیند کاری یک -->
    <section class="working-process-one">
      <div class="container">
        <div class="swiper-container testimonial-carousel-two">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>دفاع سایبری</h3>
                  <div class="icon"><span class="icon-team-member"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">01</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>یکپارچه‌سازی فناوری‌های هوشمند</h3>
                  <div class="icon"><span class="icon-data-guard-sentinel-2"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">02</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>تحلیل داده ویستا</h3>
                  <div class="icon"><span class="icon-allow22"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">03</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>یکپارچه‌سازی فناوری‌های هوشمند</h3>
                  <div class="icon"><span class="icon-data-guard-sentinel"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">04</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>دفاع سایبری</h3>
                  <div class="icon"><span class="icon-team-member"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">01</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>یکپارچه‌سازی فناوری‌های هوشمند</h3>
                  <div class="icon"><span class="icon-data-guard-sentinel-2"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">02</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>تحلیل داده ویستا</h3>
                  <div class="icon"><span class="icon-allow22"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">03</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="working-process-one__single">
                <div class="working-process-one__title">
                  <div class="circle"></div>
                  <h3>یکپارچه‌سازی فناوری‌های هوشمند</h3>
                  <div class="icon"><span class="icon-data-guard-sentinel"></span></div>
                </div>

                <p class="working-process-one__text">
                  بازسازی ساختار سازمانی به فرآیند طراحی و سازماندهی مجدد شرکت‌ها اشاره دارد که باعث ارتقای ساختارهای
                  مدیریتی می‌شود.
                </p>
                <a class="working-process-one__btn" href="#">بیشتر بخوانید <i class="fa fa-arrow-left"></i></a>
                <span class="working-process-one__big-text">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- پایان فرآیند کاری یک -->



    <!-- Start Team Two-->
    <section class="team-two">
      <div class="container">
        <div class="team-two__top">
          <div class="section-title tg-heading-subheading animation-style2">
            <h5 class="tg-element-title">اعضای فعال ما</h5>
            <h2 class="tg-element-title">
              قدرت فناوری را آزاد کنید
            </h2>
          </div>
          <div class="text-box">
            <p>
              با تعهد به پیشبرد تکامل فناوری، راه‌حل‌ها و خدمات فناوری اطلاعات ما سنگ‌بنای پیشرفت دیجیتال شما هستند.
              ما مرزها را درنوردیده و به کسب‌وکارها کمک می‌کنیم تا نه تنها سازگار شوند بلکه در چشم‌اندازهای پویا
              پیشرفت کنند و بهترین نتایج را رقم بزنند.
            </p>
          </div>
        </div>

        <div class="team-two__bottom">
          <!-- Start Team Two Single-->
          <div class="team-two__single wow fadeInUp" data-wow-delay=".1s">
            <div class="team-two__single__inner">
              <div class="team-two__single-content">
                <div class="team-two__single-title">
                  <div class="team-two__single-img">
                    <img class="team-two__single-img-hover" src="@/rtl/assets/img/team/team-v2-img1.png" alt="#" />
                  </div>
                  <h2><a href="#">زهرا حسینی</a></h2>
                </div>
                <div class="text-box">
                  <p>
                    رئیس <br />
                    فروش
                  </p>
                </div>
              </div>

              <div class="team-two__single-icon-box">
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="javascript:void(0)"><span class="icon-plus"></span></a>
                    <ul class="social-links-inner">
                      <li><a class="fb" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="tw" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="ins" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="pin" href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Team Two Single-->

          <!-- Start Team Two Single-->
          <div class="team-two__single wow fadeInUp" data-wow-delay=".1s">
            <div class="team-two__single__inner">
              <div class="team-two__single-content">
                <div class="team-two__single-title">
                  <h2><a href="#">علی اکبری</a></h2>
                  <div class="team-two__single-img">
                    <img class="team-two__single-img-hover" src="@/rtl/assets/img/team/team-v2-img1.png" alt="#" />
                  </div>
                </div>
                <div class="text-box">
                  <p>
                    هماهنگ‌کننده <br />
                    بازاریابی
                  </p>
                </div>
              </div>

              <div class="team-two__single-icon-box">
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="javascript:void(0)"><span class="icon-plus"></span></a>
                    <ul class="social-links-inner">
                      <li><a class="fb" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="tw" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="ins" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="pin" href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Team Two Single-->

          <!-- Start Team Two Single-->
          <div class="team-two__single wow fadeInUp" data-wow-delay=".1s">
            <div class="team-two__single__inner">
              <div class="team-two__single-content">
                <div class="team-two__single-title">
                  <h2><a href="#">سمیرا رحیمی</a></h2>
                  <div class="team-two__single-img">
                    <img class="team-two__single-img-hover" src="@/rtl/assets/img/team/team-v2-img1.png" alt="#" />
                  </div>
                </div>
                <div class="text-box">
                  <p>
                    طراح <br />
                    وب
                  </p>
                </div>
              </div>

              <div class="team-two__single-icon-box">
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="javascript:void(0)"><span class="icon-plus"></span></a>
                    <ul class="social-links-inner">
                      <li><a class="fb" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="tw" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="ins" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="pin" href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Team Two Single-->

          <!-- Start Team Two Single-->
          <div class="team-two__single wow fadeInUp" data-wow-delay=".1s">
            <div class="team-two__single__inner">
              <div class="team-two__single-content">
                <div class="team-two__single-title">
                  <h2><a href="#">محمدرضا حسینی</a></h2>
                  <div class="team-two__single-img">
                    <img class="team-two__single-img-hover" src="@/rtl/assets/img/team/team-v2-img1.png" alt="#" />
                  </div>
                </div>
                <div class="text-box">
                  <p>
                    دستیار <br />
                    پزشکی
                  </p>
                </div>
              </div>

              <div class="team-two__single-icon-box">
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="javascript:void(0)"><span class="icon-plus"></span></a>
                    <ul class="social-links-inner">
                      <li><a class="fb" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="tw" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="ins" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="pin" href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Team Two Single-->



          <!-- Start Team Two Single-->
          <div class="team-two__single wow fadeInUp" data-wow-delay=".1s">
            <div class="team-two__single__inner">
              <div class="team-two__single-content">
                <div class="team-two__single-title">
                  <h2><a href="#">سارا حسینی</a></h2>
                  <div class="team-two__single-img">
                    <img class="team-two__single-img-hover" src="@/rtl/assets/img/team/team-v2-img1.png" alt="#" />
                  </div>
                </div>
                <div class="text-box">
                  <p>
                    دستیار <br />
                    پرستاری
                  </p>
                </div>
              </div>

              <div class="team-two__single-icon-box">
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="javascript:void(0)"><span class="icon-plus"></span></a>
                    <ul class="social-links-inner">
                      <li><a class="fb" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="tw" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="ins" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="pin" href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Team Two Single-->


        </div>
      </div>
    </section>
    <!-- Start Team Two-->

    <!-- Start Testimonial Two-->
    <section class="testimonial-two">
      <div class="container">
        <div class="section-title tg-heading-subheading animation-style2">
          <h5 class="tg-element-title">نظرات مشتریان</h5>
          <h2 class="tg-element-title">
            اتصال امکانات <br />
            با یک کد در هر بار
          </h2>
        </div>

        <div class="swiper-container testimonial-carousel-two">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-two__single">
                <div class="rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="text-box">
                  <p>
                    با تعهد به پیشبرد تکامل فناوری، راه‌حل‌ها و خدمات IT ما سنگ بنای پیشرفت دیجیتال شما هستند تا
                    بهرین نتایج را برای دنیای خود رقم بزنید.
                  </p>
                </div>
                <div class="testimonial-two__single-author-box">
                  <div class="img-box">
                    <div class="icon">
                      <span class="icon-left-quote"></span>
                    </div>
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v2-1.png" alt="" />
                    </div>
                  </div>
                  <div class="text-box2">
                    <h2>نیما رئیسی</h2>
                    <p>ممیزی IT</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-two__single">
                <div class="rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="text-box">
                  <p>
                    ما مرزها را فراتر می‌گذاریم و به کسب‌وکارها کمک می‌کنیم نه تنها سازگار شوند، بلکه در
                    چشم‌اندازهای پویا رشد کنند.
                  </p>
                </div>
                <div class="testimonial-two__single-author-box">
                  <div class="img-box">
                    <div class="icon">
                      <span class="icon-left-quote"></span>
                    </div>
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v2-2.png" alt="" />
                    </div>
                  </div>
                  <div class="text-box2">
                    <h2>امیر پارسا دارابی</h2>
                    <p>ادغام CRM</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-two__single">
                <div class="rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="text-box">
                  <p>
                    ما پایه‌گذاری موفقیت شما را انجام می‌دهیم. رویکرد همکاری ما، چشم‌اندازها را به واقعیت تبدیل
                    می‌کند و رشد را پیش می‌برد.
                  </p>
                </div>
                <div class="testimonial-two__single-author-box">
                  <div class="img-box">
                    <div class="icon">
                      <span class="icon-left-quote"></span>
                    </div>
                    <div class="inner">
                      <img src="@/rtl/assets/img/testimonial/tesimonial-v2-3.png" alt="" />
                    </div>
                  </div>
                  <div class="text-box2">
                    <h2>علی حاتمی</h2>
                    <p>رئیس فروش</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- If we need navigation buttons -->
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

    <!-- End Testimonial Two-->

    <!-- Start Fact Counter Two-->
    <section class="fact-counter-two">
      <div class="container">
        <div class="row">
          <!--Start Single Fact Counter Two-->
          <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="fact-counter-two__single">
              <div class="icon">
                <span class="icon-team-member"></span>
              </div>
              <div class="fact-counter-two__single-inner">
                <div class="text-box">
                  <h2 class="count">k
                    <span class="odometer" data-count="200" dir="ltr"></span>
                  </h2>
                  <p>بازدیدکنندگان ماهانه</p>
                </div>
              </div>
            </div>
          </div>
          <!--End Single Fact Counter Two-->

          <!--Start Single Fact Counter Two-->
          <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
            <div class="fact-counter-two__single">
              <div class="icon">
                <span class="icon-project-done"></span>
              </div>
              <div class="fact-counter-two__single-inner">
                <div class="text-box">
                  <h2 class="count">
                    %
                    <span class="odometer" data-count="50" dir="ltr"></span>
                  </h2>
                  <p>رشد ماهانه</p>
                </div>
              </div>
            </div>
          </div>
          <!--End Single Fact Counter Two-->

          <!--Start Single Fact Counter Two-->
          <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div class="fact-counter-two__single">
              <div class="icon">
                <span class="icon-winning-award"></span>
              </div>
              <div class="fact-counter-two__single-inner">
                <div class="text-box">
                  <h2 class="count">+m
                    <span class="odometer" data-count="1"></span>
                  </h2>
                  <p>مشتریان راضی</p>
                </div>
              </div>
            </div>
          </div>
          <!--End Single Fact Counter Two-->

          <!--Start Single Fact Counter Two-->
          <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
            <div class="fact-counter-two__single">
              <div class="icon">
                <span class="icon-happy-clients"></span>
              </div>
              <div class="fact-counter-two__single-inner">
                <div class="text-box">
                  <h2 class="count">
                    <span class="odometer" data-count="30" dir="ltr"></span>+
                  </h2>
                  <p>کشورها</p>
                </div>
              </div>
            </div>
          </div>
          <!--End Single Fact Counter Two-->
        </div>
      </div>
    </section>

    <!-- End Fact Counter Two-->

    <!-- Start Blog-Two -->
    <section class="blog-two">
      <div class="container">
        <div class="blog-two__top">
          <div class="section-title tg-heading-subheading animation-style2">
            <h5 class="tg-element-title">بلاگ‌های ما</h5>
            <h2 class="tg-element-title">
              جایی که نوآوری با <br />
              برتری IT ملاقات می‌کند
            </h2>
          </div>
          <div class="btn-box">
            <a class="btn-one" href="#"><span class="txt"> </span></a>
            <a class="button-style-1" href="project.html"> بلاگ‌های بیشتر </a>
          </div>
        </div>

        <div class="row">
          <!--Start Blog One Single -->
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div class="blog-two__single">
              <div class="blog-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/blog/blog-2-1.png" alt="" />
                </div>
                <div class="blog-two__single__meta">
                  <ul>
                    <li>
                      <i class="fa-solid fa-user"></i>
                      <a href="#">توسط مدیر</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <a href="#">11 مهر 1403</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blog-two__single__content">
                <h4 class="blog-two__single__title">
                  <a href="blog-details.html">ما از رمزنگاری پیشرفته استفاده می‌کنیم</a>
                </h4>
                <a href="blog-details.html" class="blog-two__single__btn">
                  ادامه مطلب <i class="fa fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Blog One Single -->
          <!--Start Blog One Single -->
          <div class="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
            <div class="blog-two__single">
              <div class="blog-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/blog/blog-2-2.png" alt="" />
                </div>
                <div class="blog-two__single__meta">
                  <ul>
                    <li>
                      <i class="fa-solid fa-user"></i>
                      <a href="#">توسط مدیر</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i><a href="#">11 مهر 1403</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blog-two__single__content">
                <h4 class="blog-two__single__title">
                  <a href="blog-details.html">ما خدمات خود را به نیازهای خاص کسب‌وکار شما متناسب می‌کنیم</a>
                </h4>
                <a href="blog-details.html" class="blog-two__single__btn">
                  ادامه مطلب <i class="fa fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Blog One Single -->
          <!--Start Blog One Single -->
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div class="blog-two__single">
              <div class="blog-two__single-img">
                <div class="inner">
                  <img src="@/rtl/assets/img/blog/blog-2-3.png" alt="" />
                </div>
                <div class="blog-two__single__meta">
                  <ul>
                    <li>
                      <i class="fa-solid fa-user"></i>
                      <a href="#">توسط مدیر</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i><a href="#">11 مهر 1403</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blog-two__single__content">
                <h4 class="blog-two__single__title">
                  <a href="blog-details.html">راه‌حل‌های IT کارایی را افزایش می‌دهند و فرآیندها را ساده می‌کنند</a>
                </h4>
                <a href="blog-details.html" class="blog-two__single__btn">
                  ادامه مطلب <i class="fa fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <!--End Blog One Single -->
        </div>
      </div>
    </section>

    <!-- End-Blog-Two -->

    <!-- Start Footer One -->
    <footer class="footer-one footer-one__two">
      <div class="footer-one__two-top">
        <div class="container">
          <div class="footer-one__two-top-inner">
            <div class="footer-logo-one">
              <a href="index-2.html">
                <img src="@/rtl/assets/img/footer/logo-1.png" alt="" />
              </a>
            </div>

            <ul class="social-links">
              <li>
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-linkedin"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Start Footer Main -->
      <div class="footer-main">
        <div class="container">
          <div class="row">
            <!--Start Single Footer Widget-->
            <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
              <div class="single-footer-widget">
                <div class="title">
                  <h3>لینک‌های سریع</h3>
                </div>
                <div class="footer-widget-links">
                  <ul>
                    <li><a href="index-2.html">صفحه اصلی</a></li>
                    <li><a href="about.html">درباره ما</a></li>
                    <li><a href="service.html">خدمات</a></li>
                    <li><a href="project.html">پورتفولیو</a></li>
                    <li><a href="blog.html">بلاگ</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Single Footer Widget-->

            <!--Start Single Footer Widget-->
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="single-footer-widget ml50">
                <div class="title">
                  <h3>لینک‌های خدمات</h3>
                </div>
                <div class="footer-widget-links">
                  <ul>
                    <li><a href="ai-lnsights.html">خدمات ابری</a></li>
                    <li><a href="ai-lnsights.html">راه‌حل‌های پشتیبان</a></li>
                    <li><a href="ai-lnsights.html">امنیت شبکه</a></li>
                    <li><a href="ai-lnsights.html">نظارت</a></li>
                    <li><a href="ai-lnsights.html">مشاوره IT</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Single Footer Widget-->

            <!--Start Single Footer Widget-->
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="single-footer-widget">
                <div class="title">
                  <h3>بلاگ‌های اخیر</h3>
                </div>
                <div class="footer-widget-blog-info">
                  <ul>
                    <li>
                      <div class="footer-blog-thumb">
                        <img src="@/rtl/assets/img/footer/footer-blog-1.jpg" alt="" />
                      </div>
                      <div class="footer-blog-text">
                        <h3>
                          <a href="blog.html">قطعه استاندارد از <br />خدمات فناوری</a>
                        </h3>
                        <span><i class="fa-solid fa-calendar-days"></i>11 مهر 1403</span>
                      </div>
                    </li>
                    <li>
                      <div class="footer-blog-thumb">
                        <img src="@/rtl/assets/img/footer/footer-blog-2.jpg" alt="" />
                      </div>
                      <div class="footer-blog-text">
                        <h3>
                          <a href="blog.html">قطعه استاندارد از <br />خدمات فناوری</a>
                        </h3>
                        <span><i class="fa-solid fa-calendar-days"></i>11 مهر 1403</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Single Footer Widget-->

            <!--Start Single Footer Widget-->
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="single-footer-widget mt">
                <div class="title">
                  <h3>تماس با ما</h3>
                </div>
                <div class="footer-widget-contact-info">
                  <ul>
                    <li>
                      <div class="icon-box">
                        <span class="icon-call"></span>
                      </div>
                      <div class="text-box">
                        <p>
                          <a href="tel:2512353256">+880 123 45 67 89</a><br />
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="icon-box">
                        <span class="icon-envelope"></span>
                      </div>
                      <div class="text-box">
                        <p>
                          <a href="mailto:info@example.com">yourmail@gmail.com</a><br />
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="icon-box">
                        <span class="icon-pin"></span>
                      </div>
                      <div class="text-box">
                        <p>
                          ایران تهران خیابان ولیعصر <br />
                          خیابان هاشمی فر
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Single Footer Widget-->
          </div>
        </div>
      </div>
      <!-- End Footer Main -->

      <!--Start Footer Bottom-->
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom__inner">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="copyright-text">
                  <p>©Techlab 2024 | تمامی حقوق محفوظ است</p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 text-end">
                <div class="copyright-menu">
                  <ul>
                    <li><a href="about.html">شرایط و ضوابط</a></li>
                    <li><a href="about.html">سیاست حریم خصوصی</a></li>
                    <li><a href="contact.html">تماس با ما</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Footer Bottom -->
    </footer>
    <!-- End Footer One -->
  </div>

  <div class="search-popup">
    <div class="search-popup__overlay search-toggler">
      <div class="search-close-btn">
        <i class="icon-plus"></i>
      </div>
    </div>
    <div class="search-popup__content">
      <form action="#">
        <label for="search" class="sr-only">اینجا جستجو کنید</label>
        <input type="text" id="search" placeholder="اینجا جستجو کنید..." />
        <button type="submit" aria-label="ارسال جستجو" class="btn-one">
          <i class="icon-loupe"></i>
        </button>
      </form>
    </div>
  </div>


  <!-- JS here -->
  </div>
</template>

<style scoped>

</style>