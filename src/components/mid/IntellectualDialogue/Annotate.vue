<template>
  <div class="annotate">
    <ul>
      <li><a href="#">版权信息:XXXXXXXXXXXXX</a></li>
      <span>|</span>
      <li><a href="#">用户协议</a></li>
      <span>|</span>
      <li><a href="#">内容由AI生成,仅供参考</a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Annotate">

</script>

<style scoped>
  .annotate {
    display: flex;
    justify-content: center;
    align-items:  flex-start; /* 文字靠上 */
    height: 30%; /* 确保高度占满父元素 */
  }

  .annotate ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .annotate li {
    display: flex;
    align-items: center;
    margin: 0 3px; /* 左右间距 */
  }

  .annotate span {
    margin: 0 5px; /* 左右间距 */
    color: rgb(66,70,75);
  }
  
  .annotate a {
    font-size: 0.8rem;
    color: rgb(66,70,75);
  }
</style>