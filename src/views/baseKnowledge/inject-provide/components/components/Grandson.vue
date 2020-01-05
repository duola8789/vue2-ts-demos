<template>
  <el-card class="item">
    <div slot="header"><h2>在孙子组件使用 @InjectReactive 注入响应式数据，同名数据使用最近的父组件提供的数据</h2></div>
    <div>{{ root }} -- {{ parent }}</div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class InjectProvideGrandson extends Vue {
  @Inject({ from: 'root' }) readonly root!: string;
  @Inject() readonly parent!: string;
  // @InjectReactive() readonly parent!: string;
}
</script>
