//创建路由器并进行暴露
import { createRouter,createWebHashHistory } from "vue-router"

//引入路由配置文件
import ApplicationForm from "@/components/mid/ApplicationForm.vue"
import EmployMentGuidance from "@/components/mid/EmployMentGuidance.vue"
import PersonalRecommendation from "@/components/mid/PersonalRecommendation.vue"
import IntellectualDialogue from "@/components/mid/IntellectualDialogue.vue"
import ITQuestionsAndAnswers from "@/components/mid/ITQuestionsAndAnswers.vue"
import CrossCulturalChatRoom from "@/components/mid/CrossCulturalChatRoom.vue"
import ThesisWriting from "@/components/mid/ThesisWriting.vue"
import PsychologicalCounseling from "@/components/mid/PsychologicalCounseling.vue"
import CustomizeAIWork from "@/components/mid/CustomizeAIWork.vue"

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
      path:'/personalRecommendation',
      component:PersonalRecommendation
    },
    {
      path:'/itQuestionsAndAnswers',
      component:ITQuestionsAndAnswers
    },
    {
      path:'/intellectualDialogue',
      component:IntellectualDialogue
    },
    {
      path:'/thesisWriting',
      component:ThesisWriting
    },
    {
      path:'/psychologicalCounseling',
      component:PsychologicalCounseling
    },
    {
      path:'/customizeAIWork',
      component: CustomizeAIWork
    }
  ]
})

// 暴露路由
export default router
