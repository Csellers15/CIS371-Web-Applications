<template>
  <div id="app">
    <navBar></navBar>

    <footer> </footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    navBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
