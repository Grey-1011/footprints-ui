<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-dog"></use>
      </svg>
    </router-link>
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log(`topnav 获取的 asideVisible: ${asideVisible.value}`);

    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>


<style lang="scss" scoped>
.topnav {
  color: #f9f5f1;
  background: #80c9ac;
  // border-bottom: 1px solid #899a94;
  display: flex;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    display: none;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);

    > .icon-menu {
      font-size: 24px;
    }
  }

  @media (max-width: 500px) {
    
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>