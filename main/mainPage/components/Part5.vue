<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import 'odometer/themes/odometer-theme-default.css';
const odometerInstances: Odometer[] = [];
let observer: IntersectionObserver | null = null;

declare class Odometer {
  constructor(options: {
    el: HTMLElement;
    value?: number;
    format?: string;
    theme?: string;
    duration?: number;
  });
  update(value: number | string): void;
}

onMounted(async () => {
  try {
    const OdometerModule = await import('odometer')
    const Odometer = OdometerModule.default
    initCounters(Odometer)
    initAnimation()
  } catch (error) {
    console.error('Failed to load Odometer:', error)
  }
})

const initCounters = (Odometer: typeof window.Odometer) => {
  const odometerElements = document.querySelectorAll('.odometer')

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const count = el.dataset.count || '0';
        const od = new Odometer({
          el,
          value: 0,
          format: '(,ddd)',
          duration: 2000,
          theme: 'default'
        });

        od.update(count);
        odometerInstances.push(od);
        observer?.unobserve(el);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  })

  odometerElements.forEach(el => observer?.observe(el));
}

const initAnimation = () => {
}

onUnmounted(() => {
  observer?.disconnect();
  odometerInstances.length = 0;
})
</script>

<template>
  <!-- Start Fact Counter -->
  <section class="fact-counter-one">
    <div class="container">
      <div class="row">
        <!--Start Single Fact Counter-->
        <div
            class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
        >
          <div class="fact-counter-one__single">
            <div class="fact-counter-one__single-inner">
              <div class="icon">
                <span class="icon-team-member"></span>
              </div>
              <div class="outer-box">
                <div class="outer-box__inner">
                  <h2 class="count">
                    <span class="odometer" data-count="250" dir="ltr"></span>+
                  </h2>
                </div>
                <div class="title">
                  <p>اعضای تیم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End Single Fact Counter-->

        <!--Start Single Fact Counter-->
        <div
            class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="100ms"
        >
          <div class="fact-counter-one__single">
            <div class="fact-counter-one__single-inner">
              <div class="icon">
                <span class="icon-project-done"></span>
              </div>
              <div class="outer-box">
                <div class="outer-box__inner">
                  <h2 class="count">
                    <span class="odometer" data-count="850" dir="ltr"></span>+
                  </h2>
                </div>
                <div class="title">
                  <p>پروژه‌های انجام شده</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End Single Fact Counter-->

        <!--Start Single Fact Counter-->
        <div
            class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
        >
          <div class="fact-counter-one__single">
            <div class="fact-counter-one__single-inner">
              <div class="icon">
                <span class="icon-happy-clients"></span>
              </div>
              <div class="outer-box">
                <div class="outer-box__inner">
                  <h2 class="count">
                    <span class="odometer" data-count="360" dir="ltr"></span>+
                  </h2>
                </div>
                <div class="title">
                  <p>مشتریان راضی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End Single Fact Counter-->

        <!--Start Single Fact Counter-->
        <div
            class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="100ms"
        >
          <div class="fact-counter-one__single">
            <div class="fact-counter-one__single-inner">
              <div class="icon">
                <span class="icon-winning-award"></span>
              </div>
              <div class="outer-box">
                <div class="outer-box__inner">
                  <h2 data-text="160+" class="count">
                    <span class="odometer" data-count="160" dir="ltr"></span>+
                  </h2>
                </div>
                <div class="title">
                  <p>جوایز کسب شده</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End Single Fact Counter-->
      </div>
    </div>
  </section>
  <!-- End Fact Counter -->
</template>

<style scoped>

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-xl-3,
.col-lg-6,
.col-md-6 {
  flex: 0 0 25%;
  max-width: 25%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .col-xl-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 576px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.fact-counter-one__single {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fact-counter-one__single-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.outer-box {
  flex: 1;
}

</style>