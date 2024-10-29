<template>
  <div class="customizeAIWork">
    <div class="after-question">
      <div class="after-question-top"></div>
      <!-- 定义工作流 -->
      <h2>自定义智能AI</h2>
      <div id="agents">
        <div class="agent" v-for="(agent, index) in agents" :key="index">
          <input type="text" placeholder="Agent Name" class="agentName" v-model="agent.agentName" required>
          <input type="text" placeholder="Prompts" class="agentPrompts" v-model="agent.agentPrompts" required>
          <input type="text" placeholder="Task" class="agentTask" v-model="agent.agentTask" required>
        </div>
        <button class="add-button" @click="addAgent">添加智能AI</button>
      </div>

      <div class="main">
        <h2>结果</h2>
        <div id="results" class="results">
          <p v-for="(result, key) in results" :key="key">{{ key }}: {{ result }}</p>
        </div>
      </div>  
    </div>
    
    <!-- 底部提问模块,一直存在 -->
    <div class="perpetual">
      <div>
        <h2>内容</h2>
        <textarea class="content-textarea" id="content" rows="4" v-model="content" placeholder="在此输入内容..." required></textarea>
      </div>
      <button class="start-button" @click="startWorkflow">开始工作流</button>
      <Annotate class="annotate"/>
    </div>
  </div>
</template>

<script lang="ts" setup name="CustomizeAIWork">
  import { ref, onMounted } from 'vue';
  import Question from './CustomizeAIWork/Question.vue';
  import Annotate from './CustomizeAIWork/Annotate.vue';

  import { inject } from 'vue';

  // 使用 inject 获取 userMessage 数据
  const userMessage = inject<{ headshot: string; email: string; studentNumber: string }>('userMessage');

  if (!userMessage) {
    throw new Error('userMessage is not provided');
  }

  interface Agent {
    agentName: string;
    agentPrompts: string;
    agentTask: string;
  }

  interface Results {
    [key: string]: string;
  }

  const agents = ref<Agent[]>([{ agentName: '', agentPrompts: '', agentTask: '' }]);
  const content = ref('');
  const results = ref<Results>({});

  const addAgent = () => {
    agents.value.push({ agentName: '', agentPrompts: '', agentTask: '' });
  };

  const startWorkflow = async () => {
    const requestData = {
      content: content.value,
      singleAgentList: agents.value.map(agent => ({
        agentName: agent.agentName,
        agentPrompts: agent.agentPrompts,
        agentTask: agent.agentTask
      }))
    };

    try {
      const response = await fetch('http://118.178.138.32:8081/agent/question/workflow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is empty or not readable');
      }
      
      const decoder = new TextDecoder("utf-8");
      const agentData: { [key: string]: string } = {};
      let currentAgent: string | null = null;

      const read = async () => {
        const { done, value } = await reader.read();

        if (done) {
          console.log("Stream finished.");
          return;
        }

        const text = decoder.decode(value);
        const lines = text.split('\n');

        lines.forEach(line => {
          const eventMatch = line.match(/^event:\s*(\S+)/);
          const dataMatch = line.match(/^data:\s*(.*)/);

          if (eventMatch) {
            currentAgent = eventMatch[1];

            if (currentAgent === 'end') {
              console.log("End event received, closing connection.");
              reader.cancel();
              return;
            }

            if (!agentData[currentAgent]) {
              agentData[currentAgent] = '';
              results.value[currentAgent] = '';
            }
          } else if (dataMatch && currentAgent) {
            const data = dataMatch[1];
            if (data) {
              agentData[currentAgent] += data;
              results.value[currentAgent] = agentData[currentAgent];
            }
          }
        });

        if (currentAgent !== 'end') {
          read();
        }
      };

      read();
    } catch (error) {
      console.error('Error:', error);
    }
  };
</script>

<style scoped>
  .customizeAIWork {
    width: 100%;
    height: 100%;
    max-height: 100%;
    position: relative;
    overflow: auto;
  }

  .after-question {
    width: 100%;
    height: 73%;
    flex-grow: 1;
    overflow: auto;
  }

  .user,
  .chat {
    width: 100%;
    margin-bottom: 3%;
  }

  .mid-title {
    width: 100%;
  }

  .after-question-top {
    width: 100%;
    height: 8vh;
  }

  .perpetual {
    width: 100%;
    min-height: 17%;
    max-height: 27%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .question {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .annotate {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .after-question::-webkit-scrollbar {
    width: 0px;
  }

  .after-question-top {
    width: 100%;
    height: 5vh;
  }

  h2 {
    color: #007bff;
    margin-bottom: 10px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
  }

  #agents {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .agent {
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
  }

  .agent input,
  .agent input:focus {
    flex: 1;
    padding: 10px;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: border-color 0.3s;
  }

  .agent input:focus {
    border-color: #0056b3;
    outline: none;
  }

  .add-button,
  .start-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding-top: 1%;
    padding-bottom: 1%;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    font-weight: bold;
    margin-top: auto;
  }

  .start-button {
    margin-top: 1%;
  }

  .add-button:hover,
  .start-button:hover {
    background-color: #0056b3;
  }

  .content-textarea {
    width: 99%;
    border: 2px solid #007bff;
    border-radius: 5px;
    resize: vertical;
    height: 40%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    margin-top: 1%;
  }

  .perpetual > div {
    flex: 1;
  }

  .start-button {
    margin-bottom: 10px;
  }

  .annotate {
    position: static;
    margin-top: auto;
  }

  .main {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 1%;
  }

  .results {
    margin-top: 10px;
    height: auto;
    min-height: 80%;
    border: 2px solid #007bff;
    border-radius: 5px;
    padding: 10px;
    background: #f0f8ff;
    overflow-y: auto;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .results::-webkit-scrollbar {
    width: 0px;
  }

  .results p {
    margin: 5px 0;
    color: #333;
  }
</style>