import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  // {t("word")}
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        // Main Page:
        chaidoro: "Chaidoro",
        todo: "To-Do",
        settings: "Settings",
        clockMessage: "This is an early demo version, please do not use it.",
        toDoList: "To-Do List",
        emptyMsg: "List is empty !",
        emptyMsgDsc:
          "Your to do list is empty but it is fine as long as cup is not.",
        taskAddMsg: "Type here to add your task...",

        // To-Do Page:
        remainingTasks: "Remaining tasks:",

        // Settings page:
        application: "Application",
        themes: "Themes",
        network: "Network",
        version: "version",

        // Application settings:
        clock: "Clock",
        clockDsc: "Period of focus / Time format",
        focusTime: "Focus time",
        shortBreak: "Short break",
        longBreak: "Long break",
        clockMsg:
          "* We highly encourage you to not change 25 focus / 5 break format. Due to feedback from people it seems like 25 minute work format is the best for most of the people.",

        // Languages:
        languages: "Languages",
        languagesDsc: "We currently have 3 different languages.",
        languagesMsgOne:
          "** Although I have made every effort to include as many translations as possible, there may still be errors. If you notice any inaccuracies, please do not hesitate to contact me via email. I would like to acknowledge my friends who contributed to the translations. Their names are listed on the information page of the website.",
        languagesMsgTwo:
          "*** If you are interested in contributing to the translation of this website, I would greatly appreciate your assistance. Your contributions will be credited in the project. Please feel free to reach out to me!",

        // Theme Settings:
        themesDsc: "Custom premade themes.",
        yourCustomTheme: "Your custom theme",
        yourCustomThemeDsc:
          "You can make your own custom theme. You can also use HEX value codes.",
      },
    },
    lt: {
      translation: {
        // Main Page:
        chaidoro: "Chaidoro",
        todo: "Užduotys",
        settings: "Nustatymai",
        clockMessage:
          "Tai ankstyvoji demonstracinė versija, prašome jos nenaudoti.",
        toDoList: "Užduočių sąrašas",
        emptyMsg: "Sąrašas tuščias!",
        emptyMsgDsc:
          "Jūsų užduočių sąrašas tuščias, bet tai gerai, kol puodelis nėra tuščias.",
        taskAddMsg: "Įrašykite čia, kad pridėtumėte savo užduotį...",

        // To-Do Page:
        remainingTasks: "Likusios užduotys:",

        // Settings page:
        application: "Programėlė",
        themes: "Temos",
        network: "Tinklas",
        version: "versija",

        // Application settings:
        clock: "Laikrodis",
        clockDsc: "Dėmesio laikotarpis / Laiko formatas",
        focusTime: "Dėmesio laikas",
        shortBreak: "Trumpas pertraukimas",
        longBreak: "Ilgas pertraukimas",
        clockMsg:
          "* Labai rekomenduojame nekeisti 25 minučių darbo / 5 minučių pertraukos formato. Remiantis žmonių atsiliepimais, atrodo, kad 25 minučių darbo formatas yra geriausias daugumai žmonių.",

        // Languages:
        languages: "Kalbos",
        languagesDsc: "Šiuo metu turime 3 skirtingas kalbas.",
        languagesMsgOne:
          "** Nors aš padariau viską, kad įtraučiau kuo daugiau vertimų, gali būti klaidų. Jei pastebėsite netikslumų, nedvejodami susisiekite su manimi el. paštu. Norėčiau padėkoti savo draugams, kurie prisidėjo prie vertimų. Jų vardai pateikiami svetainės informacijos puslapyje.",
        languagesMsgTwo:
          "*** Jei norite prisidėti prie šios svetainės vertimo, labai vertinčiau jūsų pagalbą. Jūsų indėlis bus įskaitytas projekte. Nedvejodami susisiekite su manimi!",

        // Theme Settings:
        themesDsc: "Priskirtos pasirinktinių temų.",
        yourCustomTheme: "Jūsų pasirinktina tema",
        yourCustomThemeDsc:
          "Galite sukurti savo pasirinktą temą. Taip pat galite naudoti HEX vertes.",
      },
    },
    zh: {
      translation: {
        // Main Page:
        chaidoro: "Chaidoro",
        todo: "待办事项",
        settings: "设置",
        clockMessage: "这是一个早期演示版本，请勿使用。",
        toDoList: "待办事项清单",
        emptyMsg: "清单为空！",
        emptyMsgDsc: "您的待办事项清单为空，但只要杯子不为空，这也没关系。",
        taskAddMsg: "在这里输入以添加任务...",

        // To-Do Page:
        remainingTasks: "剩余任务:",

        // Settings page:
        application: "应用",
        themes: "主题",
        network: "网络",
        version: "版本",

        // Application settings:
        clock: "时钟",
        clockDsc: "专注时间 / 时间格式",
        focusTime: "专注时间",
        shortBreak: "短暂休息",
        longBreak: "长时间休息",
        clockMsg:
          "* 我们强烈建议您不要更改 25 分钟专注 / 5 分钟休息的格式。根据人们的反馈，似乎 25 分钟的工作格式对大多数人来说是最有效的。",

        // Languages:
        languages: "语言",
        languagesDsc: "我们目前有 3 种不同的语言。",
        languagesMsgOne:
          "** 虽然我尽力提供尽可能多的翻译，但仍可能存在错误。如果您发现任何不准确之处，请随时通过电子邮件与我联系。我也想感谢我的朋友们，他们为翻译做出了贡献。其名字列在网站的说明页面上。",
        languagesMsgTwo:
          "*** 如果您有兴趣参与本网站的翻译工作，我将非常感激您的帮助。您的贡献将在项目中得到认可。请随时与我联系！",

        // Theme Settings:
        themesDsc: "自定义预设主题。",
        yourCustomTheme: "您的自定义主题",
        yourCustomThemeDsc:
          "您可以创建自己的自定义主题。也可以使用 HEX 值代码。",
      },
    },
  },
});

export default i18n;
