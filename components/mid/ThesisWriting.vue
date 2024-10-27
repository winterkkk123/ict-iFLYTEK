<template>
  <div class="thesisWWriting">

    <!-- 底部提问模块,一直存在 -->
    <div class="perpetual">
      <Question @search-click="onSearchClick" class="question"/>
      <Annotate class="annotate"/>
    </div>
  </div>
</template>

<script lang="ts" setup name="ThesisWriting"">
  import User from './ThesisWriting/User.vue';
  import Question from './ThesisWriting/Question.vue';
  import Chat from './ThesisWriting/Chat.vue';
  import FirstChat from './ThesisWriting/FirstChat.vue';
  import Annotate from './ThesisWriting/Annotate.vue';
  
  import { ref, reactive } from 'vue';
  import { onMounted, onBeforeUnmount } from 'vue';
  import { inject } from 'vue';

  // 使用 inject 获取 userMessage 数据
  const userMessage = inject<{ headshot: string; email: string; studentNumber: string }>('userMessage');

  if (!userMessage) {
    throw new Error('userMessage is not provided');
  }

  // 定义一个响应式变量来追踪是否已提出问题
  const isQuestionAsked = ref(true);

  // 存储提问和回答的内容
  const questions = reactive<
    Array<{ question: string; answer: string }>
  >([]);

  // 处理搜索按钮点击的方法
  function onSearchClick(payload : any) {
    const newQuestion = { question: payload.question, answer: payload.answer };
    console.log("newquestion", newQuestion);
    questions.push(newQuestion);
    isQuestionAsked.value = true;
  }
  
</script>

<style scoped>
  .thesisWWriting {
    width: 100%;
    height: 100%;
    /* background-color: white; */
    position: relative;/* 设置容器为相对定位 */
    bottom: 0;
  }
  .perpetual {
    width: 100%;
    height: 8%;
    max-height: 20%;
    position: absolute;
    bottom: 0;
  }
  .question {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .annotate {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  /* 自定义滚动条样式 */
  .after-question::-webkit-scrollbar {
    width: 0px; /* 滚动条宽度 */
  }
  .latex-preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    white-space: pre-wrap;
  }
</style>