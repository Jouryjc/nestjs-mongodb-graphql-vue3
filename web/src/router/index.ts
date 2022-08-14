import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';
import TodoList from '../pages/todo-list/index.vue';

const routes: RouterOptions['routes'] = [
  {
    path: '/',
    redirect: '/todo-list',
  },
  {
    path: '/todo-list',
    component: TodoList,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
