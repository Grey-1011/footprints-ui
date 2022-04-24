<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>title</header>
    <main>
      <p>content one</p>
      <p>content two</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>