<template>
  <div class="personalRecommendation">
    <div class="personalRecommendation-message">
      <!-- 上方留白 -->
      <div class="personalRecommendation-message-top"></div>
      <!-- 推荐标题 -->
      <h1>个性化推荐</h1>
      
      <!-- 推荐话题 -->
      <ul class="recommendation-topics">
        <li 
          v-for="(topic, index) in topics" 
          :key="index" 
          @click="selectTopic(topic)" 
          :class="{ active: currentTopic === topic }"
        >
          {{ topic }}
        </li>
      </ul>

      <!-- 推荐内容 -->
      <ul class="recommendation-content">
        <!-- {{ currentTopic }} -->
        <RecommendationInformationImg class="recommendation-information-img"/>
        <RecommendationInformation class="recommendation-information"/>
      </ul>

      <!-- 下方留白 -->
      <div class="personalRecommendation-message-bottom"></div>
    </div>
  </div>
</template>

<script lang="ts" setup name="PersonalRecommendation">
  import RecommendationInformation from "./PersonalRecommendation/RecommendationInformation.vue";
  import RecommendationInformationImg from "./PersonalRecommendation/RecommendationInformationImg.vue";
  import { ref } from "vue";

  // 定义话题列表
  const topics = ref(["推荐", "热点", "视频", "娱乐","国际","财经","科技","体育","社会","教育","生活"]);

  // 当前选中的话题，默认为推荐
  const currentTopic = ref("推荐");

  // 切换话题
  function selectTopic(topic: string) {
    currentTopic.value = topic;
  }
  
</script>

<style scoped>
  .personalRecommendation {
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: white;
    display: flex;
    justify-content: center; /* 水平居中 */
  }
  .personalRecommendation-message {
    width: 80%;
    height: auto;
    overflow-y: scroll; /* 加入可滚动的垂直伸缩条 */
  }
  .personalRecommendation-message::-webkit-scrollbar {
    width: 0; /* 隐藏水平滚动条 */
  }
  .personalRecommendation-message-top,
  .personalRecommendation-message-bottom {
    width: 100%;
    height: 30px;
  }
  .personalRecommendation-message h1 {
    width: 100%;
    margin-bottom: 35px;
  }
  .recommendation-topics {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    align-items: center;
    justify-content: left;
    margin-bottom: 30px;
    /* background-color: aqua; */
  }
  .recommendation-topics li {
    margin: 0px 5px;
    padding: 10px 0px;
    margin-right: 2em; /* 两个字大小的间距 */
    color: gray;
    cursor: pointer;  /* 鼠标悬停改为手形状 */
    transition: color 0.3s;   /* 颜色渐变过渡 */
  }
  /* 鼠标悬停变色 */
  .recommendation-topics li:hover {
    color: black;
  }
  /* 鼠标点击样式 */
  .recommendation-topics li.active {
    font-weight: bold;
    color: black;
    border-bottom: 3px solid gray; /* 边框下框线且加粗 */
  }
  /* 推荐内容样式 */
  .recommendation-content {
    display: flex;
    flex-direction: column; /* 以列排列 */
    width: 100%; /* 不超出容器宽度 */
  }
  .recommendation-content .recommendation-information-img,
  .recommendation-content .recommendation-information {
    margin-bottom: 30px;
  }
</style>