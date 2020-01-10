import { UPDATE_TITLE_MUTATION, UPDATE_TITLE_ACTION } from './store-types';
import { MutationTree, GetterTree, ActionTree, ActionContext } from 'vuex';
export interface RootState {
  title: string;
}

export interface RootGetter extends GetterTree<RootState, RootState> {
  subTitle(state: RootState): string;
}

export interface RootUpdateTitleMutation {
  (state: RootState, payload: { title: string }): void;
}

export interface RootMutations extends MutationTree<RootState> {
  [UPDATE_TITLE_MUTATION]: RootUpdateTitleMutation;
}

export interface RootUpdateTitleAction<R, S> {
  (actionContext: ActionContext<R, S>): Promise<string>;
}

export interface RootActions extends ActionTree<RootState, RootState> {
  [UPDATE_TITLE_ACTION]: RootUpdateTitleAction<RootState, RootState>;
}
