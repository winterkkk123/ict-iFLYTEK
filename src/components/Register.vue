<template>
  <div class="register">
    <div class="register-content">
      <!-- 标题logo -->
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
        <h1>杭启未来</h1>
      </div>
      <!-- 输入框 -->
      <input type="email" placeholder="请输入你的邮箱" id="email" v-model="userInfo.email" class="input" required>
      <input type="text" placeholder="请输入你的学号" id="studentNumber" v-model="userInfo.studentNumber" class="input" required>
      <input type="password" placeholder="请输入你的密码" id="password" v-model="userInfo.password" class="input" required>
      <!-- 忘记密码和注册账号 -->
      <div class="Forgot-password-and-account-registration">
        <span @click="forgotPassword">忘记密码</span>
        <span @click="accountRegistration" class="accountRegistration">注册账号</span>
      </div>
      <!-- 用户协议 -->
      <div class="user-agreement">
        <label class="checkbox-label">
          <input type="checkbox" id="agreementCheckbox" checked>
          我已阅读并同意
          <a href="#" class="agreement-link">用户协议</a>、
          <a href="#" class="agreement-link">隐私政策</a>
        </label>
      </div>
      <!-- 登录按钮 -->
      <button @click="handleLogin">登 录</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="Register">
  import { reactive } from 'vue';

  const userInfo = reactive({
    email:'',
    studentNumber:'',
    password:''
  })  
  
  // 定义 emit 事件
  const emit = defineEmits(['login']);
  
  // 登录按钮点击事件
  const handleLogin = () => {
    // 触发登录事件
    console.log('登录按钮被点击');
    emit('login'); // 发出 login 事件
  }
  
  // 注册账号按钮点击事件
  const accountRegistration = () => {
    console.log('注册账号按钮被点击');
  }
  // 忘记密码按钮点击事件
  const forgotPassword = () => {
    console.log('忘记密码按钮被点击');
  }

</script>

<style scoped>
  .register {
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
  .register-content {
    text-align: center;
    width: 100%;
    height: 80%;
    /* background-color: #007bff; */
  }
  
  .logo {
    width: 100%;
    display: flex;
    margin-bottom: 3%;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    width: 15%;
    margin-right: 10%;
  }
  
  input,
  button {
    height: 12%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
  }
  
  .input {
    width: 70%;
    margin-top: 5%;
    padding: 0 5%;
    font-size: 0.9rem;
  }
  
  .Forgot-password-and-account-registration {
    width: 80%;
    margin-top: 3%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Forgot-password-and-account-registration span {
    /* flex: 1; */
    margin: 0 2%;
    text-align: center;
    cursor: pointer;
    font-size: 0.75rem;
  }
  /* .Forgot-password-and-account-registration .accountRegistration {
    color: rgb(102,178,248);
  } */

  .user-agreement {
    width: 80%;
    margin-top: 7%;
    margin-left: 10%;
    display: flex;
    font-size: 0.9rem;
    justify-content: center;
    align-items: center;
  }
  .checkbox-label {
    display: flex;
    align-items: center;
  }
  .checkbox-label input {
    margin-right: 5px;
  }
  .agreement-link {
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    width: 80%;
    margin-top: 3%;
    font-size: 21px;
    /* font-weight: bold; */
    background-color: rgb(102,178,248);
    color: white;
    border: none;
    /* 鼠标悬停样式 */
    cursor: pointer;  
  }
  /* 鼠标悬停 */
  button:hover {
    background-color: #007bff;
  }
</style>