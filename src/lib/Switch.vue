<template>
  <div>
    <div class="btn_check">
      <button
        @click="toggle"
        class="no-checkbox"
        :class="{ 'no-checked': value }"
      />
      <div class="pick"></div>
      <div class="layer"></div>
    </div>
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

<style lang="scss">
.btn_check {
  position: relative;
  width: 80px;
  height: 32px;
  // margin: 0 auto 0 auto;
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

  .no-checkbox {
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
    content: "Y";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    color: #fff;
    font-size: 6px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    background: #000;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  .pick:after {
    content: "N";
    right: -24px;
    left: auto;
    background: #444;
  }

  .no-checked + .pick:before {
    left: -24px;
  }

  .no-checked + .pick::after {
    right: 4px;
  }

  .no-checked ~ .layer {
    background: #e1e1e1;
  }
}
</style>