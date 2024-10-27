<template>
  <div class="see-more">
    <button class="see-more-btn">
      <div>查看更多</div>
      <img src="@/assets/Rigth-shear.png" alt="">
    </button>
  </div>
</template>

<script lang="ts" setup name="SeeMore">

</script>

<style scoped>
  .see-more {
    width: 35%;
    min-width: 80px;
  }
  .see-more-btn {
    width: 100%;
    height: 100%;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    color: inherit;  /* 继承父元素的颜色 */
    font: inherit;  /* 继承父元素的字体 */
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 水平靠左 */
    gap: 3%;
  }
  .see-more-btn img {
    width: 17%;
  }
</style>