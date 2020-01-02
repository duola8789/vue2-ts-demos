import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import baseKnowledge from './modules/baseKnowledge';
import { lazyLoad } from '@/utils';
import { beforeEachCallback } from '@/router/router-guards';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home'),
    meta: {
      title: 'Vue Learning Demos'
    }
  },
  ...baseKnowledge,
  {
    path: '*',
    name: 'NotFound',
    component: lazyLoad('common/NotFound'),
    meta: {
      title: 'Not Found'
    }
  }
];

const router = new VueRouter({ routes });

// 全局前置导航
router.beforeEach(beforeEachCallback);

export default router;
