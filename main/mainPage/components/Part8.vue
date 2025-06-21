<script setup>
import { onMounted, ref, nextTick } from 'vue'

const isotopeInstance = ref(null)

onMounted(async () => {
  await nextTick()

  const { default: Isotope } = await import('isotope-layout')

  const grid = document.querySelector('.filter-layout')
  if (!grid) return

  isotopeInstance.value = new Isotope(grid, {
    itemSelector: '.filter-item',
    layoutMode: 'fitRows',
  })

  document.querySelectorAll('.project-filter li').forEach((filter) => {
    filter.addEventListener('click', function () {
      document.querySelectorAll('.project-filter li').forEach((f) => f.classList.remove('active'))
      this.classList.add('active')
      isotopeInstance.value?.arrange({ filter: this.getAttribute('data-filter') })
    })
  })
})
</script>

<template>
  <section class="projects-two body-dark-bg mt-[8rem]">
    <div class="container">
      <div class="projects-two__top">
        <div class="section-title tg-heading-subheading animation-style2">
          <h5 class="tg-element-title">پروژه‌های ما</h5>
          <h2 class="tg-element-title">
            تقویت فردای دیجیتال شما <br />
          </h2>
        </div>
        <div class="btn-box">
          <a class="button-style-1" href="project.html"> پروژه‌های بیشتر </a>
        </div>
      </div>
      <div class="row">
        <!-- Start Projects Two Menu Box-->
        <div class="col-xl-3 col-lg-4">
          <div class="projects-two__menu-box">
            <ul class="project-filter clearfix post-filter has-dynamic-filters-counter">
              <li data-filter=".filter-item" class="active">
                <span class="filter-text">
                  همه پروژه‌ها <i class="icon-long-right-arrow"></i>
                </span>
              </li>
              <li data-filter=".insights">
                <span class="filter-text">
                  بینش‌های هوش مصنوعی <i class="icon-long-right-arrow"></i>
                </span>
              </li>
              <li data-filter=".security">
                <span class="filter-text">
                  امنیت فناوری <i class="icon-long-right-arrow"></i>
                </span>
              </li>
              <li data-filter=".blockchain">
                <span class="filter-text">
                  فورج بلاک‌چین <i class="icon-long-right-arrow"></i>
                </span>
              </li>
              <li data-filter=".consulting">
                <span class="filter-text">
                  مشاوره دیجیتال <i class="icon-long-right-arrow"></i>
                </span>
              </li>
              <li data-filter=".innovate">
                <span class="filter-text">
                  نوآوری سریع اپلیکیشن <i class="icon-long-right-arrow"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- End Projects Two Menu Box-->

        <!-- Start Projects Two Content-->
        <div class="col-xl-9 col-lg-8">
          <div class="projects-two__content">
            <div class="row filter-layout masonary-layout">
              <!-- Start Projects Two Single-->
              <div class="col-xl-6 col-lg-6 col-md-6 filter-item innovate blockchain">
                <div class="projects-two__single wow fadeInLeft" data-wow-delay=".1s">
                  <div class="projects-two__single-img">
                    <img src="@/rtl/assets/img/project/project-2-1.jpg" alt="" />
                    <div class="projects-two__link">
                      <a class="img-popup" href="@/rtl/assets/img/project/project-2-1.jpg">
                        <span class="icon-plus"></span>
                      </a>
                    </div>
                  </div>
                  <div class="projects-two__single-content">
                    <h2>
                      <a href="project-details.html">پروژه جهش کوانتومی</a>
                    </h2>
                    <p> فناوری اینفینیتی</p>
                  </div>
                </div>
              </div>
              <!-- End Projects Two Single-->

              <!-- Start Projects Two Single-->
              <div class="col-xl-6 col-lg-6 col-md-6 filter-item consulting insights innovate">
                <div class="projects-two__single wow fadeInRight" data-wow-delay=".1s">
                  <div class="projects-two__single-img">
                    <img src="@/rtl/assets/img/project/project-2-2.jpg" alt="" />
                    <div class="projects-two__link">
                      <a class="img-popup" href="@/rtl/assets/img/project/project-2-2.jpg">
                        <span class="icon-plus"></span>
                      </a>
                    </div>
                  </div>
                  <div class="projects-two__single-content">
                    <h2>
                      <a href="project-details.html">پروژه ادغام سایبری</a>
                    </h2>
                    <p>بایت کرفترز</p>
                  </div>
                </div>
              </div>
              <!-- End Projects Two Single-->

              <!-- Start Projects Two Single-->
              <div class="col-xl-6 col-lg-6 col-md-6 filter-item consulting security blockchain innovate">
                <div class="projects-two__single wow fadeInLeft" data-wow-delay=".1s">
                  <div class="projects-two__single-img">
                    <img src="@/rtl/assets/img/project/project-2-3.jpg" alt="" />
                    <div class="projects-two__link">
                      <a class="img-popup" href="@/rtl/assets/img/project/project-2-3.jpg">
                        <span class="icon-plus"></span>
                      </a>
                    </div>
                  </div>
                  <div class="projects-two__single-content">
                    <h2>
                      <a href="project-details.html">پروژه افق ابری</a>
                    </h2>
                    <p>تکنولوژی موج داده</p>
                  </div>
                </div>
              </div>
              <!-- End Projects Two Single-->

              <!-- Start Projects Two Single-->
              <div class="col-xl-6 col-lg-6 col-md-6 filter-item innovate blockchain consulting">
                <div class="projects-two__single wow fadeInRight" data-wow-delay=".1s">
                  <div class="projects-two__single-img">
                    <img src="@/rtl/assets/img/project/project-2-4.jpg" alt="" />
                    <div class="projects-two__link">
                      <a class="img-popup" href="@/rtl/assets/img/project/project-2-4.jpg">
                        <span class="icon-plus"></span>
                      </a>
                    </div>
                  </div>
                  <div class="projects-two__single-content">
                    <h2>
                      <a href="project-details.html">پروژه بندر داده</a>
                    </h2>
                    <p>راه حل کوانتومی</p>
                  </div>
                </div>
              </div>
              <!-- End Projects Two Single-->
            </div>
          </div>
        </div>
        <!-- End Projects Two Content-->
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>