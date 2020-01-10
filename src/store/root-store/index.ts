/**
 * 在 index 中定义 store 的具体实现
 * 在 interface-types 定义 store 中相关实现的 TypeScript 类型接口
 * 在 store-types 定义 store 中使用的 Mutation/Action Type 常量
 */
import { RootState, RootGetter, RootMutations, RootActions } from '@/store/root-store/interface-types';
import { setTimeoutThen } from '@/utils';
import { UPDATE_TITLE_MUTATION, UPDATE_TITLE_ACTION } from '@/store/root-store/store-types';

const state: RootState = {
  title: ''
};

const getters: RootGetter = {
  subTitle(state) {
    return state.title.toUpperCase();
  }
};

const mutations: RootMutations = {
  [UPDATE_TITLE_MUTATION](state, { title }) {
    state.title = title;
    return title;
  }
};

const actions: RootActions = {
  async [UPDATE_TITLE_ACTION]({ commit }) {
    const result: string = await setTimeoutThen(1000, 'ok');
    commit(UPDATE_TITLE_MUTATION, { title: result });
    return result;
  }
};

export default { state, getters, mutations, actions };
