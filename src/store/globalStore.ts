interface State {
  title: string;
}

interface UpdateTitleMutationPayload {
  title: string;
}

const state: State = {
  title: ''
};

const mutations = {
  UPDATE_TITLE_MUTATION(state: State, { title }: UpdateTitleMutationPayload): void {
    state.title = title;
  }
};

const actions = {};

export default { state, mutations, actions };
