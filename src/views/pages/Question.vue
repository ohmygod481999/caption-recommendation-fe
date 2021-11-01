<template>
  <!-- ================================
         START QUESTION AREA
================================= -->
  <section class="question-area pt-80px pb-40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="sidebar pb-45px position-sticky top-0 mt-2">
            <ul class="generic-list-item generic-list-item-highlight fs-15">
              <li class="lh-26 active">
                <a href="home-2.html"
                  ><i class="la la-home mr-1 text-black"></i> Caption</a
                >
              </li>
              <li class="lh-26">
                <a href="category.html"
                  ><i class="la la-dumbbell mr-1 text-black"></i> Thả thính</a
                >
              </li>
              <li class="lh-26">
                <a href="category.html"
                  ><i class="la la-pencil mr-1 text-black"></i> Lời chúc</a
                >
              </li>
            </ul>
          </div>
          <!-- end sidebar -->
        </div>
        <!-- end col-lg-2 -->
        <div class="col-lg-7">
          <div class="question-tabs mb-50px">
            <ul
              class="nav nav-tabs generic-tabs justify-content-around"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="questions-tab"
                  data-toggle="tab"
                  href="#questions"
                  role="tab"
                  aria-controls="questions"
                  aria-selected="true"
                  >Khám phá</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="tags-tab"
                  data-toggle="tab"
                  href="#tags"
                  role="tab"
                  aria-controls="tags"
                  aria-selected="false"
                  >Tags</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="users-tab"
                  data-toggle="tab"
                  href="#users"
                  role="tab"
                  aria-controls="users"
                  aria-selected="false"
                  >Thành viên tích cực</a
                >
              </li>
            </ul>
            <div class="tab-content pt-40px" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="questions"
                role="tabpanel"
                aria-labelledby="questions-tab"
              >
                <div
                  class="
                    filters
                    d-flex
                    align-items-center
                    justify-content-between
                    pb-4
                  "
                >
                  <h3 class="fs-17 fw-medium">Caption mới nhất</h3>
                  <div class="filter-option-box w-20">
                    <select class="select-container">
                      <option value="newest" selected="selected">Newest</option>
                      <option value="featured">Bountied (390)</option>
                      <option value="frequent">Frequent</option>
                      <option value="votes">Votes</option>
                      <option value="active">Active</option>
                      <option value="unanswered">Unanswered</option>
                      <option value="Votes">Votes</option>
                    </select>
                  </div>
                  <!-- end filter-option-box -->
                </div>
                <!-- end filters -->
                <div class="question-main-bar">
                  <!-- <transition name="fade">
                    <div class="loading" v-if="showloader">
                      <span class="fa fa-spinner fa-spin"></span> Loading
                    </div>
                  </transition> -->
                  <div class="questions-snippet" id="infinite-list">
                    <div
                      class="media media-card media--card align-items-center"
                      v-for="caption in captions"
                      :key="caption.id"
                    >
                      <div class="votes">
                        <div
                          class="
                            vote-block
                            d-flex
                            align-items-center
                            justify-content-between
                          "
                          title="Votes"
                        >
                          <span class="vote-counts">0</span>
                          <span class="vote-icon"></span>
                        </div>
                        <div
                          class="
                            answer-block
                            d-flex
                            align-items-center
                            justify-content-between
                          "
                          title="Answers"
                        >
                          <span class="vote-counts">0</span>
                          <span class="answer-icon"></span>
                        </div>
                      </div>
                      <div class="media-body">
                        <h5>
                          <router-link to="/question-details">{{
                            caption.content
                          }}</router-link>
                        </h5>
                        <small class="meta">
                          <span class="pr-1">1 hour ago</span>
                          <a href="user-profile.html" class="author">edublog</a>
                        </small>
                        <div class="tags">
                          <a href="#" class="tag-link">css</a>
                          <a href="#" class="tag-link">bootstrap-4</a>
                          <a href="#" class="tag-link">grid</a>
                          <a href="#" class="tag-link">resize</a>
                        </div>
                      </div>
                    </div>
                    <!-- end media -->
                    <infinite-loading spinner="bubbles" @infinite="infiniteHandler">
                    </infinite-loading>
                  </div>
                  <!-- end questions-snippet -->
                </div>
                <!-- end question-main-bar -->
              </div>

              <div
                class="tab-pane fade"
                id="tags"
                role="tabpanel"
                aria-labelledby="tags-tab"
              >
                <div class="filters pb-4">
                  <h3 class="fs-17 fw-medium pb-2">Tags</h3>
                  <p class="fs-15 lh-24 pb-4">
                    A tag is a keyword or label that categorizes your question
                    with other, similar questions. Using the right tags makes it
                    easier for others to find and answer your question.
                  </p>
                  <div
                    class="
                      d-flex
                      flex-wrap
                      align-items-center
                      justify-content-between
                    "
                  >
                    <form method="post" class="flex-grow-1 mr-3">
                      <div class="form-group mb-0">
                        <input
                          class="
                            form-control form--control form-control-sm
                            h-auto
                            lh-34
                          "
                          type="text"
                          name="search"
                          placeholder="Filter by tag name..."
                        />
                        <button class="form-btn" type="button">
                          <i class="la la-search"></i>
                        </button>
                      </div>
                    </form>
                    <div class="filter-option-box w-20">
                      <select class="select-container mt-2">
                        <option value="popular" selected="selected">
                          Popular
                        </option>
                        <option value="name">Name</option>
                        <option value="new">New</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- end filters -->
                <div class="tags-main-bar">
                  <div class="tags-snippet">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >javascript</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              For questions regarding programming in ECMAScript
                              (JavaScript/JS) and its various
                              dialects/implementations (excluding ActionScript).
                              Please include all relevant tags on your question;
                              e.g., [node.js],…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >java</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a high-level programming language. Use this tag
                              when you're having problems using or understanding
                              the language itself. This tag is rarely used alone
                              and is most often used in conjunction with…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >python</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a multi-paradigm, dynamically typed, multipurpose
                              programming language. It is designed to be quick
                              to learn, understand, and use, and enforce a clean
                              and uniform syntax. Please note that Pyt…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >c#</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a high level, statically typed, multi-paradigm
                              programming language developed by Microsoft. C#
                              code usually targets Microsoft's .NET family of
                              tools and run-times, which…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >php</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a widely used, high-level, dynamic,
                              object-oriented, and interpreted scripting
                              language primarily designed for server-side web
                              development. Used for questions about the PHP
                              language.
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >android</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              Google's mobile operating system, used for
                              programming or developing digital devices
                              (Smartphones, Tablets, Automobiles, TVs, Wear,
                              Glass, IoT). For topics related to Android, use
                              Android-s…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >html</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              the markup language for creating web pages and
                              other information to be displayed in a web
                              browser. Questions regarding HTML should include a
                              minimal reproducible ex…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >jquery</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a JavaScript library, consider also adding the
                              JavaScript tag. jQuery is a popular cross-browser
                              JavaScript library that facilitates Document
                              Object Model (DOM) traversal, event handling…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >c++</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a general-purpose programming language. It was
                              originally designed as an extension to C and has a
                              similar syntax, but it is now a completely
                              different language. Use this tag for questions
                              about…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-6">
                        <div class="card card-item">
                          <div class="card-body">
                            <div class="tags pb-1">
                              <a
                                href="#"
                                class="tag-link tag-link-md tag-link-blue"
                                >css</a
                              >
                            </div>
                            <p
                              class="
                                card-text
                                fs-14
                                truncate-4
                                lh-24
                                text-black-50
                              "
                            >
                              a representation style sheet language used for
                              describing the look and formatting of HTML
                              (HyperText Markup Language), XML (Extensible
                              Markup Language) documents and SV…
                            </p>
                            <div
                              class="
                                d-flex
                                tags-info
                                fs-14
                                pt-3
                                border-top border-top-gray
                                mt-3
                              "
                            >
                              <p class="pr-1 lh-18">2177849 questions</p>
                              <p class="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          <!-- end card-body -->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end col-lg-6 -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end tags-snippet -->
                  <div
                    class="
                      pager
                      d-flex
                      align-items-center
                      justify-content-between
                      pt-10px
                      pb-30px
                    "
                  >
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul class="pagination generic-pagination pr-1">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true"
                                ><i class="la la-arrow-left"></i
                              ></span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">1</a>
                          </li>
                          <li class="page-item active">
                            <a class="page-link" href="#">2</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">3</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">4</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true"
                                ><i class="la la-arrow-right"></i
                              ></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p class="fs-13 pt-3">
                        Showing 1-10 results of 50,577 tags
                      </p>
                    </div>
                    <div class="filter-option-box w-20">
                      <select class="select-container">
                        <option selected="" value="10">10 per page</option>
                        <option value="20">20 per page</option>
                        <option value="30">30 per page</option>
                        <option value="40">40 per page</option>
                        <option value="50">50 per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- end tags-main-bar -->
              </div>
              <!-- end tab-pane -->
              <div
                class="tab-pane fade"
                id="users"
                role="tabpanel"
                aria-labelledby="users-tab"
              >
                <div class="filters pb-4">
                  <div
                    class="
                      d-flex
                      flex-wrap
                      align-items-center
                      justify-content-between
                    "
                  >
                    <form method="post" class="flex-grow-1 mr-3">
                      <div class="form-group mb-0">
                        <input
                          class="
                            form-control form--control form-control-sm
                            h-auto
                            lh-34
                          "
                          type="text"
                          name="search"
                          placeholder="Filter by user..."
                        />
                        <button class="form-btn" type="button">
                          <i class="la la-search"></i>
                        </button>
                      </div>
                    </form>
                    <div class="filter-option-box w-20 mt-2">
                      <select class="select-container">
                        <option value="reputation" selected="selected">
                          Reputation
                        </option>
                        <option value="new-users">New users</option>
                        <option value="voters">Voters</option>
                        <option value="editors">Editors</option>
                        <option value="moderators">Moderators</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- end filters -->
                <div class="users-main-bar">
                  <div class="users-snippet">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/longvb.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Vương Bảo Long</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200 captions
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-6 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Barmar</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">CertainPerformance</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">mck</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">LoicTheAztec</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Günter Zöchbauer</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Suragch</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Martijn Pieters</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Frank van Puffelen</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Igor Goyda</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Sector labs</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Barmar</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">CertainPerformance</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">mck</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">LoicTheAztec</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Günter Zöchbauer</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Suragch</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Martijn Pieters</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Frank van Puffelen</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                      <div class="col-lg-12">
                        <div class="media media-card p-3">
                          <a href="#" class="media-img d-inline-block">
                            <img
                              src="../../assets/images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div class="media-body">
                            <h5 class="fs-16 fw-medium">
                              <a href="user-profile.html">Igor Goyda</a>
                            </h5>
                            <small class="meta d-block lh-24 pb-1"
                              ><span>New York, United States</span></small
                            >
                            <p class="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          <!-- end media-body -->
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col-lg-12 -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end users-snippet -->
                  <div
                    class="
                      pager
                      d-flex
                      align-items-center
                      justify-content-between
                      pt-10px
                      pb-30px
                    "
                  >
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul class="pagination generic-pagination pr-1">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true"
                                ><i class="la la-arrow-left"></i
                              ></span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">1</a>
                          </li>
                          <li class="page-item active">
                            <a class="page-link" href="#">2</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">3</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">4</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true"
                                ><i class="la la-arrow-right"></i
                              ></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p class="fs-13 pt-3">
                        Showing 1-20 results of 50,577 users
                      </p>
                    </div>
                    <div class="filter-option-box w-20">
                      <select class="select-container">
                        <option value="10">10 per page</option>
                        <option selected="" value="20">20 per page</option>
                        <option value="30">30 per page</option>
                        <option value="40">40 per page</option>
                        <option value="50">50 per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- end users-main-bar -->
              </div>
              <!-- end tab-pane -->
            </div>
            <!-- end tab-content -->
          </div>
          <!-- end question-tabs -->
        </div>
        <!-- end col-lg-7 -->
        <div class="col-lg-3">
          <div class="sidebar">
            <div class="card card-item">
              <div class="card-body">
                <h3 class="fs-17 pb-3">Related Captions</h3>
                <div class="divider"><span></span></div>
                <div class="sidebar-questions pt-3">
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >Using web3 to call precompile contract</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">2 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Sudhir Kumbhare</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >Is it true while finding Time Complexity of the
                          algorithm [closed]</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">48 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">wimax</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >image picker and store them into firebase with
                          flutter</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">1 hour ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Antonin gavrel</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                </div>
                <!-- end sidebar-questions -->
              </div>
            </div>
            <!-- end card -->
            <div class="card card-item">
              <div class="card-body">
                <h3 class="fs-17 pb-3">Trending Captions</h3>
                <div class="divider"><span></span></div>
                <div class="sidebar-questions pt-3">
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >How did chickenpox get its name?</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">2 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Sudhir Kumbhare</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >How can you cut an onion without crying?</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">48 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">wimax</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5>
                        <router-link to="/question-details"
                          >Does flu vaccine protect against
                          Coronavirus?</router-link
                        >
                      </h5>
                      <small class="meta">
                        <span class="pr-1">1 hour ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Antonin gavrel</a>
                      </small>
                    </div>
                  </div>
                  <!-- end media -->
                </div>
                <!-- end sidebar-questions -->
              </div>
            </div>
            <!-- end card -->
            <div class="card card-item">
              <div class="card-body">
                <h3 class="fs-17 pb-3">Trending Tags</h3>
                <div class="divider"><span></span></div>
                <div class="tags pt-4">
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">analytics</a>
                    <span class="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  <!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">computer</a>
                    <span class="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  <!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">python</a>
                    <span class="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  <!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">javascript</a>
                    <span class="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  <!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">c#</a>
                    <span class="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  <!-- end tag-item -->
                  <div class="collapse" id="showMoreTags">
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">java</a>
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">swift</a>
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">html</a>
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">angular</a>
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">flutter</a>
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md"
                        >machine-language</a
                      >
                      <span class="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    <!-- end tag-item -->
                  </div>
                  <!-- end collapse -->
                  <a
                    class="collapse-btn fs-13"
                    data-toggle="collapse"
                    href="#showMoreTags"
                    role="button"
                    aria-expanded="false"
                    aria-controls="showMoreTags"
                  >
                    <span class="collapse-btn-hide"
                      >Show more<i class="la la-angle-down ml-1 fs-11"></i
                    ></span>
                    <span class="collapse-btn-show"
                      >Show less<i class="la la-angle-up ml-1 fs-11"></i
                    ></span>
                  </a>
                </div>
              </div>
            </div>
            <!-- end card -->
            <div class="ad-card">
              <h4 class="text-gray text-uppercase fs-13 pb-3 text-center">
                Advertisements
              </h4>
              <div class="ad-banner mb-4 mx-auto">
                <span class="ad-text">290x500</span>
              </div>
            </div>
            <!-- end ad-card -->
          </div>
          <!-- end sidebar -->
        </div>
        <!-- end col-lg-3 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- end question-area -->
  <!-- ================================
         END QUESTION AREA
================================= -->
</template>
<script>
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading"
export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      captions: [],
      errors: [],
      page: 1,
      lastPage: 0,
      isInit: true
    };
  },
  created: function(){
      this.fetchCaptions()
          .then(response => {
            if (response.data.length > 0) {
              this.captions = response.data;
              this.isInit = false;
            }else{
              console.log('No users found.');
            }
          })
          .catch(e => console.log(e))
  },
  methods: {
    // loadMore() {
    //   this.loading = true;
    //   setTimeout(e => {
    //     for (var i = 1; i < 20; i++) {
    //       axios.get(`http://localhost:3000/captions?_limit=20&_page=${i}`)
    //       .then((res)=>{
    //         this.captions = res.data;
    //         console.log(e);
    //       }).catch(error=>{
    //         console.log(error);
    //       })
    //     }
    //     this.loading = false;
    //   }, 200);
    // },
    fetchCaptions: function() {
      let isInit = this.isInit;
        let url = isInit 
                ? `http://localhost:3000/captions`
                :`http://localhost:3000/captions?_limit=20&_page=${this.page}` ;
                
        return axios.get(url);
      },
      
      infiniteHandler: function($state) {
          setTimeout(function () {
            this.fetchCaptions()
                .then(response => {
                    if (response.data.length > 0) {
                      this.lastPage = response.data.length;
                      if (this.page -1 === this.lastPage) {
                        this.page = 2;
                        $state.complete();
                      } else {
                        this.page += 1;
                      }
                      $state.loaded();
                    } else {
                      this.page = 2;
                      $state.complete();
                    }
                })
                .catch(e => console.log(e));
            }.bind(this), 1000);
      }
  },
};
</script>


