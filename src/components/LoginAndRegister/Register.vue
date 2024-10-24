<template>
  <div class="register">
    <div class="headShot" @click="openFileInput">
      <div class="headShot-img">
        <img v-if="!isImageUploaded" :src="defaultHeadShot" alt="上传照片" />
        <img v-else :src="userInfo.headShot" alt="" />
        <input type="file" ref="fileInput" @change="onFileSelected" style="display: none;" />
      </div>
    </div>

    <!-- 输入框 -->
    <input type="studentNumber" placeholder="请输入你的学号" id="studentNumber" v-model="userInfo.studentNumber" class="input-style" required>
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
    
     <!-- 返回登陆和忘记密码 -->
     <div class="Log-in-and-account-registration">
      <span @click="goToLogin">返回登陆</span>
      <span @click="goToForgotPassword" class="accountRegistration">忘记密码</span>
    </div>
    <!-- 警告信息 -->
    <div class="warning" v-if="!showWarning"></div>
    <div class="warning" v-if="showWarning">{{ warningMessage }}</div>
    <!-- 登录按钮 -->
    <button @click="handleResetPassword" class="login-button">注册账号</button>
  </div>
</template>

<script lang="ts" setup name="Register">
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'

  const defaultHeadShot = '/assets/UserAvatar/AnonymousAvatar.png'; // 默认头像路径

  const userInfo = reactive({
    studentNumber:'',
    email:'',
    userVerifyCode:'',
    headShot:'',
    password:'',
    againPassword:''
  })

  // 是否已上传图片
  const isImageUploaded = ref(false);

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

  // 处理注册账号
  const handleResetPassword = () => {
    if (userInfo.password !== userInfo.againPassword) {
      warningMessage.value = '两次密码不一致';
      showWarning.value = true;
    } else {
      // 这里可以添加注册账号的逻辑
      console.log('注册账号成功');
      showWarning.value = false;
      goToLogin(); // 注册账号成功后返回登录
    }
  }

    // 定义 emit 事件
    const emit = defineEmits(['login', 'register', 'forgotPassword']);
    
  // 返回登录
  const goToLogin = () => {
    emit('login'); // 触发 goToLogin 事件
  }

  // 忘记密码
  const goToForgotPassword = () => {
    emit('forgotPassword'); // 触发 goToRegister 事件
  }
  
  // 组件卸载时清除定时器
  onBeforeUnmount(() => {
    clearInterval(timer);
  })
  
  // 打开文件选择对话框
  const fileInput = ref<HTMLInputElement | null>(null);
  const openFileInput = () => {
    if (fileInput.value) {
      fileInput.value.click();
    }
  }

  // 处理文件选择
  const onFileSelected = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        userInfo.headShot = reader.result as string;
        isImageUploaded.value = true; // 标记为已上传图片
      };
      reader.readAsDataURL(file);
    }
  }
</script>

<style scoped>
  .register {
   text-align: center;
   height: 95%;
   width: 100%; 
  }
  button {
    height: 10%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
  }
  /* 头像 */
  .headShot{
    width: 100%;
    height: 15%;
    display: flex;
    position: relative;
    overflow: hidden; /* 确保内容不会溢出容器 */
  }
  .headShot .headShot-img {
    height: 60px;
    width: 60px;
    object-fit: cover; /* 保持图片比例并填充容器 */
    border-radius: 50%; /* 将图片裁剪成圆形 */
    border: 1px solid #000; /* 添加 1px 的边框 */
    margin: auto;
    overflow: hidden; /* 确保内容不会溢出容器 */
  }
  .headShot-img img {
    height: 100%;
    width: 100%;
  }
  
  .input-style {
    height: 10%;
    width: 70%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    margin-top: 3%;
    padding: 0 5%;
    font-size: 0.9rem;
  }
  .input-style:focus {
    outline: none; /* 去掉默认的轮廓线 */
  }
  /* 注册信息 */
  .input-userVerifyCode {
    height: 10%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    width: 70%;
    margin-top: 3%;
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