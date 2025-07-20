<script lang="ts" setup>
import search from "../../assets/search.png"
import { ref } from 'vue';
</script>

<template>
    <form class="search-form">
        <input class="searchbox" type="text" placeholder="Search..." />
        <button class="button"><img class="searchIcon" alt="searchIcon" :src = "search" /></button>
    </form>

</template>


<style scoped>
.search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    position: relative;
    transition: width 0.2s ease-in-out;
}
.search-form:hover {
   width : 100%;
}
.searchbox {
    border-radius: 33px;
    width: 100%;
    height: 50%;
    border: 2px solid black;
    padding-left: 1rem;
    padding-right: 2.9rem;
    font-size: 0.8rem;
    outline: none;
}

.button {
    width: 35px;
    height: 40%;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 2%;
    background-color: transparent;
}
.searchIcon{
    width: 100%;
    height: 100%;
    background-color: transparent;
}

@media only screen and (min-width: 600px) {
    .searchbox {
        border-radius: 33px;
        width: 100%;
        height: 50%;
    }
    
}
</style>