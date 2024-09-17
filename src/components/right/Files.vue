<template>
  <div class="files">
    <ul>
      <li v-for="(file, fileIndex) in files" :key="fileIndex">
        <button class="button" @mouseenter="onMouseEnter(fileIndex)" @mouseleave="onMouseLeave(fileIndex)">
          <!-- 写入一个判断不同logo -->
          <div class="logo">
            <img v-if="file.format === 'word'&& !file.hover" src="@/assets/word.png" alt=""/>
            <img v-else-if="file.format === 'word' && file.hover" src="@/assets/word-red.png" alt=""/>
            <img v-else-if="file.format === 'pdf' && !file.hover" src="@/assets/pdf.png" alt="" class="icon" />
            <img v-else-if="file.format === 'pdf' && file.hover" src="@/assets/pdf-red.png" alt="" class="icon" />
            <img v-else-if="file.format === 'excel' && !file.hover" src="@/assets/excel.png" alt="" class="icon" />
            <img v-else-if="file.format === 'excel' && file.hover" src="@/assets/excel-red.png" alt="" class="icon" />
            <img v-else-if="file.format === 'ppt' && !file.hover" src="@/assets/ppt.png" alt="" class="icon" />
            <img v-else-if="file.format === 'ppt' && file.hover" src="@/assets/ppt-red.png" alt="" class="icon" />
          </div>
          <!-- 显示文件信息 -->
          <div class="details">
            <!-- 上边文件名 -->
            <div class="name">{{ file.name }}</div>
            <!-- 下边文件时间、大小 -->
            <div class="time-and-size">
              <div class="time">{{ file.time }}</div>
              <div class="size">{{ file.size }}</div>
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Files">
  import { ref } from 'vue'
  
  const files = ref([
    {
      format:'word',
      name:'文件1.doc',
      time:'2023.7.24',
      size:'122KB',
      hover:false
    },
    {
      format:'pdf',
      name:'文件2.pdf',
      time:'2024.08.11',
      size:'1.2MB',
      hover:false
    },
    {
      format:'excel',
      name:'文件3.xls',
      time:'2024.09.01',
      size:'5.8MB',
      hover:false
    },
    {
      format:'ppt',
      name:'文件4.ppt',
      time:'2024.09.22',
      size:'12.2MB',
      hover:false
    }
  ])
  // 鼠标移入移出
  const onMouseEnter = (index: number) => {
    files.value[index].hover = true
  }

  const onMouseLeave = (index: number) => {
    files.value[index].hover = false
  }
</script>

<style scoped>
  .files {
    width: 100%;
    height:auto;
    max-height: 80%;
  }
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;/* 允许换行 */
    margin-top: 5%;
  }
  li {
    display: flex;
    width: 100%;
    min-height: 68px;
    margin-bottom: 5%;
    border-radius: 10px;
    align-items: center;
    color:black;
    font-size: 1rem;
    /* font-weight: bold; */
  }
  .button {
    display: flex;
    width: 100%;
    height: 100%;
    border: none;  /* 移除边框 */
    background: none;  /* 移除背景 */
    padding: 0;  /* 移除内边距 */
    margin: 0;  /* 移除外边距 */
    cursor: pointer;  /* 保留指针效果 */
    color: inherit;  /* 继承父元素的颜色 */
    font: inherit;  /* 继承父元素的字体 */
  }
  .button:hover {
    color: red;  /* 鼠标悬停时字体颜色变为红色 */
  }
  li .logo{
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 85%;
    padding-left:10px;
  }
  .name {
    /* flex1平分高度 */
    flex: 1;  
    display: flex;
    justify-content: flex-start; /* 水平靠左 */
    align-items: flex-end;       /* 垂直靠下 */
  }
  .time-and-size {
    display: flex;
    justify-content: flex-start; /* 水平靠左 */
    align-items: flex-start;     /* 垂直靠上 */
    height: 50%;
    flex:1;
  }
  .time-and-size .time,
  .time-and-size .size {
    display: flex;
    justify-content: flex-start; /* 水平靠左 */
    width: 50%;
  }
  .time-and-size .time {
    /* 防止太小与大小重合 */
    min-width: 90px; 
  }
</style>