import Vue from 'vue'
import Router from 'vue-router'


import UsersComponent from '../components/UsersComponent';
import DoUserComponent from '../components/DoUserComponent';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'users-component',
      component: UsersComponent
    },
    {
      path: '/do',
      name: 'do-user-component',
      component: DoUserComponent
    },
  ]
})
