<script lang="ts" setup>

</script>

<template>
  <div class="wrapper">
    <div class="container center">
      <div class="carousel">
        <div class="left">
          <div class="leftChild"></div>
        </div>
        <div class="right"></div>
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

.carousel {
  height: 225px;
  width: 285px;
  background-color: brown;
  display: inline-flex;
}

.left {
  height: 225px;
  width: 60px;
  background-color: yellow;
  display: flex;
  align-items: center;
}
.leftChild{
  height: 70%;
  width: 70%;
  background-color: orange;
  margin-left: 7%;
}
.right{
    width: 100%;
    height:100%;
    background-color: aquamarine;
    border-radius: 40px;
}

@media (min-width: 400px) {
  .carousel {
    height: calc(225px*1.3);
    width: calc(285px*1.3);
  }

  .left {
    height: calc(225px*1.3);
    width: calc(60px*1.3);
  }
}

@media (min-width: 550px) {
  .carousel {
    height: calc(225px*1.7);
    width: calc(285px*1.7);
  }

  .left {
    height: calc(225px*1.7);
    width: calc(60px*1.7);
  }
}

@media (min-width: 768px) {
  .carousel {
    height: calc(225px*1.9);
    width: calc(285px*1.9);
  }

  .left {
    height: calc(225px*1.9);
    width: calc(60px*1.9);
  }
}

@media (min-width: 1024px) {
  .carousel {
    height: calc(225px*2.1);
    width: calc(285px*2.1);
  }
  .left {
    height: calc(225px*2.1);
    width: calc(60px*2.1);
  }
}

@media (min-width: 1280px) {
    .carousel {
    height: calc(225px*2.3);
    width: calc(285px*2.3);
  }
  .left {
    height: calc(225px*2.3);
    width: calc(60px*2.3);
  }
}

@media (min-width: 1536px) {
      .carousel {
    height: calc(225px*2.6);
    width: calc(285px*2.6);
  }
  .left {
    height: calc(225px*2.6);
    width: calc(60px*2.6);
  }
}
</style>
