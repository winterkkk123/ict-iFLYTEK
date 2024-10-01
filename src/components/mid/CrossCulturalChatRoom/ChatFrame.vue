<template>
  <div class="chat-frame">
    <div class="messages" id="messages">
      <h1>聊天室:</h1>
      <div v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="ChatFrame">
  import { onMounted, ref } from 'vue';

  const messages = ref<string[]>([]);

  const addMessage = (msg: string) => {
    messages.value.push(msg);
  };

  onMounted(() => {
    const messagesDiv = document.getElementById('messages') as HTMLDivElement;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到底部
  });
</script>

<style scoped>
  .chat-frame {
    width: 100%;
    height: 100%;
    min-height: 97%;
    display: flex; /* 使用 flex 布局 */
    flex-direction: column; /* 垂直排列子元素 */
  }
  .messages {
    flex: 1; /* 自动占据剩余空间 */
    height: 87%;
    width: 90%;
    background-color: white;
    overflow: auto; /* 添加滚动条支持 */
    border-radius: 20px;
    margin-top: 5%;
    padding: 3% 5%;
  }
  .chat-frame h1 {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
  }
</style>