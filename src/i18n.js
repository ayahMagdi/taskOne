import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    debug: true,
    returnObjects: true,
    lng: "ar",
    resources: {
        en:{
             translation:{
                navlinks: ['home','about','services','works','contact'],
                main: {text1: 'enjoy the best',text2: 'technological services',btn:"join us"}
             }
        },
        ar:{
            translation:{
                navlinks: ['الرئيسية','من نحن','خدماتنا','اعمالنا','تواصل معنا'],
                main: {text1: 'تمتع بأفضل ' ,text2: "الخدمات التكنولوجية",btn:"انضم الينا"}
             }
        }
    }
  })