<template>

 <div class="Login">
    <p> Login into your account </p>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="login"> Login </button>
    <div class="register">
    <p>No account? <router-link to="/register">Register here</router-link></p>
    </div>
  </div>
    
</template>

<script>

import firebase from "@/components/firebaseconfig";
import router from '@/router';

export default {

data () {
    return {
      email: "",
      password: "",
    }
},

methods: {
    login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( (user) => {
                console.log(firebase.auth().currentUser.uid);
                this.$router.push({path: '/'}); 
            },
            function (err){
                alert('Opps. ' + err.message);s
            }
        );
    }
}

}
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

    .register{
        padding-top: 10px;
    }
</style>
