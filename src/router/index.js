import { createRouter, createWebHistory } from 'vue-router'

import PhotoApp from '../views/PhotoApp'
import PhotoView from '../views/PhotoView'

const routes = [
 {
   name:'root',
   path:'/',
   component: PhotoApp,
   children:[
    {
      name:'photos',
      path:'/albums/:id',
      component: PhotoView,
    }
   ]
 }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


