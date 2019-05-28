<template>
  <div id="app">
    <label for="myinput">Number of users {{ count }}</label>
    <input id="myinput" type="range" min="1" max="40" v-model.number="count" />
    <button v-on:click="setUserCount">Fetch</button>

    <RandomUsers :num-users="requestedCount"></RandomUsers> 
    <RandomUsers v-bind:num-users="count" />
    <h2>VueJS Experiment by {{ me }}</h2>
    <RandomUsers msg="Welcome-to-Your-Vue.js-App" />
  </div>
</template>

<script>
import RandomUsers from "./components/RandomUsers.vue";


export default {
  name: "app",
  data() {
    return {
      me: "Cole Sellers",
      count: 4
    }
  },
  components: {
    RandomUsers
  },
  methods: {
    setUserCount() {
      this.requestedCount = this.count;
    }
}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

