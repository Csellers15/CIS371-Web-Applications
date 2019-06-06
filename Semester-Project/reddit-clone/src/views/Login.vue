<template>
  <div class="Login">
    <p> Login into your account </p>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="login"> Login </button>
  </div>
</template>

<script> 

import firebase from "../components/firebaseconfig";
import router from '../router';

export default {
name: 'login',
data () {
    return {
        email: '',
        password: ''
    }
},

  methods: {
      login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( (user) => {
            console.log('made it here');
            this.$router.push({path: '/', params: user});
          },
          function (err){
              alert('Opps. ' + err.message)
          }
        );
      }
  }
  };

</script>


<style scoped>
  #loginForm {
    display: grid;
    width: 30%;
    justify-content: center;
  }

  #submit {
    grid-column-start: 1;
    justify-content: center;
  }
</style>

