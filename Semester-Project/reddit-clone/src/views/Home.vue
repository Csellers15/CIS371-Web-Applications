<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Posts></Posts>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts'

export default {
  name: 'home',
  components: {
    Posts
  }
}
</script>
