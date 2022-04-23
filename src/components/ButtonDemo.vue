<template>
  <div>
    <Button>Hello Button</Button>
    <Button theme="button">Button</Button>
    <Button theme="link">Link Button</Button>
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