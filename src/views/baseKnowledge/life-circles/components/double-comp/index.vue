<template>
  <div class="container">
    <span v-show="false">{{ value }}</span>
    <DoubleCompChild :value="value" />
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import DoubleCompChild from '@/views/baseKnowledge/life-circles/components/double-comp/child.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    DoubleCompChild
  }
})
export default class DoubleComp extends Vue {
  value = 0;

  beforeCreate() {
    console.log('Parent beforeCreate');
  }

  created() {
    console.log('Parent created');
  }

  beforeMount() {
    console.log('Parent beforeMount');
  }

  mounted() {
    console.log('Parent mounted');
    setTimeout(() => {
      this.value += 1;
    }, 2000);
  }

  beforeUpdate() {
    console.log('Parent beforeUpdate');
  }

  updated() {
    console.log('Parent updated');
  }

  beforeDestroy() {
    console.log('Parent beforeDestroy');
  }

  destroyed() {
    console.log('Parent destroyed');
  }
}
</script>
