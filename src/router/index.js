import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: { title: '商品', icon: 'product' },
    children: [
      {
        path: 'product',
        name: 'product',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '商品列表', icon: 'product-list' }
      },
      {
        path: 'addproduct',
        name: 'product',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '添加商品', icon: 'product-add' }
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '修改商品', icon: 'product-add' }
      },
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: { title: '订单', icon: 'order' },
    children: [
      {
        path: 'order',
        name: 'order',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '订单列表', icon: 'product-list' }
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '订单详情', }
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '发货列表' }
      },
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupan',
    name: 'sms',
    meta: { title: '营销', icon: 'sms' },
    children: [
      {
        path: 'flash',
        name: 'flash',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '秒杀时间段列表', icon: 'sms-flash' }
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '秒杀时间段列表', },
        hidden: true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '秒杀时间段选择' },
        hidden: true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '优惠券列表', icon: 'sms-coupon' }
      }
    ]
  },
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: { title: '权限', icon: 'ums' },
    children: [
      {
        path: 'admin',
        name: 'admin',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '用户列表', icon: 'ums-admin' }
      },
      {
        path: 'role',
        name: 'flashSession',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '角色列表', icon: 'ums-role' },
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
