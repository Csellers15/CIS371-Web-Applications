<template>
    <div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <span v-if='!isAuth'> | </span> 
        <router-link to="/login" v-if="!isAuth"> Login</router-link> 
        <span v-if='isAuth'> | </span> 
        <router-link to="/post" v-if="isAuth"> Post</router-link>
        <span> | </span> 
        <router-link to="/chat"> Chat </router-link>
        <span v-if='isAuth'> | </span> 
        <a v-if='isAuth' href="#" @click="logout"> logout </a>
      </div>
    </div>
</template>

<script>

import firebase from './firebaseconfig';
import AuthMonitor from '../AuthMonitor';
import router from '../router';


export default {
  mixins: [AuthMonitor],

  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        console.log(firebase.auth().currentUser);
      }, (error) => {
            console.log(error);
      });
      
    }
  }
}
</script>


<style scoped>
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .logout {
    float: right;
  }
</style>
