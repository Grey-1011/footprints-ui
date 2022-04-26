<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>No name UI</h1>
        <h2>一个没有名字的 UI框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: #000000;
  // background: linear-gradient(90deg, rgba(76,191,176,1) 0%, rgba(1,1,1,1) 100%);
}

.banner {
  color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #a1a1a1;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #276df1;
      display: inline-block;
      padding: 8px 24px;
      color: white;
      border-radius: 20px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>