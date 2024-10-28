<template>
  <div class="EnterMessagen">
    <input 
      type="text" 
      v-model="message" 
      placeholder="请输入消息" 
      class="input" 
      @keyup.enter="sendMessage" 
    />
    <button @click="sendMessage">发送</button>
  </div>
</template>

<script lang="ts" setup name="EnterMessage">
  import { ref } from 'vue';

  const emit = defineEmits(['send-message']);
  const message = ref('');

  const sendMessage = () => {
    if (message.value.trim() !== '') {
      emit('send-message', message.value);
      message.value = ''; // 清空输入框
    } else {
      alert('请输入消息');
    }
  };
</script>

<style scoped>
  .EnterMessagen {
    width: 100%;
    height: 60%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    background-color: white;
    display: flex;
    align-items: center;
  }
  .EnterMessagen .input {
    font-size: 1rem;
    width: 85%;
    height: 100%;
    margin: 0 2.5%;
    border: none;
    outline: none;
    resize: vertical; /* 只能垂直调整大小 */
    overflow-y: auto;
  }
  .EnterMessagen button {
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