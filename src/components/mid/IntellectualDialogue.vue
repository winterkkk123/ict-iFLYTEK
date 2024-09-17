<template>
  <div class="intellectualDialogue">
    <!-- 初始化,问题提出后删除 -->
    <div class="before-question">
      <MidTitle class="mid-title"/>
    </div>

    <!-- 问题提问之后产生 -->
     <div class="after-question">
      
     </div>

    <!-- 底部提问模块,一直存在 -->
    <div class="perpetual">
      <Question class="question"/>
      <Annotate class="annotate"/>
    </div>
  </div>
  <!-- <User/>
  <Chat/>
  <Question/>
  <Annotate/>
  <MidFunction/>
  <MidTitle/> -->
</template>

<script lang="ts" setup name="IntellectualDialogue">
  import User from './IntellectualDialogue/User.vue';
  import Chat from './IntellectualDialogue/Chat.vue';
  import Question from './IntellectualDialogue/Question.vue';
  import Annotate from './IntellectualDialogue/Annotate.vue';
  import MidFunction from './IntellectualDialogue/MidFunction.vue';
  import MidTitle from './IntellectualDialogue/MidTitle.vue';
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
    width:100%;
    height: auto; 
    max-height: 90%;
  }
  .mid-title {
    width: 100%;
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