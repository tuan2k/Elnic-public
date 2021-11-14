<template>
    <div>
        <p> Login Page </p>
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
