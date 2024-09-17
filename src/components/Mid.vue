<template>
  <div class="mid">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="Mid">
  import { RouterView } from 'vue-router';
</script>

<style scoped>
  .mid {
    margin: 0 15%;
    width: 40%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    background-color: rgb(217,234,252);
  }
</style>