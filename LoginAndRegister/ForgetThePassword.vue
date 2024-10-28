<template>
  <div class="forgetThePassword">
    <!-- 标题logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo">
      <h1>杭启未来</h1>
    </div>
    <!-- 输入框 -->
    <input type="email" placeholder="请输入你的邮箱" id="email" v-model="userInfo.email" class="input-style" required>

    <div class="input-userVerifyCode">
      <!-- 验证码输入框 -->
      <input type="userVerifyCode" placeholder="请输入验证码" id="userVerifyCode" v-model="userInfo.userVerifyCode" class="userVerifyCode" required>
      <button @click="sendVerificationCode" :disabled="countdown > 0" class="get-verify-code">
        {{ countdown > 0 ? `${countdown}秒` : '获取验证码' }}
      </button>
    </div>

    <input type="password" placeholder="请输入你的新密码" id="password" v-model="userInfo.password" class="input-style" required>
    <input type="Password" placeholder="请再次输入你的新密码" id="againPassword" v-model="userInfo.againPassword" class="input-style" required>
    
    <!-- 返回登陆和注册账号 -->
    <div class="Log-in-and-account-registration">
      <span @click="goToLogin">返回登陆</span>
      <span @click="goToRegister" class="accountRegistration">注册账号</span>
    </div>
    <!-- 警告信息 -->
    <div class="warning" v-if="!showWarning"></div>
    <div class="warning" v-if="showWarning">{{ warningMessage }}</div>
    <!-- 登录按钮 -->
    <button @click="handleResetPassword" class="login-button">修改密码</button>
  </div>
</template>

<script lang="ts" setup name="ForgetThePassword">
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
  
  const router = useRouter();

  const userInfo = reactive({
    email:'',
    userVerifyCode:'',
    password:'',
    againPassword:''
  })

  // 定义警告信息状态
  const showWarning = ref(false);
  const warningMessage = ref('');

  // 设置倒计时
  const countdown = ref(0);  
  let timer:any
   // 获取验证码
   const sendVerificationCode = () => {
    if (countdown.value === 0) {
      // 发送验证码的逻辑
      console.log('发送验证码');
      startCountdown();
    }
  }
  // 启动倒计时
  const startCountdown = () => {
    countdown.value = 60;
    timer = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  // 处理重置密码
  const handleResetPassword = () => {
    if (userInfo.password !== userInfo.againPassword) {
      warningMessage.value = '两次密码不一致';
      showWarning.value = true;
    } else {
      // 这里可以添加重置密码的逻辑
      console.log('密码重置成功');
      showWarning.value = false;
      goToLogin(); // 密码重置成功后返回登录
    }
  }

    // 定义 emit 事件
    const emit = defineEmits(['login', 'register', 'forgotPassword']);
    
  // 返回登录
  const goToLogin = () => {
    emit('login'); // 触发 goToLogin 事件
  }

  // 注册账号
  const goToRegister = () => {
    emit('register'); // 触发 goToRegister 事件
  }
  
  // 组件卸载时清除定时器
  onBeforeUnmount(() => {
    clearInterval(timer);
  })
</script>

<style scoped>
  .forgetThePassword {
    text-align: center;
    height: 90%;
    width: 100%;
    /* background-color: aqua; */
  }
  .logo {
    width: 100%;
    display: flex;
    margin-bottom: 2%;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    width: 15%;
    margin-right: 10%;
  }
  button {
    height: 11%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
  }
  .input-style {
    height: 11%;
    width: 70%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    margin-top: 5%;
    padding: 0 5%;
    font-size: 0.9rem;
  }
  .input-style:focus {
    outline: none; /* 去掉默认的轮廓线 */
  }
  /* 注册信息 */
  .input-userVerifyCode {
    height: 11%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    width: 70%;
    margin-top: 5%;
    padding: 0 5%;
    font-size: 0.9rem;
    margin-left: 10%;
    display: flex;
    align-items: center;
  }
  .userVerifyCode {
    height: 100%;
    width: 70%;
    border: 0;
  }
  .userVerifyCode:focus {
    outline: none;
  }
  .get-verify-code {
    height: 100%;
    width: 30%;
    background-color: white;
    padding-left: 3%;
    border: none;
    border-radius: 0;
    border-left: 1px solid #bfbfbf;
    cursor: pointer;
    color: #333; /* 设置文字颜色 */
  }
  /* 警告信息 */
  .warning {
    width: 80%;
    height: 5%;
    color: red;
    text-align: left;
    font-size: 0.75rem;
    padding-left: 1%;
    margin-top: 1%;
    margin-left: 10%;
  }
  /* 返回登录和注册账号 */
  .Log-in-and-account-registration {
    width: 80%;
    margin-top: 3%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Log-in-and-account-registration span {
    /* flex: 1; */
    margin: 0 2%;
    text-align: center;
    cursor: pointer;
    font-size: 0.75rem;
  }
  /* 登录按钮 */
  .login-button {
    width: 80%;
    margin-top: 0.5%;
    font-size: 21px;
    /* font-weight: bold; */
    background-color: rgb(102,178,248);
    color: white;
    border: none;
    /* 鼠标悬停样式 */
    cursor: pointer;  
  }
  /* 鼠标悬停 */
  .login-button:hover {
    background-color: #007bff;
  }
</style>