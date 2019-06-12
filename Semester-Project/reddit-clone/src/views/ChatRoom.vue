<template>
    <div class="chat container" >
        <h2 class="text-primary text-center mb-3">Welcome to the Chat Room</h2>
        <h5 v-if="!isAuth" class="text-secondary text-center">Login to have access to the chat room!</h5>
        <div class="card">
            <div class="card-body">
                <p class="nomessages text-secondary" v-if="messages.length == 0">
                    No messages yet!
                </p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
                <button v-if="!isAuth" class="btn btn-primary mt-3" type="submit" @click.stop.prevent="redirect"> Login to use    </button>
            </div>
            <div class="card-action">
                <CreateMessage/>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateMessage from '@/components/CreateMessage';
    import firebase from '../components/firebaseconfig';
    import AuthMonitor from '../AuthMonitor';
    import moment from 'moment';

    export default {
    name: 'Chat',
    mixins:[AuthMonitor],
    components: {
        CreateMessage
    },
    data() {
        return{
            messages: []
        }
    },

    methods: {
    dataHandler(snapshot) {
        this.messages.push(snapshot.val());
    },

    redirect() {
        this.$router.push('Login') 
    }
    },


    mounted() {
        firebase.database().ref("messages").on("child_added", this.dataHandler);
    }

    }
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 0px;
}

.chat h5{
    margin-top: 0px;
    margin-bottom: 40px;
}

.chat span{
    font-size: 1.2em;
}

.chat .time{
    display: block;
    font-size: 0.7em;
}

.messages{
    max-height: 300px;
    overflow: auto;
}
</style>
