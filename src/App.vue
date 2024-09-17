<template>
  <div class="background">
    <Left class="left-component"/>
    <Mid class="mid-component"/>
    <Right class="right-component"/>
  </div>
</template>6

<script lang="ts" setup name="App">
  import Left from './components/Left.vue'
  import Right from './components/Right.vue'
  import Mid from './components/Mid.vue'
  import { ref } from 'vue'
</script>

<style scoped>
  .background {
    display: flex;
    width: 100vw;
    height: 100vh;
    min-height: 720px;
    min-width: 1280px;
    background-color: rgb(217,234,252);
    justify-content: space-between;
    align-items: flex-start;
  }

  .left-component {
    position: relative;
    left: 0;
    top: 0;
  }
  .right-component {
    position: relative;
    right: 0;
    top: 0;
  }
</style>