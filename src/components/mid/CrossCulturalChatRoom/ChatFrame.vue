<template>
  <div class="chat-frame">
    <div class="messages" id="messages">
      <h1>聊天室:</h1>
      <div v-for="(time, index) in times" :key="index">
        
        <!-- 时间 -->
        <div class="chat-mid">{{ time }}</div>
        
         <!-- 判断是否为欢迎语句 -->
        <div v-if="isWelcomeMessage(dataMessages[index])" class="chat-mid">
          {{ dataMessages[index] }}
        </div>
        
        <!-- 判断是否为离开语句 -->
        <div v-else-if="isLeaveMessage(dataMessages[index])" class="chat-mid">
          {{ dataMessages[index] }}
        </div>
        
        <!-- 否则为正常消息 -->
        <!-- 右侧消息-本人消息 -->
        <div v-else-if="parseMessage(dataMessages[index]).name === userName" class="chat-message-right">
          <!-- 解析消息内容 -->
          <div class="message-content-right">
            <span class="name-right">{{ parseMessage(dataMessages[index]).name }}</span>
            <span class="message-right">{{ parseMessage(dataMessages[index]).message }}</span>
          </div>
          <!-- 头像 -->
          <div class="avatar-right"><img :src="userMessage.headshot" alt=""></div>
        </div>
        
        <!-- 左侧消息-他人消息 -->
        <div v-else class="chat-message-left">
          <!-- 头像 -->
          <div class="avatar-left"></div>
          <!-- 解析消息内容 -->
          <div class="message-content-left">
            <span class="name-left">{{ parseMessage(dataMessages[index]).name }}</span>
            <span class="message-left">{{ parseMessage(dataMessages[index]).message }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="ChatFrame">
  import { onMounted, ref } from 'vue';

  const userName = ref('xiaobai' + ':');

  // 接收 startupTime、times 和 dataMessages prop
  const props = defineProps<{
    startupTime: string;
    times: string[];
    dataMessages: string[];
    userMessage: {
      headshot: string;
      email: string;
      studentNumber: string;
    }
  }>();
  
   // 解析消息内容
  const parseMessage = (message: string): { name: string; message: string } => {
    const parts = message.split(': ');
    const words = message.split(' ');
    const name = words[0];
    const messageContent = words.slice(1).join(' ');
    return { name, message: messageContent };
  };

  // 判断是否为欢迎语句
  const isWelcomeMessage = (message: string): boolean => {
    return message.startsWith('欢迎来自');
  };

  // 判断是否为离开语句
  const isLeaveMessage = (message: string): boolean => {
    const leavePattern = /^(.*?)(离开了聊天室！)$/;
    const match = message.match(leavePattern);
    return match !== null;
  };
  
  // 页面加载完成后滚动到消息底部
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
    position: relative;
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
  .chat-mid {
    font-size: 0.8em;
    color: #999;
    text-align: center;
    display: block;
    margin-top: 5px;
  }

  /* 左侧消息样式 */
  .chat-message-left {
    width: 65%;
    max-width: 65%; /* 最大宽度限制 */
    margin-bottom: 15px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: aqua; */
  }
  .avatar-left {
    width: 10%;
    height: 100%;
    aspect-ratio: 1 / 1;
    background-image: url("@/assets/UserAvatar/AnonymousAvatar.png"); /* 替换为你的图片路径 */
    background-size: cover; /* 使图片覆盖整个元素 */
    background-position: center; /* 图片居中显示 */
    border-radius: 50%; /* 将 div 转换为圆形 */
  }
  .message-content-left {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .chat-message-left .name-left {
    width: 96%;
    max-width: 96%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 2%;
    padding-left: 2%;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .chat-message-left .message-left {
    width: 92%;
    max-width: 96%;
    margin-left: 2%;
    padding: 3%;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgb(229,229,229);
    border-radius: 10px;
  }

  /* 右侧消息样式 */
  .chat-message-right {
    width: 65%;
    max-width: 65%; /* 最大宽度限制 */
    margin-left: 35%;
    margin-bottom: 15px;
    height: auto;
    display: flex;
    justify-content: flex-end; /* 右对齐 */
    align-items: center;
    /* background-color: aqua; */
  }
  .avatar-right {
    width: 10%;
    height: 100%;
    aspect-ratio: 1 / 1;
    /* background-image: url("@/assets/UserAvatar/ProfilePhoto.jpg"); /* 替换为你的图片路径 */
    /* background-size: cover; 使图片覆盖整个元素 */
    background-position: center; /* 图片居中显示 */
    border-radius: 50%; /* 将 div 转换为圆形 */
    overflow: hidden; /* 确保内部内容不会溢出 */
  }
  .avatar-right img {
    width: 100%;
    height: 100%;
  }
  .message-content-right {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .chat-message-right .name-right {
    width: 96%;
    max-width: 96%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 2%;
    padding-right: 2%;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
  }
  .chat-message-right .message-right {
    width: 92%;
    max-width: 96%;
    margin-right: 2%;
    padding: 3%;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgb(217,234,252);
    border-radius: 10px;
  }
</style>