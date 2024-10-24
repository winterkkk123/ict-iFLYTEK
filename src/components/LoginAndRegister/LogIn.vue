<template>
  <div class="register-content">
    <!-- 标题logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo">
      <h1>杭启未来</h1>
    </div>
    <!-- 输入框 -->
    <input type="email" placeholder="请输入你的邮箱" id="email" v-model="userInfo.email" class="input" required>
    <input type="text" placeholder="请输入你的学号" id="studentNumber" v-model="userInfo.studentNum" class="input" required>
    <input type="password" placeholder="请输入你的密码" id="password" v-model="userInfo.password" class="input" required>
    <!-- 忘记密码和注册账号 -->
    <div class="Forgot-password-and-account-registration">
      <span @click="forgotPassword">忘记密码</span>
      <span @click="accountRegistration" class="accountRegistration">注册账号</span>
    </div>
    <!-- 警告信息 -->
    <div class="warning" v-if="!showWarning"></div>
    <div class="warning" v-if="showWarning">{{ warningMessage }}</div>
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
</template>

<script lang="ts" setup name="Login">
  import { ref, reactive } from 'vue';
  import { watch } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const userInfo = reactive({
    headShot:'',
    email:'',
    studentNum:'',
    password:''
  })  

  // const userMessage = reactive({
  //   user1: {
  //     email: '13867767793@163.com',
  //     studentNumber: '22081024',
  //     password: 'heartlesscloud'
  //   },
  //   user2: {
  //     email: '541149882@qq.com',
  //     studentNumber: '22030211',
  //     password: '20040831'
  //   }
  // })
  
  const userMessage = reactive([]);

  // 设置默认提示信息
  const emailPlaceholder = ref('请输入你的邮箱');
  const studentNumberPlaceholder = ref('请输入你的学号');
  const passwordPlaceholder = ref('请输入你的密码');

  // 监听输入框的变化
  watch(() => userInfo.email, (newEmail) => {
    if (newEmail !== '') {
      emailPlaceholder.value = '';
    } else {
      emailPlaceholder.value = '请输入你的邮箱';
    }
  });

  watch(() => userInfo.studentNum, (newStudentNumber) => {
    if (newStudentNumber !== '') {
      studentNumberPlaceholder.value = '';
    } else {
      studentNumberPlaceholder.value = '请输入你的学号';
    }
  });

  watch(() => userInfo.password, (newPassword) => {
    if (newPassword !== '') {
      passwordPlaceholder.value = '';
    } else {
      passwordPlaceholder.value = '请输入你的密码';
    }
  });

  // 定义警告信息状态
  const showWarning = ref(false);
  const warningMessage = ref('');

  // 定义 emit 事件
  const emit = defineEmits(['login', 'register', 'forgotPassword']);

  // 登录按钮点击事件
  const handleLogin = async () => {
    const requestData = {
      email: userInfo.email,
      studentNum: userInfo.studentNum,
      password: userInfo.password
    };

    try {
      const response = await axios.post('http://118.178.138.32:8081/user/login/by/password', requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(requestData);
      console.log(response.data);

      // 检查 response.data.code 和 response.data.message
      if (response.data && response.data.code === 200) {
        const { token } = response.data.data;
        localStorage.setItem('token', token); // 存储 token
        showWarning.value = false;
        warningMessage.value = '';

        // 触发 login 事件并传递登录成功的相关信息
        emit('login', { success: true, message: '登录成功', token: token });

        console.log('登录成功', response.data);
      } else {
        showWarning.value = true;
        warningMessage.value = response.data.message || '登录失败，服务器返回数据格式不正确。';
        console.error('服务器返回数据格式不正确', response.data);
      }
    } catch (error) {
      showWarning.value = true;
      warningMessage.value = '登录失败，请检查您的凭据。';
      console.error('请求失败', error);
    }
  };

  // 注册账号按钮点击事件
  const accountRegistration = () => {
    emit('register');
    // console.log('注册账号按钮被点击');
  }
  // 忘记密码按钮点击事件
  const forgotPassword = () => {
    emit('forgotPassword');
    // console.log('忘记密码按钮被点击');
  }
</script>

<style scoped>
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
    margin-top: 3%;
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