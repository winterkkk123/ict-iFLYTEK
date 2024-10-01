<template>
  <div class="user">
    <!-- 头像 -->
    <div class="user-avatar">
      <div class="profile-photo"></div>
    </div>
    <!-- 用户提问板块 -->
    <div class="user-response">
      用户提问板块
      {{ question }}
    </div>
  </div>
</template>

<script lang="ts" setup name="User">
  import { ref } from 'vue';
  // import { defineProps } from 'vue';

  const props = defineProps<{ question?: string }>();
  const question = ref(props.question || '');
</script>

<style scoped>
  .user {
    width: 100%;
    height:auto;
    display: flex;
  }
  .user-avatar {
    width: 80px;
    height: 100%;
  }
  .profile-photo {
    width: 75%;
    aspect-ratio: 1 / 1;
    background-image: url("@/assets/ProfilePhoto.jpg"); /* 替换为你的图片路径 */
    background-size: cover; /* 使图片覆盖整个元素 */
    background-position: center; /* 图片居中显示 */
    border-radius: 50%; /* 将 div 转换为圆形 */
    /* margin: 5%; */
    /* margin-left: 10%; */
  }
  .user-response {
    width: 92%;
    height: 100%;
    min-height: 50px;
    font-size: 1.5rem;
    line-height: 2;
    margin-top: 0.5%;
    padding: 0 2%;
    background-color: white;
    border-radius: 7px;
  }
</style>