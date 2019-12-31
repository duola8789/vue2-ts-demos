import { RootState, UpdateTitleMutationPayload } from '@/store/root/types';

const state: RootState = {
  title: ''
};

const mutations = {
  UPDATE_TITLE_MUTATION(state: RootState, { title }: UpdateTitleMutationPayload): void {
    state.title = title;
  }
};

const actions = {};

export default { state, mutations, actions };
