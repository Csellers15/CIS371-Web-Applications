<template>
  <div class="postForm">
    <form class="text-center">
      <button v-if="!isAuth" class="btn btn-primary"  @click.stop.prevent="redirect" >Log in or Register</button>
    </form>
  
    <form  v-if="isAuth">
      <h3>Make a new post:</h3>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" placeholder="Title" v-model="title">
      </div>
      <div>
        <label for="postBody">Post:</label>
        <textarea id="postBody" placeholder="Body" v-model="post"></textarea>
      </div>
      <div>
        <button id="submit" @click.stop.prevent="addPost" >Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "@/components/firebaseconfig";
import router from "@/router";
import AuthMonitor from '../AuthMonitor';

export default {

  mixins: [AuthMonitor],


  data() {
    return {
      title: "",
      post: "",
    };
  },

  methods: {
    addPost() {
      firebase.database().ref("posts").push().set({
          title: this.title,
          post: this.post,
          uId: firebase.auth().currentUser.uid,
          postTime: Date(firebase.database.ServerValue.TIMESTAMP)
        });

      this.$router.push({ path: "/" });
    },
    redirect(){
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
.postForm {
  text-align: left;
  display: grid;
}

form {
  margin: 0 auto;
  width: 400px;
}

form div + div {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: left;
}

input,
textarea {
  font: 1em sans-serif;

  width: 300px;
  box-sizing: border-box;

  border: 1px solid #999;
}

input:focus,
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
}
</style>
