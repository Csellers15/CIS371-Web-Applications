<template>
    <div id="uinfo">
        <img id="photo" :src=userData.photo>
        <span id="name"> {{userData.name.first}} {{userData.name.last}}</span>
        <span id="email"> {{userData.email}} </span>
    </div>
</template>

<script>
export default {
  props: ["userData"]
}
</script>

<style>
    #uinfo {
        display: grid;
        grid-template-columns: repeat(2, auto);
        border: 3px solid black;
    }

    #name {
        grid-column-start: 2;
    }

    #email {
        grid-column-start: 2;
    }

    #photo {
        grid-column-start: 1;
    }
</style>