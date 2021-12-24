<template>
  <div>
    <div class="container">
      <div class="empty-space col-xs-b15 col-sm-b30" />
      <div class="breadcrumbs">
        <a href="#">home</a>
        <a href="#">shopping cart</a>
      </div>
      <div class="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
      <div class="text-center">
        <div class="simple-article size-3 grey uppercase col-xs-b5">
            Cảm ơn bạn đã mua hàng tại shop chúng tôi!!!
        </div>
        <div class="h2">Danh sách đơn hàng</div>
        <div class="title-underline center"><span /></div>
      </div>
    </div>

    <div class="empty-space col-xs-b35 col-md-b70" />
    <div class="container">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Trạng thái thanh toán</th>
            <th>Thanh toán</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="o in orderOld" :key="o._id">
            <td>
                <h6 class="h6">{{ o.fullName }}</h6>
            </td>
            <td>
              <h6 class="h6">{{ o.phone }}</h6>
            </td>
            <td>
              <span v-if="o.status === true" class="h6">Đã thanh toán</span>
              <span class="h6" v-else>Chưa thanh toán</span>
            </td>
            <td>
                <span v-if="o.status !== true" class="btn btn-primary" v-on:click="Payment()">Thanh toán</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div ref="paypal" v-show="this.show === true"></div>
    </div>

    <div class="container">
      <div class="empty-space col-xs-b35" />
      <div class="row">
        <div class="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
          <div class="single-line-form">
            <input
              class="simple-input"
              type="text"
              value=""
              placeholder="Enter your coupon code"
            />
            <div class="button size-2 style-3">
              <span class="button-wrapper">
                <span class="icon"
                  ><img src="/../../img//icon-4.png" alt=""
                /></span>
                <span class="text">submit</span>
              </span>
              <input type="submit" value="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PayPal from "vue-paypal-checkout";
export default {
  name: "history",
  created() {
    this.getTotal();
    let id = this.$route.params.id;
    axios
      .get("https://elnic-api.herokuapp.com/api/orders/getByUserId/" + id)
      .then(({ data }) => {
        this.orderOld = data;
        console.log(this.orderOld);
      })
      .catch();
    this.total = this.$store.state.total;
  },
  data() {
    return {
      orderOld: [],
      order: {
        fullName: "",
        phone: "",
        status: false
      },
      show: false,
      form: {
        status: "",
        transactionId: ""
      },
      total: "",
      loaded: false,
      paidFor: false,
      check: false,
      product: {
        description: "Đây la sản phẩm của ELNIC"
      },
      tests: []
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AVD761Ro8BKvoaTDaEQYMqErjBavQAMKMue9ILdHjkUYSc0Yeq59qNgyjJtWkiO8alKi92hBx2ECWqIx";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: 17
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const orders = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(orders);
            this.check = true;
            this.$store.state.cartItemCount = 0;
            this.$store.state.cartItems = [];
            this.$store.state.cartQuantity = [];
            this.$swal({
              title: "Payment successfully",
              icon: "error",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2500,
              timerProgressBar: true
            });
            this.form.status = true;
            let l = this.orderOld.length;
            let idO = this.orderOld[0]._id
            this.form.transactionId = orders.id;
            this.orderOld[0].status = true;
            this.show = false;
            axios
              .put(
                "https://elnic-api.herokuapp.com/api/orders/" + idO,
                this.form
              )
              .then(({ data }) => {
                  this.$swal({
                  title: "Thanh toán thành công!!!",
                  icon: "success",
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true
                });                
              })
              .catch(err => {
                // console.log(err.response);
              });
          },
          onError: err => {
            console.log(err);
            this.$swal({
              title: "Thanh toán thất bại",
              icon: "error",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2500,
              timerProgressBar: true
            });
          }
        })
        .render(this.$refs.paypal);
    },
    getTotal() {
      this.$store.dispatch("getTotal");
    },
    Payment(){
       if (this.show === false ) this.show = true;
       else this.show = false;
    }
  },
  components: {
    PayPal
  }
};
</script>
