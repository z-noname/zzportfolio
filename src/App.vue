<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <home></home>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    NavBar
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

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
}
</style>
