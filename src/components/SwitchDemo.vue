<template>
  <div>
    <h2>Switch</h2>
    <Demo :component="Switch1Demo"/>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'

import Switch1Demo from "./Switch1.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Switch1Demo };
  },
};
</script>