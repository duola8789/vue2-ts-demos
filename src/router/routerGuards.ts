import { NavigationGuard } from 'vue-router';
import store from '@/store';

const changeTitle = (title: string): void => {
  store.commit('UPDATE_TITLE_MUTATION', { payload: { title } });
  // store.dispatch('UPDATE_TITLE_ACTION').then((v: string): void => console.log(v));
};

const beforeEachCallback: NavigationGuard = (to, from, next) => {
  changeTitle(to.meta.title || 'Vue Learning Demos');
  next();
};

export { beforeEachCallback };
