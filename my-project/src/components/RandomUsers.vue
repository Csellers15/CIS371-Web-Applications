<template>
    <div>
        <p>List of users</p>
        <div id="userlist">
            <span class="useritem" v-for="u in users" v-bind:key="u.email">{{u.name.first}} {{u.name.last}} ({{u.email}})</span>
        </div>

        <UserInfo v-for="u in users" v-bind:key="u.email" v-bind:user-data="u"> </UserInfo>
    </div>
</template>

<script>

import UserInfo from "./UserInfo.vue";

export default {
    props: {
        numUsers: {
            type: Number,
            default: 4
        }
    },
    components: { 
        UserInfo 
        },
   data() {
        return {
            users: [
                { name: { first: "Don", last: "Knuth" }, email: "knuth@freenet.org" },
                { name: { first: "Grace", last: "Hopper" }, email: "hopper@mail.org" },
                { name: { first: "Sam", last: "Smith" }, email: "samsmith@hotmail.com" },
                { name: { first: "Cam", last: "Colbert" }, email: "ccolbert@gmail.com" },
                { name: { first: "Dave", last: "Rathbern" }, email: "davr@mail.com" },
                { name: { first: "Joe", last: "Barid" }, email: "joeb@live.com" },
                { name: { first: "Marry", last: "Clemens" }, email: "clemensm@yahoo.com" },
                { name: { first: "Kenzie", last: "Sandel" }, email: "kenziec@gmail.com" },
                { name: { first: "Malory", last: "Hintz" }, email: "hintzm@gmail.com" },
                { name: { first: "Sarah", last: "Kok" }, email: "sarahkok@yahoo.com" }
            ]
        };
    },
    methods: {
        showData: function (data){
            let array = [];
            data.results.forEach(function (ele){
                array.push( {name: {first: ele.name.first, last : ele.name.last }, email: ele.email, photo: ele.picture.thumbnail});
            });
            this.users = array;
        }
    },

     watch: {
        numUsers(newVal, oldVal) {
            if(newVal !== oldVal){
                fetch('https://randomuser.me/api?results='+ newVal)
                    .then(r => r.json())  // convert the response 'r' to a JSON object
                    .then(
                        this.showData
                    );
            }
        },
    }
}
</script>


<style>
    #userlist {
        display: grid;
        grid-template-columns: repeat(3, auto);
    }

    .useritem {
        border: 2px solid gray;
        border-radius: 8px;
        padding: 0.5em;
    }

    .useritem:hover {
        background-color: cyan;
    }

</style>
