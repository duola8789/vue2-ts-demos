import { uIdHelper, request } from '@/utils';
import {
  TodoItem,
  TodoState,
  TodoGetters,
  TodoMutations,
  TodoActions
} from '@/store/modules/todo-store/interface-types';
import {
  UPDATE_TODO_LIST_MUTATION,
  CREATE_TODO_ITEM_MUTATION,
  CREATE_TODO_ITEM_ACTION,
  TODO_LIST_URL
} from '@/store/modules/todo-store/store-types';

const state: TodoState = {
  list: [
    { name: '听音乐', id: uIdHelper(), isFinished: false },
    { name: '写代码', id: uIdHelper(), isFinished: false },
    { name: '网游戏', id: uIdHelper(), isFinished: true }
  ]
};

const getters: TodoGetters = {
  totalCount: (state) => state.list.length,
  finishedList: (state) => state.list.filter((item: TodoItem) => item.isFinished),
  finishedCount: (state, getters) => getters.finishedList.length
};

const mutations: TodoMutations = {
  [UPDATE_TODO_LIST_MUTATION](state, { id }) {
    state.list = state.list.map(
      (item: TodoItem): TodoItem => {
        let isFinished = item.id === id ? !item.isFinished : item.isFinished;
        return {
          ...item,
          isFinished
        };
      }
    );
  },
  [CREATE_TODO_ITEM_MUTATION](state, { name }) {
    const newItem: TodoItem = {
      name,
      id: uIdHelper(),
      isFinished: false
    };
    state.list = [...state.list, newItem];
  }
};

const actions: TodoActions = {
  async [CREATE_TODO_ITEM_ACTION]({ commit }, { name }) {
    const result = await request.get(TODO_LIST_URL);
    commit(CREATE_TODO_ITEM_MUTATION, { name });
    return result;
  }
};

export default { namespaced: true, state, getters, mutations, actions };
