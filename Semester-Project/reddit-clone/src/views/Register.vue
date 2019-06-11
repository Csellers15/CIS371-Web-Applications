<template>
  <div class="sign-up">
    <p>Lets create a new account</p>
    <br>
    <input type="text" v-model="email" placeholder="email">
    <br>
    <input type="password" v-model="password" placeholder="password">
    <br>
    
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import firebase from "@/components/firebaseconfig";
import router from "../router";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
             this.$router.push({path: '/'});
          },
          (err) => {
            alert("Opps. " + err.message);
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
