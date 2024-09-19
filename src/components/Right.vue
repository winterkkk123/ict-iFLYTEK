<template>
  <div class="right">
    <div class="right-background">
      <div class="right-content">
        <RightTitle class="right-title"/>
        <Search class="right-search"/>
        <Folders class="right-folders"/>
        <Files class="right-files"/>
        <SeeMore class="right-seemore"/>
        <!-- 隐藏导航栏按钮 -->
        <button class="right-hide-navigation">
          <img src="@/assets/Right-hide-navigation.png" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Rigth">
  import RightTitle from './right/RightTitle.vue';
  import Search from './right/Search.vue';
  import Folders from './right/Folders.vue';
  import Files from './right/Files.vue';
  import SeeMore from './right/SeeMore.vue';
</script>

<style scoped>
  .right {
    width: 14vw;
    min-width: 270px;
    height: 100vh;
    min-height: 800px;
    display: flex;
    align-items: center;
  }
  .right-background {
    width: 90%;
    height: 95%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
  .right-content {
    width: 80%;
    height: 98%;
    position: relative;  /* 设置相对定位 */
  }
  .right-title {
    margin-top: 5%;
  }
  .right-hide-navigation {
    width: 13%;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .right-hide-navigation img {
    width: 100%;
    height: 100%;
  }
</style>