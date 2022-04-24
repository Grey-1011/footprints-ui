<template>
  <div>
    <h2>Dialog 对话框</h2>
    <h3>基本</h3>
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
    <h3>一键打开</h3>
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

import { openDialog } from "../lib/openDialog";

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
    const showDialog = () => {
        openDialog({
            title:"Hello Dialog",
            content:"一键打开Dialog",
            ok(){
                console.log("ok")
            },
            cancel(){
                console.log("cancel");
            }
        })
    };
    return { visible, toggle, fn1, fn2, showDialog };
  },
};
</script>