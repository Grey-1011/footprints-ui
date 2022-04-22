<template>
  <div>
    ButtonDemo page
    <Button>Hello Button</Button>
    <Button theme="button">Hello Button</Button>
    <Button theme="link">Hello Button</Button>
    <Button theme="text">Hello Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi Click");
    };
    return { onClick };
  },
};
</script>