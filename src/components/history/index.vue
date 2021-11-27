<template>
  <div>
    <div class="container">
      <div class="empty-space col-xs-b15 col-sm-b30"/>
      <div class="breadcrumbs">
        <a href="#">home</a>
        <a href="#">shopping cart</a>
      </div>
      <div class="empty-space col-xs-b15 col-sm-b50 col-md-b100"/>
      <div class="text-center">
        <div class="simple-article size-3 grey uppercase col-xs-b5">shopping cart</div>
        <div class="h2">check your products</div>
        <div class="title-underline center"><span/></div>
      </div>
    </div>

    <div class="empty-space col-xs-b35 col-md-b70"/>

    <div class="container">
      <table class="cart-table">
        <thead>
          <tr>
            <th style="width: 95px;"/>
            <th>Email</th>
            <th>Phone</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title=" ">
              <a class="cart-entry-thumbnail" href="#"><img src="/../../img//product-1.png" alt=""></a>
            </td>
            <td data-title=" "><h6 class="h6"><a href="#">{{ order.email }}</a></h6></td>
            <td data-title=" "><h6 class="h6"><a href="#">{{ order.phone }}</a></h6></td>
            <td data-title="Payment: ">
              <div ref="paypal"></div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="empty-space col-xs-b35"/>
      <div class="row">
        <div class="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
          <div class="single-line-form">
            <input
              class="simple-input"
              type="text"
              value=""
              placeholder="Enter your coupon code" />
            <div class="button size-2 style-3">
              <span class="button-wrapper">
                <span class="icon"><img src="/../../img//icon-4.png" alt=""></span>
                <span class="text">submit</span>
              </span>
              <input type="submit" value="">
            </div>
          </div>
        </div>
      </div>
      </div> 
  </div>
</template>

<script>
import axios from 'axios';
import PayPal from 'vue-paypal-checkout'
export default {
  name: 'history',
  created () {
      this.getTotal();
      let id = this.$route.params.id;
      axios.get('https://elnic-api.herokuapp.com/api/orders/getByUserId/'+id)
        .then( ({data}) => {
                    this.order = data[0];
                    console.log(this.order);
        })
        .catch()
      this.total = this.$store.state.total;
  },
  data () {
      return {
          order : [],
          total: '',
          loaded: false,
          paidFor: false,
          product: {
              description: "leg lamp from that one movie",
          }
      }
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
                    value: this.total
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
            Toast.fire({
                    icon: 'success',
                    title: 'Add to cart successfully'
            });
            axios.put('https://elnic-api.herokuapp.com/api/orders/getByUserId/'+id)
            .then( ({data}) => {
                        this.order = data[0];
                        console.log(this.order);
            })
            .catch()
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    getTotal(){
        this.$store.dispatch("getTotal");
    },
  },
  components: {
    PayPal
  }

  
};
</script>