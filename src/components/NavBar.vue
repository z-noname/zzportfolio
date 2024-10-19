<script setup>

</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/" class="brand-link">ZNoname</router-link>
      </div>
      <ul class="navbar-menu">
        <li><router-link to="/">Home</router-link></li>
        <!--<li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>-->
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Stay on top */
  background-color: aliceblue;

}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 250px; /* Adjust padding as needed */
}

.brand-link {
  font-size: 24px;
  font-weight: bold;
  color: black; /* Vue.js brand color */
  text-decoration: none;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px; /* Space between menu items */
}

.navbar-menu li {
  position: relative; /* For dropdown positioning */
}

.navbar-menu a {
  color: black;
  text-decoration: none;
  padding: 8px 12px;
  transition: background 0.3s;
}

.navbar-menu a:hover {
  background: lightgray; /* Highlight on hover */
  border-radius: 5px;
}


</style>