<template>
  <div class="container">
    <span v-show="false">{{ data }}</span>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class KeepAliveComp extends Vue {
  data = true;

  beforeCreate() {
    console.log('beforeCreate');
  }

  created() {
    console.log('created');
  }

  beforeMount() {
    console.log('beforeMount');
  }

  mounted() {
    console.log('mounted');
  }

  beforeUpdate() {
    console.log('beforeUpdate');
  }

  updated() {
    console.log('updated');
  }

  activated() {
    console.log('activated');
    setTimeout(() => {
      this.data = !this.data;
    }, 2000);
  }

  deactivated() {
    console.log('deactivated');
  }

  beforeDestroy() {
    console.log('beforeDestroy');
  }

  destroyed() {
    console.log('destroyed');
  }
}
</script>
