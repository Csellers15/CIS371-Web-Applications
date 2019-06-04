<template>
  <div class="sign-up">
      <p> Lets create a new account </p>
      <input type="text" v-model="email" placeholder="email"><br>
      <input type="password" v-model="password" placeholder="password"><br>
      <button @click="signUp">Sign Up</button>
  </div>
</template>

<script> 
import { config } from "../components/firebaseconfig";

export default {
    name: 'signUp',
    data () {
        return {
            email: '',
            password: ''
        }
    },

  methods: {
      signUp:function(){
        config.createUserWithEmailAndPassword(this.email, this.password).then( function(user){
              alert('Your account has been created')
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
