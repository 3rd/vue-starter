import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

export default function (thingsToInjectInRootState = []) {
  return new Vuex.Store({
    state: thingsToInjectInRootState.reduce((accumulator, item) => {
      accumulator[item.key] = item.value
      return accumulator
    }, {}),
    modules: {
      app
    }
  })
}
