<template>
  <div class="container">
    <span v-show="false">{{ value }}</span>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DoubleCompChild extends Vue {
  @Prop(Number) value!: number;

  beforeCreate() {
    console.log('Child beforeCreate');
  }

  created() {
    console.log('Child created');
  }

  beforeMount() {
    console.log('Child beforeMount');
  }

  mounted() {
    console.log('Child mounted');
  }

  beforeUpdate() {
    console.log('Child beforeUpdate');
  }

  updated() {
    console.log('Child updated');
  }

  beforeDestroy() {
    console.log('Child beforeDestroy');
  }

  destroyed() {
    console.log('Child destroyed');
  }
}
</script>
