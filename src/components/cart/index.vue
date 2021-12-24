<template>
  <div>
    <div class="container">
      <div class="text-center">
        <div class="h4">Kiểm tra giỏ hàng</div>
        <div class="title-underline center"><span/></div>
      </div>
    </div>

    <div class="container">
      <table class="cart-table">
        <thead>
          <tr>
            <th style="width: 95px;"/>
            <th>Tên sản phẩm</th>
            <th style="width: 150px;">Giá</th>
            <th style="width: 260px;">Số lượng</th>
            <th style="width: 70px;">Mã</th>
            <th style="width: 150px;">Tổng tiền</th>
            <th style="width: 70px;"/>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart,index) in carts" :key="cart._id">
            <td data-title=" ">
              <a class="cart-entry-thumbnail" href="#"><img src="/../../img//product-1.png" alt=""></a>
            </td>
            <td data-title=" "><h6 class="h6"><a href="#">{{ cart.productName }}</a></h6></td>
            <td data-title="Price: "> {{ cart.sellingPrice }}</td>
            <td>
              <div v-for="(qt,i) in quantity" :key="qt[index]">
              <div class="quantity-select" data-title="Quantity: " v-if="i === index ">
                <span class="minus" v-on:click="decreaseItem(index)"/>
                <span class="number">{{ qt }}</span>
                <span class="plus" v-on:click="increaseItem(index)"/>
              </div>
              </div>
            </td>
            <td data-title="Color: ">{{ cart.productCode }}</td>
            <td>
              <div v-for="(qt,ind) in quantity" :key="qt[index]">
              <span v-if="ind === index ">{{ cart.sellingPrice*qt }}</span>
              </div>
            </td>
            <td data-title="">
              <div class="btn btn-danger" v-on:click="removeItem(cart._id)">
                <span>X</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="empty-space col-xs-b35"/>
      <div class="row">
        <div class="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
        </div>
        <div class="col-sm-6 col-md-7 col-sm-text-right">
          <div class="buttons-wrapper">
            <router-link class="button size-2 style-3" to="/checkout">
              <span class="button-wrapper">
                <span class="icon"><img src="/../../img//icon-4.png" alt=""></span>
                <span class="text">Đặt hàng</span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h4 class="h4">Tổng đơn hàng</h4>
          <div class="order-details-entry simple-article size-3 grey uppercase">
            <div class="row">
              <div class="col-xs-6">
                  Tổng tiền hàng:
              </div>
              <div class="col-xs-6 col-xs-text-right">
                <div class="color">$1195.00</div>
              </div>
            </div>
          </div>
          <div class="order-details-entry simple-article size-3 grey uppercase">
            <div class="row">
              <div class="col-xs-6">
                  Phí vận chuyển
              </div>
              <div class="col-xs-6 col-xs-text-right">
                <div class="color">miễn phí</div>
              </div>
            </div>
          </div>
          <div class="order-details-entry simple-article size-3 grey uppercase">
            <div class="row">
              <div class="col-xs-6">
                Tổng đơn hàng:
              </div>
              <div class="col-xs-6 col-xs-text-right">
                <div class="color">$1195.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  created () {
      this.getCartItems();
      this.getQuantity();
  },
  data () {
      return {
          carts : [],
          quantity: [],
      }
  },
  methods : {
      getCartItems() {
          this.carts = this.$store.state.cartItems;
      },
      getQuantity() {
          this.quantity = this.$store.state.cartQuantity;
      },
      increaseItem(index) {
        this.$store.dispatch("increaseItem", index);
        this.getQuantity();
      },
      decreaseItem(index) {
        this.$store.dispatch("decreaseItem", index);
        this.getQuantity();
      },
      removeItem(id) {
        this.$store.dispatch("removeItem",id);
        this.getQuantity();
        this.getCartItems();
      }
  }

  
};
</script>