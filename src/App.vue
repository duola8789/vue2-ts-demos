<template>
  <div id="app" class="container">
    <el-header class="head" height="60px">
      <el-button :icon="collapseButtonIcon" class="collapse-button" circle @click="collapseMenu" />
      <el-link href="/" type="primary" class="title" :underline="false">Vue Learning Demos</el-link>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <Menu :is-collapse="isCollapse" :class="menuClass" class="menu" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Menu from '@/views/common/Menu/index.vue';

@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {
  isCollapse: boolean = false;

  collapseMenu(): void {
    this.isCollapse = !this.isCollapse;
  }

  get menuClass(): string {
    return this.isCollapse ? 'collapsed-menu' : 'expanded-menu';
  }

  get collapseButtonIcon(): string {
    return this.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold';
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei',
    'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<style scoped lang="less">
.container {
  .head {
    position: relative;
    line-height: 60px;
    background: #d3d3d3;
    font-size: 0;

    .title {
      font-size: 20px;
    }

    .collapse-button {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
    }
  }

  .aside {
    border-right: solid 1px #e6e6e6;

    .menu {
      text-align: left;
      border: none;

      &.collapsed-menu {
        width: auto;
      }

      &.expanded-menu {
        width: 250px;
      }
    }
  }
}
</style>
