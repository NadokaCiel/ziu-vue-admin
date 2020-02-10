export default [{
  path: 'list',
  name: 'Menu',
  component: () => import (/* webpackChunkName: "menu" */'./List.vue'),
  meta: {
    auth: ['admin'],
    title: '路由管理',
    icon: 'iconicon-lujingguanli',
  },
}];