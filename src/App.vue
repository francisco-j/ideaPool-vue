<script>
  import Header from './components/Header.vue'
  import Pool from './components/Pool.vue'
  import './global.css';

  export default {
    name: 'App',
    components: {
      Header,
      Pool,
    }
  }
</script>

<template>
  <Header/>
  <Pool/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
