<template>
<div class="container">
  <div class="posts card mt-5" v-for="p in postData" v-bind:key="p.id">
    <h2 class="card-header"> {{p.title}}</h2>

    <div class="card-body">
        <p class="card-text"> {{p.post}}</p>
    </div>

    <div class="postInfo card-footer text-muted">
        <p > Writen on: <strong> {{p.postTime}} </strong> </p>
    </div>


  </div>
</div>
</template>

<script>

  import firebase from '../components/firebaseconfig';
  import Login from './Login';
  import AuthMonitor from '../AuthMonitor';

export default {

  mixins: [AuthMonitor],
  data() {
    return {
      postData: [],
    }
  },

  methods: {
    dataHandler (snapshot) {
      this.postData.push({fbKey: snapshot.key, ...snapshot.val()});
      this.postData.reverse();
    }
  },
  mounted() {
    firebase.database().ref("posts").on("child_added", this.dataHandler);
  },

}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.commentSection{ 
  background-color:darkturquoise;
}


</style>
