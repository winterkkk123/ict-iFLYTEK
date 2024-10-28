<template>
  <div class="left-function">
    <div class="function1">
      <a href="#">
        <div class="content">
          <div class="logo1">
            <img src="@/assets/TeacherStudentCenter.png" alt="">
          </div>
          <div class="text1">师生中心</div>
        </div>
      </a>
    </div>
    <div class="function2">
      <a href="#">
        <div class="content">
          <div class="logo2">
            <img src="@/assets/NewSession.png" alt="">
          </div>
          <div class="text2">新建对话</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup name="LeftFunction">

</script>

<style scoped>
  .left-function{
    width: 70%;
    height: 3%;
    min-height: 32.4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .function1 {
    display: flex;
    align-items: center;
    text-align: left;
    width: 35%;
    min-width:73px;
    height: 100%;
    background-color: rgb(102,178,248);
    border-radius: 10px;
    padding: 0 10px; /* 添加内边距以防止内容溢出 */
  }
  .function2 {
    display: flex;
    align-items: center;
    text-align: right;
    width: 35%;
    min-width: 73px;
    height: 100%;
    background-color: rgb(157,208,255);
    border-radius: 10px;
    padding: 0 10px;
  }
  .function1 a,
  .function2 a {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 100%;
    height: 100%;
    color: white;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .logo1,
  .logo2 {
    width: 23%;
    height: 50%;
    aspect-ratio: 1 / 1;
  }
  .logo1 img,
  .logo2 img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
  .text1,
  .text2 {
    display: flex;
    justify-content: center; /* 水平居中 */
    width: 80%;
    height: 50%;
    font-size: 14px;
  }
</style>