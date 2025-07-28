<script lang="ts" setup>

</script>

<template>
  <div class="wrapper">
    <div class="container center">
              <div class="carouselContainer">
                <div class="selector">
                     <div class="smImg"> </div>
                     <div class="smImg"> </div>
                     <div class="smImg"> </div>
                </div>
              </div>     
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  margin-top: 8%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: red;
}

.container {
  width: 95%;
  height: 700px;
  background-color: blue;
}
.carouselContainer{
    background-color: aqua;
    width: 500px;
    height: 500px;
}
.selector {
    height: 100%;
    width: 20%;
    background-color: blanchedalmond;
    display: block;
}
.smImg{
    width: 50px;
    height: 50px;
    background-color: blueviolet;
    margin: 10px
}

</style>
