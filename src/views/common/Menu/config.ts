import { menu } from '@/views/common/Menu/types';

const menuConfigs: menu[] = [
  {
    path: '/base',
    icon: 'el-icon-location',
    title: '基础知识',
    children: [
      { path: '/base/hello-vue', title: 'Hello Vue', icon: 'el-icon-location' },
      { path: '/base/methods-and-template', title: '实例方法和模版', icon: 'el-icon-location' }
    ]
  }
];

export default menuConfigs;
