# ict-iFLYTEK

## 项目介绍

本项目基于 Vue3 技术的前端项目架构，旨在构建一个高效、可维护的高校智能体助手系统。

## 安装依赖

npm install
npm install axios

## 启动项目

npm run dev

## 项目结构

index.html: 主 HTML 文件。
public/favicon.ico: 浏览器的图标。

src 文件夹:
App.vue-主页面的组件

    main.ts-主ts文件

    assets-所有照片的资源
    	UserAvatar用户头像文件夹

    router-路由的布局:
    	index.ts-路由器的总布局

    component-各种组件：
    	Left.vue-左侧总组件
    	Mid.vue-中间总组件
    	Right.vue-右侧总组件
    	LoginAndRegister.vue-注册登录总组件
    		ForgetThePassword.vue-忘记密码组件
    		Login.vue-登录组件
    		Register.vue-注册组件

    	LoginAndRegister-注册登录组件文件夹:

    	left-左侧组件文件夹：
    		Logo.vue-标志组件
    		LeftFunction.vue-左侧功能组件
    		Navigation.vue-左侧导航栏组件
    		History.vue-历史记录组件
    		PersonalCenter.vue-个人中心组件

    	right-右侧组件文件夹：
    		Files.vue-文件组件
    		Folders.vue-文件夹组件
    		RightTitle.vue-标题组件
    		Search.vue-搜索组件
    		SeeMore.vue-查看更多组件

    	mid-中间组件文件夹：
    		ApplicationForm.vue-志愿填报组件
    		EmployMentGuidance.vue-就业指导组件
    		IntellectualDialogue.vue-智能对话组件
    		ITQuestionsAndAnswers.vue-IT问答组件
    		CrossCulturalChatRoom.vue-跨文化聊天室组件
    		PersonalRecommendation.vue-个性化推荐组件
    		ThesisWriting.vue-论文写作组件
    		PsychologicalCounseling.vue-心理咨询组件
    		CustomizeAIWork.vue-自定义AI工作组件

    		ApplicationForm-志愿填报组件文件夹
    			Annotate.vue-最下边注释组件
    			Chat.vue-chat回答组件
    			Question.vue-提问组件
    			User.vue-用户提问组件
    			FirstChat.vue-chat提示板块
    		EmployMentGuidance-就业指导组件文件夹
    			Annotate.vue-最下边注释组件
    			Chat.vue-chat回答组件
    			Question.vue-提问组件
    			User.vue-用户提问组件
    			FirstChat.vue-chat提示板块
    		ITQuestionsAndAnswers-IT问答组件文件夹
    			Annotate.vue-最下边注释组件
    			Chat.vue-chat回答组件
    			Question.vue-提问组件
    			User.vue-用户提问组件
    			FirstChat.vue-chat提示板块
    		IntellectualDialogue-智能对话组件文件夹
    			Annotate.vue-最下边注释组件
    			Chat.vue-chat回答组件
    			MidFunction.vue-中间功能组件(6个最开始出现,提问时候消失)
    			MidTitle.vue-标题组件(最开始出现,提问的时候消失)
    			Question.vue-提问组件
    			User.vue-用户提问组件
    		CrossCulturalChatRoom-跨文化聊天室组件文件夹
    			Annotate.vue-最下边注释组件
    			ChatFrame.vue-聊天框组件
    			EnterMessage.vue-输入信息组件
    			LanguageChoice.vue-语言转换组件
    		PersonalRecommendation-个性化推荐组件文件夹
    			RecommendationInformationImg.vue-有照片的推荐组件
    			ReconmmendationInformationImg.vue-没有照片的推荐组件
    		ThesisWriting-论文写作组件文件夹
    			Annotate.vue-最下边注释组件
    			ChatFrame.vue-聊天框组件
    			EnterMessage.vue-输入信息组件
    			LanguageChoice.vue-语言转换组件
    			FirstChat.vue-chat提示板块
    		PsychologicalCounseling-心理咨询组件文件夹
    			Annotate.vue-最下边注释组件
    			ChatFrame.vue-聊天框组件
    			EnterMessage.vue-输入信息组件
    			LanguageChoice.vue-语言转换组件
    			FirstChat.vue-chat提示板块
    			EmotionalDistributionMap.vue-情感分布图组件
    		    ExchangeButton.vue-交换按钮组件
    		CustomizeAIWork-自定义AI工作组件文件夹
                Annotate.vue-最下边注释组件
                Chat.vue-chat回答组件
                Question.vue-提问组件
                User.vue-用户提问组件
                FirstChat.vue-chat提示板块
                
## 项目创新

最后添加心理模块和自定义AI工作流，提高用户体验
