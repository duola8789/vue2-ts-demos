<template>
  <div class="item">
    <el-card>
      <div slot="header"><h2>子组件定义了 notify 方法，通过父组件来触发</h2></div>
      <el-button @click="() => notify()">Emit From Child Itself</el-button>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloRef extends Vue {
  notify(from = 'child'): void {
    this.$notify({
      title: `啦啦啦 from ${from}`,
      message: '😝😝😝😝😝😝',
      type: 'success'
    });
  }
}
</script>

<style scoped lang="less">
.container {
  .item {
    margin-top: 10px;

    .sayButton {
      margin-top: 20px;
    }
  }
}
</style>
