<script lang="ts" setup>
import HomeComp1 from '../components/layout/HomeComp1.vue';
import { ref, onMounted, onUnmounted } from 'vue';

let reached = ref(false);
const wrapper = ref<HTMLElement | null>(null);

const handleWindowScroll = () => {
    if (!wrapper.value) return;
    const rect = wrapper.value.getBoundingClientRect();
    const isAtTop = rect.top >= 0;
    const isAtBottom = rect.bottom <= window.innerHeight;
    if (isAtBottom) {
        console.log("Wrapper bottom reached viewport");
        reached.value = true;
    } else if (isAtTop) {
        console.log("Wrapper top reached viewport");
        reached.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleWindowScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleWindowScroll);
});

</script>
<template>
    <div ref="wrapper" class="wrapper">
        <HomeComp1 :reached />
    </div>
    <div class="container">

    </div>

</template>

<style scoped>
.wrapper {
    padding-top: 40px;
    width: 100%;
    height: 140vh;
    height: calc(third*2);
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
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
</style>