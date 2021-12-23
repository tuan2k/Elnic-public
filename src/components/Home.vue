<template>
  <div>
    <div class="col-md-9 col-md-push-3">
      <div class="tabs-block">
        <div class="empty-space col-xs-b10" />
        <div class="tab-entry visible">
          <div class="row nopadding">
            <label>Filter Auto Complete</label>
            <VueInfiniteAutocomplete
              :data-source="currentOptions"
              :value="currentValue"
              :fetch-size="10"
              v-on:select="handleOnSelect"
            ></VueInfiniteAutocomplete>
            <div
              class="col-sm-4"
              v-for="product in filtersearch"
              :key="product._id"
            >
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5">
                    <a href="">{{ getNameCategory(product.categoriesId) }}</a>
                  </div>
                  <div class="h6 animate-to-green">
                    <router-link :to="{
                          name: 'product-detail',
                          params: { id: product._id }
                        }">{{ product.productName }}</router-link>
                  </div>
                </div>
                <div class="preview">
                  <img
                    :src="product.productThambnail"
                    alt=""
                    style="weight:200px;height:200px"
                  />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <router-link
                        class="button size-2 style-2"
                        :to="{
                          name: 'product-detail',
                          params: { id: product._id }
                        }"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-1.png"
                              alt=""
                          /></span>
                          <span class="text">Learn More</span>
                        </span>
                      </router-link>
                      <p
                        class="button size-2 style-3"
                        v-on:click="addToCart(product)"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-3.png"
                              alt=""
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">
                    {{ product.sellingPrice }} VND
                  </div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">
                    {{ product.shortDescp }}
                  </div>
                  <!-- <div class="icons">
                    <a class="entry"
                      ><i class="fa fa-check" aria-hidden="true"
                    /></a>
                    <a class="entry open-popup" data-rel="3"
                      ><i class="fa fa-eye" aria-hidden="true"
                    /></a>
                    <a class="entry"
                      ><i class="fa fa-heart-o" aria-hidden="true"
                    /></a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-space col-xs-b35 col-md-b70" />
      <div class="paginationheo">
        <p
          v-on:click="getProByPage(1)"
          class="btn btn-primary"
          style="background-color: #b8cd06; border-color: #b8cd06;"
        >
          &laquo;
        </p>
        <span v-for="(p, index) in pg" :key="p">
          <p
            href="#"
            class="active btn btn-primary"
            style="background-color: #b8cd06; border-color: #b8cd06;"
            v-on:click="getProByPage(index + 1)"
          >
            {{ index + 1 }}
          </p>
        </span>
        <p
          v-on:click="getProByPage(pg.length)"
          class="btn btn-primary"
          style="background-color: #b8cd06; border-color: #b8cd06;"
        >
          &raquo;
        </p>
      </div>
      <div class="empty-space col-xs-b35 col-md-b70" />
      <div class="tabs-block">
        <div class="row">
          <div class="col-lg-4 col-xs-b15 col-lg-b0">
            <div class="h4">best proposes</div>
          </div>
          <div class="col-lg-8">
            <div class="tabulation-menu-wrapper col-lg-text-right">
              <div class="tabulation-title simple-input">all</div>
              <ul class="tabulation-toggle">
                <li><a class="tab-menu active">all</a></li>
                <li><a class="tab-menu">featured</a></li>
                <li><a class="tab-menu">on sale</a></li>
                <li><a class="tab-menu">top rated</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="empty-space col-xs-b15 col-sm-b30" />
        <div class="tab-entry visible">
          <div class="row nopadding">
            <div class="col-sm-4" v-for="all in getAll" :key="all._id">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5">
                    <a href="#">{{ getNameCategory(all.categoriesId) }}</a>
                  </div>
                  <div class="h6 animate-to-green">
                    <a href="#">{{ all.productName }}</a>
                  </div>
                </div>
                <div class="preview">
                  <img
                    :src="all.productThambnail"
                    alt=""
                    style="height:120px"
                  />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <router-link
                          class="button-wrapper"
                          :to="{
                            name: 'product-detail',
                            params: { id: all._id }
                          }"
                        >
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-1.png"
                              alt=""
                          /></span>
                          <span class="text">Learn More</span>
                        </router-link>
                      </a>
                      <p
                        class="button size-2 style-3"
                        v-on:click="addToCart(all)"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-3.png"
                              alt=""
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #a7f050;" />
                    <div class="entry" style="color: #50e3f0;" />
                    <div class="entry" style="color: #eee;" />
                  </div>
                  <div class="simple-article size-4 dark">
                    {{ all.sellingPrice }}
                  </div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">
                    {{ all.shortDescp }}
                  </div>
                  <div class="icons">
                    <a class="entry"
                      ><i class="fa fa-check" aria-hidden="true"
                    /></a>
                    <a class="entry open-popup" data-rel="3"
                      ><i class="fa fa-eye" aria-hidden="true"
                    /></a>
                    <a class="entry"
                      ><i class="fa fa-heart-o" aria-hidden="true"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4" v-for="fea in getFeature" :key="fea._id">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5">
                    <a href="#">{{ getNameCategory(fea.categoriesId) }}</a>
                  </div>
                  <div class="h6 animate-to-green">
                    <a href="#">{{ fea.productName }}</a>
                  </div>
                </div>
                <div class="preview">
                  <img
                    :src="fea.productThambnail"
                    alt=""
                    style="height:120px"
                  />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <router-link
                        class="button size-2 style-2"
                        :to="{
                          name: 'product-detail',
                          params: { id: fea._id }
                        }"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-1.png"
                              alt=""
                          /></span>
                          <span class="text">Learn More</span>
                        </span>
                      </router-link>
                      <p
                        class="button size-2 style-3"
                        v-on:click="addToCart(all)"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-3.png"
                              alt=""
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">
                    {{ fea.sellingPrice }}
                  </div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">
                    Mollis nec consequat at In feugiat mole stie tortor a
                    malesuada
                  </div>
                  <div class="icons">
                    <a class="entry"
                      ><i class="fa fa-check" aria-hidden="true"
                    /></a>
                    <a class="entry open-popup" data-rel="3"
                      ><i class="fa fa-eye" aria-hidden="true"
                    /></a>
                    <a class="entry"
                      ><i class="fa fa-heart-o" aria-hidden="true"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4" v-for="ons in getOnsale" :key="ons._id">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5">
                    <a href="#">{{ getNameCategory(ons.categoriesId) }}</a>
                  </div>
                  <div class="h6 animate-to-green">
                    <a href="#">{{ ons.productName }}</a>
                  </div>
                </div>
                <div class="preview">
                  <img
                    :src="ons.productThambnail"
                    alt=""
                    style="height:120px"
                  />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <router-link
                        class="button size-2 style-2"
                        :to="{
                          name: 'product-detail',
                          params: { id: ons._id }
                        }"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-1.png"
                              alt=""
                          /></span>
                          <span class="text">Learn More</span>
                        </span>
                      </router-link>
                      <p
                        class="button size-2 style-3"
                        v-on:click="addToCart(ons)"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-3.png"
                              alt=""
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #a7f050;" />
                    <div class="entry" style="color: #50e3f0;" />
                    <div class="entry" style="color: #eee;" />
                  </div>
                  <div class="simple-article size-4 dark">
                    {{ ons.sellingPrice }}
                  </div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">
                    Mollis nec consequat at In feugiat mole stie tortor a
                    malesuada
                  </div>
                  <div class="icons">
                    <a class="entry"
                      ><i class="fa fa-check" aria-hidden="true"
                    /></a>
                    <a class="entry open-popup" data-rel="3"
                      ><i class="fa fa-eye" aria-hidden="true"
                    /></a>
                    <a class="entry"
                      ><i class="fa fa-heart-o" aria-hidden="true"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4" v-for="top in getTopRate" :key="top._id">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5">
                    <a href="#">{{ getNameCategory(top.categoriesId) }}</a>
                  </div>
                  <div class="h6 animate-to-green">
                    <a href="#">{{ top.productName }}</a>
                  </div>
                </div>
                <div class="preview">
                  <img
                    :src="top.productThambnail"
                    alt=""
                    style="height:120px"
                  />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <router-link
                        class="button size-2 style-2"
                        :to="{
                          name: 'product-detail',
                          params: { id: top._id }
                        }"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-1.png"
                              alt=""
                          /></span>
                          <span class="text">Learn More</span>
                        </span>
                      </router-link>
                      <p
                        class="button size-2 style-3"
                        v-on:click="addToCart(top)"
                      >
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img
                              src="../../static/images/elnic/icon-3.png"
                              alt=""
                          /></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">
                    {{ top.sellingPrice }}
                  </div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">
                    Mollis nec consequat at In feugiat mole stie tortor a
                    malesuada
                  </div>
                  <div class="icons">
                    <a class="entry"
                      ><i class="fa fa-check" aria-hidden="true"
                    /></a>
                    <a class="entry open-popup" data-rel="3"
                      ><i class="fa fa-eye" aria-hidden="true"
                    /></a>
                    <a class="entry"
                      ><i class="fa fa-heart-o" aria-hidden="true"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-space col-xs-b35 col-md-b70" />
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";
import VueInfiniteAutocomplete from "vue-infinite-autocomplete";
// import Slider from "@/components/header/slider.vue";
export default {
  created() {
    // if (!User.loggedIn()) {
    //   this.$router.push({ name: "login" });
    // }
    this.allProduct();
    this.getAllCategory();
    this.total = this.$store.state.total;
  },

  components: {
    VueInfiniteAutocomplete,
    // Slider
  },
  computed: {
    filtersearch() {
      if (
        this.$store.state.categoryId !== 0 &&
        this.$store.state.categoryId !== 1
      ) {
        let categoryId = this.$store.state.categoryId;
        if (this.products.length < this.size) {
          this.products = this.productsView;
        }
        this.$store.state.categoryId = 1;
        return this.products.filter(product => {
          return product.categoriesId.match(categoryId);
        });
      } else if (this.$store.state.categoryId === 1) {
        return this.products;
      } else if (this.$store.state.categoryId === 0) {
        if (this.products.length < this.size) {
          this.products = this.productsView;
        }
        this.$store.state.categoryId = 1;
        return this.products.filter(product => {
          return product.productName.match(this.proName);
        });
      }
    }
  },
  data() {
    return {
      products: [],
      productsView: [],
      carts: [],
      categories: [],
      searchTerm: "",
      pages: "",
      pg: [],
      size: 0,
      perPage: 9,
      currentPage: 1,
      temp: [],
      total: 0,
      input: "",
      currentValue: "",
      currentOptions: [],
      proName: "",
      getTopRate: [],
      getOnsale: [],
      getFeature: [],
      getAll: []
    };
  },
  methods: {
    async allProduct() {
      await axios
        .get("https://elnic-api.herokuapp.com/api/product")
        .then(({ data }) => {
          this.products = data;
          this.size = this.products.length;
          this.productsView = data;
          this.$store.state.products = data;
          this.pages = Math.ceil(this.products.length / this.perPage);
          this.pg.length = this.pages;
          this.$store.state.pages = this.pages;
          this.products = this.products.slice(0, 9);
          this.getAll = this.productsView.slice(7, 10);
          this.getOnsale = this.productsView.slice(4, 7);
          this.getFeature = this.productsView.slice(11, 14);
          this.getTopRate = this.productsView.slice(17, 20);
        })
        .catch(err =>
          this.$swal({
            title: "Something's wrong about product. Please contact admin",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          })
        );
      for (var i = 0; i < this.products.length; i++) {
        const obj = {
          text: this.products[i].productName,
          id: this.products[i]._id
        };
        this.currentOptions.push(obj);
      }
    },
    addToCart(product) {
      this.$swal({
        title: "Add to cart successfully",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });

      this.$store.dispatch("addToCart", product);
    },
    getProByPage(numPage) {
      this.$store.state.categoryId = "";
      this.temp = [];
      this.temp = this.$store.state.products;
      this.temp = this.temp.slice(
        (numPage - 1) * this.perPage,
        (numPage - 1) * this.perPage + this.perPage
      );
      this.products = this.temp;
      this.$store.state.categoryId = 1;
    },
    deleteUser(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete("/api/user/" + id)
            .then(() => {
              this.users = this.users.filter(user => {
                return user.id != id;
              });
            })
            .catch(() => {
              this.$router.push({ name: "category" });
            });
          this.$swal({
            title: "Deleted successfully!",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        }
      });
    },
    changeOptions() {
      this.currentOptions;
    },
    handleOnSelect(selectedValue) {
      this.proName = selectedValue.text;
      this.$store.state.categoryId = 0;
    },
    getAllCategory() {
      axios
        .get("https://elnic-api.herokuapp.com/api/categories")
        .then(res => {
          this.categories = res.data;
          this.$store.state.categories = res.data;
          // console.log(res);
        })
        .catch(err =>
          this.$swal({
            title: "Error getting categories",
            text: "Contact admin to solve problem",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          })
        );
    },
    getNameCategory(categoryId) {
      const category = this.categories.filter(obj => {
        return obj._id === categoryId;
      });

      return category.categoryName;
    }
  }
};
</script>
<style scoped>
.paginationheo {
  display: inline-block;
  margin-left: 300px;
}

.paginationheo p {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
.paginationheo a:hover:not(.active) {
  background-color: #ddd;
}
</style>
