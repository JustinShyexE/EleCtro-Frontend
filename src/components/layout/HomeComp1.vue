<script lang="ts" setup>
import phone from "../../assets/phone.png";
import laptop from "../assets/laptop.png";
import camera from "../../assets/camera.png";
import headset from "../assets/headset.png";
import tv from "../assets/TV.png";

let props = defineProps<{
    reached: boolean;
}>();

</script>
<template>
    <div :class="props.reached ? 'third anim-on' : 'third anim-off'">
        <div :class="props.reached ? 'container center reversed':'container center'" >
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
            <img class="image reversedImg" :src="camera" alt="phone" />
        </div>
    </div>
    <div class="second center">
        <div class="first"></div>
    </div>

</template>

<style scoped>
.third {
    background-color: blue;
    width: 95%;
    height: 70vh;
    border-radius: 40px;
    display: flex;
    justify-content: end;
}

.anim-off {
    transform-origin: bottom center;
    animation: up 1s ease-out forwards;
}

@keyframes up {
    0% {
        transform: rotate(-180deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.anim-on {
    transform-origin: bottom center;
    animation: fall 1s ease-out forwards;
}

@keyframes fall {
    0% {
        transform: rotate(0deg) translateX(0);
    }

    100% {
        transform: rotate(180deg);
    }
}

.container {
    justify-self: end;
    max-height: 40%;
    width: calc(30px + 10%);
    background-color: orange;
    margin-right: 5%;
    align-self: center;
    border-radius: 15px;
    justify-self: flex-end;
    flex-direction: column;
    display: block;
    gap: 1rem;
    overflow-y: auto;
    scroll-behavior: smooth;
}

.reversed {
    transform: scaleY(-1);
    direction: rtl;
}
.reversedImg {
    margin-left: 0%;
    margin-right: 27%;
}

.image {
    width: 50%;
    height: calc(width);
    margin-left: 27%;
    padding-top: 10%;
    padding-bottom: 10%;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.4s ease-in-out;
}

.image:hover {
    border-bottom: 2px solid black;
}




.container::-webkit-scrollbar {
    width: 4px;
    height: 1px;
    opacity: 0;
    transition: opacity 0.2s;
}

.container:hover::-webkit-scrollbar {
    opacity: 1;
}

.container::-webkit-scrollbar-track {
    margin-top: 15px;
    margin-bottom: 15px;
    background: transparent;
    /* background of the track */
}

.container::-webkit-scrollbar-thumb {
    background-color: black;
    /* color of the thumb */
    border-radius: 10px;
    /* roundness */
    border: 5px solid black;
    /* space around thumb */
}

.second {
    background-color: yellow;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    align-self: center;
}

.first {
    position: absolute;
    background-color: green;
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

@media (min-width: 400px) {

    .second {
        width: calc(160px * 1.3);
        height: calc(160px * 1.3);
    }

    .first {
        width: calc(120px * 1.3);
        height: calc(120px * 1.3);
    }
}

@media (min-width: 550px) {
    .second {
        width: calc(160px * 1.5);
        height: calc(160px * 1.5);
    }

    .first {
        width: calc(120px * 1.5);
        height: calc(120px * 1.5);
    }

    .container {
        border-radius: 20px;
    }
}

@media (min-width: 768px) {
    html {
        font-size: 18px;
        /* 1.125rem */
    }

    .second {
        width: calc(160px * 1.7);
        height: calc(160px * 1.7);
    }

    .first {
        width: calc(120px * 1.7);
        height: calc(120px * 1.7);
    }
 .container {
        width: calc(30px + 7%);
    }
   
}

@media (min-width: 1024px) {
    html {
        font-size: 20px;
        /* 1.25rem */
    }

    .second {
        width: calc(160px * 1.9);
        height: calc(160px * 1.9);
    }

    .first {
        width: calc(120px * 1.9);
        height: calc(120px * 1.9);
    }
    .container {
        max-height: 45%;
    }
}

@media (min-width: 1280px) {
    html {
        font-size: 22px;
        /* 1.375rem */
    }

    .second {
        width: calc(160px * 2.1);
        height: calc(160px * 2.1);
    }

    .first {
        width: calc(120px * 2.1);
        height: calc(120px * 2.1);
    }
    .container {
        max-height: 50%;
           width: calc(30px + 6%);
    }
}

@media (min-width: 1536px) {
    html {
        font-size: 24px;
        /* 1.5rem */
    }

    .second {
        width: calc(160px * 2.3);
        height: calc(160px * 2.3);
    }

    .first {
        width: calc(120px * 2.3);
        height: calc(120px * 2.3);
    }
      .container {
        max-height: 60%;
         width: calc(30px + 5%);
    }
}
</style>