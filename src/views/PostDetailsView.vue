<template>
    <div class="postsDetails">
        <h1>Post Details</h1>
        <p>Display the details of post with id {{ $route.params.id }} here</p>
        <div>
            <button @click="showPostId">Show Post Id</button>
        </div>
        <div>
            <button @click="goHome">Go Home in 2s</button>
        </div>
        <div>
            <button @click="goToFistPost">Go to 1st post</button>
        </div>
    </div>

    <RouterLink class="back" to="/posts">&lt; Back</RouterLink>
</template>

<script setup >
// _______________import
import { useRoute, useRouter } from 'vue-router';

const route=useRoute( );  //get access to current route
const router=useRouter(); //used for navigating between routes programmatically

// _______________methods

const showPostId = () => {
    alert( `The id of this post is ${route.params.id}` ) ;
}

const goHome=()=>{
    setTimeout(()=>{
        // router.push('/');
        router.push({name:'home'});
    },2000)
}

const goToFistPost=()=>{
    router.push({
        name:'postDetails',
        params:{
            id:'1'
        }
    });
}

</script>

<style>
.postsDetails {
    text-align: center;
    padding: 5%;
}

.postsDetails div button {
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

.postsDetails div button:hover{
    background-color: rgb(113, 172, 23);
}

.back {
    margin-left: 10%;
}
</style>