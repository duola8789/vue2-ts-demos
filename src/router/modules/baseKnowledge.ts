import { lazyLoad } from '@/utils';

const baseKnowledgeRoutes = [
  {
    path: '/base/hello-vue',
    name: 'base',
    component: lazyLoad('baseKnowledge/HelloVue'),
    meta: {
      title: 'Hello Vue'
    }
  }
];

export default baseKnowledgeRoutes;
