import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/modules/Home.vue';
import DemoElement from '@/modules/DemoElement.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo',
      name: 'DemoElement',
      component: DemoElement,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});
