<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <nav class="bg-sky-50	p-3 fixed w-full z-10 border border-sky-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Brand/Logo -->
      <router-link to="/" class="text-gray-800 text-lg font-semibold">ZNoname</router-link>

      <!-- Mobile Menu Button (Visible only on mobile) -->
      <button
          class="block text-gray-500 md:hidden focus:outline-none"
          @click="toggleMenu"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- Navbar Links (Hidden on mobile, visible on md and above) -->
      <ul :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="hidden md:flex space-x-4">
        <li>
          <router-link to="/" class="text-gray-800 hover:bg-gray-300 text-sm px-3 py-1 rounded cursor-pointer">Home</router-link>
        </li>
        <!-- Add more links as needed -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>