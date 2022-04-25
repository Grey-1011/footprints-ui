<template>
  <div>
    <h3>Tabs 标签页</h3>
    <Tabs v-model:selected="x">
      <Tab title="tab1">content 1</Tab>
      <Tab title="tab2">content 2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref("tab1");
    return { x };
  },
};
</script>