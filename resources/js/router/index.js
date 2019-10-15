import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import app from '../App.vue'
Vue.component('app', app)

// import component
import Register from '../components/Auth/Register.vue'
import Login from '../components/Auth/Login.vue'

import not_found from '../components/NotFound.vue'

import Home from '../components/Home.vue';

import Index from '../components/Item/Index.vue';
import Create from '../components/Item/Create.vue';
import Edit from '../components/Item/Edit.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    // items
    {
        name: 'items',
        path: '/items',
        component: Index,
        meta: { auth: true }
    },
    {
        name: 'create',
        path: '/items/create',
        component: Create,
        meta: { auth: true }
    },
    {
        name: 'edit',
        path: '/items/edit/:id',
        component: Edit,
        meta: { auth: true }
    },
    // auth
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: { auth: false }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: { auth: false }
    },
    // not found
    { 
        name: 'not_found',
        path: '/404',
        component: not_found
    },
    { 
        path: '*',
        redirect: '/404',
        component: not_found
    },
],
})