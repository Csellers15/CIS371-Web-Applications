<template>
<div class="container">
  <button type="submit" id="filterBtn" v-if="isAuth" @click="filter" value="Show Only My Posts"> Show only my posts  </button>
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
    },

    filter: function(){
      var elem = document.getElementById("filterBtn");
      let temp = [];

      if(elem.innerHTML != "Show all Posts"){
        for(let i = 0; i < this.postData.length; i++){
          if(this.postData[i].uId === firebase.auth().currentUser.uid){
            temp.push(this.postData[i]);
          } 
        }
        this.postData = temp;
        elem.innerHTML = "Show all Posts"
        
      } else {
        elem.innerHTML = "Show Only My Posts"
        this.postData = [];
        firebase.database().ref("posts").on("child_added", this.dataHandler);
      }
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
