import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard-teste',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/dashboard/dashboard-teste.vue') },
    { path:  '/post-teste', component: () => import('pages/posts/post-teste.vue') }

    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
