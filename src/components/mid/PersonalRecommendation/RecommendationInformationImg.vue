<template>
  <div class=recommendationInformationImg>
    <a href="#">
      <!-- 照片 -->
      <img :src="content.photoLink" alt="推荐图片" />
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

<script lang="ts" setup name="RecommendationInformationImg">
  import { ref } from 'vue';

   // 定义内容对象
   const content = ref({
    photoLink: 'https://imgoss.ilive.cn/image/202410/04/1728025420856_365x204.jpg',
    topicLabel: '科技',
    title: '2nn半导体工艺突破极限：成本指数级暴增，晶圆均价飙升超3万美元',
    // topicLabelId: 'tech-001', 
    contentSource: '科技媒体',
    time: '2023-10-01'
  });
</script>

<style scoped>
  .recommendationInformationImg{
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
  }
  .recommendationInformationImg a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .recommendationInformationImg img{
    width: 35%;
    max-width: 35%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
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