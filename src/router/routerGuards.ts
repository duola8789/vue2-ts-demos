import { NavigationGuard } from 'vue-router';
import store from '@/store';

const changeTitle = (title: string): void => {
  store.commit('UPDATE_TITLE_MUTATION', { title: title });
};

const beforeEachCallback: NavigationGuard = (to, from, next) => {
  changeTitle(to.meta.title || 'Vue Learning Demos');
  next();
};

export { beforeEachCallback };
