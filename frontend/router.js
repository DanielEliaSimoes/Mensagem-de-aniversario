import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import EnvioDeMensagem from '~/pages/nova_mensagem.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/nova_mensagem', component: EnvioDeMensagem, name: 'nova_mensagem'}

  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
