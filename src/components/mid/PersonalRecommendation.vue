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
          :class="{ active: currentTopic.topicName === topic.topicName }"
        >
          {{ topic.topicName }}
        </li>
      </ul>

      <!-- 推荐内容 -->
      <ul class="recommendation-content">
        <li 
          v-for="(content, index) in currentContent" 
          :key="index"
        >
          <RecommendationInformationImg v-if="hasImage(content)" :content="prepareContent(content)" />
          <RecommendationInformation v-else :content="content" />
        </li>
      </ul>

      <!-- 下方留白 -->
      <div class="personalRecommendation-message-bottom"></div>
    </div>
  </div>
</template>

<script lang="ts" setup name="PersonalRecommendation">
  import RecommendationInformation from "./PersonalRecommendation/RecommendationInformation.vue";
  import RecommendationInformationImg from "./PersonalRecommendation/RecommendationInformationImg.vue";
  import { ref, onMounted } from "vue";

  // 定义话题列表
  const topics = ref<{ topicName: string; topicId: string }[]>([]);
  
  // 当前选中的话题，默认为推荐
  const currentTopic = ref<{ topicName: string; topicId: string }>({ topicName: "", topicId: "" });

  // 切换话题
  function selectTopic(topic: { topicName: string; topicId: string }) {
    currentTopic.value = topic;
    fetchContent(topic.topicId);
  }

  // 获取主题
  async function fetchTopics() {
    const response = await fetch('http://118.178.138.32:8081/topic/list', { method: 'POST' });
    const data = await response.json();
    return data.data;
  }

  // 获取当前话题的内容
  async function fetchContent(topicId: string) {
    const response = await fetch('http://118.178.138.32:8081/topic/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topicId })
    });
    const data = await response.json();
    const contents = data.data;
    currentContent.value = contents;
  }

   // 动态内容数组
   const currentContent = ref<{ title: string; topicSource: string; publicTime: string; coverUrl?: string; sourceUrl: string; topicTags: string }[]>([]);

  // 检查内容是否有图片
  function hasImage(content: { coverUrl?: string }) {
    return !!content.coverUrl;
  }

  // 准备内容
  function prepareContent(content: { title: string; topicSource: string; publicTime: string; coverUrl?: string; sourceUrl: string; topicTags: string }): { title: string; topicSource: string; publicTime: string; coverUrl: string; sourceUrl: string; topicTags: string } {
    return {
      ...content,
      coverUrl: content.coverUrl || 'default-image-url.jpg' // 提供默认图片URL
    };
  }

  // 初始化时获取话题列表
  onMounted(async () => {
    const fetchedTopics = await fetchTopics();
    topics.value = fetchedTopics;
    
    // 设置默认话题为话题列表中的第一个话题
    if (topics.value.length > 0) {
      currentTopic.value = topics.value[0];
      fetchContent(currentTopic.value.topicId);
    }
  });
  
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
  .recommendation-content li {
    margin-bottom: 30px;
  }
</style>