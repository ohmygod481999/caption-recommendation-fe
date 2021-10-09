<template>
  <!--======================================
        START HERO AREA
======================================-->
  <section class="hero-area pt-40px pb-30px bg-white shadow-sm overflow-hidden">
    <span class="stroke-shape stroke-shape-1"></span>
    <span class="stroke-shape stroke-shape-2"></span>
    <span class="stroke-shape stroke-shape-3"></span>
    <span class="stroke-shape stroke-shape-4"></span>
    <span class="stroke-shape stroke-shape-5"></span>
    <span class="stroke-shape stroke-shape-6"></span>
    <div class="container">
      <div class="hero-content">
        <h2 class="section-title fs-24 mb-1">Duyệt bài.</h2>
        <p class="section-desc pb-4">
          Bạn là admin? Chọn những bài không vi phạm tiêu chuẩn cồng đồng để
          duyệt bạn nhé.
        </p>
        <ul
          class="
            nav nav-tabs
            generic-tabs generic-tabs-layout-2 generic--tabs-layout-2
          "
          id="myTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="jobs-tab"
              data-toggle="tab"
              href="#jobs"
              role="tab"
              aria-controls="jobs"
              aria-selected="true"
              >Caption chưa duyệt</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="companies-tab"
              data-toggle="tab"
              href="#companies"
              role="tab"
              aria-controls="companies"
              aria-selected="false"
              >Companies</a
            >
          </li>
        </ul>
      </div>
      <!-- end hero-content -->
    </div>
    <!-- end container -->
  </section>
  <!--======================================
        END HERO AREA
======================================-->
</template>