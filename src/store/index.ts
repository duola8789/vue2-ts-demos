import Vue from 'vue';
import Vuex from 'vuex';

import globalStore from '@/store/globalStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: globalStore.state,
  mutations: globalStore.mutations,
  actions: globalStore.actions,
  modules: {}
});
