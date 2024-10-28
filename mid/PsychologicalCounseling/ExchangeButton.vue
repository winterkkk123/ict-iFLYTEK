<template>
  <div class="exchangeButton" @click="handleClick">
    <!-- 头像 -->
    <div class="chat-avatar">
      <div class="avatar"></div>
    </div>
    <!-- chat回答模块 -->
    <div class="chat-answer" >
      <span>{{ newAnswer }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="ExchangeButton">
  import { ref, onMounted, watch } from 'vue';

  const props = defineProps<{ answer?: string }>();
  const emit = defineEmits(['click']);

  const answer = ref(props.answer || '');
  const newAnswer = ref('点击此处查看自己情绪分布');

  const fadeInAnswer = (newAnswerText: string) => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < newAnswerText.length) {
        newAnswer.value = newAnswerText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 10); // 每 10 毫秒增加一个字符
  };

  watch(answer, (newVal) => {
    if (newVal !== '') {
      fadeInAnswer(newVal);
    } else {
      newAnswer.value = '';
    }
  });

  onMounted(() => {
    if (props.answer) {
      fadeInAnswer(props.answer);
    }
  });

  const handleClick = () => {
    emit('click', { action: 'toggleDialog' });
  };
</script>

<style scoped>
  .exchangeButton {
    width: 100%;
    height: auto;
    display: flex;
    cursor: pointer; /* 鼠标悬停时变为手掌形状 */
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
    transition: opacity 0.5s ease-in-out;
  }
  .chat-answer.loading {
    opacity: 0;
  }
  .chat-answer.loading span {
    animation: fadeIn 0.1s forwards;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>