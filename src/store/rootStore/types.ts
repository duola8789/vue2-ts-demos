export interface RootState {
  title: string;
}

export interface UpdateTitleMutationPayload {
  payload: {
    title: string;
  };
}
