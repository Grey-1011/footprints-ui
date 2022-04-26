<template>
  <div class="no-tabs">
    <div class="no-tabs-nav" ref="container">
      <div
        class="no-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="no-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="no-tabs-content">
      <component class="no-tabs-content-item" :is="current" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]); // 数组的默认值 []
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const x = () => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      // 过滤出 被选中的 div
      console.log(result);
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      // 获取 container 的left
      const { left: left1 } = container.value.getBoundingClientRect();
      // 获取当前 div 的 left
      const { left: left2 } = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select,
      navItems,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.no-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 2px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>