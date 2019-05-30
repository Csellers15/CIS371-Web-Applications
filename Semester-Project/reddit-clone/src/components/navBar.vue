<template>
    <div id ="container">
        <a id="homeBtn" href="#"> Home </a>
        <a id="login" href="#"> Login </a>
        <a id="signUp" href="#"> Sign Up </a>
    </div>
</template>

<script>
export default {

}
</script>

<style>

    #container {
        position: fixed;
        display: table;
        width: 100%;
        height: auto;
        overflow: hidden;
        background-color: grey;
    }

    #homeBtn {
        display: table-cell; 
        vertical-align: middle;
    }

    a {
        text-decoration: none;
        color: black;
        padding: 2px;
        margin: 5px;
    }

    a:hover {
        text-decoration: underline;
    }

    #login, #signUp  {
        float: right;
        border: 1px black solid;
        border-radius: 7px;
        background-color: white;
    }

</style>
