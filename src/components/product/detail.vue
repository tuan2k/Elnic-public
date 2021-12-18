<template>
  <div>
    <div class="container">
      <div class="empty-space col-xs-b15 col-sm-b30"/>
      <div class="breadcrumbs">
        <a href="#">home</a>
        <a href="#">accessories</a>
        <a href="#">gadgets</a>
        <a href="#">sport gadgets</a>
      </div>
      <div class="empty-space col-xs-b15 col-sm-b50 col-md-b100"/>
      <div class="row">
        <div class="col-md-9 col-md-push-3">
          <div class="row">
            <div class="col-sm-6 col-xs-b30 col-sm-b0">
              <img :src="this.form.productThambnail"  height="400px" weight="400px"/>
              <!-- <div class="main-product-slider-wrapper swipers-couple-wrapper">
                <div class="swiper-container swiper-control-top">
                  <div class="swiper-button-prev hidden"/>
                  <div class="swiper-button-next hidden"/>
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="swiper-lazy-preloader"/>
                      <div class="product-big-preview-entry swiper-lazy" data-background=""/>
                      
                    </div>
                  </div>
                  <img :src="productThambnail" />
                </div>

                <div class="empty-space col-xs-b30 col-sm-b60"/>

                <div
                  class="swiper-container swiper-control-bottom"
                  data-breakpoints="1"
                  data-xs-slides="3"
                  data-sm-slides="3"
                  data-md-slides="4"
                  data-lt-slides="4"
                  data-slides-per-view="5"
                  data-center="1"
                  data-click="1">
                  <div class="swiper-button-prev hidden"/>
                  <div class="swiper-button-next hidden"/>
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="product-small-preview-entry" v-for="img in this.form.productImgs" :key="img">
                        <img :src="img" alt="" height="40px" width="40px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

            </div>
            <div class="col-sm-6">
              <div class="simple-article size-3 grey col-xs-b5">{{ form.productName }}</div>
              <div class="h3 col-xs-b25">{{ form.shortDescp }}</div>
              <div class="row col-xs-b25">
                <div class="col-sm-6">
                  <div class="simple-article size-5 grey">PRICE: <span class="color">{{ form.sellingPrice }}</span></div>        
                </div>
                <div class="col-sm-6 col-sm-text-right">
                  <div class="rate-wrapper align-inline">
                    <i class="fa fa-star" aria-hidden="true"/>
                    <i class="fa fa-star" aria-hidden="true"/>
                    <i class="fa fa-star" aria-hidden="true"/>
                    <i class="fa fa-star" aria-hidden="true"/>
                    <i class="fa fa-star-o" aria-hidden="true"/>
                  </div>
                  <div class="simple-article size-2 align-inline">128 Reviews</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="simple-article size-3 col-xs-b5">ITEM NO.: <span class="grey">127-#5238</span></div>
                </div>
                <div class="col-sm-6 col-sm-text-right">
                  <div class="simple-article size-3 col-xs-b20">AVAILABLE.: 
                    <span class="grey" v-if="form.productQty > 0">YES</span>
                    <span class="grey" v-else>NO</span>
                  </div>
                </div>
              </div>
              <div class="simple-article size-3 col-xs-b30">Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.</div>
              <div class="row col-xs-b40">
                <div class="col-sm-3">
                  <div class="h6 detail-data-title size-1">size:</div>
                </div>
              </div>
              <div class="row col-xs-b40">
                <div class="col-sm-3">
                  <div class="h6 detail-data-title">color:</div>
                </div>
                <div class="col-sm-9">
                  <div class="color-selection size-1">
                    <div class="entry active" style="color: #a7f050;"/>
                    <div class="entry" style="color: #50e3f0;"/>
                    <div class="entry" style="color: #eee;"/>
                    <div class="entry" style="color: #4d900c;"/>
                    <div class="entry" style="color: #edb82c;"/>
                    <div class="entry" style="color: #7d3f99;"/>
                    <div class="entry" style="color: #3481c7;"/>
                    <div class="entry" style="color: #bf584b;"/>
                  </div>
                </div>
              </div>
              <div class="row m5 col-xs-b40">
                <div class="col-sm-6 col-xs-b10 col-sm-b0">
                  <p class="button size-2 style-2 block" v-on:click="addToCart(form)">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/../../img/icon-2.png" alt=""></span>
                      <span class="text">add to cart</span>
                    </span>
                  </p>
                </div>
                <div class="col-sm-6">
                  <a class="button size-2 style-1 block noshadow" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><i class="fa fa-heart-o" aria-hidden="true"/></span>
                      <span class="text">add to favourites</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="empty-space col-xs-b35 col-md-b70"/>

          <div class="tabs-block">
            <div class="tabulation-menu-wrapper text-center">
              <div class="tabulation-title simple-input">description</div>
              <ul class="tabulation-toggle">
                <li><a class="tab-menu active">Mô tả</a></li>
                <li><a class="tab-menu">Nhận xét</a></li>
              </ul>
            </div>
            <div class="empty-space col-xs-b30 col-sm-b60"/>

            <div class="tab-entry visible">
              
            </div>

              <div class="tab-entry">
              <div class="testimonial-entry">
                <div class="row col-xs-b20">
                  <div class="col-xs-8" v-for="rv in reviews" :key="rv._id">
                    <img class="preview" src="/../../img/testimonial-1.jpg" alt="" />
                    <div class="heading-description">
                      <div class="h6 col-xs-b5">{{ rv._id }}</div>
                      <div class="rate-wrapper align-inline">
                          <star-rating :rating="rv.rating" :read-only	="true"></star-rating>
                      </div>
                      <p>{{ rv.sumarry }} <span v-if="rv.userId === userIdLogin" class="btn btn-danger btn-sm" v-on:click="deleteReview(rv._id)">X</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <form @submit.prevent="saveReview()">
                <div class="row m10">
                  <div>
                      <star-rating v-model="rating" :spacing="2" :rating="rating"></star-rating>
                    </div>
                  <div class="col-sm-12">
                    <textarea v-model="comment" class="simple-input" placeholder="Bình luận"/>
                    <div class="empty-space col-xs-b20"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-6 text-right">
                    <div class="button size-2 style-3">
                      <span class="button-wrapper">
                        <button class="btn btn-primary">submit</button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import {StarRating} from 'vue-rate-it';

export default {
  name: 'ProductDetail',
  components:{
    StarRating
    },
    created() {
      this.getCartItems();
      this.userIdLogin = localStorage.getItem("id");
      let id =  this.$route.params.id;
            axios.get('https://elnic-api.herokuapp.com/api/product/'+id)
                .then( ({data}) => {
                  this.form = data[0];
                  this.getAllReview();
                })
                .catch()
    },
    data() {
        return {
            form : [],
            carts: [],
            userIdLogin: '',
            comment: '',
            rating: 5,
            reviews: [],
        }
    },
    methods: {
        getCartItems() {
          this.carts = this.$store.state.cartItems;
        },
        addToCart(product) {
          Toast.fire({
                    icon: 'success',
                    title: 'Add to cart successfully'
          });
          this.$store.dispatch("addToCart", product);
        },
        deleteReview(id){
        Swal.fire({
                title: 'Bạn có chắc chắn muốn xóa?',
                text: "Bạn sẽ không thể lấy lại dữ liệu!!!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa',
                cancelButtonText: 'Hủy bỏ'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete("https://elnic-api.herokuapp.com/api/review/"+id)
                    .then(data => {
                        this.reviews = this.reviews.filter( rv => {
                          return rv._id !== id;
                        })
                        Toast.fire({
                              icon: 'success',
                              title: 'Xóa bình luận thành công!!!'
                        });
                      })
                      .catch(error => {
                        this.errors = error.response;
                        console.log(error);
                      })
                }
            })
        },
        getAllReview(){
          let id = this.form._id;
          axios.get("https://elnic-api.herokuapp.com/api/review/findByProductId/"+id)
          .then(res => {
              this.reviews = res.data
              console.log(res);
            })
            .catch(error => {
              this.errors = error.response;
              console.log(error);
            })
        },
        saveReview(){
           let userId = localStorage.getItem("id");
           let obj = {"userId" : userId, "rating":this.rating, "sumarry": this.comment, "productId":this.form._id};
          console.log(obj)
          axios.post("https://elnic-api.herokuapp.com/api/review",obj)
          .then(res => {
            this.comment = "";
            this.rating = 5;
            let id = this.form._id;
            axios.get("https://elnic-api.herokuapp.com/api/review/findByProductId/"+id)
            .then(res => {
                this.reviews = res.data
                Toast.fire({
                icon: "success",
                title: "Thêm bình luận thành công!!!"
              });
              })
              .catch(error => {
                this.errors = error.response;
                console.log(error);
              })

            })
            .catch(error => {
              this.errors = error.response;
              console.log(error);
            })
          }
    }

}
 </script>