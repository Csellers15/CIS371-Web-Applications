<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home/>
    <Posts></Posts>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Posts from '@/components/Posts'

export default {
  name: 'home',
  components: {
    Home,
    Posts
  }
}
</script>
