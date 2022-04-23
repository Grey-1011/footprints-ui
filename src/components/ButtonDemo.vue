<template>
  <div>
    <h2>Style</h2>
    <Button>Hello Button</Button>
    <Button theme="text">Text Button</Button>
    <Button theme="button">Button</Button>
    <Button theme="link">Link Button</Button>
  </div>
  <div>
    <h2>Size</h2>
    <Button>Button</Button>
    <Button size="big">Button</Button>
    <Button size="small">Button</Button>
  </div>
  <div>
    <h2>Level</h2>
    <Button level="main">Main Button</Button>
    <Button>Normal Button</Button>
    <Button level="danger">Danger Button</Button>
  </div>
  <div>
    <h2>Disabled</h2>
    <Button disabled>Disabled Button</Button>
  </div>
  <div>
    <h2>Loading</h2>
    <Button loading>Loading</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>