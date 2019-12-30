import { lazyLoad } from '@/utils';

const baseKnowledgeRoutes = [
  {
    path: '/base/hello-vue',
    name: 'base',
    component: lazyLoad('About')
  }
];

export default baseKnowledgeRoutes;
