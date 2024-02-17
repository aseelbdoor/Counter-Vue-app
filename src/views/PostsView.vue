<template>
    <div class="posts">
        <h1>Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id" >
                <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup >
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

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

</script>

<style scoped>
.posts{
    /* text-align: center; */
    padding: 5%;
}
</style>