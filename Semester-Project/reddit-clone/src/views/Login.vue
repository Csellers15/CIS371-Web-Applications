<template>
  <div class="Login">
      <form id="loginForm">
        <label for="email"> Email: </label>
        <input id ="email" type="text" v-model="email"/>

        <label for="password"> Password: </label>
        <input id ="password" type="password" v-model="password"/>

        <button id="submit" @click="login()"> Login</button>
      </form>
  </div>
</template>

<script> 

import firebase from "../components/firebaseconfig";

export default {
name: 'login',
data () {
    return {
        email: '',
        password: ''
    }
},

  methods: {
      login:function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( function(user){
              alert('Your account has logged in')
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

