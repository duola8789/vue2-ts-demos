import { MutationTree, GetterTree, ActionTree, ActionContext } from 'vuex';
import { RootState } from '@/store/root-store/interface-types';
import {
  UPDATE_TODO_LIST_MUTATION,
  CREATE_TODO_ITEM_MUTATION,
  CREATE_TODO_ITEM_ACTION
} from '@/store/modules/todo-store/store-types';

export interface TodoItem {
  name: string;
  id: string;
  isFinished: boolean;
}

export interface TodoState {
  list: TodoItem[];
}

export interface TodoGetters extends GetterTree<TodoState, RootState> {
  totalCount(state: TodoState): number;
  finishedList(state: TodoState): TodoItem[];
  finishedCount(state: TodoState, getters: TodoGetters): number;
}

export interface TodoUpdateTodoListMutation {
  (state: TodoState, payload: { id: string }): void;
}

export interface TodoCreateTodoItemMutation {
  (state: TodoState, payload: { name: string }): void;
}

export interface TodoMutations extends MutationTree<TodoState> {
  [UPDATE_TODO_LIST_MUTATION]: TodoUpdateTodoListMutation;
  [CREATE_TODO_ITEM_MUTATION]: TodoCreateTodoItemMutation;
}

export interface TodoCreateTodoItemAction<R, S> {
  (actionContext: ActionContext<R, S>, payload: { name: string }): Promise<object>;
}

export interface TodoActions extends ActionTree<TodoState, RootState> {
  [CREATE_TODO_ITEM_ACTION]: TodoCreateTodoItemAction<TodoState, RootState>;
}
