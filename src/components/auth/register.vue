<template>
  <div class="popup-content" data-rel="2">
    <div class="layer-close"></div>
    <div class="popup-container size-1">
      <div class="popup-align">
        <h3 class="h3 text-center">register</h3>
        <div class="empty-space col-xs-b30"></div>
        <input
          class="simple-input"
          type="text"
          value=""
          placeholder="Your name"
        />
        <div class="empty-space col-xs-b10 col-sm-b20"></div>
        <input
          class="simple-input"
          type="text"
          value=""
          placeholder="Your email"
        />
        <div class="empty-space col-xs-b10 col-sm-b20"></div>
        <input
          class="simple-input"
          type="password"
          value=""
          placeholder="Enter password"
        />
        <div class="empty-space col-xs-b10 col-sm-b20"></div>
        <input
          class="simple-input"
          type="password"
          value=""
          placeholder="Repeat password"
        />
        <div class="empty-space col-xs-b10 col-sm-b20"></div>
        <div class="row">
          <div class="col-sm-7 col-xs-b10 col-sm-b0">
            <div class="empty-space col-sm-b15"></div>
            <label class="checkbox-entry">
              <input type="checkbox" /><span
                ><a href="#">Privacy policy agreement</a></span
              >
            </label>
          </div>
          <div class="col-sm-5 text-right">
            <a class="button size-2 style-3" href="#">
              <span class="button-wrapper">
                <span class="icon"><img src="img/icon-4.png" alt=""/></span>
                <span class="text">submit</span>
              </span>
            </a>
          </div>
        </div>
        <div class="popup-or">
          <span>or</span>
        </div>
        <div class="row m5">
          <div class="col-sm-4 col-xs-b10 col-sm-b0">
            <a class="button facebook-button size-2 style-4 block" href="#">
              <span class="button-wrapper">
                <span class="icon"><img src="img/icon-4.png" alt=""/></span>
                <span class="text">facebook</span>
              </span>
            </a>
          </div>
          <div class="col-sm-4 col-xs-b10 col-sm-b0">
            <a class="button twitter-button size-2 style-4 block" href="#">
              <span class="button-wrapper">
                <span class="icon"><img src="img/icon-4.png" alt=""/></span>
                <span class="text">twitter</span>
              </span>
            </a>
          </div>
          <div class="col-sm-4">
            <a class="button google-button size-2 style-4 block" href="#">
              <span class="button-wrapper">
                <span class="icon"><img src="img/icon-4.png" alt=""/></span>
                <span class="text">google+</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="button-close"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register"
  //   created() {
  //         if (User.loggedIn()) {
  //             this.$router.push({ name: 'home' })
  //         }
  //     },
  //     data(){
  //         return{
  //             form:{
  //                 username: null,
  //                 password: null
  //             },
  //             errors : {}
  //         }
  //     },
  //     methods: {
  //         login() {
  //             console.log(this.form.username + this.form.password)
  //             axios.post('https://elnic.herokuapp.com/api/auth/signin',this.form)
  //             .then(res => {
  //                 console.log(res)
  //                 User.responseAfterLogin(res)
  //                 Toast.fire({
  //                     icon: 'success',
  //                     title: 'Signed in successfully'
  //                 })
  //                 this.$router.push({ name: 'home'})
  //             })
  //             .catch(error =>  {this.errors = error.response ; console.log(error)})
  //             .catch(
  //                 Toast.fire({
  //                     icon: 'warning',
  //                     title: 'Invalid Email or Password'
  //                 })
  //             )
  //         }
  //     }
};
</script>
