<template>
  <div class="personal-center">
    <div class="top">
      <!-- 头像 -->
      <div class="profile-photo">
        <img :src="userMessage.headshot" alt="">
      </div>
      
      <div class="student-number">{{ userMessage.email }}</div>
      <div class="concealLeft"><img src="@/assets/concealLeft.png" alt=""></div>
    </div>
    <div class="bottom">
      <div class="bottom-left">学生中心</div>
      <div class="bottom-mid">使用指南</div>
      <div class="bottom-right">用户设置</div>
    </div>
  </div>
</template>

<script lang="ts" setup name="PersonalCenter">
  import { ref, onMounted } from 'vue';

  const photo_url = ref('/assets/UserAvatar/ProfilePhoto.jpg');

  const props = defineProps<{
    userMessage: {
      headshot: string,
      email: string,
      studentNumber: string
    }
  }>()
  
  // const photo_url = ref<string>('');
  // onMounted(() => {
  //   if (props.userInfo.headShot) {
  //     try {
  //       // 使用 new URL 构造函数生成图片的 URL
  //       photo_url.value = new URL(`@/${props.userInfo.headShot}`, import.meta.url).href;
  //     } catch (error) {
  //       console.error('Failed to load image:', error);
  //       photo_url.value = new URL('@/assets/default-avatar.png', import.meta.url).href; // 设置默认头像
  //     }
  //   }
  // });
</script>

<style scoped>
  .personal-center {
    width: 100%;
    height: 8%;
  }
  .top,
  .bottom {
    display: flex;
    height: 50%;
    width: 100%;
  }
  .top {
    align-items: center;
  }
  .profile-photo {
    height: 70%;
    aspect-ratio: 1 / 1;
    /* background-image: url("@/assets/UserAvatar/ProfilePhoto.jpg"); 替换为你的图片路径 */
    /* background-size: cover; /* 使图片覆盖整个元素 */
    /* background-position: center; 图片居中显示 */
    border-radius: 50%; /* 将 div 转换为圆形 */
    margin: 5%;
    margin-left: 10%;
    overflow: hidden; /* 确保图片不会溢出 */
  }
  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 使图片覆盖整个元素 */
  }
  .student-number {
    max-width: 55%;
    color: #bfbfbf;
    overflow: hidden;  /* 隐藏超出的内容 */
    text-overflow: ellipsis;  /* 使用省略号表示溢出 */
    white-space: nowrap;  /* 不换行 */
  }
  .concealLeft {
    height: 20%;
    aspect-ratio: 1 / 1;
    position: absolute;
    right: 10%;
  }
  .concealLeft img {
    height: 100%;
    width: 100%;
  }
  .bottom {
    text-align: center;
    font-size: 13px;
  }
  .bottom div {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 20%;
    height: 60%;
    margin-left: 10%;
    border-radius: 10px;
    background-color: rgb(217,234,252);
    font-weight: bold;
    margin-top: 1%;
  }
</style>