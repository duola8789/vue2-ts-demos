<template>
  <el-card class="item">
    <div slot="header">
      <h2>
        在根组件使用 @Provide 提供数据，是
        <span class="special">非响应式</span>
        的
      </h2>
    </div>
    <el-input v-model="root" />
    <div class="inner">
      <Child />
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Child from '@/views/base-knowledge/inject-provide/components/Child.vue';

@Component({
  components: {
    Child
  }
})
export default class InjectProvide extends Vue {
  @Provide() root = 'Root';
  @Provide('parent') readonly parentValue = 'Grandpa';

  // 相当于
  //  provide() {
  //   return {
  //     root: 'Root Initial Value',
  //     parent: this.parentValue
  //   }
  // }
}
</script>

<style scoped lang="less">
.inner {
  margin-top: 20px;
}

.special {
  color: #dd0600;
}
</style>
