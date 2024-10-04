<template>
  <div class="chat">
    <!-- 头像 -->
    <div class="chat-avatar">
      <div class="avatar"></div>
    </div>
    <!-- chat回答模块 -->
    <div class="chat-answer">
      {{answer}}
    </div>
  </div>
</template>

<script lang="ts" setup name="Chat">
  import { ref, defineProps } from 'vue';

  const props = defineProps<{ answer?: string }>();
  const answer = ref(props.answer || '');

</script>

<style scoped>
  .chat {
    width: 100%;
    height: auto;
    display: flex;
  }
  .chat-avatar {
    width: 80px;
    height: 100%;
  }
  .avatar {
    width: 75%;
    aspect-ratio: 1 / 1;
    background-image: url("@/assets/logo.png"); /* 替换为你的图片路径 */
    background-size: cover; /* 使图片覆盖整个元素 */
    background-position: center; /* 图片居中显示 */
    border-radius: 50%; /* 将 div 转换为圆形 */
  }
  .chat-answer {
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
