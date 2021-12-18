<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="login()">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  v-model="form.username"
                />
              </div>
              <br />
              <br />
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Password</label>
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  v-model="form.password"
                />
              </div>

              <br />
              <div class="d-flex justify-content-between align-items-center">
                <a href="#!" class="text-body">Forgot password?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
                <br />
                <br />
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <router-link to="/register" class="link-danger"
                    >Register</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      errors: {}
    };
  },
  methods: {
    login() {
      console.log(this.form.username + this.form.password);
      axios
        .post("https://elnic.herokuapp.com/api/auth/signin", this.form)
        .then(res => {
          console.log(res);
          this.$store.state.username = res.data.username;
          User.responseAfterLogin(res);
          this.$router.push({ name: "home" });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        })
        .catch(error => {
          this.errors = error.response;
          console.log(error);
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
