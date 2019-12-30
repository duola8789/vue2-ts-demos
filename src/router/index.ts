import Vue from 'vue';
import VueRouter from 'vue-router';
import baseKnowledge from './modules/baseKnowledge';
import { lazyLoad } from '@/utils';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  ...baseKnowledge,
  {
    path: '*',
    name: 'NotFound',
    component: lazyLoad('common/NotFound')
  }
];

const router = new VueRouter({
  routes
});

export default router;
