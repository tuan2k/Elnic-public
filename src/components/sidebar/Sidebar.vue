<template>
  <div>
    <div class="col-md-3 col-md-pull-9">
      <div class="h4 col-xs-b25">popular categories</div>
      <ul class="categories-menu">
        <li v-for="category in categories" :key="category._id">
          <a v-on:click="searchByCategory(category._id)">{{
            category.categoryName
          }}</a>
          <div class="toggle" />
          <ul>
            <li>
              <a href="">laptops &amp; computers</a>
            </li>
            <li>
              <a href="">video &amp; photo cameras</a>
            </li>
            <li>
              <a href="">smartphones</a>
            </li>
            <li>
              <a href="">tv &amp; audio</a>
            </li>
            <li>
              <a href="">gadgets</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="empty-space col-xs-b25 col-sm-b50" />
      <div class="row">
        <div class="col-sm-6 col-md-12">
          <div class="swiper-container banner-shortcode style-2">
            <div class="swiper-button-prev hidden" />
            <div class="swiper-button-next hidden" />
            <div class="swiper-wrapper">
              <div class="swiper-pagination" />
            </div>

            <div class="empty-space col-xs-b25 col-sm-b50" />
          </div>

          <div class="col-sm-6 col-md-12">
            <div class="h4 col-xs-b25">hot deal</div>
            <div
              class="product-shortcode style-4 clearfix"
              v-for="product in fourProducts"
              :key="product._id"
            >
              <a class="preview" href="">
                <img :src="product.productThambnail" alt="" />
              </a>
              <div class="description">
                <div class="simple-article color size-1 col-xs-b5">
                  <a href="#">{{ getNameCategory(product.categoriesId) }}</a>
                </div>
                <h6 class="h6 col-xs-b10">
                  <a href="#">{{ product.productName }}</a>
                </h6>
                <div class="simple-article dark">
                  {{ product.discountPrice }} VND
                </div>
              </div>
              <div class="col-xs-b10" />
            </div>
            <!-- <div class="product-shortcode style-4 clearfix">
              <a class="preview" href=""
                ><img src="/./img/product-28.jpg" alt=""
              /></a>
              <div class="description">
                <div class="simple-article color size-1 col-xs-b5">
                  <a href="#">WIRELESS</a>
                </div>
                <h6 class="h6 col-xs-b10">
                  <a href="#">wireless headphones</a>
                </h6>
                <div class="simple-article dark">$98.00</div>
              </div>
            </div>
            <div class="col-xs-b10" />
            <div class="product-shortcode style-4 clearfix">
              <a class="preview" href="#"
                ><img src="/./img/product-29.jpg" alt=""
              /></a>
              <div class="description">
                <div class="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 class="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                <div class="simple-article dark">$12.00</div>
              </div>
            </div>
            <div class="col-xs-b10" />
            <div class="product-shortcode style-4 clearfix">
              <a class="preview" href="#"
                ><img src="/./img/product-30.jpg" alt=""
              /></a>
              <div class="description">
                <div class="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 class="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                <div class="simple-article dark">$4.00</div>
              </div>
            </div>
            <div class="empty-space col-xs-b25 col-sm-b50" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";

export default {
  name: "ElnicSidebar",
  async created() {
    await this.allCategory();
    await this.getHotProduct();
    this.getFourHotProducts();
  },
  computed: {
    filtersearch() {
      return this.products.filter(product => {
        return product.productName.match(this.searchTerm);
      });
    }
  },
  data() {
    return {
      categories: [],
      searchTerm: "",
      hotProduct: [],
      fourProducts: []
    };
  },
  methods: {
    async allCategory() {
      await axios
        .get("https://elnic-api.herokuapp.com/api/categories")
        .catch(error => {
          console.log(error);
          // console.log(error.response.request.statusText);
        })
        .then(({ data }) => {
          this.categories = data;
          this.$store.state.categories = data;
        });
    },
    async getHotProduct() {
      await axios
        .get("https://elnic-api.herokuapp.com/api/product")
        .catch(error => {
          console.log(error);
          // console.log(error.response.request.statusText)
        })
        .then(({ data }) => {
          this.hotProduct = data.filter(obj => obj.hotDeal);
        });

      // console.log("hot product: ", this.hotProduct);
    },
    getFourHotProducts() {
      for (let index = 0; index < 4; index++) {
        this.fourProducts.push(this.hotProduct[index]);
      }
      // console.log(this.fourProducts);
    },
    getNameCategory(categoryId) {
      const category = this.categories.filter(obj => obj._id === categoryId);
      // console.log(category[0].categoryName);
      return category[0].categoryName;
    },
    searchByCategory(categoryId) {
      this.$store.state.categoryId = categoryId;
    }
  }
};
</script>
