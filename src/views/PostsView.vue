<template>
    <div class="posts">
        <h1>Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id" >
                <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
            </li>
        </ul>
        <button class="button-counter" :class="{'yellow':oddOrEven==='odd'}"  @click="increaseCounter(1)" >
            {{counterData.counter}}
        </button>
    </div>
</template>

<script setup >
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useCounter } from '@/use/useCounter';

const posts=ref([
    {
        id:'1',
        title: 'First Post'
    },
    {
        id:'2',
        title: 'Second Post'
    },
    {
        id:'3',
        title: 'Third Post'
    }
])

const {counterData, increaseCounter, oddOrEven}=useCounter();

</script>

<style scoped>
.posts{
    /* text-align: center; */
    padding: 5%;
}

.button-counter.yellow{
    background-color: #b19300;
}

.button-counter.yellow:hover{
    background-color:#fcde4d;
}
</style>