<demo>
基本
</demo>
<template>
  <div>
    <Button @click="toggle">Open Dialog</Button>
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
      :ok="fn1"
      :cancel="fn2"
    >
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
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: { Button, Dialog },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "Hello Dialog",
        content: "一键打开Dialog",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { visible, toggle, fn1, fn2, showDialog };
  },
};
</script>