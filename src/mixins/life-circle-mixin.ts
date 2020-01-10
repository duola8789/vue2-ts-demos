/* eslint-disable no-console */
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class LifeCircleMixin extends Vue {
  beforeCreate() {
    console.log('Mixin beforeCreate');
  }

  created() {
    console.log('Mixin created');
  }

  beforeMount() {
    console.log('Mixin beforeMount');
  }

  mounted() {
    console.log('Mixin mounted');
  }

  beforeUpdate() {
    console.log('Mixin beforeUpdate');
  }

  updated() {
    console.log('Mixin updated');
  }

  beforeDestroy() {
    console.log('Mixin beforeDestroy');
  }

  destroyed() {
    console.log('Mixin destroyed');
  }
}
