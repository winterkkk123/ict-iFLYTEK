<template>
  <div class="question">
    <input type="text" :value="inputValue" @input="updateInput" @keydown.enter="emitSearchClick" placeholder="在此输入您想了解的内容,Shift+Enter换行" class="input">
    <button @click="emitSearchClick">发送</button>
  </div>
</template>

<script lang="ts" setup name="Question">
  import { ref } from 'vue';
  import { watchEffect } from 'vue';
  // import { defineEmits } from 'vue';
  // 定义事件
  const emit = defineEmits(['search-click']);
  const inputValue = ref('');
  // 监听输入框的变化
  const updateInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
  };

  // 检测点击发送按钮 或按下 Enter 键
  const emitSearchClick = async () => {
    if (!inputValue.value) return; // 如果输入为空则不发送
    
    emit('search-click', { question: inputValue.value,  answer: ''}); // 发送问题，答案空值
    let inputVal = inputValue.value;  // 保存到inputVal中
    inputValue.value = ''; // 清空输入框

    try {
      // 发送请求到服务器
      const response = await fetch('http://118.178.138.32:8081/agent/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: inputVal}),
      });

      if (!response.ok) {
        throw new Error('网络响应不正常');
      }

      const rawAnswer = await response.text(); // 获取返回的字符串
      console.log("答案:", rawAnswer);

      let answer = '';
      // 使用正则表达式提取 data 后的内容
      const matches = rawAnswer.match(/data:\s*([\s\S]*?)(?=\n\s*data:|\n\s*event:reply|$)/g);

      // 拼接提取的内容
      if (matches) {
        answer = matches.map(match => match.replace(/data:\s*/, '').trim()).join('');
        answer = matches.map(match => {
          // 去除 data: 和 data:1 到 data:9
          const cleanedMatch = match.replace(/data:\s*(\d)|data:\s*/g, '').trim();
          // 去除 event:reply
          const withoutEvent = cleanedMatch.replace(/event:reply/g, '');
          // 去除 **数据**
          const withoutData = withoutEvent.replace(/\*\*数据\*\*/g, '');
          // 去除 ###
          const finalAnswer = withoutData.replace(/### /g, '');
          // 处理 **{...} 并进行换行
          const formattedAnswer = finalAnswer.replace(/\*\*{([^}]*)}\*\*/g, (match, p1) => {
            return `\n\n${p1}\n\n`;
          });
          // 去除 ** 并进行换行
          const formattedContent = formattedAnswer.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
            return `\n\n${p1}\n\n`;
          });

          return formattedContent;
        }).join('');
        console.log(answer); // 输出结果
      } else {
        console.log('没有找到匹配项');
      }
      answer = answer.slice(0, -12);

      answer = answer.replace(/data:/, '');

      emit('search-click', { question: '',  answer}); // 问题空值
    } catch (error) {
      console.error('发送问题时出错:', error);
    }
  };
</script>

<style scoped>
  .question {
    width: 100%;
    height: 60%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    background-color: white;
    display: flex;
    align-items: center;
  }
  .question .input {
    font-size: 1rem;
    width: 85%;
    height: 100%;
    margin: 0 2.5%;
    border: none;
    outline: none;
    resize: vertical; /* 只能垂直调整大小 */
    overflow-y: auto;
  }
  .question button {
    width: 7%;
    height: 50%;
    border: none;
    background-color: rgb(232,232,232);
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
  }
</style>
