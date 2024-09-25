<template>
  <div class="question">
    <input type="text" :value="inputValue" @input="updateInput" placeholder="在此输入您想了解的内容,Shift+Enter换行" class="input">
    <button @click="emitSearchClick">发送</button>
  </div>
</template>

<script lang="ts" setup name="Question">
  import { ref } from 'vue';
  import { watchEffect } from 'vue';
  import { defineEmits } from 'vue';
  // 定义事件
  const emit = defineEmits(['search-click']);
  const inputValue = ref('');
  // 监听输入框的变化
  const updateInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
  };

  // 检测点击发送按钮
  const emitSearchClick = () => {
    emit('search-click', inputValue.value);
    inputValue.value = ''; // 清空输入框
  };
</script>

<style scoped>
  .question {
    width: 100%;
    height: 60%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    background-color: white;
    display: flex;
    align-items: center;
  }
  .question .input {
    font-size: 1rem;
    width: 85%;
    height: 100%;
    margin: 0 2.5%;
    border: none;
    outline: none;
    resize: vertical; /* 只能垂直调整大小 */
    overflow-y: auto;
  }
  .question button {
    width: 7%;
    height: 50%;
    border: none;
    background-color: rgb(232,232,232);
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
  }
</style>