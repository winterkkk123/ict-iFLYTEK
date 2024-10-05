<template>
  <div class=recommendationInformationImg>
    <a :href="content.sourceUrl" class="info-link">
      <!-- 照片 -->
      <img :src="content.coverUrl" alt="推荐图片" />
      <!-- 信息 -->
      <div class="content-details">
        <!-- 标题，用盒子设置上下间距 -->
        <div class="title-top"></div>
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

<script lang="ts" setup name="RecommendationInformationImg">
  import { ref } from 'vue';

  defineProps<{
    content: {
      sourceUrl: string;
      coverUrl: string;
      topicTags: string;
      title: string;
      topicSource: string;
      publicTime: string;
    };
  }>();
  
</script>

<style scoped>
  .recommendationInformationImg{
    width: 100%;
    height: 160px;
    max-height: 160px;
    display: flex;
    align-items: center;
  }
  .recommendationInformationImg a.info-link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s ease; /* 添加过渡效果 */
  }
  .recommendationInformationImg img{
    width: 35%;
    max-width: 35%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; /* 图片的过渡效果 */
  }
  .recommendationInformationImg a:hover img {
    transform: scale(1.05); /* 鼠标悬停时图片放大 */
  }
  .content-details{
    width: 65%;
    height: 100%;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: top;
  }
  .content-details .title-top {
    width: 100%;
    height: 15%;
  }
  .content-details .title {
    width: 100%;
    height: 45%;
    max-height: 50%;
    flex-wrap: nowrap;
    font-size: 26px;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: transform 0.3s ease; /* 文字部分的过渡效果 */
  }
  .recommendationInformationImg a:hover .title {
    transform: translateY(-10px); /* 鼠标悬停时文字向上移动 */
  }
  .content-details .title-bottom {
    width: 100%;
    height: 5%;
  }
  .content-bottom{
    width: 100%;
    height: 30%;
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