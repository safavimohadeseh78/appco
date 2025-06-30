<template>
  <div class=" body-dark-bg" dir="rtl">
    <Header/>
    <!-- شروع صفحه تماس -->
    <section class="contact-page">
      <div class="container">
        <div class="row">
          <!-- شروع فرم صفحه تماس -->
          <div class="col-xl-8 col-lg-8">
            <div class="contact-page__form">
              <div class="title-box">
                <h2>پیام خود را برای ما ارسال کنید</h2>
              </div>
              <form
                  id="contact-form"
                  action="https://figtheme.com/html/techlab/assets/mail.php"
                  method="POST"
              >
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input
                          type="text"
                          name="name"
                          placeholder="نام شما"
                          required=""
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input
                          type="email"
                          name="email"
                          placeholder="ایمیل شما"
                          required=""
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input
                          type="number"
                          placeholder="شماره تماس"
                          name="number"
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" placeholder="شرکت" name="company" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="input-box">
                      <textarea name="message" placeholder="پیام"></textarea>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-page__form-btn">
                      <button
                          class="button-style-1"
                          type="submit"
                          data-loading-text="لطفا صبر کنید..."
                      >
                        ارسال پیام
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p class="ajax-response mb-0"></p>
            </div>
          </div>
          <!-- پایان فرم تماس -->

          <!-- شروع اطلاعات تماس صفحه -->
          <div class="col-xl-4 col-lg-4">
            <div class="contact-page__contact-info">
              <div class="title-box">
                <h2>با ما در ارتباط باشید</h2>
                <p>
                  این یک واقعیت ثابت شده است که یک خواننده در طراحی محتوای
                  خواندنی ممکن است حواسش پرت شود.
                </p>
              </div>

              <ul>
                <li>
                  <div class="icon-box">
                    <span class="icon-pin"></span>
                  </div>
                  <div class="text-box">
                    <h3>آدرس</h3>
                    <p>تهران، خیابان شریعتی، خیابان اندیشه، پلاک 45</p>
                  </div>
                </li>

                <li>
                  <div class="icon-box">
                    <span class="icon-envelope"></span>
                  </div>
                  <div class="text-box">
                    <h3>آدرس ایمیل</h3>
                    <p>
                      <a href="mailto:yourmail@email.com"
                      >info@yourmail.com</a
                      >
                    </p>
                  </div>
                </li>

                <li>
                  <div class="icon-box">
                    <span class="icon-call"></span>
                  </div>
                  <div class="text-box">
                    <h3>شماره تلفن</h3>
                    <p><a href="tel:98210009630">+98 21-0000-0000</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- پایان اطلاعات تماس -->
        </div>
      </div>
    </section>
    <!-- پایان صفحه تماس -->
    <Footer/>
  </div>
</template>

<script setup>

</script>
