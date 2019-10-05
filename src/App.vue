<template>
  <div id="app">
    <div>
      <router-link to="/red"></router-link>
      <router-link to="/yellow"></router-link>
      <router-link to="/green"></router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Screen1 from './components/Screen1.vue'
// import Screen2 from './components/Screen2.vue'
// import Screen3 from './components/Screen3.vue'

export default {
  name: 'app',
  components: {
    // Screen1,
    // Screen2,
    // Screen3
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
