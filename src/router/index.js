import { createRouter, createWebHashHistory } from 'vue-router'

import ListArticle from "@/views/ListArticle";
import CreateArticle from "@/views/CreateArticle";
import EditArticle from "@/views/EditArticle";
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditArticle
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
