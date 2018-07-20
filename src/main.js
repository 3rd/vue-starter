import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const plugins = [
  /*
    {
      plugin: Plugin,
      options: {}
    }
  */
]

const injectables = [
  /*
    {
      key: 'key',
      value: ?
    }
  */
  {
    key: '$debug',
    value: process.env.NODE_ENV !== 'production'
  }
]

const storeInjectables = [
  /*
    {
      key: 'key',
      value: ?
    }
  */
  ...injectables
]

plugins.forEach(plugin => {
  Vue.use(plugin, plugin.options || {})
})

injectables.forEach(injectable => {
  Vue.prototype[injectable.key] = injectable.value
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store: store(storeInjectables),
  render: h => h(App)
})
