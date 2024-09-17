<template>
  <div class="mid-title">
    <h1 ref="titleRef">
      <span v-for="(char, index) in currentText" :key="index" :class="{ 'typing': true, 'blue': char === 'A' || char === 'I' || char === '应' || char === '用', 'cursor': char === '_' }" @animationend="handleAnimationEnd($event, index)" :style="{ '--char-index': index }">
        {{ char }}
      </span>
    </h1>
  </div>
</template>

<script lang="ts" setup name="MidTitle">
  import { onMounted, onUnmounted, ref } from 'vue';

  const titleRef = ref<HTMLHeadingElement | null>(null);
  const originalText = '为师生提供具体解决问题的AI应用_';
  const currentText = ref('');
  let typingDone = false;
  let animationCount = 0;
  let intervalId: ReturnType<typeof setInterval> | null = null;

  function handleAnimationEnd(event: AnimationEvent, index: number) {
    if (event.animationName === 'typing') {
      animationCount++;
      if (animationCount === currentText.value.length) {
        updateCurrentText();
      }
    }
  }

  function updateCurrentText() {
    if (currentText.value.length < originalText.length) {
      currentText.value += originalText[currentText.value.length];
      animationCount = 0; // 重置计数器
    }
  }

  onMounted(() => {
    intervalId = setInterval(() => {
      updateCurrentText();
    }, 300);

    // 清理定时器
    onUnmounted(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    });
  });

  // 添加一个方法来处理闪烁动画的开始
  function startCursorBlink() {
    const spans = titleRef.value?.querySelectorAll('span');
    if (spans) {
      spans.forEach(span => {
        if (span.classList.contains('cursor')) {
          span.classList.add('cursor-blink');
        }
      });
    }
  }

  onMounted(() => {
    setTimeout(startCursorBlink, 300); // 延迟启动闪烁动画
  });
</script>

<style scoped>
  .mid-title {
    width: 100%;
    height: 18.75%;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 左对齐 */
  }
  span.typing {
    opacity: 0;
    white-space: nowrap; /* 确保文本不换行 */
    animation: typingEffect 0.3s steps(1, end) forwards;
    animation-delay: calc(0.05s * var(--char-index));  /* 改动出现的速度 */
  }

  span.blue {
    color: rgb(64, 149, 229);
  }

  span.cursor {
    animation: cursorBlink 1s infinite;
  }

  span.cursor-blink {
    animation: cursorBlink 1s infinite;
  }

  @keyframes typingEffect {
    to {
      opacity: 1;
    }
  }

  @keyframes cursorBlink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>