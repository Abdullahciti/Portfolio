import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: en.home,
      about: en.about,
      navbar: en.navbar,
      services: en.services,
      resume: en.resume,
      common: en.common,
      contact: en.contact,
      projects: en.projects,
    },
    de: {
      home: de.home,
      about: de.about,
      navbar: de.navbar,
      services: de.services,
      resume: de.resume,
      common: de.common,
      contact: de.contact,
      projects: de.projects,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
