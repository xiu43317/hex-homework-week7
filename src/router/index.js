import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminDashboard.vue'),
    children: [
      {
        path: '',
        name: 'adminDefault',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/AdminCoupon.vue')
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('../views/AdminArticles.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/AdminOrders.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/UserLayout.vue'),
    children: [
      {
        path: '',
        name: 'defaultPage',
        component: () => import('../views/UserProducts.vue')
      },
      {
        path: 'products',
        name: 'userProducts',
        component: () => import('../views/UserProducts.vue')
      },
      {
        path: 'cart',
        name: 'userCart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'articles',
        name: 'userArticles',
        component: () => import('../views/UserArticles.vue')
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('../views/UserArticle.vue')
      },
      {
        path: 'orders',
        name: 'userOrders',
        component: () => import('../views/UserOrders.vue')
      },
      {
        path: 'order/:id',
        name: 'order',
        component: () => import('../views/UserOrder.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
