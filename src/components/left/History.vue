<template>
  <div class="history-container">
    <hr>
    <button class="history">
      <img src="@/assets/History.png" alt="">
      <span>历史对话</span>
    </button>
  </div>
</template>

<script lang="ts" setup name="History">

</script>

<style scoped>
  .history-container {
    width: 70%;
    height: 2.5%;
  }
  hr {
    color: #bfbfbf;
  }
  .history {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    color: inherit;  /* 继承父元素的颜色 */
    font: inherit;  /* 继承父元素的字体 */
  }
  .history img {
    display: flex;
    height: 70%;
    margin: 0 3% 0 7%;
  }
  .history span {
    font-weight: bold;
    font-size: 1rem;
    color:#bfbfbf;
  }
</style>