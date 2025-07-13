<template>
  <div>
    <Navbar />
    <div style="margin-top: 70px;">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>