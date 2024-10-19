<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    // You can also trigger navigation to Home on component mount
    this.$router.push('/');
  }
}
</script>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

<style>
#app {
  display: flex;
  font-family: 'Open Sans', sans-serif;
}

.content {
  margin-left: 240px;
  margin-top: 100px;
}
</style>
