<template>
   <div :class="{'background-blur': isRegisterVisible}" class="background">
    <Left :userMessage="nowUserMessage" class="left-component"/>
    <Mid :userMessage="nowUserMessage" class="mid-component"/>
    <Right class="right-component"/>
  </div>
  <!-- 注册登录组件 -->
  <LoginAndRegister v-if="isRegisterVisible" @login="handleLogin" @userData="handleUserData" class="register-component"/>
</template>

<script lang="ts" setup name="App">
  import Left from './components/Left.vue'
  import Right from './components/Right.vue'
  import Mid from './components/Mid.vue'
  import LoginAndRegister from './components/LoginAndRegister.vue'
  import { reactive, ref } from 'vue'

  const nowUserMessage = reactive({
    username:'',
    headshot:'/assets/UserAvatar/AnonymousAvatar.png',
    email:'xxx@qq.com',
    studentNumber:''
  })

  const isRegisterVisible = ref(true)

  const hideRegister = () => {
    isRegisterVisible.value = false
  }

  const handleLogin = () => {
    hideRegister();
  };

  const handleUserData = (userData: { username: string, headshot: string, studentNum: string, email: string }) => {
    nowUserMessage.studentNumber = userData.studentNum;
    nowUserMessage.email = userData.email;
    nowUserMessage.headshot = userData.headshot;
    nowUserMessage.username = userData.username;
  }
</script>

<style scoped>
  .background {
    display: flex;
    width: 100vw;
    height: 100vh;
    min-height: 720px;
    min-width: 1280px;
    background-color: rgb(217,234,252);
    justify-content: space-between;
    align-items: flex-start;
  }
  
  /* 模糊背景 */
  .background-blur {
    filter: blur(10px);
    pointer-events: none;
  }
  
  .left-component {
    position: relative;
    left: 0;
    top: 0;
  }
  .right-component {
    position: relative;
    right: 0;
    top: 0;
  }

  /* 确保 Register 组件总是在最顶层 */
  .register-component {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; /* 设置较高的 z-index 值 */
  }
</style>