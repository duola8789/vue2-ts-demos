<template>
  <div class="container">
    <el-card class="item">
      <el-button @click="toggleSingleCompVisible">{{ singleCompVisible ? '销毁' : '创建' }}普通组件</el-button>
      <el-button @click="doubleCompVisible = !doubleCompVisible">
        {{ doubleCompVisible ? '销毁' : '创建' }}父子组件
      </el-button>
      <el-button @click="keepAliveCompVisible = !keepAliveCompVisible">
        {{ keepAliveCompVisible ? '销毁' : '创建' }}Keep-Alive组件
      </el-button>
      <el-button @click="mixinCompVisible = !mixinCompVisible">
        {{ mixinCompVisible ? '销毁' : '创建' }}Mixin组件
      </el-button>
    </el-card>
    <el-card class="item">
      <div slot="header"><h2>组件本身生命周期</h2></div>
      <SingleComp v-if="singleCompVisible" :prop="compProp" />
      <el-row :gutter="20">
        <el-col v-for="type in lifeCircleTypes" :key="type.name" :span="8">
          <el-card class="item">
            <div slot="header">
              <h2>{{ type.name }}</h2>
            </div>
            <el-steps :active="100" direction="vertical" :space="50">
              <el-step v-for="step in singleStep[type.value]" :key="step" :title="step" />
            </el-steps>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="item">
      <div slot="header"><h2>父子组件生命周期</h2></div>
      <keep-alive>
        <double-comp v-if="doubleCompVisible" />
      </keep-alive>
      <el-row :gutter="20">
        <el-col v-for="type in lifeCircleTypes" :key="type.name" :span="8">
          <el-card class="item">
            <div slot="header">
              <h2>{{ type.name }}</h2>
            </div>
            <el-steps :active="100" direction="vertical" :space="50">
              <el-step v-for="step in doubleStep[type.value]" :key="step" :title="step" />
            </el-steps>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="item">
      <div slot="header"><h2>路由生命周期</h2></div>
      <el-row :gutter="20">
        <el-col v-for="type in lifeCircleTypes" :key="type.name" :span="8">
          <el-card class="item">
            <div slot="header">
              <h2>{{ type.name }}</h2>
            </div>
            <el-steps :active="100" direction="vertical" :space="50">
              <el-step v-for="step in routerStep[type.value]" :key="step" :title="step" />
            </el-steps>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="item">
      <div slot="header"><h2>Keep-Alive生命周期</h2></div>
      <keep-alive>
        <keep-alive-comp v-if="keepAliveCompVisible" />
      </keep-alive>
      <el-row :gutter="20">
        <el-col v-for="type in lifeCircleTypes" :key="type.name" :span="8">
          <el-card class="item">
            <div slot="header">
              <h2>{{ type.name }}</h2>
            </div>
            <el-steps :active="100" direction="vertical" :space="50">
              <el-step v-for="step in keepAliveStep[type.value]" :key="step" :title="step" />
            </el-steps>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="item">
      <div slot="header"><h2>Mixin生命周期</h2></div>
      <mixin-comp v-if="mixinCompVisible" />
      <el-row :gutter="20">
        <el-col v-for="type in lifeCircleTypes" :key="type.name" :span="8">
          <el-card class="item">
            <div slot="header">
              <h2>{{ type.name }}</h2>
            </div>
            <el-steps :active="100" direction="vertical" :space="50">
              <el-step v-for="step in mixinStep[type.value]" :key="step" :title="step" />
            </el-steps>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Step, LifeCircleTypes } from '@/views/base-knowledge/life-circles/types';
import SingleComp from '@/views/base-knowledge/life-circles/components/single-comp.vue';
import KeepAliveComp from '@/views/base-knowledge/life-circles/components/keep-alive-comp.vue';
import DoubleComp from '@/views/base-knowledge/life-circles/components/double-comp/index.vue';
import MixinComp from '@/views/base-knowledge/life-circles/components/mixin-comp.vue';

@Component({
  components: {
    SingleComp,
    KeepAliveComp,
    DoubleComp,
    MixinComp
  }
})
export default class MixinExample extends Vue {
  lifeCircleTypes: LifeCircleTypes = [
    { name: '新建过程', value: 'create' },
    { name: '更新过程', value: 'update' },
    { name: '销毁过程', value: 'destroy' }
  ];

  singleStep: Step = {
    create: ['beforeCreate', 'prop', 'data', 'watch', 'created', 'beforeMount', 'computed', 'mounted'],
    update: ['beforeUpdate', 'updated'],
    destroy: ['beforeDestroy', 'destroyed']
  };

  routerStep: Step = {
    create: [
      'beforeRouteLeave',
      'beforeEach',
      'beforeEnter',
      'beforeRouteEnter',
      'beforeResolve',
      'afterEach',
      'created',
      'beforeMount',
      'mounted'
    ],
    update: ['beforeEach', 'beforeRouteUpdate', 'beforeResolve', 'afterEach'],
    destroy: [
      'beforeRouteLeave',
      'beforeEach',
      'beforeEnter',
      'beforeRouteEnter',
      'beforeResolve',
      'afterEach',
      'beforeDestroy',
      'destroyed'
    ]
  };

  keepAliveStep: Step = {
    create: ['beforeCreate（首次）', 'created（首次）', 'beforeMount（首次）', 'mounted（首次）', 'activated'],
    update: ['beforeUpdate', 'updated'],
    destroy: ['deactivated']
  };

  doubleStep: Step = {
    create: [
      'parent beforeCreate',
      'parent created',
      'parent beforeMount',
      'child beforeCreate',
      'child created',
      'child beforeMount',
      'child mounted',
      'parent mounted'
    ],
    update: ['Parent beforeUpdate', 'child beforeUpdate', 'child updated', 'Parent updated'],
    destroy: ['Parent beforeDestroy', 'child beforeDestroy', 'child destroyed', 'Parent destroyed']
  };

  mixinStep: Step = {
    create: [
      'Mixin beforeCreate',
      'Comp beforeCreate',
      'Mixin created',
      'Comp created',
      'Mixin beforeMount',
      'Comp beforeMount',
      'Comp mounted',
      'Mixin mounted'
    ],
    update: ['Mixin beforeUpdate', 'Comp beforeUpdate', 'Mixin updated', 'Comp updated'],
    destroy: ['Mixin beforeDestroy', 'Comp beforeDestroy', 'Mixin destroyed', 'Comp destroyed']
  };

  singleCompVisible = false;
  keepAliveCompVisible = false;
  doubleCompVisible = false;
  mixinCompVisible = false;

  compProp = Date.now();

  toggleSingleCompVisible(): void {
    this.singleCompVisible = !this.singleCompVisible;
    if (this.singleCompVisible) {
      setTimeout(() => {
        this.compProp = Date.now();
      }, 1000);
    }
  }

  beforeCreate() {
    console.log('root - beforeCreate');
  }

  created() {
    console.log('root - created');
  }

  beforeMount() {
    console.log('root - beforeMount');
  }

  mounted() {
    console.log('root - mounted');
  }

  beforeUpdate() {
    console.log('root - beforeUpdate');
  }

  updated() {
    console.log('root - updated');
  }

  beforeDestroy() {
    console.log('root - beforeDestroy');
  }

  destroyed() {
    console.log('root - destroyed');
  }

  beforeRouteEnter(to: Route, from: Route, next: () => void) {
    console.log('beforeRouteEnter');
    next();
  }

  beforeRouteLeave(to: Route, from: Route, next: () => void) {
    console.log('beforeRouteLeave');
    next();
  }
}
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
