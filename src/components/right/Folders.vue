<template>
  <div class="folders">
    <ul>
      <li v-for="(folder, folderIndex) in folders" :key="folder">
        <button @click="toggleActive(folderIndex)" :class="{ active: activeFolderIndex === folderIndex }">{{ folder }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Folders">
  import { ref } from 'vue';

  const folders = ref(['全部', '文件夹1', '文件夹2', '文件夹3', '文件夹4', '文件夹5']);
  const activeFolderIndex = ref(0); // 初始时没有激活的按钮

  function toggleActive(folderIndex: number) {
    if (folderIndex >= 0 && folderIndex < folders.value.length) { // 确保索引有效
      if (activeFolderIndex.value === folderIndex) {
        activeFolderIndex.value = -1; // 取消激活
      } else {
        activeFolderIndex.value = folderIndex; // 激活新的按钮
      }
    }
  }
</script>

<style scoped>
  .folders {
    width: 100%;
    height: auto;
    min-height: 34px;
    max-height: 100px;
    border-bottom: 1px solid rgb(232,232,232);
    margin-top: 3%;
  }
  ul {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    margin-right: 9px;
    font-size: 0.8rem;
  }
  button {
    width:auto;
    height: auto;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    color: inherit;  /* 继承父元素的颜色 */
    font-size: 0.8rem;
    font-weight: bold;
    white-space: nowrap;
    border-radius: 7px;
    padding: 0 0.6rem;
    margin-bottom: 20%;
    margin-right: 0.5rem;
    background-color: rgb(232,232,232);
    border: 1px solid rgb(232,232,232);
  }
  .active {
    background: none;
    color: rgb(88,162,232);
    border: 1px solid rgb(88,162,232);
  }
</style>