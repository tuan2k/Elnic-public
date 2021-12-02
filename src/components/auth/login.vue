<template>
  <div class="auth-page sign-in">
    <div>
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="connect-container align-content-stretch d-flex flex-wrap">
      <div class="container-fluid flex justify-center items-center">
        <div class="w-1/3">
          <div
            class="
              bg-primary-100
              w-10/12
              py-8
              px-8
              border-2
              rounded-xl
              mx-2
              my-2
            "
          >
            <div class="logo-box"><a href="#" class="logo-text">Elnics</a></div>
            <form>
              <div class="form-group">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block btn-submit"
              >Sign In</button
              >
              <div class="auth-options">
                <div class="custom-control custom-checkbox form-group">
                  <input
                    id="exampleCheck1"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label
                    class="custom-control-label"
                    for="exampleCheck1"
                  >Remember me</label
                  >
                </div>
                <a href="#" class="forgot-link">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'login'
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
  }
</script>
