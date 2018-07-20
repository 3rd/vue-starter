import Vue from 'vue'
import Router from 'vue-router'

import Default from '~/src/pages/Default.vue'

const routes = [{
  path: '/',
  name: 'Default',
  component: Default
}]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
