<template>
  <div class="left">
    <div class="logo-top"></div>
    <Logo class="logo"/>
    <div class="logo-bottom"></div>
    <LeftFunction class="left-function"/>
    <Navigation/>
    <History/>
    <PersonalCenter :userMessage="userMessage" class="personal-center"/>
  </div>
</template>

<script lang="ts" setup name="Left">
  import Logo from './left/Logo.vue'
  import History from './left/History.vue';
  import Navigation from './left/Navigation.vue';
  import LeftFunction from './left/LeftFunction.vue';
  import PersonalCenter from './left/PersonalCenter.vue';

  const props = defineProps<{
    userMessage: {
      headshot: string,
      email: string,
      studentNumber: string
    }
  }>()

</script>

<style scoped>
  .left {
    width: 14%;
    min-width: 270px;
    /* width: 360px; */
    height: 100vh;
    min-height: 800px;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
  .logo {
    margin-top: 7%;
    margin-bottom: 5%;
  }
  /* .logo-top {
    width:100%;
    height: 3%;
    min-height: 5px;
  }
  .logo-bottom {
    width:100%;
    height: 1%;
    min-height: 5px;
  } */
  .left-function {
    padding-bottom: 5%;
  }
  .personal-center {
    width: 100%;
    min-height: 100px;;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
</style>