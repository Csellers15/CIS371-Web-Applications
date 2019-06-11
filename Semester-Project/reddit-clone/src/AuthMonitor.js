import firebase from './components/firebaseconfig'
export default {
    
    mounted() {
        console.log(firebase.auth().currentUser);
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.isAuth = true;
            } else {
                this.isAuth = false;
            }
        });
      },

      data(){
        return {
            isAuth: false
        }
      },
}