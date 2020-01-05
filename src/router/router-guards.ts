import { NavigationGuard } from 'vue-router';

import store from '@/store';
import * as STORE_TYPES from '@/store/root-store/store-types';

const changeTitle = (title: string): void => {
  store.commit(STORE_TYPES.UPDATE_TITLE_MUTATION, { title });
  // store.dispatch(STORE_TYPES.UPDATE_TITLE_ACTION).then((v: string): void => console.log(v));
};

const beforeEachCallback: NavigationGuard = (to, from, next) => {
  if (to.path === '/base/life-circles') {
    // eslint-disable-next-line no-console
    console.log('beforeEach');
  }

  changeTitle(to.meta.title || 'Vue Learning Demos');
  next();
};

const beforeEnterLifeCircle: NavigationGuard = (to, from, next) => {
  if (to.path === '/base/life-circles') {
    // eslint-disable-next-line no-console
    console.log('beforeEnter');
  }
  next();
};

const beforeResolveCallback: NavigationGuard = (to, from, next) => {
  if (to.path === '/base/life-circles') {
    // eslint-disable-next-line no-console
    console.log('beforeResolve');
  }
  next();
};

const afterEachCallback: NavigationGuard = (to, from, next) => {
  if (to.path === '/base/life-circles' || from.path === '/base/life-circles') {
    // eslint-disable-next-line no-console
    console.log('afterEach');
  }
  next();
};

export { beforeEachCallback, beforeEnterLifeCircle, beforeResolveCallback, afterEachCallback };
