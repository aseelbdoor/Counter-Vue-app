import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ModalsViewVue from '../views/ModalsView.vue';
import PostsViewVue from '../views/PostsView.vue';
import AboutViewVue from '../views/AboutView.vue';
import PostDetailsViewVue from '../views/PostDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutViewVue
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
      // component: PostsViewVue
    },
    {
      path: '/postDetails/:id',
      name: 'postDetails',
      component: () => import('../views/PostDetailsView.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsViewVue
    }
  ]
})

export default router
