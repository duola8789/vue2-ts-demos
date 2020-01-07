import { lazyLoadHelper } from '@/utils';
import { RouteConfig } from 'vue-router';
import { beforeEnterLifeCircle } from '@/router/router-guards';

const baseKnowledgeRoutes: RouteConfig[] = [
  {
    path: '/base/hello-vue',
    name: 'base',
    component: lazyLoadHelper('baseKnowledge/hello-vue/index'),
    meta: {
      title: 'Hello Vue'
    }
  },
  {
    path: '/base/life-circles',
    name: 'base',
    component: lazyLoadHelper('baseKnowledge/life-circles/index'),
    beforeEnter: beforeEnterLifeCircle,
    meta: {
      title: 'Life Circles'
    }
  },
  {
    path: '/base/inject-and-provide',
    name: 'base',
    component: lazyLoadHelper('baseKnowledge/inject-provide/index'),
    meta: {
      title: 'Inject and Provide'
    }
  },
  {
    path: '/base/mixin-example',
    name: 'base',
    component: lazyLoadHelper('baseKnowledge/mixin-example/index'),
    meta: {
      title: 'Mixin Example'
    }
  }
];

export default baseKnowledgeRoutes;
