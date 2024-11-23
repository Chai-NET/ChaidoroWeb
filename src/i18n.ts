import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  // {t("word")}
  // debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        chaidoro: "Chaidoro",
      },
    },
    lt: {
      translation: {
        chaidoro: "Arbata",
      },
    },
  },
});
