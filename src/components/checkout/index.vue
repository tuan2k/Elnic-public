<template>
  <div>
    <div class="container">
      <div class="empty-space col-xs-b15 col-sm-b30"/>
      <div class="breadcrumbs">
        <a href="#">home</a>
        <a href="#">checkout</a>
      </div>
      <div class="empty-space col-xs-b15 col-sm-b50 col-md-b100"/>
      <div class="text-center">
        <div class="h2">Thông tin đơn hàng</div>
        <div class="title-underline center"><span/></div>
      </div>
    </div>

    <div class="empty-space col-xs-b35 col-md-b70"/>

    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-b50 col-md-b0">
          <h4 class="h4 col-xs-b25">Chi tiết đơn hàng</h4>
          <div class="empty-space col-xs-b20"/>
          <input
           v-model="form.fullName"
            class="simple-input"
            type="text"
            required
            value=""
            placeholder="Nhập họ và tên..." />
          <div class="empty-space col-xs-b20"/>
          <input
           v-model="form.address"
            class="simple-input"
            required
            type="text"
            value=""
            placeholder="Địa chỉ..." />
          <div class="empty-space col-xs-b20"/>
          <div class="row m10">
            <div class="col-sm-6">
              <input
                class="simple-input"
                type="text"
                required
                value=""
                v-model="form.email"
                placeholder="Email" />
              <div class="empty-space col-xs-b20"/>
            </div>
            <div class="col-sm-6">
              <input
                class="simple-input"
                type="text"
                required
                value=""
                v-model="form.phone"
                placeholder="Số điện thoại" />
              <div class="empty-space col-xs-b20"/>
            </div>
          </div>
          <div class="empty-space col-xs-b30 col-sm-b60"/>
          <textarea class="simple-input" placeholder="Ghi chú đơn hàng" v-model="form.note"/>
        </div>
        <div class="col-md-6">
          <h4 class="h4 col-xs-b25">Đơn hàng của bạn</h4>
          <div class="cart-entry clearfix" v-for="(cart,index) in carts" :key="cart._id">
            <div class="cart-entry-thumbnail"><img :src="cart.productThambnail" id="heo_image" alt=""></div>
            <div class="cart-entry-description">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div class="h6"><a href="#">{{ cart.productName }}</a></div>
                      <div class="simple-article size-1" v-for="(qt,i) in quantity" :key="qt[index]">
                        <span v-if="i === index">Số lượng: {{ qt }}</span>
                      </div>
                    </td>
                    <td>
                      <div class="simple-article size-3 grey">{{ cart.discountPrice}}</div>
                      <div v-for="(qt,ind) in quantity" :key="qt[index]" class="simple-article size-1">
                      <span v-if="ind === index ">Tổng: {{ cart.discountPrice*qt }}</span>
                      </div>
                    </td>
                    <td>
                      <div class="cart-color" style="background: #eee;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="order-details-entry simple-article size-3 grey uppercase">
            <div class="row">
              <div class="col-xs-6">
                  Tổng hàng:
              </div>
              <div class="col-xs-6 col-xs-text-right">
                <div class="color">{{ total }}</div>
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
                Tổng tiền:
              </div>
              <div class="col-xs-6 col-xs-text-right">
                <div class="color">{{ total }}</div>
              </div>
            </div>
          </div>
          <div class="empty-space col-xs-b50"/>
          <div class="button block size-2 style-3" v-on:click="Submit()">
            <span class="button-wrapper">
              <span class="icon"><img src="/../../img//icon-4.png" alt=""></span>
              <span class="text">Đặt hàng</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="empty-space col-xs-b35 col-md-b70"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'checkout',
  created () {
      this.getCartItems();
      this.getQuantity();
      this.getTotal();
      this.getProduct()
      this.form.amount =  this.$store.state.total;
  },
  data () {
      return {
        carts : [],
        quantity: [],
        products: [],
        form : {
              email: '',
              fullName: '',
              address: '',
              phone: '',
              amount: '',
              note: '',
              productList: []
          
        },
        userId: '',
      }
  },
  computed : {
      total () {
        return this.$store.state.total;
      }
  },
  methods : {
      getCartItems() {
          this.carts = this.$store.state.cartItems;
      },
      getQuantity() {
          this.quantity = this.$store.state.cartQuantity;
      },
      getTotal(){
        this.$store.dispatch("getTotal");
      },
      getProduct(){
          console.log(this.products);
         for (let i =0 ; i< this.carts.length; i++) {
              this.products.push(this.carts[i])
              for (let j=0;j< this.quantity.length;j++){
                  if (i===j) {
                       let ob = { "_id": this.carts[i]._id , "userQuantity" : this.quantity[j]}
                       this.form.productList.push(ob);
                  }
              }
         }
      },
      Submit() {
        console.log(this.form);
        if (this.form.fullName === '' || this.form.email === '' || this.form.phone === ''
        || this.form.address === ''){
               this.$swal({
                  title: "Bạn chưa nhập thông tin đơn hàng",
                  icon: "error",
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true
                });  
        } else {
         axios.post('https://elnic-api.herokuapp.com/api/orders',this.form)
          .then( (response) => {
            console.log(response.data._id);
            this.$router.push({ name: 'history',params:{id: response.data.userId}})
          })
          .catch( (err) => {
            console.log(err);
          })
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