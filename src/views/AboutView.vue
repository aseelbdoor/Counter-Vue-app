<template>
  <div class="about">
    <h1>About</h1>
    <textarea name="text" id="text" cols="60" rows="5" v-autofocus></textarea>
  </div>
</template>

<script setup >
// imports
import {vAutofocus} from '@/directives/vAutofocus';

</script>

<style>
.about{
  text-align: center;
  padding: 5%;
}
textarea{
  border-radius: 3px;
  opacity: 0.9;
}
textarea:focus{
  border: 3px solid #bada55;
  border-radius: 3px;
  outline: none;
}
</style>