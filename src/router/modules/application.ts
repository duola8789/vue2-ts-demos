import { lazyLoadHelper } from '@/utils';
import { RouteConfig } from 'vue-router';

const applicationRoutes: RouteConfig[] = [
  {
    path: '/application/todo-list',
    name: 'base',
    component: lazyLoadHelper('application/todo-list/index'),
    meta: {
      title: 'Todo List'
    }
  }
];

export default applicationRoutes;
