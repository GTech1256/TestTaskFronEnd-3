import Vue from 'vue'
import Vuex from 'vuex'
import tutorial from './modules/tutorial/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tutorial
  }
})
