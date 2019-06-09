import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'



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
      props: true
    }
  ]
});

export default router;
