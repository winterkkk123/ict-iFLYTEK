<template>
  <div class="loginAndRegister">
    <ForgetThePassword v-if="isForgetThePassword" @login="handleLogin" @register="handleRegister" @forgotPassword="handleForgotPassword" class="forgetThePassword"/>
    <Register v-if="isRegister" @login="handleLogin" @register="handleRegister" @forgotPassword="handleForgotPassword" class="register"/>
    <LogIn v-if="isLogin" @login="gotoLogin" @register="handleRegister" @forgotPassword="handleForgotPassword" class="login"/>
  </div>
</template>

<script lang="ts" setup name="LoginAndRegister">
  import LogIn from './LoginAndRegister/LogIn.vue'
  import ForgetThePassword from './LoginAndRegister/ForgetThePassword.vue';
  import Register from './LoginAndRegister/Register.vue';
  // import { defineEmits } from 'vue'
  import { ref } from 'vue'

  // 定义点击事件
  const emit = defineEmits(['login'])
  
  // 定义组件是否显示
  const isLogin = ref(true);
  const isRegister = ref(false);
  const isForgetThePassword = ref(false);

  // 点击登录
  const gotoLogin = () => {
    emit('login')
  }
  // 去登录
  const handleLogin = () => {
    isLogin.value = true;
    isRegister.value = false;
    isForgetThePassword.value = false;
  }
  // 去注册
  const handleRegister = () => {
    isLogin.value = false;
    isRegister.value = true;
    isForgetThePassword.value = false;
  }
  // 去忘记密码
  const handleForgotPassword = () => {
    isLogin.value = false;
    isRegister.value = false;
    isForgetThePassword.value = true;
  }
</script>

<style scoped>
  .loginAndRegister {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18%;
    min-width: 380px;
    /* height: 45%; */
    /* min-width: 350px;
    min-height: 450px; */
    aspect-ratio: 7/9;
    background-color: white;
    padding: 20px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    border-radius: 50px;
    border: 0.5px solid #bfbfbf;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>