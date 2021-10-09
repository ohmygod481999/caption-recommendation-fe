<template>
  <!--======================================
        START HERO AREA
======================================-->
  <section class="hero-area pt-80px pb-80px hero-bg-1">
    <div class="overlay"></div>
    <span class="stroke-shape stroke-shape-1"></span>
    <span class="stroke-shape stroke-shape-2"></span>
    <span class="stroke-shape stroke-shape-3"></span>
    <span class="stroke-shape stroke-shape-4"></span>
    <span class="stroke-shape stroke-shape-5"></span>
    <span class="stroke-shape stroke-shape-6"></span>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9">
          <div class="hero-content">
            <h2 class="section-title pb-3 text-white">
              Bạn yêu thích mạng xã hội?
            </h2>
            <p class="section-desc text-white">
              Bạn chụp được một bức ảnh đẹp nhưng không biết để caption là gì
              <br />
              hay chỉ đơn giản bạn thích những câu nói hay và hài hước. Recap sẽ
              giúp bạn
            </p>
            <div class="hero-btn-box py-4">
              <router-link
                to="/askquestion"
                class="btn theme-btn theme-btn-white"
                >Khám phá ngay <i class="la la-arrow-right icon ml-1"></i
              ></router-link>
            </div>
          </div>
          <!-- end hero-content -->
        </div>
        <!-- end col-lg-9 -->
        <div class="col-lg-3">
          <div class="hero-list hero-list-bg">
            <div class="d-flex align-items-center pb-30px">
              <img
                src="../../assets/images/anonymousHeroQuestions.svg"
                alt="question icon"
                class="mr-3"
              />
              <p class="fs-15 text-white lh-20">Tuyển chọn những caption hay</p>
            </div>
            <div class="d-flex align-items-center pb-30px">
              <img
                src="../../assets/images/anonymousHeroAnswers.svg"
                alt="question answer icon"
                class="mr-3"
              />
              <p class="fs-15 text-white lh-20">Cộng đồng lớn</p>
            </div>
            <div class="d-flex align-items-center">
              <img
                src="../../assets/images/anonymousHeroUpvote.svg"
                alt="vote icon"
                class="mr-3"
              />
              <p class="fs-15 text-white lh-20">
                Hệ thống recommend caption cho bức ảnh của bạn
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!--======================================
        END HERO AREA
======================================-->
</template>