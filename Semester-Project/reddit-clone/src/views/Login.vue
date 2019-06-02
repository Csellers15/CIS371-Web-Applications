<template>
  <div class="Login">
      <form id="loginForm">
        <label for="username"> User Name: </label>
        <input id ="username" type="text" v-model="userName"/>

        <label for="password"> Password: </label>
        <input id ="password" type="text" v-model="password"/>

        <button id="submit" v-on:click="login()"> Login</button>
      </form>
  </div>
</template>

<script> 
export default {
  data () {
    return {
      userName: "",
      password: ""
    };
  },

  methods: {
    login(){
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

