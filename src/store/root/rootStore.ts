import { RootState, UpdateTitleMutationPayload } from '@/store/root/types';
import { ActionContext, ActionPayload } from 'vuex';

const mockFetch = (url?: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout((): void => {
      resolve('Promise is OK');
    }, 1000);
  });
};

const state: RootState = {
  title: ''
};

const mutations = {
  UPDATE_TITLE_MUTATION(state: RootState, { payload: { title } }: UpdateTitleMutationPayload): void {
    state.title = title;
  }
};

const actions = {
  async UPDATE_TITLE_ACTION({ commit }: ActionContext<undefined, RootState>, payload: ActionPayload): Promise<string> {
    const result: string = await mockFetch();
    commit('UPDATE_TITLE_MUTATION', { payload: { title: result } });
    return result;
  }
};

export default { state, mutations, actions };
