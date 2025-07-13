<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

router-link {
  color: white;
  text-decoration: none;
}
</style>