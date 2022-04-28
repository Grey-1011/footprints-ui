<demo>
Level
</demo>
<template>
  <div>
    <Button level="main">Main Button</Button>
    <Button>Normal Button</Button>
    <Button level="danger">Danger Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>