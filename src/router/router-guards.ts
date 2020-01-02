import { NavigationGuard } from 'vue-router';

import store from '@/store';
import * as STORE_TYPES from '@/store/root-store/store-types';

const changeTitle = (title: string): void => {
  store.commit(STORE_TYPES.UPDATE_TITLE_MUTATION, { title });
  // store.dispatch(STORE_TYPES.UPDATE_TITLE_ACTION).then((v: string): void => console.log(v));
};

const beforeEachCallback: NavigationGuard = (to, from, next) => {
  changeTitle(to.meta.title || 'Vue Learning Demos');
  next();
};

export { beforeEachCallback };
