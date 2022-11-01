
import { auth } from '../firebase'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
  ,
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/ShopView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/ProductDetailsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/workinprogress',
    name: 'workinprogress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkInProgressView.vue'),
    meta: {
      requiresAuth: true,
      requiresDesktop: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeEventListener = onAuthStateChanged(
      auth,
      (user) => {
        removeEventListener();
        resolve(user);
      },
      reject
    )
  });
}


router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresDesktop = to.matched.some((record) => record.meta.requiresDesktop);
  if (requiresAuth && requiresDesktop) {
    if (await getCurrentUser() && window.innerWidth > 1280) {
      next();
    }
    else {
      next('/login');
    }
  }
  else if (requiresAuth) {
    if (await getCurrentUser()) {
      next();
    }
    else {
      next('/login');
    }
  }
  else {
    next();
  }
})

export default router
