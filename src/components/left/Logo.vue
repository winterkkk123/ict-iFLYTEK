<template>
  <div class="logo">
    <div class="logo-img">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="logo-text">
      <h1>杭启未来</h1>
    </div>
  </div>
</template>

<script lang="ts" setup name="Logo">

</script>

<style scoped>
  .logo {
    width: 70%;
    height: 4.5%;
    display: flex;
    align-items: center;
  }

  .logo-img {
    height: 100%;
    width: 23%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-text {
    display: flex;
    flex-grow: 1;
    flex-wrap: nowrap;
    text-align: center;
    margin-left: 10%;
  }

  .logo h1 {
    font-size: 1.7rem;
    letter-spacing: 0.1rem; 
  }
</style>