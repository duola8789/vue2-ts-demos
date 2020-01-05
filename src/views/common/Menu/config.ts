import { menu } from '@/views/common/Menu/types';

const menuConfigs: menu[] = [
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
  }
];

export default menuConfigs;
