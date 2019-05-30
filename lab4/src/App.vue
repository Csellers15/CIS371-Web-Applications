<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <Countries v-if="showIt" key="one"></Countries>
      <Countries v-if="!showIt" key="two"></Countries>

      <button v-on:click="showIt = !showIt">Toggle Me {{showIt}}</button> 
    </div>
  </div>
</template>

<script>
import Countries from './components/Countries.vue'

export default {
  name: 'app',
  components: {
    Countries
  }, 
  data() {
    return {
      showIt: true
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
