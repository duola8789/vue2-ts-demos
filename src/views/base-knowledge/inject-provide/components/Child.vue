<template>
  <div>
    <el-card class="item">
      <div slot="header">
        <h2>在儿子组件使用 @Inject 注入（使用）数据</h2>
        <h2>
          同时使用了 @ProvideReactive 提供数据，是
          <span class="special">响应式</span>
          的，但是在vue-property-decorator@8.3.0存在Bug，不推荐使用
        </h2>
        <slot />
      </div>
      <div class="message">来自根组件的数据：{{ root }} -- {{ parent }} -- {{ sonValue }}</div>
      <el-input v-model="childParent" />
      <div class="inner">
        <Grandson />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Provide } from 'vue-property-decorator';
import Grandson from '@/views/base-knowledge/inject-provide/components/components/Grandson.vue';

@Component({
  components: {
    Grandson
  }
})
export default class InjectProvideChild extends Vue {
  @Inject() readonly root!: string;
  @Inject() readonly parent!: string;
  @Inject({ default: 'Default Son Value' }) readonly sonValue!: string;

  @Provide('parent') childParent = 'Father';
  // @ProvideReactive('parent') childParent = 'Father';
}
</script>

<style scoped lang="less">
.inner {
  margin-top: 20px;
}

.special {
  color: #dd0600;
}

.message {
  margin-bottom: 20px;
}
</style>
