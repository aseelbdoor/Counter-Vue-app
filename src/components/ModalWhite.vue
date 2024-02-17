<template>
    <div class="modal-white" v-if="modelValue" >
        <h2>{{ title }}</h2>
        <p>Name: {{ userData.name }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed,
            similique earum eveniet accusantium asperiores ipsa facere sunt,
            exercitationem porro autem. Corrupti, a molestiae. Commodi hic
            voluptates ipsum sunt ea?
        </p>
        <!-- <button @click="$emit('hideModal')" >Close Modal</button> -->
        <button @click="handleButtonClick" >Close Modal</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

// ______________props_____________________
const props=defineProps(['title','modelValue']);

// _______________EMITS ___________________
const emit= defineEmits(["hideModal",'update:modelValue']);

const handleButtonClick=()=>{
    emit('update:modelValue',false);
}

const userData=inject('userData')
</script>


<style>
.modal-white{
    background-color: rgb(236, 236, 236);
    width: 850px;
    border: none;
    color: rgb(8, 20, 12);
    border-radius: 5px;
    padding: 1%;
    margin-top: 5%;
}

.modal-white button {
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

.modal-white button:hover{
    background-color: rgb(113, 172, 23);
}
</style>