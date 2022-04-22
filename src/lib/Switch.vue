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
  setup(props,context) {
    const toggle = () => {
        context.emit('input',!props.value)
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
}
.btn_check .pick,
.btn_check .layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.btn_check,
.btn_check .layer {
  border-radius: 100px;
}

.btn_check .checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.btn_check .pick {
  z-index: 2;
}
.btn_check .layer {
  width: 100%;
  background: #eee;
  transition: 0.3s ease all;
  z-index: 1;
}

.btn_check .pick:before,
.btn_check .pick:after {
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

.btn_check .pick:after {
  content: "NO";
  right: -72px;
  left: auto;
  background: #444;
}

.btn_check .checked + .pick:before {
  left: -72px;
}
.btn_check .checked + .pick::after {
  right: 4px;
}

.btn_check .checked ~ .layer {
  background: #e1e1e1;
}
</style>