import Vue from 'vue';
import Vuex from 'vuex';

import rootStore from '@/store/rootStore/index';

import { RootState } from './rootStore/types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: rootStore.state,
  mutations: rootStore.mutations,
  actions: rootStore.actions,
  modules: {}
});
