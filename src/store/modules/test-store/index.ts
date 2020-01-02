import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { mockFetch } from '@/utils';

@Module({ dynamic: true, namespaced: true, store, name: 'testStore' })
export default class TestStore extends VuexModule {
  // state
  message: string = '';

  // mutation
  @Mutation
  UPDATE_MESSAGE_MUTATION(title: string): void {
    this.message = title;
  }

  // action
  @Action
  async UPDATE_MESSAGE_ACTION(): Promise<string> {
    const result: string = await mockFetch();
    this.context.commit('UPDATE_MESSAGE_MUTATION', result);
    return result;
  }
}

// 使用 getModule 获得类型安全，@Module 必须按照上面进行设置，需要是动态导入的，所以在 @store/index 中不需要通过 modules 导入
// 使用方法：
// import { getModule } from 'vuex-module-decorators';
// import TestStore from '@/store/modules/testStore';
//
// const testStore = getModule(TestStore);
// testStore.message;
// testStore.UPDATE_MESSAGE_MUTATION('Hello');
// testStore.UPDATE_MESSAGE_ACTION();
