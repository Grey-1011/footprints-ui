<template>
  <div class="home">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Footprints UI</h1>
        <h2>一个有足迹的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
.home {
  min-height: 100vh;
  // background: #80c9ac;
  // background: linear-gradient(135deg, rgba(20,32,55,1) 0%, rgba(25,27,45,1) 100%);
}

.topnavAndBanner {
  // background: #d7dddb;
  background: #80c9ac;
}

.banner {
  color: #f9f5f1;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #0f172a;
    padding: 8px;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      // background: #d7dddb;
      display: inline-block;
      padding: 8px 24px;
      color: #000;
      border: 2px solid #000;
      border-radius: 25px;

      // &:hover {
      //   // text-decoration: none;
      // }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
        color: #1f1e1d;
      }
      > p {
        grid-area: text;
        color: #1f1e1d;
      }
    }
  }
}
</style>