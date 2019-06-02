<template>
  <div class="Login">
      <form id="loginForm">
        <label for="username"> User Name: </label>
        <input id ="username" type="text" v-model="userName"/>

        <label for="name"> Name: </label>
        <input id ="name" type="text" v-model="name"/>

        <label for="password"> Password: </label>
        <input id ="password" type="text" v-model="password"/>

        <button id="submit" v-on:click="Register()"> Register</button>
      </form>
  </div>
</template>

<script> 
export default {
  data () {
    return {
      userName: "",
      name: "",
      password: "",
      level: 0
    };
  },

  methods: {
    Register(){
        MYDB.ref("users").push().set({
          name: this.userName,
          capital: this.name,
          region: this.password,
          level: 0
        });
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
