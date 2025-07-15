<script lang="ts" setup>
  import phone from "../assets/phone.png";
  import laptop from "../assets/laptop.png";
  import camera from "../assets/camera.png";
  import headset from "../assets/headset.png";
  import tv from "../assets/TV.png";
</script>
<template>
    <div class="wrapper">
        <div class="third">
             <div class="container">
                  <img class="image" :src="phone" alt="phone" />
                  <img class="image" :src="phone" alt="phone" />
                  <img class="image" :src="phone" alt="phone" />
             </div>
        </div>
        <div class="second"></div>
        <div class="first"></div>
    </div>
</template>


<style scoped>
.wrapper {
    background-color: brown;
    width: 100%;
    min-height: 75%;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    position: relative;
}

.third {
    background-color: blue;
    width: 95%;
    height: 70vh;
    border-radius: 40px;
    display: flex;
    justify-content: end;
}
.container{
    height: 200px;
    width: 50px;
    background-color: orange;
    margin-right: 1rem;
    margin-top: 4rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}
.image{
    width: 2.5rem;
    height: 2.5rem;
}

.second {
    position: absolute;
    background-color: yellow;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    bottom: -95px;
}

.first {
    position: absolute;
    background-color: green;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    bottom: -55px;
}
</style>