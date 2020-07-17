<!--
 * @Author: ymy
 * @Date: 2020-07-17 10:15:20
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 13:29:29
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/css/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
