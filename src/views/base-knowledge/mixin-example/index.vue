<template>
  <div class="container">
    <el-card class="item">
      <div slot="header"><h2>使用 Mixin 来实现逻辑复用</h2></div>
      <el-button @click="toggleVisible">{{ buttonText }} Dialog</el-button>
    </el-card>
    <el-dialog title="提示" :visible.sync="visible">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import VisibleControlMixin from '@/mixins/visible-control-mixin';

@Component
export default class MixinExample extends Mixins(VisibleControlMixin) {}
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
