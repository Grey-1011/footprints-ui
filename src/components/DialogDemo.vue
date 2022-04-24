<template>
  <div>
    DialogDemo page
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="fn1" :cancel="fn2">
        <template v-slot:content>
            <div>some contents...</div>
            <div>some contents...</div>
        </template>
        <template v-slot:title>
            <strong>title</strong>
        </template>        
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};
    return { visible, toggle, fn1, fn2 };
  },
};
</script>