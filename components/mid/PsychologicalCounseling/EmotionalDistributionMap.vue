<template>
  <div class="emotionalDistributionMap">
    <canvas id="emotionChart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts" setup name="EmotionalDistributionMap">
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  // 定义情感数据的类型
  interface EmotionItem {
    emotion: string;
    // 其他可能的字段
  }

  // 获取数据的函数
  async function fetchEmotionData(): Promise<{ code: number; data: EmotionItem[] }> {
    try {
      const response = await fetch('http://118.178.138.32:8081/user/emotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your_token' // 如果需要授权，添加Token
        },
        body: JSON.stringify({ /* 请求体内容，如果需要的话 */ })
      });

      if (!response.ok) {
        throw new Error('网络响应不是OK');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('获取数据失败:', error);
      return { code: 500, data: [] }; // 返回一个默认值
    }
  }

  // 绘制图表的函数
  function drawChart(emotionCounts: { [key: string]: number }) {
    const labels = Object.keys(emotionCounts);
    const values = Object.values(emotionCounts);

    const ctx = document.getElementById('emotionChart') as HTMLCanvasElement;
    const chartCtx = ctx.getContext('2d');
    if (chartCtx) {
      new Chart(chartCtx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: '情绪分布',
            data: values,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: '情绪分布图'
            }
          }
        }
      });
    }
  }

  // 主函数
  async function main() {
    const data = await fetchEmotionData();
    if (data && data.code === 200) {
      const emotions = data.data.map((item: EmotionItem) => item.emotion);
      const emotionCounts: { [key: string]: number } = {};
      emotions.forEach((emotion: string) => {
        emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
      });
      drawChart(emotionCounts);
    }
  }


  onMounted(() => {
    main(); // 调用主函数
  });
</script>

<style scoped>
  .emotionalDistributionMap{
    width: 100%;
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #emotionChart {
    max-width: 100%;
    max-height: 100%;
  }
</style>