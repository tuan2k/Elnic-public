<template>
  <div class="slider-wrapper">
    <div class="swiper-button-prev visible-lg"></div>
    <div class="swiper-button-next visible-lg"></div>
    <div class="swiper-container" data-parallax="1" data-auto-height="1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="sl in sliders" :key="sl._id">
          <div class="container">
            <div class="row" style="margin-left: 10px;margin-right: 10px;">
              <div class="col-sm-6">
                <div class="cell-view page-height">
                  <div class="col-xs-b40 col-sm-b80"></div>
                  <div data-swiper-parallax-x="-600">
                    <div class="simple-article grey size-5">
                      BEST PRICE <span class="color">$199.00</span>
                    </div>
                    <div class="col-xs-b5"></div>
                  </div>
                  <div data-swiper-parallax-x="-500">
                    <h1 class="h1">{{ sl.title }}</h1>
                    <div class="title-underline left"><span></span></div>
                  </div>
                  <div data-swiper-parallax-x="-400">
                    <div class="simple-article size-4 grey">
                      {{ sl.description }}
                    </div>
                    <div class="col-xs-b30"></div>
                  </div>
                  <div data-swiper-parallax-x="-300">
                    <div class="buttons-wrapper">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
<<<<<<< HEAD
                          <span class="icon"
                            ><img :src="sl.imgUrl" alt=""
                          /></span>
=======
                          <span class="icon">
                            <img
                              src="../../../static/images/elnic/icon-1.png"
                              alt=""
                            />
                          </span>
>>>>>>> 8d6adc108e619025f750252e12c4b58480bc6a03
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"
<<<<<<< HEAD
                            ><img :src="sl.imgUrl" alt=""
=======
                            ><img
                              src="../../../static/images/elnic/icon-3.png"
                              alt=""
>>>>>>> 8d6adc108e619025f750252e12c4b58480bc6a03
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-b40 col-sm-b80"></div>
                </div>
              </div>
            </div>
            <div class="slider-product-preview">
              <div class="product-preview-shortcode">
                <div class="preview">
<<<<<<< HEAD
                  <div class="swiper-lazy-preloader"></div>
                  <div
                    class="entry full-size swiper-lazy active"
                    :data-background="sl.imgUrl"
                  ></div>
                  <div
                    class="entry full-size swiper-lazy"
                    :data-background="sl.imgUrl"
                  ></div>
                  <div
                    class="entry full-size swiper-lazy"
                    :data-background="sl.imgUrl"
                  ></div>
=======
                  <div class="entry full-size swiper-lazy active">
                    <img :src="sl.imgUrl" style="width:300px;height:300px;" />
                  </div>
>>>>>>> 8d6adc108e619025f750252e12c4b58480bc6a03
                </div>
                <div
                  class="sidebar valign-middle"
                  data-swiper-parallax-x="-300"
                >
                  <div class="valign-middle-content">
                    <div class="entry active">
                      <img :src="sl.imgUrl" alt="" />
                    </div>
                    <div class="entry">
                      <img :src="sl.imgUrl" alt="" />
                    </div>
                    <div class="entry">
                      <img :src="sl.imgUrl" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slider",
  mounted() {
    this.$store.dispatch("getSliders");
  },
  computed: {
    sliders: {
      get() {
        return this.$store.state.sliders;
      }
    }
  }
};
</script>
