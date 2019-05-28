<template>
    <div>
        <p>List of users</p>
        <div id="userlist">
            <span class="useritem" v-for="u in users" v-bind:key="u.email">{{u.name.first}} {{u.name.last}} ({{u.email}})</span>
        </div>

        <UserInfo v-for="u in user" v-bind:key="u.email" v-bind:user-data="u"> </UserInfo>
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
        users: []
    }, watch: {
        numUsers(newVal, oldVal) {
            if(newVal !== oldVal){
                fetch('https://randomuser.me/api?results='+ newVal)
                    .then(r => r.json())  // convert the response 'r' to a JSON object
                    .then(u => {
                    // This will show a JSON string inside the <div> defined above
                        this.users = u.results;
                    });
            }
        },

        reset() {
            this.users = []
        }
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

    .useitem:hover {
        background-color: cyan;
    }

</style>
