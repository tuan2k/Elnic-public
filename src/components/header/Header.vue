<template>
  <div>
    <header>
      <div class="header-top">
        <div class="content-margins">
          <div class="row">
            <div class="col-md-5 hidden-xs hidden-sm">
              <div class="entry">
                <b>contact us:</b>
                <a href="tel:+84898325907">(+84) 898325907</a>
              </div>
              <div class="entry">
                <b>email:</b>
                <a href="mailto:elnic@business.com">elnic@business.com</a>
              </div>
            </div>
            <div class="col-md-7 col-md-text-right">
              <span
                v-if="
                  this.fullname === '' ||
                    this.fullname === undefined ||
                    this.fullname === null
                "
              >
                <div class="entry">
                  <router-link to="/login" class="open-popup" data-rel="1">
                    <b>login</b>
                  </router-link>
                  &nbsp; or &nbsp;
                  <router-link to="/register" class="open-popup" data-rel="2">
                    <b>register</b>
                  </router-link>
                </div>
              </span>
              <span v-else>
                <div class="entry">
                  <p class="open-popup" data-rel="1">
                    Welcome <b>{{ this.fullname }}</b>
                  </p>
                </div>
              </span>
              <!-- <div class="entry hidden-xs hidden-sm">
                <a href="#"
                  ><img
                    src="../../../static/icons/heart-thin.svg"
                    width="12px"
                    height="12px"
                    alt="heart"
                /></a>
              </div> -->
              <div class="entry hidden-xs hidden-sm cart">
                <router-link to="/cart">
                  <b class="hidden-xs">Your bag</b>
                  <span class="cart-icon px-2">
                    <!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> -->
                    <b-icon icon="shop" scale="2" class=""></b-icon>
                    <span class="cart-label">{{ count }}</span>
                  </span>
                </router-link>
                <div class="cart-toggle hidden-xs hidden-sm">
                  <div
                    class="cart-overflow"
                    v-for="(cart, index) in carts"
                    :key="cart._id"
                  >
                    <div class="cart-entry clearfix">
                      <a class="cart-entry-thumbnail" href="#"
                        ><img id="heo_image" :src="cart.productThambnail" alt=""
                      /></a>
                      <div class="cart-entry-description">
                        <table>
                          <tr>
                            <td>
                              <div class="h6">
                                <a href="#">{{ cart.productName }}</a>
                              </div>
                              <div
                                class="simple-article size-1"
                                v-for="(qt, i) in quantity"
                                :key="qt[index]"
                              >
                                <span v-if="i === index"
                                  >QUANTITY: {{ qt }}</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="simple-article size-3 grey">
                                {{ cart.discountPrice }}
                              </div>
                              <div
                                v-for="(qt, ind) in quantity"
                                :key="qt[index]"
                                class="simple-article size-1"
                              >
                                <span v-if="ind === index"
                                  >TOTAL: {{ cart.discountPrice * qt }}</span
                                >
                              </div>
                            </td>
                            <td>
                              <div
                                class="cart-color"
                                style="background: #eee;"
                              ></div>
                            </td>
                            <td>
                              <div class="button-close"></div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="empty-space col-xs-b40"></div>
                  <div class="row">
                    <div class="col-xs-6 text-right">
                      <router-link class="button size-2 style-3" to="/checkout">
                        <span class="button-wrapper">
                          <span class="icon"
                            ><img src="img/icon-4.png" alt=""
                          /></span>
                          <span class="text">proceed to checkout</span>
                        </span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="content-margins">
          <div class="row">
            <div class="col-xs-9 col-sm-11 text-right">
              <div class="nav-wrapper">
                <div class="nav-close-layer"></div>
                <nav>
                  <ul>
                    <li class="active">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li>
                      <router-link to="/about">about us</router-link>
                    </li>

                    <li><router-link to="/contact">contact</router-link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="header-empty-space"></div>
  </div>
</template>

<script>
export default {
  name: "ElnicHeader",
  created() {
    this.getCartItems();
    this.getQuantity();
    this.getProduct();
    this.username = this.$store.state.username;
    this.fullname = localStorage.getItem("user");
    console.log(this.fullname);
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    }
  },
  data() {
    return {
      carts: [],
      quantity: [],
      products: [],
      username: "",
      fullname: "",
      form: {}
    };
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    }
  },
  methods: {
    getCartItems() {
      this.carts = this.$store.state.cartItems;
    },
    getQuantity() {
      this.quantity = this.$store.state.cartQuantity;
    },
    getProduct() {
      for (let i = 0; i < this.carts.length; i++) {
        this.products.push(this.carts[i]);
        for (let j = 0; j < this.quantity.length; j++) {
          if (i === j) {
            this.products[i].cartNumber = this.quantity[j];
          }
        }
      }
    }
  }
};
</script>
<style scoped>
#heo_image {
  width: 70px;
  height: 70px;
}
</style>
