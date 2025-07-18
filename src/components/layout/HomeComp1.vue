<script lang="ts" setup>
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";
import camera from "../assets/camera.png";
import headset from "../assets/headset.png";
import tv from "../assets/TV.png";

let props = defineProps<{
    reached: boolean;
}>();

</script>
<template>
        <div :class="reached ? 'third anim-on' : 'third anim-off'">
            <div class="container center">
                <img class="image" :src="phone" alt="phone" />
                <img class="image" :src="phone" alt="phone" />
                <img class="image" :src="phone" alt="phone" />
            </div>
        </div>
        <div class="second center">
            <div class="first"></div>
        </div>

</template>

<style scoped>
.wrapper {
    background-color: brown;
    width: 100%;
    height: 140vh;
    height: calc(third*2);
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    position: relative;
    overflow-y: auto;
}

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
    height: 200px;
    width: 50px;
    background-color: orange;
    margin-right: 1rem;
    margin-top: 4rem;
    border-radius: 10px;
    justify-self: flex-end;
    flex-direction: column;
    gap: 1rem;
}

.containerr {
    justify-self: end;
    height: 5000px;
    width: 50px;
    background-color: orange;
    margin-right: 1rem;
    margin-top: 4rem;
    border-radius: 10px;
    justify-self: flex-end;
    flex-direction: column;
    gap: 1rem;
}

.image {
    width: 2.5rem;
    height: 2.5rem;
}

.second {
    background-color: yellow;
    width: 200px;
    height: 200px;
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
</style>