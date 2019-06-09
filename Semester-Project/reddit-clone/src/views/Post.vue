<template>
    <div class="postForm">
        <form >
            <div>
                <label for="title">Title: </label>
                <input type="text" id="title" name="title" v-model="title">
            </div>
            <div>
                <label for="post"> Post: </label>
                <textarea id="post" v-model="post"></textarea>
            </div>
            <div>
                <button id="post" @click="post"> Post </button>
            </div>

        </form>
    </div>
</template>

<script>
export default {

data () {
    return {
      input:{
        title: '',
        post: '',
      }
    }
}

}
</script>

<style>
    .postForm{
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
    /* To make sure that all labels have the same size and are properly aligned */
    display: inline-block;
    width: 90px;
    text-align: right;
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

    .button {
    padding-left: 90px; 
    float: left;
    }

    button {
    margin-left: .5em;
    }

</style>
