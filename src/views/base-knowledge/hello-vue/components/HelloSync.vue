<template>
  <el-card>
    <div slot="header"><h2>.sync修饰符，在父组件中触发 @update:my-prop 事件</h2></div>
    <el-button @click="getTime">Set Time</el-button>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator';

@Component
export default class HelloSync extends Vue {
  @PropSync('myProp', { type: String, default: '' }) computedMyProp!: string;

  getTime() {
    this.computedMyProp = new Date().toLocaleString();
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
