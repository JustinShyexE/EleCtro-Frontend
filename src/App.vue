<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <div style="margin-top: 140px;">
      <router-view />
    </div>
  </div>
</template>

<style>

</style>
