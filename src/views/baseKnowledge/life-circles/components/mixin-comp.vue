<template>
  <div class="container">
    <span v-show="false">{{ value }}</span>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue, Mixins } from 'vue-property-decorator';
import LifeCircleMixin from '@/mixins/life-circle-mixin';

@Component
export default class MixinComp extends Mixins(LifeCircleMixin) {
  value = false;
  beforeCreate() {
    console.log('Comp beforeCreate');
  }

  created() {
    console.log('Comp created');
  }

  beforeMount() {
    console.log('Comp beforeMount');
    setTimeout(() => {
      this.value = !this.value;
    }, 2000);
  }

  mounted() {
    console.log('Comp mounted');
  }

  beforeUpdate() {
    console.log('Comp beforeUpdate');
  }

  updated() {
    console.log('Comp updated');
  }

  beforeDestroy() {
    console.log('Comp beforeDestroy');
  }

  destroyed() {
    console.log('Comp destroyed');
  }
}
</script>
