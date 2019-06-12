import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Chat from './views/ChatRoom.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      // beforeEnter:(to,from,next) => {
      //   if(to.params.email) {
      //     next();
      //   } else {
      //     next({name:'login'});
      //   }
      // }
    }
  ]
});



export default router;
