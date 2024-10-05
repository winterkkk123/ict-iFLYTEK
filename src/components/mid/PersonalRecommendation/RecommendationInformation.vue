<template>
  <div class="recommendation-information">
    <a :href="content.sourceUrl">
      <div class="recommendation-information">
        <!-- 标题 -->
        <div class="title">{{ content.title }}</div>
        <div class="title-bottom"></div>

        <!-- 底部信息 -->
        <div class="content-bottom">
          <div class="left">
            <!-- 栏目标签 -->
            <div class="topic-label">{{ content.topicTags }}</div>
            <!-- 来源 -->
            <div class="content-source">{{ content.topicSource }}</div>
          </div>
          <!-- 时间 -->
          <div class="time">{{ content.publicTime }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup name="RecommendationInformation">
  import { ref } from 'vue';

  defineProps<{
    content: {
      sourceUrl: string;
      topicTags: string;
      title: string;
      topicSource: string;
      publicTime: string;
    };
  }>();
  
</script>

<style scoped>
  .recommendation-information,
  .recommendation-information a {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column; /* 设置为列方向 */
  }
  .title {
    width: 100%;
    height: auto;
    font-size: 26px;
    color: black;
    transition: transform 0.3s ease; /* 文字部分的过渡效果 */
  }
  .recommendation-information a:hover .title {
    transform: translateY(-10px); /* 鼠标悬停时文字向上移动 */
  }
  .title-bottom {
    width: 100%;
    height: 18px;
  }
  .content-bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-bottom .left {
    width: auto;
    height:auto;
    max-width: 50%;
    display: flex;
    align-items: center;
  }
  .content-bottom .topic-label {
    width: auto;
    height: auto;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding: 2px 8px;
    color: red;
    border: 1px solid red;
  }
  .content-bottom .content-source {
    width: auto;
    height: auto;
    margin-left: 10px;
    font-size: 17px;
    color: gray;
  }
  .content-bottom .time {
    width: auto;
    height: auto;
    font-size: 17px;
    color: gray;
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
</style>