<template>
  <div class="intellectualDialogue">
    <!-- 初始化,问题提出后删除 -->
    <div v-if="!isQuestionAsked" class="before-question">
      <MidTitle class="mid-title"/>
      <MidFunction class="mid-function"/>
    </div>

    <!-- 问题提问之后产生 -->
     <div v-if="isQuestionAsked" class="after-question">
      <div class="after-question-top"></div>
      <User :question="question" class="user"/>
      <Chat class="chat"/>
     </div>

    <!-- 底部提问模块,一直存在 -->
    <div class="perpetual">
      <Question @search-click="onSearchClick" class="question"/>
      <Annotate class="annotate"/>
    </div>
  </div>
</template>

<script lang="ts" setup name="IntellectualDialogue">
  import User from './IntellectualDialogue/User.vue';
  import Chat from './IntellectualDialogue/Chat.vue';
  import Question from './IntellectualDialogue/Question.vue';
  import Annotate from './IntellectualDialogue/Annotate.vue';
  import MidFunction from './IntellectualDialogue/MidFunction.vue';
  import MidTitle from './IntellectualDialogue/MidTitle.vue';

  import { ref } from 'vue';

  // 定义一个响应式变量来追踪是否已提出问题
  const isQuestionAsked = ref(false);
  const question = ref('');

  // 处理搜索按钮点击的方法
  function onSearchClick(value:string) {
    question.value = value;
    isQuestionAsked.value = true;
  }
</script>

<style scoped>
  .intellectualDialogue {
    width: 100%;
    height: 100%;
    /* background-color: white; */
    position: relative;/* 设置容器为相对定位 */
    bottom: 0;
  }
  .before-question {
    width: 100%;
    height: 90%;
  }
  .after-question {
    width: 100%;
    height: 90%;
    max-height: 90%;
    overflow: auto; /* 添加滚动条支持 */
  }
  .mid-function {
    width: 100%;
  }
  .after-question {
    width:100%;
    height: auto; 
    min-height: 90%;
    max-height: 90%;
  }
  /* 聊天框的下边距 */
  .user,
  .chat {
    width: 100%;
    margin-bottom: 3%;
  }
  .mid-title {
    width: 100%;
  }
  /* 顶部 */
  .after-question-top {
    width: 100%;
    height: 8vh;
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
</style>