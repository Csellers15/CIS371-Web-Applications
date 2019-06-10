<template>
    <div class="postForm">
        
        <form >
            <h3> Make a new post: </h3>
            <div>
                <label for="title">Title: </label>
                <input type="text" id="title" v-model="title">
            </div>
            <div>
                <label for="post"> Post: </label>
                <textarea id="post"  placeholder="body" v-model="post"></textarea>
            </div>
            <div>
                <button id="post" @click="post"> Post </button>
            </div>

        </form>
    </div>
</template>

<script>

import firebase from "../components/firebaseconfig";

export default {

data () {
    return {
      input:{
        title: '',
        post: '',
      }
    }
}, 

methods: {
    post(){
        firebase.ref("posts").push().set({
            title: this.title,
            post: this.post
        });
    }
}

}
</script>

<style scoped>
    .postForm{
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

    input, textarea {

        font: 1em sans-serif;

        width: 300px;
        box-sizing: border-box;

        border: 1px solid #999;
    }

    input:focus, textarea:focus {
    border-color: #000;
    }

    textarea {
        
        vertical-align: top;
        height: 5em;
    }

</style>
