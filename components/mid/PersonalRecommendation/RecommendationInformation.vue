<template>
  <div class="recommendation-information">
    <a href="#">
      <div class="recommendation-information">
        <!-- 标题 -->
        <div class="title">{{ content.title }}</div>
        <div class="title-bottom"></div>

        <!-- 底部信息 -->
        <div class="content-bottom">
          <div class="left">
            <!-- 栏目标签 -->
            <div class="topic-label">{{ content.topicLabel }}</div>
            <!-- 来源 -->
            <div class="content-source">{{ content.contentSource }}</div>
          </div>
          <!-- 时间 -->
          <div class="time">{{ content.time }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup name="RecommendationInformation">
  import { ref } from 'vue';

  // 定义内容对象
  const content = ref({
    topicLabel: '科技',
    title: '欧盟要求YouTube、Snapchat、TikTok提供有关推荐算法的信息',
    // topicLabelId: 'tech-001', 
    contentSource: '财经经济媒体',
    time: '2023-10-01'
  });
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