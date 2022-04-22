<template>
  <div>
    <div class="btn_check">
      <button @click="toggle" class="checkbox" :class="{ checked: value }" />
      <div class="pick"></div>
      <div class="layer"></div>
    </div>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: { value: Boolean },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
.btn_check {
  position: relative;
  width: 200px;
  height: 80px;
  margin: 0 auto 0 auto;
  overflow: hidden;

  .pick,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &,
  .layer {
    border-radius: 100px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .pick {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background: #eee;
    transition: 0.3s ease all;
    z-index: 1;
  }

  .pick:before,
  .pick:after {
    content: "YES";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4px;
    left: 4px;
    width: 72px;
    height: 72px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    background: #000;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  .pick:after {
    content: "NO";
    right: -72px;
    left: auto;
    background: #444;
  }

  .checked + .pick:before {
    left: -72px;
  }

  .checked + .pick::after {
    right: 4px;
  }

  .checked ~ .layer {
    background: #e1e1e1;
  }
}
</style>