import * as STORE_TYPES from './store-types';
import { MutationTree, ActionTree, ActionContext } from 'vuex';
export interface RootState {
  title: string;
}

export interface UPDATE_TITLE_MUTATION {
  (state: RootState, payload: { title: string }): void;
}

export interface RootMutations extends MutationTree<RootState> {
  [STORE_TYPES.UPDATE_TITLE_MUTATION]: UPDATE_TITLE_MUTATION;
}

export interface UPDATE_TITLE_ACTION<R, S> {
  (actionContext: ActionContext<R, S>): Promise<string>;
}

export interface RootActions extends ActionTree<RootState, RootState> {
  [STORE_TYPES.UPDATE_TITLE_ACTION]: UPDATE_TITLE_ACTION<RootState, RootState>;
}
