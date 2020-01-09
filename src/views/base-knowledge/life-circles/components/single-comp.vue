<template>
  <div class="container">
    <span v-show="false">{{ computed }} {{ prop }}</span>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class SingleComp extends Vue {
  @Prop({
    default: () => {
      console.log('prop');
    }
  })
  prop!: string;

  data = (() => {
    console.log('data');
    return 'data';
  })();

  @Watch('data', { immediate: true, deep: true })
  onDataChanged(newVal: string, oldVal: string): void {
    console.log('watch');
  }

  get computed(): string {
    console.log('computed');
    return this.data + 'computed';
  }

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

  beforeDestroy() {
    console.log('beforeDestroy');
  }

  destroyed() {
    console.log('destroyed');
  }
}
</script>
