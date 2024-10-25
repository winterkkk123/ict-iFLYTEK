<template>
  <div class="mid">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="Mid">
  import { RouterView } from 'vue-router';
  import { provide } from 'vue';

  const props = defineProps<{
    userMessage: {
      headshot: string,
      email: string,
      studentNumber: string
    }
  }>()

  // 使用 provide 提供 userMessage 数据
  provide('userMessage', props.userMessage);
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