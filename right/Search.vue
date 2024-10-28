<template>
  <div class="search">
    <div class="search-input">
      <img src="@/assets/Search.png" alt="">
      <input type="text" :placeholder="defaultText" v-model="searcbText" @focus="showDefaultContent = false" @blur="handleBur">
    </div>
    <div class="upload-files">
      <button class="button">
        上传文件
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup name="Search">
  import { ref } from 'vue'
  
  const searcbText = ref('');
  const showDefaultContent = ref(true);
  
  const defaultText = '输入搜索文档关键词';
  
  function handleBur() {
    if (searcbText.value === '') {
      showDefaultContent.value = true;
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 3%;
    min-height: 34px;
    max-height: 50px;
    display: flex;
    align-items: center;
  }
  .search-input {
    width:60%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bfbfbf;
    border-radius: 10px;
  }
  .search-input img {
    height: 70%;
    margin: 2.5%;
    aspect-ratio: 1 / 1;
  }
  input {
    width: 80%;
    border:none;
    outline: none;
    color: rgb(117, 117, 117);
    font-size: 0.8rem;
    font-weight: bold;
  }
  .upload-files {
    margin-left: 10%;
    width: 30%;
    height: 50%;
    display: flex;
    font-size: 0.8rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    color: rgb(117, 117, 117);
    border-radius: 10px;
    border: 1px solid #bfbfbf;
  }
  .button {
    width: 100%;
    height: 100%;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    color: inherit;  /* 继承父元素的颜色 */
    font: inherit;  /* 继承父元素的字体 */
    border-radius: 10px;
  }
</style>