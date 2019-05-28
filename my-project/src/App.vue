<template>
  <div id="app">
    <h2>VueJS Experiment by {{ me }}</h2>

    <label for="myinput">Number of users {{ count }}</label>
    <input id="myinput" type="range" min="1" max="40" v-model.number="count" />
    <button v-on:click="setUserCount">Fetch</button>

    <RandomUsers :num-users="requestedCount"></RandomUsers> 

  </div>
</template>

<script>
import RandomUsers from "./components/RandomUsers.vue";


export default {
  name: "app",
  data() {
    return {
      me: "Cole Sellers",
      count: 4,
      requestedCount: 4
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

