<template>
  <div class="home">
    <el-card>
      <div slot="header">
        <h2>共{{ totalCount }}项待办事项, 已完成{{ finishedCount }}项</h2>
        <div class="input-container">
          <el-input v-model="newItem" />
          <div class="button-group">
            <el-button @click="addItem">添加</el-button>
            <el-button @click="addItemAsync">异步添加</el-button>
          </div>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <div slot="header">
              <h2>待办事项</h2>
            </div>
            <div v-for="item in list" :key="item.id" class="item">
              <el-checkbox :value="item.isFinished" border @change="changeItem(item.id)">
                {{ item.name }}
              </el-checkbox>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div slot="header">
              <h2>已完成事项</h2>
            </div>
            <div v-for="item in finishedList" :key="item.id" class="item">
              <el-checkbox :value="item.isFinished" :disabled="true" border @change="changeItem(item.id)">
                {{ item.name }}
              </el-checkbox>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TodoItem } from '@/store/modules/todo-store/interface-types';
import { successResponse } from '@/utils/network-helper/types';
import {
  UPDATE_TODO_LIST_MUTATION,
  CREATE_TODO_ITEM_MUTATION,
  CREATE_TODO_ITEM_ACTION
} from '@/store/modules/todo-store/store-types';

import { namespace } from 'vuex-class';
const todoModule = namespace('todo');

@Component
export default class TodoList extends Vue {
  newItem = '';

  @todoModule.State list!: TodoItem[];
  @todoModule.Getter finishedList!: TodoItem[];
  @todoModule.Getter totalCount!: number;
  @todoModule.Getter finishedCount!: number;

  @todoModule.Mutation(UPDATE_TODO_LIST_MUTATION) updateTotoList!: (payload: { id: string }) => void;
  @todoModule.Mutation(CREATE_TODO_ITEM_MUTATION) createTodoItem!: (payload: { name: string }) => void;

  @todoModule.Action(CREATE_TODO_ITEM_ACTION) createTodoItemRequest!: (payload: {
    name: string;
  }) => Promise<successResponse>;

  changeItem(id: string): void {
    this.updateTotoList({ id });
  }

  checkItem(): boolean {
    if (!this.newItem) {
      this.$message.error('请输入内容');
      return false;
    }
    return true;
  }

  addItemSuccess(): void {
    this.$message.success('添加成功');
    this.newItem = '';
  }

  addItem(): void {
    if (this.checkItem()) {
      this.createTodoItem({ name: this.newItem });
      this.addItemSuccess();
    }
  }

  async addItemAsync(): Promise<void> {
    if (this.checkItem()) {
      const { code, data } = await this.createTodoItemRequest({ name: this.newItem });
      if (code === 0) {
        this.addItemSuccess();
      }
    }
  }
}
</script>

<style scoped lang="less">
.home {
  .input-container {
    margin-top: 15px;

    .button-group {
      margin-top: 15px;
    }
  }

  .item:nth-child(n + 2) {
    margin-top: 15px;
  }
}
</style>
