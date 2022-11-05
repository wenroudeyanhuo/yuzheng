import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index'),
    hidden: true,
    redirect: '/test1',
    children: [
      {
        path: '/test1',
        name: 'Test1',
        meta: {
          title: '测试1'
        },
        component: () => import('@/views/test1/index'),
      },
      {
        path: '/test2',
        name: 'Test2',
        meta: {
          title: '测试2'
        },
        component: () => import('@/views/test2/index'),
      },
      {
        path: '/location1',
        name: 'songpan1',
        meta: {
          title: 'songpan1'
        },
        component: () => import('@/views/location/index'),
      },
      {
        path: '/location2',
        name: 'songpan2',
        meta: {
          title: 'songpan2'
        },
        component: () => import('@/views/location/index1'),
      },
      {
        path: '/location3',
        name: 'songpan3',
        meta: {
          title: 'songpan3'
        },
        component: () => import('@/views/location/index2'),
      },
      {
        path: '/test3',
        name: 'test3',
        meta: {
          title: 'test3'
        },
        component: () => import('@/views/test3/index'),
      },
      ,
      {
        path: '/map',
        name: 'map',
        meta: {
          title: 'map'
        },
        component: () => import('@/views/map/test'),
      }
    ]
  },

]

const createRouter = () => new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
