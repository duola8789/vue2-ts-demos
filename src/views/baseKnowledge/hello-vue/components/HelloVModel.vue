<template>
  <el-card>
    <div slot="header"><h2>利用名为 checked 的 prop 和 change 的事件</h2></div>
    <span>Click：</span>
    <el-checkbox :checked="checked" @change="changeHandler" />
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class HelloVModel extends Vue {
  @Model('change', { type: Boolean, default: false }) checked!: boolean;

  @Emit('change')
  changeHandler(checked: boolean) {
    return checked;
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
