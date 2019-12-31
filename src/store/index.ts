import Vue from 'vue';
import Vuex from 'vuex';

import rootStore from '@/store/root/rootStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: rootStore.state,
  mutations: rootStore.mutations,
  actions: rootStore.actions,
  modules: {}
});
