
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inicio', name: 'inicio', component: ()=> import('pages/IndexPage.vue') },
      { path: 'prueba', name: 'prueba', component: ()=> import('pages/Prueba-Component.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
