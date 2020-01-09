import { MenuConfig } from '@/views/common/menu/types';

const menuConfigs: MenuConfig[] = [
  {
    path: '/base',
    icon: 'el-icon-location',
    title: '基础知识',
    children: [
      { path: '/base/hello-vue', title: 'Hello Vue', icon: 'el-icon-location' },
      { path: '/base/life-circles', title: 'Life Circles', icon: 'el-icon-location' },
      { path: '/base/inject-and-provide', title: 'Inject/Provide', icon: 'el-icon-location' },
      { path: '/base/mixin-example', title: 'Mixin Example', icon: 'el-icon-location' }
    ]
  },
  {
    path: '/application',
    icon: 'el-icon-basketball',
    title: '综合应用',
    children: [{ path: '/application/todo-list', title: 'Todo List', icon: 'el-icon-basketball' }]
  }
];

export default menuConfigs;
