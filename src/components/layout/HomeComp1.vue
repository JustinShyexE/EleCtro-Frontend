<script lang="ts" setup>
import { ref, watch } from "vue";
import image from "../../data/imagePaths.ts"

let props = defineProps<{
    reached: boolean;
}>();
console.log(props.reached)
let item = ref([image.iphoneImg, image.iphone, '60%', 'rgba(144, 117, 85, 1)'])
let prevA: any
let prevB: any
//to add type
watch(() => props.reached, (newVal) => {
    if (!newVal) {
        // TOP reached, keep track of the BOTTOM last selection, if anything not seleted give the default value
        prevB = item.value
        if (prevA) item.value = prevA
        else item.value = [image.iphoneImg, image.iphone, '60%', 'rgba(144, 117, 85, 1)']
    } else {
        // BOTTOM reached, keep track of the TOP last selection, if anything not seleted give the default value
        prevA = item.value
        if (prevB) item.value = prevB
        else item.value = [image.coffeeImg, image.coffeePic, '60%', 'rgba(144, 117, 85, 1)']
    }
})

</script>
<template>
    <div :class="props.reached ? 'third anim-on' : 'third anim-off'" :style="{
        backgroundImage: `url(${item[0]})`
    }"> <!--item[0] = big image; item[1] = small image; item[2]-small image size; item[3]- small circle backgroundColor -->
        <div v-if="!props.reached" class='container center'>
            <img class="image reversedImg" :src="image.phone"
                @click="item[0] = image.iphoneImg; item[1] = image.iphone; item[2] = '60%'; item[3] = 'rgba(144, 117, 85, 1)'"
                alt="device" />
            <img class="image reversedImg" :src="image.headset"
                @click="item[0] = image.airpodsImg; item[1] = image.airpods; item[2] = '122%'; item[3] = 'rgba(168, 176, 190, 0.65)'"
                alt="device" />
            <img class="image reversedImg" :src="image.tv"
                @click="item[0] = image.samsungIMG; item[1] = image.samsung; item[2] = '90%'; item[3] = 'rgba(58, 67, 50, 1)'"
                alt="device" />
            <img class="image reversedImg" :src="image.laptop"
                @click="item[0] = image.macIMG; item[1] = image.mac; item[2] = '82%'; item[3] = 'rgba(203, 209, 205, 1)'"
                alt="device" />
            <img class="image reversedImg" :src="image.camera"
                @click="item[0] = image.canonIMG; item[1] = image.canon; item[2] = '120%'; item[3] = 'rgba(84, 75, 57, 1)'"
                alt="device" />
        </div>
        <div class='container center reversed' v-else>
            <img class="image reversedImg" :src="image.coffee"
                @click="item[0] = image.coffeeImg; item[1] =image.coffeePic; item[2] = '90%'; item[3] = 'rgba(199, 149, 122, 1)'"
                alt="appliance" />
            <img class="image reversedImg" :src="image.microwave"
                @click="item[0] = image.microwaveImg; item[1] = image.microwavePic; item[2] = '80%'; item[3] = 'rgba(128, 126, 126, 1)'"
                alt="appliance" />
            <img class="image reversedImg" :src="image.refrigerator"
                @click="item[0] = image.refrigeratorImg; item[1] = image.refrigeratorPic; item[2] = '80%'; item[3] = 'rgba(117, 117, 119, 1)'"
                alt="appliance" />
            <img class="image reversedImg" :src="image.vacuum"
                @click="item[0] = image.vacumImg; item[1] = image.vacumPic; item[2] = '60%'; item[3] = 'rgba(144, 117, 85, 1)'"
                alt="appliance" />
            <img class="image reversedImg" :src="image.washer"
                @click="item[0] = image.washerImg; item[1] = image.washerPic; item[2] = '105%'; item[3] = 'rgba(234, 230, 227, 1)'"
                alt="phone" />
            <img class="image reversedImg" :src="image.airconditioner"
                @click="item[0] = image.airconditionerImg; item[1] = image.airconditionerPic; item[2] = '95%'; item[3] = 'rgba(139, 198, 192, 1)'"
                alt="appliance" />
        </div>
    </div>
    <div class="second center">
        <div class="first" :style="{
            backgroundImage: `url(${item[1]})`, backgroundSize: `${item[2]}`, backgroundColor: `${item[3]}`
        }">
        </div>
    </div>
</template>

<style scoped>
.third {
    background-color: white;
    width: 95%;
    height: 70vh;
    border-radius: 40px;
    display: flex;
    justify-content: end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 3s ease-in-out;
}
.third.fade-out{
    opacity: 0;
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
    background-color: rgba(219, 210, 210, 1);
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
    background-color: white;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    align-self: center;
}

.first {
    position: absolute;
    background-color: rgba(63, 54, 41, 1);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
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