<template>
  <div class="crossCulturalChatRoom">
    <!-- 聊天框 -->
    <div class="chat-frame" id="chat-massages">
      <ChatFrame :startupTime="startupTime" :times="times" :dataMessages="dataMessages"/>
    </div>
    <!-- 语言选择 -->
    <div class="language-choice">
      <LanguageChoice @find-chat-room="findChatRoom" />
    </div>
    <!-- 用户聊天输入 -->
    <div class="user-input">
      <EnterMessage class="enterMessage" @send-message="sendMessage" />
      <Annotate class="annotate" />
    </div>
  </div>
</template>

<script lang="ts" setup name="CrossCulturalChatRoom">
  import EnterMessage from './CrossCulturalChatRoom/EnterMessage.vue';
  import Annotate from './CrossCulturalChatRoom/Annotate.vue';
  import LanguageChoice from './CrossCulturalChatRoom/LanguageChoice.vue';
  import ChatFrame from './CrossCulturalChatRoom/ChatFrame.vue';
  
  import { onMounted,ref } from 'vue';
  
  // 定义时间
  const startupTime = ref<string>('');

  // 定义 WebSocket 的引用
  const socket = ref<WebSocket | null>(null);

  // 定义消息数组
  const times = ref<string[]>([]);
  const dataMessages = ref<string[]>([]);
  
  const setTime = () => {
    const currentTime = new Date();
    return formatTimestamp(currentTime);
  };
  // 格式化时间戳
  const formatTimestamp = (date: Date) => {
    return date.toLocaleString([], { hour12: false }); // 格式化时间戳
  };
    
  // 查找聊天室并建立 WebSocket 连接
  const findChatRoom = (username: string, sourceLang: string, targetLang: string) => {
    if (!socket.value) {
      // 创建 WebSocket 连接
      socket.value = new WebSocket(`ws://118.178.138.32:8081/imserver/${username}/${sourceLang}`);
      
      // WebSocket 连接打开时触发
      socket.value.onopen = () => {
        console.log('连接成功');
      };

      // WebSocket 接收到消息时触发
      socket.value.onmessage = (event) => {
        // //获取时间
        const currentTime = setTime();
        const message = event.data;
        
        times.value.push(currentTime);
        dataMessages.value.push(message);
        
        const messagesDiv = document.getElementById('messages') as HTMLDivElement;
        // messagesDiv.innerHTML += `<div>${event.data}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到底部
      };

       // WebSocket 连接关闭时触发
      socket.value.onclose = () => {
        console.log('连接关闭');
      };

      // WebSocket 发生错误时触发
      socket.value.onerror = (error) => {
        console.error('WebSocket 发生错误:', error);
      };
    }
  };

  const sendMessage = (message: string) => {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(message);
    } else {
      alert('WebSocket 尚未连接');
    }
  };

</script>

<style scoped>
  .crossCulturalChatRoom {
    width: 100%;
    height: 100%;
    position: relative;/* 设置容器为相对定位 */
    bottom: 0;
    /* background-color: aqua; */
  }
  .chat-frame {
    width: 100%;
    height: 86%;
  }
  .language-choice {
    width: 100%;
    height: 6%;
    /* background-color: black; */
  }
  .user-input {
    width: 100%;
    height: 8%;
    max-height: 20%;
    position: absolute;
    bottom: 0;
  }
  .enterMessage {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .annotate {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>