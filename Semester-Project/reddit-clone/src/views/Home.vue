<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1> Welcome to our Blog Site</h1>
      </div>
    </div>
    
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
