<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="item">
          <div slot="header"><h2>子组件 - 通信</h2></div>
          <p>从父组件传递来的消息：{{ count }}</p>
          <el-button class="sayButton" @click="sayHi">Child Say</el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="item">
          <div slot="header"><h2>子组件 - 插槽</h2></div>
          <el-row :gutter="12">
            <el-col :span="12">
              <el-card>
                <div slot="header"><h2>默认插槽</h2></div>
                <slot>子组件默认插槽的默认内容</slot>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                <div slot="header"><h2>具名插槽</h2></div>
                <slot name="child-slot">子组件命名插槽的默认内容</slot>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class HelloChild extends Vue {
  @Prop({ type: Number, default: 0 }) readonly count!: number;

  @Emit()
  sayHi(): string {
    const date: string = new Date().toLocaleString();
    return `Hello -- ${date}`;
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
