<template>
  <div class="buttons">
    <button
      v-bind="$attrs"
      class="no-all-button"
      :class="classes"
      :disabled="disabled"
    >
      <div v-if="loading" class="no-loadingIndicator"></div>
      <span>
        <slot />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  inheritAttrs:false,
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`no-theme-${theme}`]: theme,
        [`no-size-${size}`]: size,
        [`no-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
.buttons {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 24px;
  // border: 1px solid #000;
}
.no-all-button {
  display: inline-flex;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  margin-bottom: 16px;
  margin-left: 25px;
  background: #fff;
  border: none;
}

.no-theme-default {
  border: 1px solid red;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);

  &:hover,
  &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.no-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.no-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.no-level-main {
    background: #40a9ff;
    color: #fff;
    border-color: #40a9ff;
    &:hover,
    &:focus {
      background: darken($color: #40a9ff, $amount: 10%);
      border-color: darken($color: #40a9ff, $amount: 10%);
    }
  }
  &.no-level-danger {
    background: red;
    color: #fff;
    border-color: red;
    &:hover,
    &:focus {
      background: darken($color: red, $amount: 10%);
      border-color: darken($color: red, $amount: 10%);
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: grey;
    &:hover {
      border-color: grey;
    }
  }

  .no-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-style: solid;
    border-width: 2px;
    animation: no-spin 1s infinite linear;
  }

  @keyframes no-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.no-theme-text {
  border: transparent;
  box-shadow: none;
  color: inherit;
  padding: 8px 12px;
  &:hover,
  &:focus {
    background: darken($color: #000, $amount: 5%);
    color: darken($color: #fff, $amount: 10%);
  }
}

.no-theme-button {
  position: relative;
  padding: 8px 12px;
  border: 2px solid #111;
  display: flex;
  text-transform: uppercase;
  color: #111;
  font-weight: 600;
  font-size: 14px;
  background: none;

  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: #f8f8f8;
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
    background: #f8f8f8;
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
  height: 40px;
  width: 40px;
  display: inline-flex;
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
    width: 8px;
    height: 8px;
    right: 16px;
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
    width: 8px;
    height: 8px;
    right: 16px;
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