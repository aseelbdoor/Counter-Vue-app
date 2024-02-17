<template>
  <div>
    <p>{{ text }}</p>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
  <RouterView />
</template>

<script setup>
import { reactive, provide, computed } from 'vue';
import { useNetwork } from '@vueuse/core'

const userData = reactive({ name: 'Aseel Bdoor', age: 0 });

provide('userData', userData); // Providing the data as a provider so it can be accessed by 
// any child component.

// The online status will be accessible in all components that are nested under this one.
// This is useful if you want to show different content based on whether or not the user has an internet connection.
// This is useful for showing offline status or similar functionality.
const {isOnline} = useNetwork();
const text = isOnline.value ? 'Online' : 'Offline';

</script>

<style scoped>
nav {
  width: 100% !important;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}

div {
  width: 100% !important;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
