//创建路由器并进行暴露
import { createRouter,createWebHashHistory } from "vue-router"

//引入路由配置文件
import ApplicationForm from "@/components/mid/ApplicationForm.vue"
import EmployMentGuidance from "@/components/mid/EmployMentGuidance.vue"
import EnrollmentAndWelcome from "@/components/mid/EnrollmentAndWelcome.vue"
import IntellectualDialogue from "@/components/mid/IntellectualDialogue.vue"
import ITQuestionsAndAnswers from "@/components/mid/ITQuestionsAndAnswers.vue"
import CrossCulturalChatRoom from "@/components/mid/CrossCulturalChatRoom.vue"

// 创建路由实例
const router = createRouter({
  history:createWebHashHistory(),   //路由模式
  
  routes:[
    //默认路由
    {
      path:'/',
      component:IntellectualDialogue
    },
    //其他路由
    {
      path:'/applicationForm',
      component:ApplicationForm
    },
    {
      path:'/crossCulturalChatRoom',
      component:CrossCulturalChatRoom
    }
    ,
    {
      path:'/employMentGuidance',
      component:EmployMentGuidance
    },
    {
      path:'/enrollmentAndWelcome',
      component:EnrollmentAndWelcome
    },
    {
      path:'/itQuestionsAndAnswers',
      component:ITQuestionsAndAnswers
    },
    {
      path:'/intellectualDialogue',
      component:IntellectualDialogue
    }
  ]
})

// 暴露路由
export default router