<script lang="ts" setup>
import { ref } from 'vue';
import searchbox from '../smallcomponents/searchbox.vue';
</script>

<template>
  <nav class="navbar">
    <div class="left">
           <h3 class="logo">aShop</h3>
    </div>
    <div class="mid center">
      <searchbox />
    </div>
    <div class="right"></div>
  </nav>




</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}
.left {
  width: 60px;
  height: 80%;
  margin-left: 0.2rem;
  background-color: aqua;
}
.mid {
  width: 60%;
  margin-top: 24px;
  background-color: aquamarine;
  ;
}
.right {
  width: 60px;
  height: 80%;
  background-color: green;
  margin-right: 0.2rem;
}
.logo{
  font-family: 'Inter', light-italic;
  color: rgba(172, 105, 105, 1);
  font-size: 1.4rem;
}

@media only screen and (min-width: 600px) {
  .mid {
    width: 33%;
    background-color: aquamarine;
  }

  .left {
    margin-left: 1rem;
  }

  .right {
    margin-right: 1rem;
  }
}
</style>