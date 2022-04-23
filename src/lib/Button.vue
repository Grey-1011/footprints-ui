<template>
  <button v-bind="$attrs" class="all-button" :class="`no-theme-${theme}`">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "buttons",
    },
  },
};
</script>

<style lang="scss">
// $h: 32px;
// $border-color: #d9d9d9;
// $color: #333;
// $blue: #40a9ff;
// $radius: 4px;
// .theme-buttons {
// font-family: "Open Sans", sans-serif;
// box-sizing: border-box;
// // height: $h;
// padding: 0 12px;
// cursor: pointer;
// display: inline-flex;
// justify-content: center;
// align-items: center;
// white-space: nowrap;
// // background: white;
// // color: $color;
// border: 1px solid $border-color;
// border-radius: $radius;
// box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);

// & + & {
//   margin-left: 8px;
// }

// &:hover,
// &:focus {
//   color: $blue;
//   border-color: $blue;
// }
// &:focus {
//   outline: none;
// }
// &::-moz-focus-inner {
//   border: 0;
// }
// }

.all-button {
  display: block;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  margin-top: 60px;
  background: #fff;
  border: none;
}

.no-theme-button {
  position: relative;
  padding: 15px 20px;
  border: 2px solid #111;
  display: inline-block;
  text-transform: uppercase;
  color: #111;
  font-weight: 600;
  font-size: 20px;
  background: none;

  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: #fff;
    transition: 0.5s ease-in-out;
    transform: scaleY(1);
    transition-delay: 0.5s;
  }

  &:hover:before {
    transform: scaleY(0);
  }

  span {
    position: relative;
    z-index: 3;
  }

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background: #fff;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
  }

  &:hover:after {
    transform: scaleX(0);
  }
}

.no-theme-link {
  position: relative;
  background: #0590fd;
  color: #fff;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0 20px 25px #0690fd44;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1em;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    right: 25px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg);
    transition: 0.5s;
  }
  &:hover {
    width: 200px;
    transition-delay: 0.5s;
  }

  &:hover::before {
    transform: rotate(45deg) translate(50px, -50px);
  }

  &::after {
    content: "";
    position: absolute;
    left: -50px;
    width: 12px;
    height: 12px;
    right: 25px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg) translate(-50px, 50px);
    transition: 0.5s;
  }

  &:hover::after {
    transform: rotate(45deg) translate(50px, -50px);
    transition-delay: 1s;
  }

  span {
    visibility: hidden;
    opacity: 0;
    white-space: nowrap;
    transition: 0.5s;
    transform: translateX(-30px);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.75s;
    transform: translateX(10px);
  }
}
</style>