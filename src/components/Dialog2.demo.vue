<demo>
一键打开
</demo>
<template>
  <div>
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
import { openDialog } from "../lib/index";

export default {
  components: { Button },
  setup() {
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
    return { showDialog };
  },
};
</script>