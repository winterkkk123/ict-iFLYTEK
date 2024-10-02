<template>
  <div class="mid-function">
    <!-- 用ul列表来写展示的function -->
    <ul>
      <li :class="{ leftLi:midfunctionIndex % 2 === 0, rightLi: midfunctionIndex % 2 !== 0  }" v-for="(midfunction, midfunctionIndex) in midfunction" :key="midfunctionIndex">
        <!-- 左侧图标logo -->
        <div class="functionLeft">
          <img v-if="midfunction.logo === 'IntellectualDialogue'" src="@/assets/Blue-IntellectualDialogue.png" alt="">
          <img v-else-if="midfunction.logo === 'PersonalRecommendation'" src="@/assets/Blue-PersonalRecommendation.png" alt="">
          <img v-else-if="midfunction.logo === 'ITQuestionsAndAnswers'" src="@/assets/Blue-ITQuestionsAndAnswers.png" alt="">
          <img v-else-if="midfunction.logo === 'EnployMentGuidance'" src="@/assets/Blue-EmployMentGuidance.png" alt="">
          <img v-else-if="midfunction.logo === 'ApplicationForm'" src="@/assets/Blue-ApplicationForm.png" alt="">
          <img v-else-if="midfunction.logo === 'CrossCulturalChatRoom'" src="@/assets/Blue-CrossCulturalChatRoom.png" alt="">
        </div>
        <!-- 右侧内容 -->
        <div class="functionRight">
          <h1 class="function-name">{{ midfunction.name }}</h1>
          <div class="function-explain">{{ midfunction.explain }}</div>
          <div class="function-heatvalue">
            <img src="@/assets/Heat.png" alt="">
            <div class="heat">{{ midfunction.heatvalue }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="MidFunction">
  import { ref } from 'vue';

  const midfunction = ref([
    {
      logo:'IntellectualDialogue',
      name:'智能对话',
      explain:'输入你想查询的内容，智能回答问题',
      heatvalue:'10.3W',
    }
    ,
    {
      logo:'CrossCulturalChatRoom',
      name:'跨文化聊天室',
      explain:'自己选择多种语言进行交谈',
      heatvalue:'5.1W'
    }
    ,
    {
      logo:'PersonalRecommendation',
      name:'个性化推荐',
      explain:'根据用户习惯推荐您感兴趣的内容',
      heatvalue:'19882',
    }
    , 
    {
      logo:'EnployMentGuidance',
      name:'就业指导',
      explain:'帮助学生未来发展就业进行指导',
      heatvalue:'3.9W'
    }
    ,
    {
      logo:'ApplicationForm',
      name:'志愿填报',
      explain:'辅助学生做出志愿填报',
      heatvalue:'68224'
    }
    ,
    {
      logo:'ITQuestionsAndAnswers',
      name:'IT问答',
      explain:'输入问题,自动做出回答',
      heatvalue:'5.3W'
    }
  ])
</script>

<style scoped>
  .mid-function {
    width: 100%;
    height: 35%;
    min-height: 430px;
    overflow: auto;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;  /* 移除默认列表样式 */
    padding: 0;  
  }
  li {
    width: 49%;            /* 每行两个元素 */
    height: 30%;
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box; /* 包含边框和内边距在宽度内 */
    margin-bottom: 2.1%;
    overflow: hidden;
    border: 1px solid rgb(232,232,232);
  }
  /* 判断左右li来设置其边距 */
  .leftLi {
    margin-right: 1%;
  }
  .rightLi {
    margin-left: 1%;
  }
  .functionLeft {
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .functionRight {
    height: 100%;
    width: 75%;
  }
  .functionRight .function-name {
    width: 100%;
    height: 35%;
    margin-top: 5%;
  }
  .functionRight .function-explain {
    width: 100%;
    height: 20%;
  }
  .functionRight .function-heatvalue {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    margin-top: 1%;
  }
  .functionRight .function-heatvalue img {
    width: 7%;
  }
  .functionRight .function-heatvalue .heat {
    width: 90%;
    margin-left: 3%;
    font-size: 1rem;
    color: #bfbfbf;
    font-weight: bold;
  }
</style>