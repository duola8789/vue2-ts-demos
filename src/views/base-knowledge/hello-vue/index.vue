<template>
  <div class="container">
    <el-card class="item">
      <div slot="header"><h2>对象属性和数组属性</h2></div>
      <p class="message-top">对象属性： {{ obj }}</p>
    </el-card>

    <el-card class="item">
      <div slot="header"><h2>计算属性/侦听器</h2></div>
      <el-input v-model="msg" />
      <p class="message-bottom">输入框中输入的内容是{{ msg }} -- 大写后是{{ upperMsg }} -- 旧值是{{ oldMsg }}</p>
    </el-card>

    <el-card class="item">
      <div slot="header"><h2>父子组件通信 - @Emit装饰符和@Prop装饰符</h2></div>
      <div class="parent">
        <p class="message-top">从子组件传递来的消息：{{ childMessage }}</p>
        <el-button @click="changeCountToChild(true)">Parent Add</el-button>
        <el-button @click="changeCountToChild(false)">Parent Minus</el-button>
        <el-button @click="changeDefaultSlotShow">Toggle Default Slot</el-button>
        <el-button @click="changeNamedSlotShow">Toggle Named Slot</el-button>
      </div>
      <div class="child">
        <hello-child :count="count" @say-hi="(msg) => (childMessage = msg)">
          <div v-if="isDefaultSlotShow">父组件插入默认插槽的内容</div>
          <div v-show="isNamedSlotShow" slot="child-slot">父组件插入具名插槽</div>
        </hello-child>
      </div>
    </el-card>

    <el-card class="item">
      <div slot="header"><h2>Sync - @PropSync装饰符</h2></div>
      <p class="message-top">绑定到子组件的默认的v-model：{{ syncValue }}</p>
      <hello-sync :my-prop.sync="syncValue" />
    </el-card>

    <el-card class="item">
      <div slot="header"><h2>自定义事件 - @Model装饰符</h2></div>
      <p class="message-top">绑定到子组件的默认的v-model：{{ componentVModel }}</p>
      <hello-v-model v-model="componentVModel" />
    </el-card>

    <el-card class="item">
      <div slot="header"><h2>Ref - @Ref装饰符</h2></div>
      <el-button @click="emitChildNotify">Emit From Parent</el-button>
      <hello-ref ref="hello" />
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref } from 'vue-property-decorator';
import HelloChild from '@/views/base-knowledge/hello-vue/components/HelloChild.vue';
import HelloVModel from '@/views/base-knowledge/hello-vue/components/HelloVModel.vue';
import HelloSync from '@/views/base-knowledge/hello-vue/components/HelloSync.vue';
import HelloRef from '@/views/base-knowledge/hello-vue/components/HelloRef.vue';

import { DataObj } from '@/views/base-knowledge/hello-vue/types';

@Component({
  components: {
    HelloChild,
    HelloSync,
    HelloVModel,
    HelloRef
  }
})
export default class HelloVue extends Vue {
  // 不推荐组件内定义类型
  obj: {
    users: { name: string; age: number }[];
    info: {
      code: number;
      message: string;
      result: { isOk: boolean; id: string }[];
      data?: any[];
    };
  } = {
    users: [],
    info: {
      code: 0,
      message: '',
      result: []
    }
  };

  msg: string = '';
  oldMsg: string = '';

  count: number = 0;
  childMessage: string = '';

  isDefaultSlotShow: boolean = false;
  isNamedSlotShow: boolean = false;

  syncValue: string = '';

  componentVModel: boolean = false;

  @Ref() readonly hello!: { notify: (from?: string) => {} };

  @Watch('msg', { immediate: true, deep: true })
  onMsgChanged(newVal: string, oldVal: string): void {
    this.oldMsg = oldVal;
  }

  mounted() {
    setTimeout((): void => {
      const obj: DataObj = {
        users: [],
        info: {
          code: 200,
          message: 'ok',
          result: [{ isOk: true, id: '222' }]
        }
      };
      this.obj = Object.assign(obj, { users: [{ name: 'Jay', age: 22 }] });
    }, 2000);
  }

  get upperMsg(): string {
    return this.msg.toUpperCase();
  }

  changeCountToChild(isAdd: boolean = true): void {
    this.count = isAdd ? this.count + 1 : this.count - 1;
  }

  changeDefaultSlotShow(): void {
    this.isDefaultSlotShow = !this.isDefaultSlotShow;
  }

  changeNamedSlotShow(): void {
    this.isNamedSlotShow = !this.isNamedSlotShow;
  }

  emitChildNotify(): void {
    this.hello.notify('Parent');
  }
}
</script>

<style scoped lang="less">
.container {
  .item {
    margin-top: 10px;

    .message-top {
      margin-bottom: 20px;
    }

    .message-bottom {
      margin-top: 20px;
    }
  }

  .child {
    margin-top: 20px;
  }
}
</style>
