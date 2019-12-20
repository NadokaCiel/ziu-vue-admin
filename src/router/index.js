import Vue from 'vue';
import Router from 'vue-router';
import LocalStorage from 'ciel-localstorage';
import Permission from '@/store/modules/permission';
import Login from '@/views/Login/Index';
import Dashboard from '@/views/Dashboard/Index';

// import Catalog from './catalog';

/* Layout */
import Layout from '@/layout';

Vue.use(Router);

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    hidden: true,
  },

  {
    path: '/error/404',
    component: () => import('@/views/Error/Error404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard', icon: 'iconyibiaopan' },
    }],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

router.beforeEach((to, from, next) => {
  const token = LocalStorage.get('token');
  if (!token && from.name === "Login") {
    console.log('login');
  } else if (!token && to.name !== "Login") {
    next({ name: "Login" });
  } else {
    const role = LocalStorage.get('role') || 'visitor';
    if (to.meta && to.meta.auth && !Permission.checkAuth(to.meta.auth, role)) {
      next("/error/404");
    } else {
      next();
    }
  }
});
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
