<template>
  <div class="container">
    <el-card class="item">
      <div slot="header">
        <h2>v-model</h2>
      </div>
      <el-input v-model="msg" />
      <p class="message">输入框中输入的内容是{{ msg }}</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  msg: string = '';
}
</script>

<style scoped lang="less">
.container {
  .item {
    .message {
      margin-top: 20px;
    }
  }
}
</style>
