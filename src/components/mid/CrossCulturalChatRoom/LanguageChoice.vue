<template>
  <div class="languageChoice">
    <!-- 源语言选择框 -->
    <select v-model="sourceLanguage" placeholder="请选择源语言">
      <option value="">请选择源语言</option>
      <option v-for="item in language" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>

    <!-- 转换图标 -->
    <img src="@/assets/Transform.png" alt="" class="transform-img">

    <!-- 目标语言选择框 -->
    <select v-model="targetLanguage" placeholder="请选择目标语言">
      <option value="">请选择目标语言</option>
      <option v-for="item in language" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>

    <!-- 寻找聊天室按钮 -->
    <button @click="findChatRoom">寻找聊天室</button>
  </div>
</template>

<script lang="ts" setup name="LanguageChoice">
  import { ref, watch } from 'vue';
  import axios from 'axios';

  const props = defineProps<{
    userMessage: {
      username: string;
      headshot: string;
      email: string;
      studentNumber: string;
    }
  }>();
  
  // 定义下拉框选项
  const language = [
    { value: 'cn', label: '汉语' },
    { value: 'en', label: '英语' },
    { value: 'fr', label: '法语' },
    { value: 'ja', label: '日语' },
    { value: 'de', label: '德语' },
    { value: 'ko', label: '韩语' },
    { value: 'yue', label: '广东话' },
    { value: 'li', label: '彝语' },
    { value: 'zua', label: '壮语' },
    { value: 'mn', label: '内蒙语' },
    { value: 'th', label: '泰语' },
    { value: 'ru', label: '俄语' },
    { value: 'bg', label: '保加利亚语' },
    { value: 'uk', label: '乌克兰语' },
    { value: 'vi', label: '越南语' },
    { value: 'ms', label: '马来语' },
    { value: 'id', label: '印尼语' },
    { value: 'tl', label: '菲律宾语'},
    { value: 'es', label: '西班牙语' },
    { value: 'cs', label: '捷克语' },
    { value: 'ro', label: '罗马尼亚语' },
    { value: 'sv', label: '瑞典语' },
    { value: 'pl', label: '波兰语' },
    { value: 'nl', label: '荷兰语' },
    { value: 'ar', label: '阿拉伯语' },
    { value: 'fa', label: '波斯语' },
    { value: 'ps', label: '普什图语' },
    { value: 'ur', label: '乌尔都语' },
    { value: 'hi', label: '印地语' },
    { value: 'bn', label: '孟加拉语' },
    { value: 'nm', label: '外蒙语' },
    { value: 'kk', label: '外哈语' },
    { value: 'tr', label: '土耳其语' },
    { value: 'ha', label: '豪萨语' },
    { value: 'hu', label: '匈牙利语' },
    { value: 'sw', label: '斯瓦西里语' },
    { value: 'uz', label: '乌兹别克语' },
    { value: 'zu', label: '祖鲁语' },
    { value: 'el', label: '希腊语' },
    { value: 'he', label: '希伯来语' },
    { value: 'hy', label: '亚美尼亚语' },
    { value: 'ka', label: '格鲁吉亚语' },
    { value: 'kka', label: '内哈萨克语' }
  ];

  // 选择语言的值
  const sourceLanguage = ref('');
  const targetLanguage = ref('');

  const emit = defineEmits(['find-chat-room']);

  // 寻找聊天室的函数
  const findChatRoom = () => {
    const sourceLang = sourceLanguage.value;
    const targetLang = targetLanguage.value;

    if (sourceLang && targetLang) {
      const username = props.userMessage.username;
      if (username) {
        emit('find-chat-room', username, sourceLang, targetLang);
      } else {
        alert('用户名为空，请重试');
      }
    } else {
      alert('请选择源语言和目标语言');
    }
  };
</script>

<style scoped>
.languageChoice {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
}

select {
  width: 30%;
  height: 60%;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  overflow-y: auto; /* 添加滚动条 */
  padding: 5px;
  padding-left: 2.3%;
  font-size: 1rem;
}

option {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
}

button {
  width: 15%;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  background-color: rgb(232,232,232);
}

.transform-img {
  height: 45%;
}
</style>
