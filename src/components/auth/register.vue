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
            <form @submit.prevent="register()">
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
                <label class="form-label" for="form3Example3">User Name</label>
                <input
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter user name"
                  v-model="form.username"
                />
              </div>

              <br />
              <br />

              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input
                  type="email"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter Email"
                  v-model="form.email"
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
              <br />

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Register
                </button>
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
  name: "register",
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
        email: ""
      },
      errors: {}
    };
  },
  methods: {
    register() {
      axios
        .post("https://elnic.herokuapp.com/api/auth/signup", this.form)
        .then(res => {
          Toast.fire({
            icon: "success",
            title: "Signup successfully"
          });
          this.$router.push({ name: "login" });
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
