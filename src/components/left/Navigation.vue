<template>
  <div class="navigation">
    <ul>
      <!-- at-persent 已选中 -->
      <!-- un-persent 未选中 -->
      <li>
        <!-- <RouterLink to="/intellectualDialogue" class="routerlink" active-class="at-present"> -->
        <RouterLink to="/" class="routerlink" active-class="at-present">
          <img src="@/assets/IntellectualDialogue.png" alt="">
          智能对话
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/enrollmentAndWelcome" class="routerlink" active-class="at-present">
          <img src="@/assets/EnrollmentAndWelcome.png" alt="">
          招生迎新
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/iTQuestionsAndAnswers" class="routerlink" active-class="at-present">
          <img src="@/assets/ITQuestionAndAnswers.png" alt="">
          IT问答
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/employMentGuidance" class="routerlink" active-class="at-present">
          <img src="@/assets/EmployMentGuidance.png" alt="">
          就业指导
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/applicationForm" class="routerlink" active-class="at-present">
          <img src="@/assets/ApplicationForm.png" alt="">
          志愿填报
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Navigation">
  import { RouterLink } from 'vue-router';
</script>

<style scoped>
  .navigation {
    width: 70%;
    max-height: 70%;
  }
  ul {
    width: 100%;
  }
  li {
    width: 100%;
    aspect-ratio: 33 / 8;
    margin: 2% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  li img {
    margin-left: 5%;
    margin-right: 5%;
    width: 12%;
    height: 50%;
    aspect-ratio: 1 / 1;
  }
  .at-present {
    background-color: rgb(217,236,255);
    border-radius: 10px;
  }
  .routerlink {
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 16px;
    margin-left: 2%;
    /* color: #bfbfbf; */
    color: rgb(44,44,44);
    display: flex;
    justify-content: left;
    align-items: center;
  }
</style>