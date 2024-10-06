# ict-iFLYTEK

## 项目介绍

本项目基于 Vue3 技术的前端项目架构，旨在构建一个高效、可维护的高校智能体助手系统。

## 安装依赖

npm install

## 启动项目

npm run dev

## 项目结构

index.html: 主 HTML 文件。
public/favicon.ico: 浏览器的图标。
src:
App.vue: 主页面的组件。
main.ts: 主 TypeScript 文件。
assets:
UserAvatar: 用户头像文件夹。
router:
index.ts: 路由器的总布局。
components:
Left.vue: 左侧总组件。
Mid.vue: 中间总组件。
Right.vue: 右侧总组件。
Register.vue: 注册登录总组件。

    Register:

    left:
      Logo.vue: 标志组件。
      LeftFunction.vue: 左侧功能组件。
      Navigation.vue: 左侧导航栏组件。
      History.vue: 历史记录组件。
      PersonalCenter.vue: 个人中心组件。

    mid:
      ApplicationForm:
        Annotate.vue: 最下边注释组件。
        Chat.vue: chat 回答组件。
        Question.vue: 提问组件。
        User.vue: 用户提问组件。
        FirstChat.vue: chat 提示板块。
      EmployMentGuidance:
        Annotate.vue: 最下边注释组件。
        Chat.vue: chat 回答组件。
        Question.vue: 提问组件。
        User.vue: 用户提问组件。
        FirstChat.vue: chat 提示板块。
      ITQuestionsAndAnswers:
        Annotate.vue: 最下边注释组件。
        Chat.vue: chat 回答组件。
        Question.vue: 提问组件。
        User.vue: 用户提问组件。
        FirstChat.vue: chat 提示板块。
      IntellectualDialogue:
        Annotate.vue: 最下边注释组件。
        Chat.vue: chat 回答组件。
        MidFunction.vue: 中间功能组件（6个最开始出现，提问时候消失）。
        MidTitle.vue: 标题组件（最开始出现，提问的时候消失）。
        Question.vue: 提问组件。
        User.vue: 用户提问组件。
      CrossCulturalChatRoom:
        Annotate.vue: 最下边注释组件。
        ChatFrame.vue: 聊天框组件。
        EnterMessage.vue: 输入信息组件。
        LanguageChoice.vue: 语言转换组件。
      PersonalRecommendation:
        RecommendationInformationImg.vue: 有照片的推荐组件。
        ReconmmendationInformationImg.vue: 没有照片的推荐组件。
        ApplicationForm.vue: 志愿填报组件。
        EmployMentGuidance.vue: 就业指导组件。
        IntellectualDialogue.vue: 智能对话组件。
        ITQuestionsAndAnswers.vue: IT问答组件。
        CrossCulturalChatRoom.vue: 跨文化聊天室组件。
        PersonalRecommendation.vue: 个性化推荐组件。

    right:
    Files.vue: 文件组件。
    Folders.vue: 文件夹组件。
    RightTitle.vue: 标题组件。
    Search.vue: 搜索组件。
    SeeMore.vue: 查看更多组件。
