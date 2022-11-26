<script setup lang="tsx">
import { ElMessage } from 'element-plus';
import { isDark, toggleDark } from './themes';
import { greet, fib } from 'hello-wasm-template';
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]): void => {
  console.log(key, keyPath);
  ElMessage({
    message: isDark.value ? <p>浅色模式</p> : <p>深色模式</p>,
    type: 'success',
    center: true,
  });
};
greet();
alert(fib(28));
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          @select="handleSelect"
        >
          <el-menu-item @click="toggleDark()" index="1">
            <div v-show="!isDark">
              <el-icon><IEpTurnOff /> </el-icon>深色模式
            </div>
            <div v-show="isDark">
              <el-icon><IEpOpen /> </el-icon>亮色模式
            </div></el-menu-item
          >
        </el-menu></el-header
      >
      <el-main class="self-content">
        <div>
          <header>
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/logo.svg"
              width="125"
              height="125"
            />

            <div class="wrapper">
              <HelloWorld msg="You did it!" />
              <nav>
                <RouterLink to="/"
                  ><el-button type="primary">Home</el-button></RouterLink
                >
                <RouterLink to="/about">
                  <el-button>About</el-button>
                </RouterLink>
              </nav>
            </div>
          </header>

          <RouterView class="router-view-box" /></div
      ></el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 90vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.el-menu-item {
  max-width: min-content;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

// .el-menu-item {
//   height: 100px;
// }

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
