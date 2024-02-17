
<template>
  <div class="home">
    <h1 ref="appTitleRef" >{{ appTitle }}</h1>
    <h2 class="title">{{ counterData.title }}:</h2>
    <div class="count">
      <section>
        <button @click="decreaseCounter(2)" class="btn">--</button>
        <button @click="decreaseCounter(1)" class="btn">-</button>
      </section>
      <span class="counter">{{ counterData.counter }}</span>
      <section>
        <button @click="increaseCounter(1)" class="btn">+</button>
        <button @click="increaseCounter(2)" class="btn">++</button>
      </section>
    </div>
    <p class="description">This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h3>Edit Counter Title:</h3>
      <input type="text" name="edit" v-model="counterData.title" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, 
  onBeforeMount, onMounted, onBeforeUnmount, 
  onUnmounted, onActivated, onDeactivated,
  onBeforeUpdate, onUpdated, nextTick } from 'vue';

import {useCounter} from '@/use/useCounter';
import {vAutofocus} from '@/directives/vAutofocus';

// const counter = ref(0),
//   myTitle = ref("My Counter")

const appTitle = 'My Ok Counter App';

const appTitleRef=ref(null)

// _________________ Counter___________________
const {counterData, oddOrEven, decreaseCounter, increaseCounter} = useCounter();



//_____________________Hooks________________
// onBeforeMount(()=>{
//   console.log("on before mount");
// })

onMounted(() => {
    console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
  });

// onBeforeUnmount(()=>{
//   console.log("on before unmount");
// })

// onUnmounted(()=>{
//   console.log("on unmounted")
// })

// onActivated(()=>{
//   console.log('activated')
// })

// onDeactivated(()=>{
//   console.log('deactivated')
// })

// onBeforeUpdate(()=>{
//   console.log("Before Update");
// })

// onUpdated(()=>{
//   console.log("Update");
// })

// const vAutofocus = {
//   mounted: (el) => {
//     el.focus();
//   }
// }


</script>

<!-- <script>
import { ref } from 'vue';

export default{
  setup(){
    const counter=ref(0)
    const decreaseCounter=()=>{
      counter.value--;
    }
    const  increaseCounter=()=>{
      counter.value++;
    }

    return{
      counter,
      decreaseCounter,
      increaseCounter
    }
  }
}
</script> -->

<!-- <script>
export default{
  data(){
    return{
      counter:0
    }
  },
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  }
}
</script> -->

<style>
.home {
  margin-top: 5%;
  text-align: center;
  display: grid;
  gap: 5%;
}

.home .count {
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  font-size: 20px;
}

.home .count .btn {
  margin: 0 5px;
  padding: 5px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 20px;
  background-color: rgb(0, 131, 0);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.home .count .btn:hover {
  background-color: rgb(113, 172, 23);
}

.home .edit {
  margin-top: 3%;
}

.home .edit input {
  border: none;
  outline: none;
  padding: 7px 5px 5px 10px;
  border-radius: 2px;
  opacity: 0.9;
}

.home .edit input:focus{
  border: 2px solid  #00b61f;
  border-radius: 4px;
}
</style>