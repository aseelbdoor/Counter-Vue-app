<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="whiteModel">Show White Model  <input 
                v-model="showWhiteModels" name="whiteModel" type="checkbox"> </label>
        </div>
        <button @click="showModal=true" >Show Modal</button>
        <!-- <Modal v-model="showModal" title="My Modal Title" @hideModal="showModal=false" ></Modal> -->
        <!-- <Modal v-model="showModal" title="My Modal Title" ></Modal> -->
        <component :is="showWhiteModels?ModalWhite:Modal" v-model="showModal" title="My Modal Title" ></component>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalWhite from '@/components/ModalWhite.vue';

const showWhiteModels=ref(false);
const showModal=ref(false);

</script>

<style>
.modals {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
}
button {
    margin: 1% 5px;
    padding: 5px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 15px;
    background-color: rgb(0, 131, 0);
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover{
    background-color: rgb(113, 172, 23);
}

input[checkbox]{
    padding: 10px;
}
</style>