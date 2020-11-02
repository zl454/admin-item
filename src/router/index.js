import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', icon: 's-home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 's-home' },
      }
    ]
  },
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: { title: '商品', icon: 's-shop' },
    children: [
      {
        path: 'product',
        name: 'product',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '商品列表', icon: 'notebook-1' }
      },
      {
        path: 'addproduct',
        name: 'addproduct',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '添加商品', icon: 'notebook-2' }
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '修改商品', icon: 'collection' }
      },
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: { title: '订单', icon: 's-order' },
    children: [
      {
        path: 'order',
        name: 'order',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '订单列表', icon: 'notebook-1' }
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '订单详情', icon: 'notebook-2' }
      },
      {
        path: 'orderList',
        name: 'orderList',
        // component: () => import('@/views/pms/product/update'),
        meta: {
          title: '发货列表', icon: 'collection'
        }
      },
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupan',
    name: 'sms',
    meta: { title: '营销', icon: 's-management' },
    children: [
      {
        path: 'flash',
        name: 'flash',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '秒杀时间段列表', icon: 'notebook-1' }
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '秒杀时间段列表', icon: 'notebook-2' },
        hidden: true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '秒杀时间段选择', icon: 'collection' },
        hidden: true
      },
      {
        path: 'coupon',
        name: 'coupon',
        // component: () => import('@/views/pms/product/update'),
        meta: { title: '优惠券列表', icon: 'collection' }
      }
    ]
  },
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: { title: '权限', icon: 'key' },
    children: [
      {
        path: 'admin',
        name: 'admin',
        // component: () => import('@/views/pms/product/index'),
        meta: { title: '用户列表', icon: 'collection' }
      },
      {
        path: 'role',
        name: 'role',
        // component: () => import('@/views/pms/product/add'),
        meta: { title: '角色列表', icon: 'collection' },
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
