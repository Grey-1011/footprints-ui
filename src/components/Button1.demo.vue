<demo>
Style
</demo>
<template>
  <div>
    <Button>Hello Button</Button>
    <Button theme="text">Text Button</Button>
    <Button theme="button">Button</Button>
    <Button theme="link">Link Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>