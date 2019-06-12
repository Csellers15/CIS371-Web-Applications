<template>
    <div v-if="isAuth" class="container" style="margin-bottom: 30px">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>

            <button v-if="isAuth" class="btn btn-primary" type="submit"  @click.stop.prevent="createMessage"> Submit    </button>
        </form>
    </div>
</template>

<script>
    import firebase from '../components/firebaseconfig';
    import AuthMonitor from '../AuthMonitor';
    import Login from '../components/Login';

    export default {
        name: 'CreateMessage',
        mixins:[AuthMonitor],
        data(){
            return {
                newMessage: "",
                errorText: "",
                user: firebase.auth().currentUser.email,
                timestamp: Date(firebase.database.ServerValue.TIMESTAMP)
            }
        },
        methods: {
            createMessage () {
                if (this.newMessage != '') {
                    firebase.database().ref("messages").push().set({
                        message: this.newMessage,
                        name: this.user,
                        timestamp: this.timestamp
                    }).catch(err => {
                            console.log(err);
                        });
                    this.newMessage = "";
                    this.errorText = "";
                } else {
                    this.errorText = "A message must be entered!"
                }
            }
        }
    }
</script>